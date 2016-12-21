---
layout: post
title:  "Tirando a ferrugem do Java com a Snake"
date:   2015-11-15 13:05:14 +0100
categories: misc
location: Campinas, Brasil
---
<h2> 1 - INTRODUÇÃO </h2>

Java é uma linguagem muito poderosa, criado pela Suns em 1995, a principal intensão do Java é o famoso "write once, run anywhere", o java não roda diretamente na sua maquina, ele roda em uma maquina virtual chamada JVM, essa maquina virtual é 'igual' em todos os computadores, o que reduziria muito a incompatibilidade entre de uma aplicação entre sistemas operacionais.

O Java continua rodando na JVM (uma das ferramentas mais importantes do universo java), por conta disso depois que você gerar o .JAR desse joguinho você vai poder rodar ele em qualquer computador da sua preferencia, ele é compativel com linux, windows e até mesmo em algumas calculadoras que possuem o JVM.

O principal objetivo desse projeto é conhecer algumas caracteristicas da linguagem, embora superficialmente esse projeto aborda conceitos de Orientação a Objetos,se você esta aprendendo esse paradgima agora você vai tirar muito proveito desse codigo, ele foge um pouco dos projetos comuns (calculadora, controle de estoque) e ajuda a exemplificar bastante como funcionam os Objetos e suas particularidades.

<h2> 2 - REQUESITOS PRINCIPAIS </h2>

Somos programadores, e não cowboys, antes de qualquer coisa precisamos ir para o papel e definir como irá ser a alma do nosso projeto, o que ele vai ter e o que ele não vai ter. Mais pra frente esses requisitos podem (e devem) mudar, mas nós precisamos entender a complexidade do que vamos programar.

Para que o jogo fique minimamente apresentavel vamos definir uma lista de features, assim montando uma especie de MVP do joguinho.

<ul class="styled-list">
	<li> <b> A Tela (Screen):</b> Precisamos de uma boa maneira para representar a superficie em que a cobrinha vai estar se movimentando. </li>
	<li> <b> A Maçã (Apple):</b> A fruta que será renderizada na tela para.</li>
	<li> <b> A Cobrinha (Snake):</b> Um jeito de guardar a posição que o jogador vai estar e lidar com os movimentos. </li>
</ul> 

Tendo em isso em mente vamos começar nosso sprint.

<h2> 2.1 - A Tela  </h2>

<img src="{{site.url}}/img/snake_1995.jpg" class="small-image" />

O jogo original nos apresenta uma tela com vários pixels que são redesenhados em um loop temporal (a cada X segundos o personagem se movimenta e a tela é redesenhada). 

Nosso foco não vai ser em aprender um modo gráfico de representar a tela, nosso foco está no core do joguinho, então decidi desenvolver esse jogo direto no terminal, o primeiro passo foi criar um objeto para representar um 'pixel' da nossa tela, eu chamei esse pixel de Tile, ele ficou dessa maneira:

{% highlight java %}

{% endhighlight %}
