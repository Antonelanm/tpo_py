# Instalar con pip install mysql-connector-python
import mysql.connector

#--------------------------------------------------------------------

#--------------------------------------------------------------------
class Usuario:
    #----------------------------------------------------------------
    # Constructor de la clase
    def __init__(self, host, user, password, database):
        # Primero, establecemos una conexión sin especificar la base de datos
        self.conn = mysql.connector.connect(
            host=host,
            user=user,
            password=password
        )
        self.cursor = self.conn.cursor()

        # Intentamos seleccionar la base de datos
        try:
            self.cursor.execute(f"USE {database}")
        except mysql.connector.Error as err:
            # Si la base de datos no existe, la creamos
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f"CREATE DATABASE {database}")
                self.conn.database = database
            else:
                raise err

        # Una vez que la base de datos está establecida, creamos la tabla si no existe
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            apellido VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            telefono VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL)
        ''')
        self.conn.commit()

        # Cerrar el cursor inicial y abrir uno nuevo con el parámetro dictionary=True
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True)
        
    #----------------------------------------------------------------
    def alta_usuario(self, nombre, apellido, email, telefono, password):
        try:
            # Verificamos si ya existe un producto con el mismo código
            self.cursor.execute(f"SELECT * FROM usuarios WHERE email = '{email}'")
            producto_existe = self.cursor.fetchone()
            if producto_existe:
                return False

            sql = "INSERT INTO usuarios (nombre, apellido, email, telefono, password) VALUES (%s, %s, %s, %s, %s)"
            valores = (nombre, apellido, email, telefono, password)

            self.cursor.execute(sql, valores)        
            self.conn.commit()
            return True

        except Exception as e:
        # Manejo de excepción
            print(f"Error en alta_usuario: {str(e)}")
            return False

    #----------------------------------------------------------------
    def consultar_usuario_id(self, id):
        try:
            # Consultamos un producto a partir de su código
            self.cursor.execute(f"SELECT * FROM usuarios WHERE id = '{id}'")
            return self.cursor.fetchone()

        except Exception as e:
        # Manejo de excepción
            print(f"Error en consultar_usuari_id: {str(e)}")
            return False

      #----------------------------------------------------------------
    def consultar_usuario_email(self, email):
        try:
            # Consultamos un producto a partir de su código
            self.cursor.execute(f"SELECT * FROM usuarios WHERE email = '{email}'")
            return self.cursor.fetchone()

        except Exception as e:
        # Manejo de excepción
            print(f"Error en consultar_usuari_id: {str(e)}")
            return False

    #----------------------------------------------------------------
    def modificar_usuario(self, id, nuevo_nombre, nuevo_apellido, nuevo_email, nuevo_telefono, nuevo_password):
        try:
            sql = "UPDATE usuarios SET nombre = %s, apellido = %s, email = %s, telefono = %s, password = %s WHERE id = %s"
            valores = (nuevo_nombre, nuevo_apellido, nuevo_email, nuevo_telefono, nuevo_password, id)
            self.cursor.execute(sql, valores)
            self.conn.commit()
            return self.cursor.rowcount > 0
    
        except Exception as e:
        # Manejo de excepción
            print(f"Error en modificar_usuario: {str(e)}")
            return False

    #----------------------------------------------------------------
    def listar_usuarios(self):
        try:
            self.cursor.execute("SELECT * FROM usuarios")
            usuarios = self.cursor.fetchall()
            return usuarios
    
        except Exception as e:
        # Manejo de excepción
            print(f"Error en listar_usuarios: {str(e)}")
            return False
    #----------------------------------------------------------------
    def eliminar_usuario(self, id):
        try:
            self.cursor.execute(f"DELETE FROM usuarios WHERE id = '{id}'")
            self.conn.commit()
            return self.cursor.rowcount > 0
    
        except Exception as e:
        # Manejo de excepción
            print(f"Error en eliminar_usuario: {str(e)}")
            return False

