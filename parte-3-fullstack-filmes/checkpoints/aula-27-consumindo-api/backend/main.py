"""API de filmes (Flask + SQLAlchemy). Rotas: /filme (CRUD) e /search."""

import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

load_dotenv()  # lê o arquivo .env (se existir) e cria as variáveis de ambiente

app = Flask(__name__)
CORS(app)  # libera o acesso do frontend (outra porta). Em produção, restrinja as origens.

# Sem .env, usa SQLite (um arquivo local). Para MySQL, veja o .env.example.
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///filmes.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

bd = SQLAlchemy(app)

CAMPOS = ("nome", "descricao", "ano_lancamento", "url_imagem", "genero")


class Filme(bd.Model):
    __tablename__ = "filmes"

    id = bd.Column(bd.Integer, primary_key=True)
    nome = bd.Column(bd.Text, nullable=False)
    descricao = bd.Column(bd.Text, nullable=False)
    ano_lancamento = bd.Column(bd.String(4), nullable=False)
    url_imagem = bd.Column(bd.Text, nullable=False)
    genero = bd.Column(bd.Text, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "descricao": self.descricao,
            "ano_lancamento": self.ano_lancamento,
            "url_imagem": self.url_imagem,
            "genero": self.genero,
        }


with app.app_context():
    bd.create_all()  # cria a tabela "filmes" se ela ainda não existir


def erro_validacao(dados, obrigatorios=True):
    """Retorna uma mensagem de erro (str) se o JSON recebido for inválido; senão, None."""
    if not isinstance(dados, dict):
        return "Envie um JSON no corpo da requisição."
    if obrigatorios:
        faltando = [c for c in CAMPOS if not str(dados.get(c, "")).strip()]
        if faltando:
            return f"Campos obrigatórios ausentes: {', '.join(faltando)}"
    ano = dados.get("ano_lancamento")
    if ano is not None and (not str(ano).isdigit() or len(str(ano)) != 4):
        return "ano_lancamento deve ter 4 dígitos (ex.: 2016)."
    return None


@app.route("/filme", methods=["GET"])
def get_filmes():
    filmes = Filme.query.all()
    return jsonify([filme.to_dict() for filme in filmes]), 200


@app.route("/filme/<int:id>", methods=["GET"])
def get_filme(id):
    filme = bd.session.get(Filme, id)
    if filme is None:
        return jsonify({"error": "Filme não encontrado"}), 404
    return jsonify(filme.to_dict()), 200


@app.route("/filme", methods=["POST"])
def create_filme():
    dados = request.get_json(silent=True)
    erro = erro_validacao(dados)
    if erro:
        return jsonify({"error": erro}), 400
    novo_filme = Filme(**{campo: str(dados[campo]).strip() for campo in CAMPOS})
    bd.session.add(novo_filme)
    bd.session.commit()
    return jsonify(novo_filme.to_dict()), 201


@app.route("/filme/<int:id>", methods=["PUT"])
def edit_filme(id):
    filme = bd.session.get(Filme, id)
    if filme is None:
        return jsonify({"error": "Filme não encontrado"}), 404
    dados = request.get_json(silent=True)
    erro = erro_validacao(dados, obrigatorios=False)
    if erro:
        return jsonify({"error": erro}), 400
    for campo in CAMPOS:
        if campo in dados:
            setattr(filme, campo, str(dados[campo]).strip())
    bd.session.commit()
    return jsonify(filme.to_dict()), 200


@app.route("/filme/<int:id>", methods=["DELETE"])
def delete_filme(id):
    filme = bd.session.get(Filme, id)
    if filme is None:
        return jsonify({"error": "Filme não encontrado"}), 404
    bd.session.delete(filme)
    bd.session.commit()
    return "", 204


@app.route("/search", methods=["GET"])
def pesquisar_filme():
    query = request.args.get("query", "").strip()
    # "Matrix%" casa com "Matrix", "Matrix Reloaded"... (começa com o texto digitado)
    filmes = Filme.query.filter(Filme.nome.ilike(f"{query}%")).all()
    return jsonify([filme.to_dict() for filme in filmes]), 200


if __name__ == "__main__":
    app.run(debug=True)
