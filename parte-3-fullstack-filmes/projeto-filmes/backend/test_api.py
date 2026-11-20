"""Testes automáticos da API (rode com: pytest). Usam um banco SQLite em memória."""

import os

os.environ["DATABASE_URL"] = "sqlite://"

import pytest  # noqa: E402

from main import app, bd  # noqa: E402

FILME = {
    "nome": "A Chegada",
    "descricao": "Uma linguista tenta se comunicar com alienígenas.",
    "ano_lancamento": "2016",
    "url_imagem": "https://exemplo.com/chegada.jpg",
    "genero": "Ficção",
}


@pytest.fixture()
def client():
    with app.app_context():
        bd.drop_all()
        bd.create_all()
    return app.test_client()


def test_lista_vazia(client):
    resposta = client.get("/filme")
    assert resposta.status_code == 200
    assert resposta.get_json() == []


def test_crud_completo(client):
    criado = client.post("/filme", json=FILME)
    assert criado.status_code == 201
    id_ = criado.get_json()["id"]

    assert client.get(f"/filme/{id_}").get_json()["nome"] == "A Chegada"

    editado = client.put(f"/filme/{id_}", json={"genero": "Drama"})
    assert editado.status_code == 200
    assert editado.get_json()["genero"] == "Drama"
    assert editado.get_json()["nome"] == "A Chegada"  # campos não enviados permanecem

    assert client.delete(f"/filme/{id_}").status_code == 204
    assert client.get(f"/filme/{id_}").status_code == 404


def test_validacao(client):
    assert client.post("/filme", json={"nome": "Sem os outros campos"}).status_code == 400
    assert client.post("/filme", json={**FILME, "ano_lancamento": "16"}).status_code == 400
    assert client.post("/filme", data="não é json").status_code == 400


def test_id_inexistente(client):
    assert client.get("/filme/999").status_code == 404
    assert client.put("/filme/999", json={"nome": "x"}).status_code == 404
    assert client.delete("/filme/999").status_code == 404


def test_pesquisa(client):
    client.post("/filme", json=FILME)
    client.post("/filme", json={**FILME, "nome": "Matrix"})
    client.post("/filme", json={**FILME, "nome": "Matrix Reloaded"})
    achados = client.get("/search", query_string={"query": "matrix"}).get_json()
    assert sorted(f["nome"] for f in achados) == ["Matrix", "Matrix Reloaded"]
    assert len(client.get("/search", query_string={"query": "A"}).get_json()) == 1
