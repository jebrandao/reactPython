import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

load_dotenv()

app = Flask(__name__)

# Formato: mysql+pymysql://usuario:senha@servidor/nome_do_banco
# Sem .env, usamos SQLite para a API funcionar mesmo sem MySQL instalado.
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///usuarios.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

bd = SQLAlchemy(app)


class Usuario(bd.Model):
    __tablename__ = "usuarios"  # nome da tabela no banco

    id = bd.Column(bd.Integer, primary_key=True)
    nome = bd.Column(bd.String(80), nullable=False)
    senha_hash = bd.Column(bd.String(255), nullable=False)  # nunca guardamos a senha "pura"

    def to_dict(self):  # objeto Usuario -> dicionário (que vira JSON). Sem a senha!
        return {"id": self.id, "nome": self.nome}


with app.app_context():
    bd.create_all()  # cria a tabela automaticamente, se ela não existir


@app.route("/usuarios", methods=["GET"])
def get_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([usuario.to_dict() for usuario in usuarios]), 200


@app.route("/usuarios/<int:id>", methods=["GET"])
def get_usuario(id):
    usuario = bd.session.get(Usuario, id)
    if usuario:
        return jsonify(usuario.to_dict()), 200
    return jsonify({"mensagem": "Usuário não encontrado"}), 404


@app.route("/usuarios", methods=["POST"])
def create_usuario():
    dados = request.get_json()
    novo_usuario = Usuario(nome=dados["nome"], senha_hash=generate_password_hash(dados["senha"]))
    bd.session.add(novo_usuario)  # marca para inserir
    bd.session.commit()  # confirma a transação no banco
    return jsonify(novo_usuario.to_dict()), 201


@app.route("/usuarios/<int:id>", methods=["PUT"])
def edit_usuario(id):
    usuario = bd.session.get(Usuario, id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    dados = request.get_json()
    usuario.nome = dados.get("nome", usuario.nome)
    if "senha" in dados:
        usuario.senha_hash = generate_password_hash(dados["senha"])
    bd.session.commit()  # só commit: o objeto já está na sessão
    return jsonify(usuario.to_dict()), 200


@app.route("/usuarios/<int:id>", methods=["DELETE"])
def delete_usuario(id):
    usuario = bd.session.get(Usuario, id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    bd.session.delete(usuario)
    bd.session.commit()
    return "", 204


if __name__ == "__main__":
    app.run(debug=True)
