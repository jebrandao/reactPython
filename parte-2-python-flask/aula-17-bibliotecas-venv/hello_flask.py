from flask import Flask

app = Flask(__name__)  # __name__ diz ao Flask qual é o arquivo principal


@app.route("/")  # decorator: liga o endereço "/" à função abaixo
def saudacao():
    return "Olá, mundo!"


@app.route("/teste")  # agora a rota é http://127.0.0.1:5000/teste
def teste():
    return "Rota de teste"


if __name__ == "__main__":  # só roda o servidor se este for o arquivo principal
    app.run(debug=True)  # debug=True reinicia sozinho ao salvar
