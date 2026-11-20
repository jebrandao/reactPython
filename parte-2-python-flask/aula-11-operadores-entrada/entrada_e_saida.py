# input() mostra uma pergunta, espera o usuário digitar e devolve SEMPRE um texto (str).
nome = input("Qual é o seu nome? ")

# Três formas de juntar textos e variáveis:
print("Olá, " + nome + "!")  # concatenação com +
print("Olá,", nome)  # print aceita vários valores separados por vírgula
print(f"Olá, {nome}!")  # f-string (a forma mais usada hoje)

# Para fazer contas, converta o texto digitado em número:
idade = int(input("Qual é a sua idade? "))
print(f"Ano que vem você terá {idade + 1} anos.")
