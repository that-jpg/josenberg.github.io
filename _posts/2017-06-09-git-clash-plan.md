---
layout: post
title: "GIT: THE CLASH PLAN"
categories: articles 
excerpt:
tags: [git, programming]
image:
  feature: #
date: 2017-06-09T15:39:55-04:00
modified: 2017-06-09T15:39:55-04:00
---

![it's dangerous to go alone]({{ site.url }}/img/git-clash-plan/git-feature-image.jpg)

Git é uma ferramenta poderosíssima, porém é muito fácil confundir-se e acabar fazendo algo errado quando estamos dando os primeiros passos, um comando errado (ou até mesmo o comando certo no lugar errado) podem acabar quebrando todo o repositório. Para tornar mais tranquila a resolução destes problemas aqui eu descrevo aqui alguns 'crash-plans' que podem ser usados sempre que algo dá errado.

Esse arquivo tem como objetivo ser sua ajuda quando as coisas estiverem fora de controle. Abaixo podemos ver alguns cenários mais comuns e como resolvê-los de uma forma simples.

### Eu fiz algo terrivelmente errado, a única solução para meu problema seria voltar no tempo!
#### (Voltar para uma versão antiga)

```bash
git reflog
# Esse comando permite que você veja uma lista de tudo o que você fez em qualquer branch da
# aplicação. Cada uma destas alterações vai ter um índice (index) HEAD@{index}, É só encontrar # o ponto em que tudo estava funcionando e digitar:

git reset HEAD@{index}
# Você estará de volta ao momento onde as coisas ainda funcionam
```

O uso do `git reset HEAD@{index}` é bastante interessante quando removemos algum arquivo sem querer, ou tentamos fazer algum teste e acabamos quebrando o repositório inteiro.

### Eu acabei de fazer o commit e percebi que precisava mudar algumas linhas de código.
#### (Adicionar alterações no ultimo commit)

```bash
# Faça suas mudanças e em seguida adiciona os arquivos alterados.
git add .

git commit --ammend
# Irá abrir o editor de texto e você poderá editar a mensagem de commit. Pronto, agora seu
# último terá essa nova alteração
```

Esse é um dos mais úteis no dia a dia, quando esquecemos algum `console.log` na aplicação, ou até algum problema de formatação podemos usar o `git commit --ammend` para corrigir nosso código sem ter que fazer vários commits e sujar a semântica do nosso repositório.

### Digitei a mensagem errada no meu último commit.
#### (Alterar a mensagem do último commit)

```bash
git commit --ammend
# Irá abrir o editor de texto e você poderá editar a mensagem de commit.
```

Para quando se está no modo automático e digitamos uma mensagem incorreta no commit.

### Fiz um commit na master mas ele deveria ter sido em uma nova branch.
#### (Desfazer um commit na master)

```bash
# Crie essa nova branch.
git branch nome-da-nova-branch

# Reverta esse último commit da master.
git reset HEAD~ --soft
git checkout nome-da-nova-branch

# Pronto, agora é só refazer o commit na branch correta.
```

### Atenção!
*PS1.* Se você já enviou esse commit para o servidor você terá que conversar com o dono do repositório para ver o melhor jeito de fazer isso, fazer alterações direto na master é perigoso demais (mesmo quando acompanhado deste guia 😞)

*PS2.* Converse com seu time e proteja a branch master, nenhum commit deve ser feito direto para ela, a boa prática sugere que apenas pull requests possam alterar o código dela.

### Fiz um commit na branch errada.
#### (Pegar o commit de uma branch e colocar em outra)

```bash
# Reverta esse commit da branch incorreta.
git reset HEAD~ --soft

# Guarde suas alterações no 'limbo'.
git stash
git checkout nome-da-branch-correta

# Quando estiver na branch correta, recupere as alterações do 'limbo'.
git stash pop

# Pronto, agora é só refazer o commit.
```

Também é possível fazer a mesma coisa usando `cherry-pick`

```bash
# Vá para a branch correta
git checkout nome-da-branch-correta

# Pega o último commit da branch incorreta
git cherry-pick nome-da-branch-incorreta

# Vá para a branch incorreta e delete esse commit de lá
git checkout nome-da-branch-incorreta
git reset HEAD~ --hard

# Pronto, seu commit só existe na branch correta.
```

### O meu git diff não está retornando nada
#### (Git diff quebrado)

Por default o git não faz o diff nos arquivos que já foram adicionados via `git add`, para incluir esses arquivos no seu diff é necessário adicionar uma flag.

```bash
# Com essa flag você verá todas as alterações feitas desde o último commit.
git diff --staged
```

### Eu desisto, vamos começar tudo do zero
Apagar seu repositório e começar tudo do zero é a sempre a última medida, mas se você realmente precisar fazer isso:

```bash
cd ..
sudo rm -r nome-do-repositorio #Apaga todo o repositorio atual
git clone url_do_repositorio # Clona novamente o repositorio como ele está no servidor
cd nome-do-repositorio
```

### COME TO THE _GIT_ SIDE OF THE FORCE
Esse guia é apenas introdutório e sempre estará na versão beta. Se você tiver mais sugestões por favor envie para o email mbx.philipe@gmail.com.  

Inspirado por (http://ohshitgit.com/).
