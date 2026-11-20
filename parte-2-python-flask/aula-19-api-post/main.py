from flask import Flask, request
from bd import Usuarios

app = Flask(__name__)


# CRUD:  Create = POST | Read = GET | Update = PUT | Delete = DELETE
# Daqui em diante dizemos SEMPRE qual método HTTP cada rota aceita.
@app.route("/usuarios", methods=["GET"])
def get_usuarios():
    return Usuarios


@app.route("/usuarios/<int:id>", methods=["GET"])  # <int:id>: parte variável da URL
def get_usuario(id):
    for usuario in Usuarios:
        if usuario["id"] == id:
            return usuario
    return {"mensagem": "Usuário não encontrado"}, 404  # 404 = Not Found


@app.route("/usuarios", methods=["POST"])
def create_usuario():
    novo_usuario = request.get_json()  # o corpo (body) enviado pelo cliente, em JSON
    novo_usuario["id"] = Usuarios[-1]["id"] + 1 if Usuarios else 1  # id automático
    Usuarios.append(novo_usuario)
    return novo_usuario, 201  # 201 = Created


if __name__ == "__main__":
    app.run(debug=True)
