from flask import Flask, request
from bd import Usuarios

app = Flask(__name__)


@app.route("/usuarios", methods=["GET"])
def get_usuarios():
    return Usuarios


@app.route("/usuarios/<int:id>", methods=["GET"])
def get_usuario(id):
    for usuario in Usuarios:
        if usuario["id"] == id:
            return usuario
    return {"mensagem": "Usuário não encontrado"}, 404


@app.route("/usuarios", methods=["POST"])
def create_usuario():
    novo_usuario = request.get_json()
    novo_usuario["id"] = Usuarios[-1]["id"] + 1 if Usuarios else 1
    Usuarios.append(novo_usuario)
    return novo_usuario, 201


@app.route("/usuarios/<int:id>", methods=["PUT"])
def edit_usuario(id):
    dados = request.get_json()  # só precisa conter os campos que mudam
    for usuario in Usuarios:
        if usuario["id"] == id:
            usuario.update(dados)  # atualiza apenas as chaves enviadas
            return usuario, 200
    return {"mensagem": "Usuário não encontrado"}, 404


@app.route("/usuarios/<int:id>", methods=["DELETE"])
def delete_usuario(id):
    for usuario in Usuarios:
        if usuario["id"] == id:
            Usuarios.remove(usuario)
            return "", 204  # 204 = No Content (deu certo, não há corpo na resposta)
    return {"mensagem": "Usuário não encontrado"}, 404


if __name__ == "__main__":
    app.run(debug=True)
