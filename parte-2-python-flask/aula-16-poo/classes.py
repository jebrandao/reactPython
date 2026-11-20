class Saudacao:
    def exibir_mensagem(self):  # self = "este objeto"
        print("Olá! Esta é uma classe em Python.")


minha_classe = Saudacao()  # instanciar: criar um objeto a partir da classe
minha_classe.exibir_mensagem()


class Carro:
    def __init__(self, marca, modelo, ano):  # construtor: roda ao criar o objeto
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

    def exibir_detalhes(self):
        print(f"{self.marca} {self.modelo} ({self.ano})")


carro1 = Carro("Ford", "Ka", 2019)
carro2 = Carro("Fiat", "Uno", 2012)  # cada objeto tem os seus próprios dados
carro1.exibir_detalhes()
carro2.exibir_detalhes()
print(carro1.marca)  # acessando um atributo
