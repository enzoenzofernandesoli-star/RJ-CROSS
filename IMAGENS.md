# Imagens do modelo — RJ CROSS

O site já está montado para receber estas imagens. É só gerar, renomear e salvar
em `fotos/`. Nada no código precisa mudar.

A referência de acabamento é a `black-belt-hero-panoramica.jpg` do site da Black Belt:
foto de ambiente, luz baixa e quente, sem gente posando para a câmera.

## Regras que valem para todas

- **Proporção 16:9 na capa** (mínimo 1920×1080). A capa é panorâmica; imagem em pé
  entra cortada e vira close abstrato.
- **Luz baixa, contraste alto, sombra fechada.** A página escurece a imagem em 44%
  por cima. Se a foto já vier clara e lavada, o véu não tem o que segurar.
- **Ninguém olhando para a câmera.** Ambiente vazio ou pessoa de costas, em movimento.
  Rosto reconhecível em foto gerada vira problema e quebra a ilusão.
- **Sem texto, sem logotipo, sem marca d'água.** O logotipo da casa entra por cima, em HTML.
- **Espaço vazio à esquerda.** É onde o título fica. Peça o assunto à direita do quadro.
- Formato JPG, qualidade alta, no máximo 1600px de largura depois de salvar.

## 1. `fotos/hero.jpg` — a capa

> Fotografia panorâmica do interior de um box de cross training à noite, vazio.
> Estrutura de rack em aço preto com barras fixas e argolas de madeira penduradas
> à direita do quadro. Parede de fundo em azul-petróleo escuro, com uma parede
> lateral pintada em âmbar quente recebendo luz rasante. Piso de borracha preta.
> Luminárias industriais suspensas, luz quente e baixa, feixes visíveis no ar.
> Lado esquerdo do quadro em sombra profunda, praticamente vazio.
> Fotografia realista, lente 24mm, alto contraste, sem pessoas, sem texto.
> Proporção 16:9.

Depois de salvar, troque no `index.html` o `src` da capa de `fotos/foto-01.webp`
para `fotos/hero.jpg` e ajuste o `alt`.

## 2. `fotos/treino-01.jpg`, `treino-02.jpg`, `treino-03.jpg` — cartões do treino

Três imagens quadradas (1:1), mesma luz e mesma paleta da capa:

1. **Argolas** — par de argolas de madeira penduradas por fitas, fundo escuro desfocado, luz quente lateral.
2. **Barra carregada** — barra olímpica no chão com anilhas, vista rasante, poeira de magnésio no ar.
3. **Caixa de salto e corda** — caixa de madeira e corda naval enrolada, canto do box, luz baixa.

Em todas: sem pessoas, sem texto, fundo em azul-petróleo e preto, um respiro de âmbar.

## 3. `fotos/espaco.jpg` — faixa larga do espaço (opcional)

> Vista ampla do box de cross training em uso, fotografada de trás da turma,
> silhuetas em contraluz contra a parede âmbar iluminada. Ninguém identificável.
> Fotografia realista, 16:9, luz baixa, grão fino.

## O que já existe e pode ficar

- `fotos/foto-01.webp` — estrutura e argolas, foto real da ficha do Google. Serve de fallback.
- `fotos/foto-mural.webp` — recorte da parte superior do mural, sem rostos. A foto integral mostrava rostos
  de alunos e não foi incluída no modelo.
