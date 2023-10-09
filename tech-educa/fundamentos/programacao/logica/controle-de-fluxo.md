## Controle de Fluxo

O controle de fluxo de um programa,
consiste na capacidade de fazer o seu programa tomar decisões.
Pense da seguinte forma:
`Uma escolha é como uma bifurcação na estrada, você precisa escolher um caminho para seguir.`

![escolha1](img/escolha_estrada.svg)

<p style="font-size:10px"><a href="https://www.freepik.com/free-vector/way-concept-illustration_7273255.htm" target="_blank">Imagem por storyset</a> em Freepik</p>

### Comando `Se`

Na programação, também precisamos fazer escolhas, e para isso, utilizamos o comando `se` (if em inglês).
Veja um exemplo onde precisamos verificar se uma pessoa é maior de idade:

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {
        inteiro idade

        escreva("Digite sua idade: ")
        leia(idade)

        se (idade >= 18) {
            escreva("Você é maior de idade!\n")
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Maior de Idade"
Var
    idade: inteiro
inicio
    escreva("Digite sua idade: ")
    leia(idade)

    se (idade >= 18) entao
        escreval("Você é maior de idade!")
    fimse
fimalgoritmo
```

:::

Essa verificação é feita através de uma expressão lógica, que é computada para um valor do tipo logico (verdadeiro ou falso). No caso acima, a expressão `idade >= 18` é computada como verdadeiro se a idade informada for `maior ou igual a 18`, e falso caso contrário.

Outros exemplos de expressões lógicas incluem:

- `idade > 18` ⇔ idade maior que 18
- `idade < 18` ⇔ idade menor que 18
- `idade == 18` ⇔ idade igual a 18

> 👆 `idade = 18` no VisuAlg

- `idade != 18` ⇔ idade diferente de 18

> 👆 `idade <> 18` no VisuAlg

- `idade <= 18` ⇔ idade menor ou igual a 18

O exemplo acima tem uma resposta para o caso em que a idade é maior ou igual a 18, mas e se a idade for menor que 18? Para isso, utilizamos o comando `senao` (else em inglês), que é executado caso a expressão lógica seja falsa.

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {
        inteiro idade

        escreva("Digite sua idade: ")
        leia(idade)

        se (idade >= 18) {
            escreva("Você é maior de idade!\n")
        } senao {
            escreva("Você é menor de idade!\n")
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Maior de Idade"
Var
    idade: inteiro
inicio
    escreva("Digite sua idade: ")
    leia(idade)

    se (idade >= 18) entao
        escreval("Você é maior de idade!")
    senao
        escreval("Você é menor de idade!")
    fimse
fimalgoritmo
```

:::

### Operadores Lógicos

Além dos operadores relacionais vistos acima, também temos os operadores lógicos, que são utilizados para combinar expressões lógicas. Veja a tabela abaixo:

| Operador |    Significado    |           Exemplo           |
|:--------:|:-----------------:|:---------------------------:|
|   `e`    |     Lógica E      | `idade >= 18 e idade <= 60` |
|   `ou`   |     Lógica OU     | `idade < 18 ou idade > 60`  |
|  `nao`   | Negação da Lógica |     `nao (idade >= 18)`     |

A lógica E (`e`) só é verdadeira se as duas expressões forem verdadeiras.
Já a lógica OU (`ou`) é verdadeira se, pelo menos, **uma das expressões for verdadeira**.
Por fim, a negação da lógica (`nao`) inverte o valor da expressão lógica.

Se você é familiar com o conceito de tabelas verdade, então tudo isso é bem intuitivo. Se não, então vale a pena conferir o vídeo abaixo para aprender mais sobre o assunto:

<Youtube id="uDNNBiST3ls"/>

### Exemplo de Decisões Aninhadas

Nos casos mais complexos, pode haver a necessidade de avaliar múltiplas condições em um programa. Veja o exemplo abaixo:

::: code-group

```portugol [Portugol Studio]
programa {
    funcao inicio() {        
        cadeia alerta

        escreva("Qual o alerta: ")
        leia(alerta)

        se (alerta == "Nenhum") {
            escreva("Você está seguro!\n")
        } senao {
            se (alerta == "Furacão") {
                escreva("Feche as janelas!\n")
            } senao se (alerta == "Terremoto") {
                escreva("Se abrigue embaixo da mesa!\n")
            } senao {
                escreva("Procure um lugar seguro!\n")
            }
        }
    }
}
```

```portugol [VisuAlg]
algoritmo "Alerta"
Var
    alerta: caracter
inicio
    escreva("Qual o alerta: ")
    leia(alerta)

    se (alerta = "Nenhum") entao
        escreval("Você está seguro!")
    senao
        se (alerta = "Furacão") entao
            escreval("Feche as janelas!")
        senao
            se (alerta = "Terremoto") entao
                escreval("Se abrigue embaixo da mesa!")
            senao
                escreval("Procure um lugar seguro!")
            fimse
        fimse
    fimse
fimalgoritmo
```

:::

Observamos no exemplo acima que o comando `se` pode ser aninhado dentro de outro comando `se`, formando uma estrutura de decisão aninhada. Os principais pontos a serem observados são:

1. Avaliamos primeiro se não havia nenhum alerta (`alerta == "Nenhum"`), caso contrário, prosseguimos para descobrir qual era o alerta.
2. Com a combinação de `senao` e `se`, podemos avaliar vários casos em sequência para descobrir qual a melhor decisão a ser tomada.

<style lang="css">

img[alt=escolha1] {
    width: 60%;
    display: block;
}

</style>
