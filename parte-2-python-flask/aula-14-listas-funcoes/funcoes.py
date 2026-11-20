def saudacao():
    print("Olá!")
    print("Seja bem-vindo(a)!")


def saudar(nome, cargo="aluno"):  # cargo tem valor padrão
    print(f"Olá, {nome}! Você é {cargo}.")


def soma(a, b):
    return a + b  # return devolve um valor para quem chamou


def tamanho_lista(lista):
    return len(lista)


# Definir não executa: é preciso CHAMAR a função.
saudacao()
saudar("Maria")
saudar("João", "professor")
resultado = soma(5, 7)
print(resultado)  # 12
print(tamanho_lista([10, 20, 30]))  # 3

# Escopo: variável global x local
saldo = 100


def minha_conta():
    print(f"Saldo: {saldo}")  # ler uma global funciona


def adicionar_saldo(valor):
    global saldo  # para REATRIBUIR uma global é preciso declará-la
    saldo += valor


adicionar_saldo(50)
minha_conta()  # Saldo: 150
