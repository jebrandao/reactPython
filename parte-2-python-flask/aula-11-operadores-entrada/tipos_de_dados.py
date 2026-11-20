inteiro = 42
decimal = 3.14
texto = "Olá, mundo!"
logico = True  # True e False começam com letra maiúscula em Python

for valor in (inteiro, decimal, texto, logico):
    print(valor, "->", type(valor).__name__)

# Conversão entre tipos
print(int("10") + 5)  # 15  (texto -> inteiro)
print(float("2.5") * 2)  # 5.0 (texto -> decimal)
print(str(100) + " reais")  # 100 reais (número -> texto)
