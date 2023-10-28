## Arrays

Arrays são estruturas de dados que permitem **armazenar uma coleção de valores do mesmo tipo**.
Cada valor é acessado por um índice, que indica a posição do valor no array.

Os arrays são declarados da seguinte forma:

::: code-group

```portugol [Portugol Studio]
inteiro numeros[5]
```

```portugol [VisuAlg]
var
    numeros: vetor[1..5] de inteiro
```

:::

O exemplo acima declara um array chamado `numeros` que pode armazenar até 5 valores do tipo inteiro.
Visualmente, podemos representar o array da seguinte forma:

![](./img/array_exemplo.png)

Como ilustrado acima, a variável `numeros` está associada a 5 espaços vazios, que podem ser preenchidos com valores do tipo inteiro.

### Como utilizar um array?

Para armazenar ou ler um valor em um array, utilizamos o nome da variável seguido de colchetes contendo o `índice` do valor que queremos acessar. Veja o exemplo abaixo:

::: code-group

```portugol [Portugol Studio]
inteiro numeros[5]

numeros[0] = 1
numeros[1] = 2
numeros[2] = 3
numeros[3] = 4
numeros[4] = 5

para(inteiro i = 0; i < 5; i++) {
    escreva(numeros[i])
}
```

```portugol [VisuAlg]
var
    numeros: vetor[1..5] de inteiro
    i: inteiro
inicio
    numeros[1] <- 1
    numeros[2] <- 2
    numeros[3] <- 3
    numeros[4] <- 4
    numeros[5] <- 5

    para i de 1 ate 5 faca
        escreva(numeros[i])
    fimpara
fimalgoritmo
```

:::

:::tip IMPORTANTE
Na programação é comum que o primeiro índice de um array seja o 0, e não o 1. Isso é conhecido como `numeração baseada em zero`.
[Leia mais a respeito](https://www.tabnews.com.br/Diletante/porque-o-indice-de-arrays-tuplas-e-vetores-sao-baseados-em-zero-em-algumas-linguagens).
:::

É importante ressaltar que o tipo de dado declarado para o array deve ser seguido a risca,
**tentar armazenar um valor de tipo diferente no array resultará em um erro**.

![](./img/array_correta.png)

![](./img/array_errada.png)

---

Uma vez que o array foi declarado, não é possível alterar o seu tamanho.
O array `numeros` foi declarado para armazenar até 5 valores, mas se precisarmos armazenar 10 valores,
teremos que declarar um novo array com o tamanho adequado.

::: code-group

```portugol [Portugol Studio]
inteiro numeros[5]

numeros[0] = 1
numeros[1] = 2
numeros[2] = 3
numeros[3] = 4
numeros[4] = 5

inteiro maisNumeros[10]

para(inteiro i = 0; i < 5; i++) {
    maisNumeros[i] = numeros[i]
}

para(inteiro i = 5; i < 10; i++) {
    maisNumeros[i] = i + 1
}
```

```portugol [VisuAlg]
var
    numeros: vetor[1..5] de inteiro
    maisNumeros: vetor[1..10] de inteiro
    i: inteiro
inicio

    numeros[1] <- 1
    numeros[2] <- 2
    numeros[3] <- 3
    numeros[4] <- 4
    numeros[5] <- 5

    para i de 1 ate 5 faca
        maisNumeros[i] <- numeros[i]
    fimpara

    para i de 6 ate 10 faca
        maisNumeros[i] <- i
    fimpara
fimalgoritmo
```

:::

O exemplo acima copia os valores do array `numeros` para o array `maisNumeros`, e em seguida,
preenche os espaços restantes do array `maisNumeros` com os valores de 6 a 10.

## Matrizes

(pendente)
