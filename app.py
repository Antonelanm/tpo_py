from flask import Flask, render_template, jsonify, request, session, redirect, url_for
from flask_cors import CORS
from webapp.userCrud import Usuario

app = Flask(__name__)
CORS(app)

# Configuración de la clave secreta para las sesiones
app.secret_key = 'apolito'

# Crear una instancia de la clase Usuario
usuario = Usuario(host='localhost', user='root', password='', database='biciTienda')

# Rutas para el frontend de biciTienda
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

@app.route('/user_page')
def userPage():
    return render_template('userPage.html')

# Rutas para la aplicación biciTienda
@app.route('/login_sistema')
def loginSistema():
    return render_template('loginSistema.html')

@app.route('/login_administracion')
def loginAdministracion():
    return render_template('loginAdministracion.html')

# Rutas para la gestión de usuarios (CRUD)
@app.route("/usuarios", methods=["GET"])
def listar_usuarios():
    try:
        usuarios = usuario.listar_usuarios()
        return jsonify({"usuarios": usuarios})

    except Exception as e:
        print(f"Error en listar_usuarios: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500

@app.route("/usuarios/<int:id>", methods=["GET"])
def mostrar_usuario_id(id):
    try:
        user = usuario.consultar_usuario_id(id)
        return jsonify(user) if user else ("Usuario no encontrado", 404)

    except Exception as e:
        print(f"Error en mostrar_usuario_id: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500

@app.route("/usuarios/<string:email>", methods=["GET"])
def mostrar_usuario_email(email):
    try:
        user = usuario.consultar_usuario_email(email)
        return jsonify(user) if user else ("Usuario no encontrado", 404)

    except Exception as e:
        print(f"Error en mostrar_usuario_email: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500

@app.route("/usuarios", methods=["POST"])
def alta_usuario():
    try:
        data = request.json
        nombre, apellido, email, telefono, password, id_rol = (
            data['nombre'], data['apellido'], data['email'],
            data['telefono'], data['password'], data['id_rol']
        )

        if usuario.alta_usuario(nombre, apellido, email, telefono, password, id_rol):
            return jsonify({"mensaje": "Usuario agregado"}), 201
        else:
            return jsonify({"mensaje": "Usuario existente"}), 400

    except Exception as e:
        print(f"Error en alta_usuario: {str(e)}")
        return jsonify({"mensaje": "Error al procesar la solicitud"}), 500



# Rutas para la gestión de sesiones y login
@app.route('/login', methods=["GET", "POST"])
def accesoLogin():
    if request.method == 'POST':
        _email, _password = request.form['textUser'], request.form['textPassword']
        account = usuario.consultar_usuario_login(_email, _password)

        if account:
            session['logueado'] = True
            session['id'] = account['id']
            session['id_rol'] = account['id_rol']
            session['user_info'] = usuario.consultar_usuario_email(_email)

            if session['id_rol'] in (1, 2):
                return redirect(url_for('inicioApp'))
            elif session['id_rol'] == 3:
                return redirect(url_for('userPage'))
        else:
            return render_template('login.html', mensajeErrorLogin="Usuario o Contraseña Incorrectas")

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

# Rutas adicionales para la aplicación biciTienda
@app.route('/inicioApp')
def inicioApp():
    user_info = session.get('user_info')
    if not user_info:
        return redirect('/login')  
    return render_template('inicioApp.html', user_info=user_info)


@app.route('/config_usuario')
def config_usuario():
    user_info = session.get('user_info')
    if not user_info:
        return redirect('/login')  
    return render_template('config_usuario.html', user_info=user_info)

# En tu ruta de Flask
@app.route('/compras')
def compras():
    user_info = session.get('user_info')
    if not user_info:
        return redirect('/login')  
    return render_template('compras.html', user_info=user_info)





if __name__ == "__main__":
    app.run(debug=True)
