# Um "banco de dados" simulado: lista de dicionários (é o formato das nossas APIs)
usuarios = [
    {"id": 1, "nome": "Ana", "senha": "123"},
    {"id": 2, "nome": "Bruno", "senha": "456"},
    {"id": 3, "nome": "Carla", "senha": "789"},
]

# Buscar por id
for usuario in usuarios:
    if usuario["id"] == 2:
        print("Encontrado:", usuario)
        break
else:
    print("Não encontrado")  # else do for: só roda se não houve break

# Só os nomes
nomes = [usuario["nome"] for usuario in usuarios]
print(nomes)

# Adicionar com id automático (último id + 1)
novo = {"id": usuarios[-1]["id"] + 1, "nome": "Davi", "senha": "000"}
usuarios.append(novo)
print(len(usuarios))
