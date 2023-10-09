## Laços de Repetição

Uma ferramenta muito importante na programação é a capacidade de repetir a lógica de um bloco de código em certas condições.
Para isso, utilizamos os laços de repetição! Vamos ver como eles funcionam em Portugol.

### Laço `enquanto`

O laço `enquanto` (**while** em inglês) repete um bloco de código enquanto uma expressão lógica for verdadeira.
Um contador de 0 a 9 pode facilmente ser implementado dessa maneira:

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {
        inteiro contador = 0

        enquanto (contador < 10) {
            escreva(contador + " ")
            contador = contador + 1
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Laço enquanto"
Var
    contador: inteiro
inicio
    contador <- 0

    enquanto (contador < 10) faca
        escreval(contador)
        contador <- contador + 1
    fimenquanto
fimalgoritmo
```

:::

A condição `contador < 10` é verificada a cada iteração do laço.
Isto é, quando o código dentro do laço termina de executar, o valor de `contador` é verificado,
dessa forma, o programa sabe se deve ou não repetir o bloco de código.

Uma boa forma de visualizar isso é usando a função de execução passo a passo da sua IDE:

<video width="100%" controls>
    <source src="./img/repeticao_IDE.webm" type="video/webm">
</video>

### Laço `para`

O laço `para` (**for** em inglês) é uma variação do laço `enquanto` que permite declarar uma variável de controle e incrementá-la automaticamente a cada iteração do laço.

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {
        para (inteiro contador = 0; contador < 10; contador++) {
            escreva(contador + " ")
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Laço para"
var
contador: inteiro
inicio
    para contador <- 0 ate 9 faca
        escreval(contador)
    fimpara
fimalgoritmo
```

:::

O laço `para` é composto por três partes:

- **Declaração**: declaração da variável de controle e atribuição de um valor inicial.
- **Condição**: expressão lógica que é verificada a cada iteração do laço.
- **Incremento**: expressão que é executada ao final de cada iteração do laço.

Com a condição de incremento participando do laço, não é necessário incrementar a variável de controle dentro do bloco de código.

Veja como seria esse mesmo contador com um incremento de 2 em 2:

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {
        para (inteiro contador = 0; contador < 10; contador += 2) {
            escreva(contador + " ")
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Laço para"
var
contador: inteiro
inicio
    para contador <- 0 ate 9 passo 2 faca
        escreval(contador)
    fimpara
fimalgoritmo
```

:::

### Laço `faça`

O laço `faca..enquanto` (**do..while** em inglês e `repita..ate` no VisuAlg) é uma variação do laço `enquanto` que executa o bloco de código pelo menos uma vez, e só então verifica a condição:

::: code-group

```portugol [Portugol Studio]
programa {
inteiro idade
		faca {
			escreva ("Informe sua idade (valores aceitos de 15 a 100): ")
			leia (idade)
		}
		enquanto (idade < 15 ou idade > 100)
		
		// A idade continua a ser verificada enquanto um valor inválido for informado	

		escreva ("\nIdade Aceita!\n")
}
```

```portugol [VisuAlg]
algoritmo "Laço repita"
Var
    idade: inteiro
inicio
    repita
        escreva ("Informe sua idade (valores aceitos de 15 a 100): ")
        leia (idade)
    ate (idade >= 15 ou idade <= 100)
    
    // A idade é verificada até que seja informado um valor válido

    escreva ("\nIdade Aceita!\n")
```

:::

:::danger ATENÇÃO!!
No VisuAlg, a condição do laço `repita..ate` é invertida, ou seja, o laço é executado enquanto a condição for falsa.
:::
