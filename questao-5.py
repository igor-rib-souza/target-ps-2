entrada = input("Informe sua string ")

saida = ""
i = len(entrada)

while i > 0:
    saida += entrada[i-1]
    i -= 1

print(saida)