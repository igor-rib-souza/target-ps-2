# Questão 2
# Igor Ribeiro de Souza

target = int(input("Digite seu numero: "))
a,b = 0,1

while a < target:
    temp = b
    b = a+b
    a = temp

if(a == target):
    print("Seu número pertence a sequência Fibonacci")
else:
    print("Seu número não pertence a sequência Fibonacci")