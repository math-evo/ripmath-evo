<template>
  <div>
    <p>
      Se devo moltiplicare <katex class="red--text">2^3 \times 2^4</katex>
      <br>
      poiche'
      <br>
      <katex>2 ^ 3 = 2 \times 2 \times 2</katex>
      <br>
      e
      <br>
      <katex>2^4 = 2 \times 2 \times 2 \times 2</katex>
      <br>
      otterrai
      <br>
      <katex class="red--text">
        2^3 \times 2^4 = \newline
        = (2 \times 2 \times 2) \times (2 \times 2 \times 2 \times 2) = \newline
        = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 = \newline
        = 2^7 = 2^{3 + 4}
      </katex>
      <br>
      quindi per fare il prodotto quando hanno la stessa base basta sommare gli esponenti
      <br>
      ora rendiamo il risultato piu' generale possibile usando le lettere
      <br>
      <katex>
        a^r \cdot a^s = \newline
        = (a \cdot a \cdot \ldots \cdot a) \cdot (a \cdot a \cdot a \cdot \ldots \cdot a) = \newline
        a \cdot a \cdot \ldots \cdot a \cdot a \cdot a \cdot a \cdot \ldots \cdot a =
      </katex>
      <br>
      i primi sono <katex>r</katex>, gli altri sono s in totale saranno <katex>r + s</katex>
      <br>
      <katex class="red--text">
        = a^{r + s}
      </katex>
      Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza
      <br>
      <katex class="red--text">
        a^r \cdot a^s = a^{r + s}
      </katex>
    </p>
    <v-card
      color="grey lighten-2"
      flat
    >
      <v-card-title>REGOLA:</v-card-title>
      <v-card-text>
        <p>
          il prodotto di due potenze con la stessa base e' una potenza che ha per base la stessa base e per esponente la somma degli esponenti.
        </p>
        <p>
          Se hai bisogno di aiuto per leggere la regola
          <v-dialog>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                small
                v-on="on"
              >
                fai click qui
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <katex class="red--text">a^r \cdot a^s = a^{r + s}</katex>
                <p>
                  Questa e' la regola in linguaggio "matematico" per fare la traduzione devi seguire questa procedura:
                </p>
                <p>
                  Per leggere la regola devi cominciare prima dell'uguale
                  <katex class="red--text">a^r \cdot a^s</katex>
                    leggendo l'operazione che coinvolge tutti i termini (<span class="indigo--text">il prodotto</span>) poi devi dire fra chi e' quest'operazione (<span class="indigo--text">fra 2 potenze</span>) descrivendo i termini, indicando cos'hanno di uguale (<span class="indigo--text">aventi la stessa base</span>)
                </p>
                <p>
                  a questo punto hai finito di leggere la prima parte e c'e' l'uguale che si legge come un verbo (<span class="indigo--text">e' uguale a</span>)
                </p>
                <p>
                  ora devi leggere il secondo termine 
                  <katex class="red--text">a^{r + s}</katex>; non essendoci operazioni descrivi il secondo termine (<span class="indigo--text">una potenza</span>) e descrivendola indica in cosa e' uguale (<span class="indigo--text">avente per base la stessa base</span>) e cosa ha di diverso (<span class="indigo--text">e per esponente la somma degli esponenti</span>)
                </p>
                <p>
                  se metti assieme il tutto ottieni la regola <br>
                  <span class="indigo--text">REGOLA: il prodotto fra due potenze aventi la stessa base e' uguale a una potenza avente per base la stessa base e per esponente la somma degli esponenti.</span>
                </p>
              </v-card-text>
            </v-card>
          </v-dialog>
        </p>
      </v-card-text>
    </v-card>
    <p>
    </p>
  </div>
</template>