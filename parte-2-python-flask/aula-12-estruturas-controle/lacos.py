# for + range: de 0 até 4 (o número final NÃO entra)
for i in range(5):
    print(i)

# range(início, fim): de 3 até 6
for i in range(3, 7):
    print(i)

# range(início, fim, passo): de 10 até 2, de 2 em 2 para trás
for i in range(10, 0, -2):
    print(i)

# while: repete enquanto a condição for verdadeira
numero = 10
while numero > 0:
    print(numero)
    numero -= 1  # sem esta linha o laço seria infinito!
else:
    print("Fim da contagem!")
