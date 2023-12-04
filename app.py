from flask import Flask, render_template, jsonify, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
import time

from webapp.userCrud import Usuario

app = Flask(__name__)

CORS(app)  # Esto habilitará CORS para todas las rutas

#--------------------------------------------------------------------
# Render Frontend biciTienda
#--------------------------------------------------------------------
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cita')
def cita():
    return render_template('cita.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/cv_send')
def cvSend():
    return render_template('cv_send.html')

@app.route('/details')
def details():
    return render_template('details.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/financiamiento')
def financiamiento():
    return render_template('financiamiento.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/legal')
def legal():
    return render_template('legal.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/message')
def message():
    return render_template('message.html')

@app.route('/shipping')
def shipping():
    return render_template('shipping.html')

@app.route('/sing_up')
def singUp():
    return render_template('sing_up.html')

@app.route('/size')
def size():
    return render_template('size.html')

@app.route('/stores')
def stores():
    return render_template('stores.html')

@app.route('/trabajo')
def trabajo():
    return render_template('trabajo.html')

@app.route('/config_usuario')
def userPage():
    return render_template('config_usuario.html')


#--------------------------------------------------------------------
# Render app biciTienda
#--------------------------------------------------------------------


@app.route('/inicioApp')
def inicioApp():
    return render_template('inicioApp.html')

@app.route('/usuariosObj')
def usuariosObj():
    return render_template('usuariosObj.html')

@app.route('/loginObjSist')
def loginObjSist():
    return render_template('loginObjSist.html')



#--------------------------------------------------------------------
# Usuario CRUD
#--------------------------------------------------------------------
# Crear una instancia de la clase Catalogo
usuario = Usuario(host='localhost', user='root', password='', database='biciTienda')
#--------------------------------------------------------------------
@app.route("/usuarios", methods=["GET"])
def listar_usuarios():
    try:
        usuarios = usuario.listar_usuarios()
        return jsonify({"usuarios": usuarios})

    except Exception as e:
        # Manejo de excepción
        print(f"Error en listar_usuarios: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500
#--------------------------------------------------------------------
@app.route("/usuarios/<int:id>", methods=["GET"])
def mostrar_usuario_id(id):
    try: 
        user = usuario.consultar_usuario_id(id)
        if user:
            return jsonify(user), 201
        else:
            return "Usuario no encontrado", 404
        
    except Exception as e:
        # Manejo de excepción
        print(f"Error en listar_usuarios_id: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500
    
#--------------------------------------------------------------------
@app.route("/usuarios/<string:email>", methods=["GET"])
def mostrar_usuario_email(email):
    try: 
        user = usuario.consultar_usuario_email(email)
        if user:
            return jsonify(user), 201
        else:
            return "Usuario no encontrado", 404
        
    except Exception as e:
        # Manejo de excepción
        print(f"Error en listar_usuarios_id: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500

#--------------------------------------------------------------------
@app.route("/usuarios", methods=["POST"])
def alta_usuario():
    try:
        nombre = request.json['nombre']
        apellido = request.json['apellido']
        email = request.json['email']
        telefono = request.json['telefono']  
        password = request.json['password']
    
        if usuario.alta_usuario(nombre, apellido, email, telefono, password):
            return jsonify({"mensaje": "Usuario agregado"}), 201
        else:
            return jsonify({"mensaje": "Usuario existente"}), 400
    
    except Exception as e:
        # Manejo de excepción
        print(f"Error en alta_usuario: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500

#--------------------------------------------------------------------
@app.route("/usuarios/<int:id>", methods=["PUT"])
def modificar_usuario(id):
    try:
        nuevo_nombre = request.json['nombre']
        nuevo_apellido = request.json['apellido']
        nuevo_email = request.json['email']
        nuevo_telefono = request.json['telefono']
        nuevo_password = request.json['password']
        
        if usuario.modificar_usuario(id, nuevo_nombre, nuevo_apellido, nuevo_email, nuevo_telefono, nuevo_password):
            return jsonify({"mensaje": "Datos de usuario modificados"}), 200
        else:
            return jsonify({"mensaje": "Usuario no encontrado"}), 403
    
    except Exception as e:
        # Manejo de excepción
        print(f"Error en modificar_usuario: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500


#--------------------------------------------------------------------
@app.route("/usuarios/<int:id>", methods=["DELETE"])
def eliminar_usuario(id):
    try:
        # Elimina el usuario 
        if usuario.eliminar_usuario(id):
            return jsonify({"mensaje": "Usuario eliminado"}), 200
        else:
            return jsonify({"mensaje": "Error al eliminar al usuario"}), 500
        
    except Exception as e:
        # Manejar de excepción
        print(f"Error en eliminar_usuario: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500
    
#--------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)