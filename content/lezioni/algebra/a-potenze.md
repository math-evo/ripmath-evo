---
title: Potenze
description: Potenze
---

# Potenza

La potenza non e' altro che una moltiplicazione ripetuta: se devo scrivere
<katex class="red--text">6 \times 6 \times 6</katex>
e' piu' facile e comodo scrivere
<katex class="red--text">6^3</katex>;  
quindi

<katex class="red--text" display-mode>6^3 = 6 \times 6 \times 6</katex>

il <span class="red--text">6</span> si chiama base,
il <span class="red--text">3</span> si chiama esponente e
<katex class="red--text">6^3</katex> tutto quanto si chiama potenza

*(BATTUTA INDEGNA: cos'e' un fattore di*
<risposta-potenza></risposta-potenza>
*)*

<p class="indigo--text">
  <strong>DEFINIZIONE:</strong> la potenza e' il prodotto della base tante volte quant'e' l'esponente.
</p>

Per rendere la definizione piu' generale occorre usare le lettere, allora, poiche' talvolta useremo <katex>x</katex> come lettera sostituiamo il segno di prodotto <katex class="red--text">\times</katex> con il simbolo <katex class="red--text"> \cdot</katex>

allora ad esempio <katex class="red--text">a^3</katex> sara' <katex class="red--text">a \cdot a \cdot a</katex>

piu' in generale <katex class="red--text">a^n</katex> sara' <katex class="red--text">a \cdot a \cdot \ldots \cdot a</katex> ove i puntini indicano che la moltiplicazione e' fatta tante volte quant'e' l'esponente cioe' <span class="red--text">n</span> volte.

## Prodotto di potenze con la stessa base

Se devo moltiplicare <katex class="red--text">2^3 \times 2^4</katex>  
poiche'

<katex class="red--text text-left" display-mode>
  2 ^ 3 = 2 \times 2 \times 2
</katex>
e

<katex class="red--text text-left" display-mode>
  2^4 = 2 \times 2 \times 2 \times 2
</katex>

otterrai

<katex class="red--text text-left" display-mode>
  2^3 \times 2^4 = \newline
  = (2 \times 2 \times 2) \times (2 \times 2 \times 2 \times 2) = \newline
  = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 = \newline
  = 2^7 = 2^{3 + 4}
</katex>

quindi per fare il prodotto quando hanno la stessa base basta sommare gli esponenti  
ora rendiamo il risultato piu' generale possibile usando le lettere

<katex class="red--text text-left" display-mode>
  a^r \cdot a^s = \newline
  = (a \cdot a \cdot \ldots \cdot a) \cdot (a \cdot a \cdot a \cdot \ldots \cdot a) = \newline
  = a \cdot a \cdot \ldots \cdot a \cdot a \cdot a \cdot a \cdot \ldots \cdot a =
</katex>

i primi sono <katex>r</katex>, gli altri sono s in totale saranno <katex>r + s</katex>

<katex class="red--text text-left" display-mode>
  = a^{r + s}
</katex>

Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza

<katex class="red--text text-left" display-mode>
  a^r \cdot a^s = a^{r + s}
</katex>


<lys-regola src="regole/potenza/prodotto-stessa-base"></lys-regola>


## Quoziente di potenze con la stessa base

Se devo dividere

<katex class="red--text text-left" display-mode>
  2^8 : 2^5
</katex>

poiche'

<katex class="red--text text-left" display-mode>
  2^8 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2
</katex>

e

<katex class="red--text text-left" display-mode>
 2^5 = 2 \times 2 \times 2 \times 2 \times 2
</katex>

otterrai

<katex class="red--text text-left" display-mode>
  \frac{2^8}{2^5} =
  \frac{2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2}{2 \times 2 \times 2 \times 2 \times 2} =
</katex>

ricordando che nelle frazioni puoi togliere sopra e sotto gli stessi fattori <span class="indigo--text">(solo quando il numeratore e il denominatore sono in forma di prodotto)</span> restano solo tre 2 al numeratore (sopra)

<katex class="red--text text-left" display-mode>
  2 \times 2 \times 2 = 2^3 = 2^{8 - 5}
</katex>

quindi per fare il quoziente quando hanno la stessa base basta sottrarre gli esponenti.  
Ora rendiamo il risultato piu' generale possibile usando le lettere  
<katex class="red--text text-left" display-mode>
  \frac{a^r}{a^s} = \frac{a \times a \times \ldots \times a}{a \times a \times \ldots \times a} =
</katex>

dalle r lettere di sopra devo togliere le s lettere di sotto <span class="indigo--text">(cio' potro' farlo solo se r e' piu' grande di s)</span> restera' quindi  
<katex class="red--text text-left" display-mode>
  = a \times a \times \ldots \times a = a^{r - s}
</katex>

Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza

<katex class="red--text text-left" display-mode>
  \text{\textcolor{black}{se}} \enspace
  r > s \enspace
  \text{\textcolor{black}{allora}} \enspace
  \frac{a^r}{a^s} = a^{r-s}
</katex>


<lys-regola src="regole/potenza/quoziente-stessa-base"></lys-regola>


