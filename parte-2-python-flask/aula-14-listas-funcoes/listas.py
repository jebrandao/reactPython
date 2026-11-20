numeros = [1, 2, 3, 4, 5]
nomes = ["Nivaldo", "Maria", "João"]
varios = ["Nivaldo", 42, 3.14, True]  # uma lista aceita tipos diferentes

# A contagem começa no 0
print(numeros[0])  # 1  (primeiro)
print(numeros[2])  # 3  (terceiro!)
print(numeros[-1])  # 5  (último)

# Listas são mutáveis
numeros[0] = 4
print(numeros)  # [4, 2, 3, 4, 5]

# Métodos mais usados
numeros.append(6)  # adiciona no fim
numeros.insert(1, 99)  # insert(posição, valor)
numeros.remove(99)  # remove a primeira ocorrência do valor
ultimo = numeros.pop()  # remove e devolve o último
print(numeros, ultimo, len(numeros))  # len = quantidade de itens

# Percorrendo a lista com for (será muito usado nas APIs)
for nome in nomes:
    print(f"Olá, {nome}!")
