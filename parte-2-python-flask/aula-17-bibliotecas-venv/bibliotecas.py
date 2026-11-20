import math
import random
from datetime import datetime

print(math.sqrt(16))  # 4.0  raiz quadrada
print(math.ceil(4.2))  # 5    arredonda para cima
print(math.log(8, 2))  # 3.0  logaritmo de 8 na base 2

agora = datetime.now()
print(agora.strftime("%d/%m/%Y %H:%M"))  # data e hora atuais, formatadas

print(random.randint(0, 100))  # inteiro aleatório entre 0 e 100
print(random.choice(["pedra", "papel", "tesoura"]))
