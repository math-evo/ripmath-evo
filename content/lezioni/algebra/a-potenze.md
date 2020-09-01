---
title: Potenze
description: Potenze
---

# Definizione 
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

# Prodotto di potenze con la stessa base

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


<regola-potenza></regola-potenza>


# Quoziente di potenze con la stessa base

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
  \text{\color{black}{se}} \enspace
  r > s \enspace
  \text{\color{black}{allora}} \enspace
  \frac{a^r}{a^s} = a^{r-s}
</katex>

<regola-potenza-div></regola-potenza-div>

Pero' in matematica quando si trova una regola essa dev'essere resa piu' generale possibile; noi abbiamo trovato una regola che vale solo quando il primo esponente r e' maggiore del secondo esponente s. Quindi ora occorre vedere cosa si puo' fare quando r e' uguale ad s ed anche quando r e' minore di s
