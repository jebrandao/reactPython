class Conta:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.__saldo = saldo  # dois underscores: "privado" (não acesse de fora)

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor

    def consultar_saldo(self):
        return self.__saldo

    def __auditar(self):  # método privado
        print("auditando...")


conta = Conta("Ana", 100)
conta.depositar(50)
print(conta.consultar_saldo())  # 150

# print(conta.__saldo)    -> AttributeError: o atributo está "escondido"
# conta.__auditar()       -> AttributeError
