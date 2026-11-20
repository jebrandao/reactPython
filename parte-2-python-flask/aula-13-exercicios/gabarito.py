"""Gabarito comentado dos exercícios da aula 13. Tente resolver antes de olhar!"""


def exercicio_1():
    # input() devolve texto; range() precisa de números inteiros -> int()
    numero_inicial = int(input("Número inicial: "))
    numero_final = int(input("Número final: "))
    for numero in range(numero_inicial, numero_final):  # o final não entra
        print(numero)


def exercicio_2():
    numero = int(input("Digite um número: "))
    if numero % 2 == 0:  # resto 0 na divisão por 2 = par
        print("O número é par")
    else:
        print("O número é ímpar")


def exercicio_3():
    n = int(input("Quantos termos de Fibonacci? "))
    anterior, atual = 0, 1
    for _ in range(n):
        print(anterior)
        anterior, atual = atual, anterior + atual  # cada termo é a soma dos dois anteriores


if __name__ == "__main__":
    exercicio = input("Qual exercício rodar (1, 2 ou 3)? ")
    {"1": exercicio_1, "2": exercicio_2, "3": exercicio_3}.get(exercicio, lambda: print("Opção inválida"))()