Pero' in matematica quando si trova una regola essa dev'essere resa piu' generale possibile; noi abbiamo trovato una regola che vale solo quando il primo esponente r e' maggiore del secondo esponente s. Quindi ora occorre vedere cosa si puo' fare quando r e' uguale ad s ed anche quando r e' minore di s

## Potenza di una potenza

Se devo fare

<katex class="red--text text-left" display-mode>(2^3)^4 =</katex>

poiche' prima devo sempre considerare le operazioni che coinvolgono tutto dovro' considerare la potenza quattro, cioe'

<katex class="red--text text-left" display-mode>
  = 2^3 \times 2^3 \times 2^3 =
</katex>

e poiche'

<katex class="red--text text-left" display-mode>
  2^3 = 2 \times 2 \times 2
</katex>

otterrai

<katex class="red--text text-left" display-mode>
  = \textcolor{green}{(} 2 \times 2 \times 2 \textcolor{green}{)}
  \times \textcolor{green}{(} 2 \times 2 \times 2 \textcolor{green}{)}
  \times \textcolor{green}{(} 2 \times 2 \times 2 \textcolor{green}{)}
  \times \textcolor{green}{(} 2 \times 2 \times 2 \textcolor{green}{)} = \newline
  = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 = \newline
  = 2^{12} = 2^{3 \times 4}
</katex>

in quanto vi sono quattro gruppi di tre 2 ciascuno  
quindi per fare il prodotto quando hanno la stessa base basta
moltiplicare gli esponenti  
ora rendiamo il risultato piu' generale possibile usando le lettere

---

<katex class="red--text text-left" display-mode>
  (a^r)^s = \textcolor{green}{(} 2 \cdot 2 \cdot \ldots \cdot a \textcolor{green}{)} \cdot
  \textcolor{green}{(} 2 \cdot 2 \cdot \ldots \cdot a \textcolor{green}{)} \cdot
  \textcolor{green}{(} 2 \cdot 2 \cdot \ldots \cdot a \textcolor{green}{)} \cdot
  \textcolor{green}{(} 2 \cdot 2 \cdot \ldots \cdot a \textcolor{green}{)} = 
</katex>

togliendo le parentesi

<katex class="red--text text-left" display-mode>
  = 2 \cdot 2 \cdot \ldots \cdot a \cdot 2 \cdot 2 \cdot \ldots \cdot a \cdot 2 \cdot 2 \cdot \ldots \cdot a \cdot 2 \cdot 2 \cdot \ldots \cdot a = a ^{r \cdot s}
</katex>

perche' saranno s gruppi di r lettere ciascuno  
Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza

<katex class="red--text text-left" display-mode>
 (a^r)^s = a^{r \cdot s}
</katex>

<lys-regola src="regole/potenza/potenza-di-potenza"></lys-regola>

## Potenza di un prodotto

Quando devo eseguire la potenza di un prodotto talvolta puo' essere utile trasformarla nella potenza dei fattori  
ad esempio se ho

<katex class="red--text text-left" display-mode>(2 \times 3)^4</katex>

talvolta (ad esempio in una frazione per semplificare) mi puo' servire fare la potenza senza eseguire la moltiplicazione, cosi' otterro'

<katex class="red--text text-left" display-mode>
  (2 \times 3)^4 = (2 \times 3) \times (2 \times 3) \times (2 \times 3) \times (2 \times 3) = \newline
  = 2 \times 3 \times 2 \times 3 \times 2 \times 3 \times 2 \times 3 = \newline
  = 2 \times 2 \times 2 \times 2 \times 3 \times 3 \times 3 \times 3 =
</katex>

ho messo assieme assieme i 2 e i 3 <span class="indigo--text">(proprieta' associativa della moltiplicazione)</span>

<katex class="red--text text-left" display-mode>= 2^4 \times 3^4</katex>

Cioe' per fare la potenza di un prodotto basta fare la potenza dei singoli fattori  
Ora, per rendere il risultato piu' generale possibile passiamo alle lettere  
<span class="indigo--text">(in questo caso mettiamo sempre i segni di prodotto <katex class="red--text">\cdot</katex> anche se talvolta potremmo sottointenderli)</span>  
Usiamo 3 lettere

<katex class="red--text text-left" display-mode>
  (a \cdot b \cdot c)^n = \newline
  = (a \cdot b \cdot c) \cdot (a \cdot b \cdot c) \cdot \ldots \cdot (a \cdot b \cdot c) =
</katex>

i puntini in basso indicano che di parentesi moltiplicate ce ne sono n

<katex class="red--text text-left" display-mode>
  = a \cdot a \cdot \ldots \cdot a \cdot b \cdot b \cdot \ldots \cdot b \cdot c \cdot c \cdot \ldots \cdot c =
</katex>

<span class="indigo--text">(proprieta' associativa della moltiplicazione)</span>  
di a ce ne sono n, di b ce ne sono n e di c ce ne sono n

<katex class="red--text text-left" display-mode>= a^n \cdot b^n \cdot c^n</katex>

Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza

<lys-regola src="regole/potenza/potenza-di-prodotto"></lys-regola>

### Esercizi

per vedere se hai capito bene prova a trovare la regola nei seguenti casi:

<katex class="red--text text-left" display-mode>
  (a \cdot b)^n = \newline
  (x \cdot y \cdot z)^s = \newline
  (a \cdot b \cdot c \cdot d) ^ n =
</katex>
