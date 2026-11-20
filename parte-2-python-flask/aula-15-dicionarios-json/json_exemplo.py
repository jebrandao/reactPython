import json

# JSON é um TEXTO com o mesmo formato de um dicionário Python.
usuario = {"id": 1, "nome": "Maria", "ativo": True, "email": None}

texto = json.dumps(usuario, ensure_ascii=False)  # dicionário -> texto JSON
print(texto)  # {"id": 1, "nome": "Maria", "ativo": true, "email": null}

volta = json.loads(texto)  # texto JSON -> dicionário
print(volta["nome"])

# Repare: True/False/None viram true/false/null. É o Flask (jsonify) quem faz isso nas APIs.
