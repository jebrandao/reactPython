# Dicionário: pares chave -> valor
usuario = {"id": 1, "nome": "Maria", "senha": "321"}

print(usuario["nome"])  # Maria
print(usuario.get("email"))  # None (a chave não existe e não dá erro)
print(usuario.get("email", "sem e-mail"))  # valor padrão

usuario["nome"] = "Maria Silva"  # altera
usuario["email"] = "maria@email.com"  # cria uma chave nova
usuario.update({"senha": "999", "ativo": True})  # altera várias de uma vez
del usuario["ativo"]  # remove uma chave

print("nome" in usuario)  # True: "in" verifica as CHAVES
print(usuario.keys())
print(usuario.values())
for chave, valor in usuario.items():
    print(f"{chave}: {valor}")
