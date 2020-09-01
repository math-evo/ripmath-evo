<template>
  <!-- eslint-disable max-len -->
  <v-card color="grey lighten-2" flat>
    <v-card-title>REGOLA:</v-card-title>
    <v-card-text>
      <p>il quoziente di due potenze con la stessa base e' una potenza che ha per base la stessa base e per esponente la differenza degli esponenti.</p>
      <p>
        Se hai bisogno di aiuto per leggere la regola
        <v-dialog>
          <template v-slot:activator="{ on }">
            <v-btn text small v-on="on">fai click qui</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <katex class="red--text" display-mode>a^r \div a^s = a^{r-s}</katex>
            </v-card-title>
            <v-card-text>
              <p>
                Questa e' la regola in linguaggio "matematico" per fare la traduzione devi seguire questa procedura:
              </p>
              <p>
                Per leggere la regola devi cominciare prima dell'uguale
                <katex class="red--text">a^r / a^s</katex>
                leggendo l'operazione che coinvolge tutti in termini (<span class="indigo--text">il quoziente</span>) poi devi dire fra chi e' quest'operazione (<span class="indigo--text">fra 2 potenze</span>) descrivendo i termini, indicando cos'hanno di uguale (<span class="indigo--text">aventi la stessa base</span>)
                <br />a questo punto hai finito di leggere la prima parte e c'e' l'uguale che si legge come un verbo (<span class="indigo--text"> e' uguale a </span>)
                <br />ora devi leggere il secondo termine
                <katex class="red--text">a^{r-s}</katex>;
                non essendoci operazioni descrivi il secondo termine (<font class="indigo--text">una potenza</font>) e descrivendola indica in cosa e' uguale (<font class="indigo--text"> avente per base la stessa base </font>) e cosa ha di diverso (<font class="indigo--text">e per esponente la differenza degli esponenti</font>)
              </p>
              <p>
                se metti assieme il tutto ottieni la regola
              </p>
              <p class="indigo--text">
                <strong>REGOLA</strong>: il quoziente di due potenze con la stessa base e'
                una potenza che ha per base
                la stessa base e per esponente la differenza degli esponenti.
              </p>
            </v-card-text>
          </v-card>
        </v-dialog>
      </p>
    </v-card-text>
  </v-card>
</template>
