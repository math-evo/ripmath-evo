<template>
  <div>
    La potenza non e' altro che una moltiplicazione ripetuta: se devo scrivere
    <katex class="red--text">6 \cdot 6 \cdot 6</katex>
    e' piu' facile e comodo scrivere
    <katex class="red--text">6^3</katex>
    quindi
    <katex class="red--text">6^3 = 6 \cdot 6 \cdot 6</katex>

    <p>
      il <span class="red--text">6</span> si chiama base,
      il <span class="red--text">3</span> si chiama esponente e
      <katex class="red--text">6^3</katex> tutto quanto si chiama potenza
    </p>
    <p>
      <em>
        (BATTUTA INDEGNA: cos'e' un fattore di
        <v-dialog>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              small
              v-on="on"
            >Potenza</v-btn>
          </template>
          <v-card>
            <v-card-title>RISPOSTA</v-card-title>
            <v-card-text>E' un contadino della Basilicata!</v-card-text>
          </v-card>
        </v-dialog>
        ?)
      </em>
    </p>
    <p class="indigo--text">
      <strong>DEFINIZIONE:</strong> la potenza e' il prodotto della base tante volte quant'e' l'esponente
    </p>
    <p>
      Per rendere la definizione piu' generale occorre usare le lettere, allora, poiche' talvolta useremo <katex>x</katex> come lettera sostituiamo il segno di prodotto <katex class="red--text">\times</katex> con il simbolo <katex> \cdot</katex>
    </p>
    <p>
      allora ad esempio <katex class="red--text">a^3</katex> sara'
      <katex class="red--text">a \cdot a \cdot a</katex>
    </p>
    <p>
      piu' in generale <katex class="red--text">a^n</katex> sara' <katex class="red--text">a \cdot a \cdot \ldots \cdot a</katex> ove i puntini indicano che la moltiplicazione e' fatta tante volte quant'e' l'esponente cioe'
      <span class="red--text">n</span> volte.
    </p>
  </div>
</template>

<script>
export default {
    
}
</script>