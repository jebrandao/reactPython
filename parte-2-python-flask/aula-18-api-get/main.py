from flask import Flask
from bd import Usuarios

app = Flask(__name__)


@app.route("/")
def home():
    return "<h1>Página inicial da API</h1>"


@app.route("/usuarios")
def get_usuarios():
    return Usuarios  # o Flask converte lista/dicionário em JSON automaticamente


@app.route("/usuarios/nomes")
def get_nomes():
    nomes = []
    for usuario in Usuarios:
        nomes.append(usuario["nome"])
    return nomes


# ATENÇÃO: adicionar dados com GET é só para treinar. O jeito certo (POST) vem na próxima aula.
@app.route("/adicionar")
def adicionar():
    novo_id = Usuarios[-1]["id"] + 1
    Usuarios.append({"id": novo_id, "nome": "Novo usuário", "senha": "000"})
    return "Usuário adicionado com sucesso!"
    # O usuário existe só na memória: ao reiniciar a API, ele desaparece.


if __name__ == "__main__":
    app.run(debug=True)
