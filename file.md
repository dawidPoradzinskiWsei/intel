3.0

MOV AL DL - przeniesienie rejestru na drugie miejsce. DL jest niezmieniane
EXCH AL DL - zamiana miejscami rejestrów

3.5

INC - zwiększenie o 1. Po max zmiena na 0 => INC AL
DEC - zmniejszenie o 1. Po min na max => DEC AH
NOT - odwrócenie 0 na 1 => NOT AH
NEG = NOT + INC

4.0

AND - koniunkcja bitowa => AND DL BH - przypisc do DL
OR
XOR
ADD AH AL - suma zawrtości obu 0 przypisz do AH 
SUB

4.5

MUL
IMUL - mnożenie
DIV
IDIV - dzielenie

MUL BH - mnożenie AL i podanego przez nas rejestru. Zapisujemy to na dwóch rejestrach AH i AL

DIV DL - dzielenie AL poprzez podany przez nas rejestr. Zapisujemy wynik w AL i reszte w AH

Grafika na + pół oceny