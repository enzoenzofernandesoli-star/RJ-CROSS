import { negocio } from './dados.js';

// Modelo de demonstração: sem biblioteca de animação. O JavaScript aqui só faz
// duas coisas — encaixar os dados reais na página e abrir o menu no celular.
// Se ele falhar, a página continua inteira e legível.

const preencher = (seletor, valor) => {
  document.querySelectorAll(seletor).forEach((no) => { no.textContent = valor; });
};

const rotaMaps = negocio.maps ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    [negocio.nome, negocio.endereco || negocio.cidade].filter(Boolean).join(', ')
  )}`;

const conversa = `${negocio.whatsapp}?text=${encodeURIComponent(
  `Oi! Vi o site de vocês e queria saber dos horários e condições das aulas do ${negocio.nome}.`
)}`;

// Chamada de novo depois que as listas são montadas: cartão criado por
// JavaScript também precisa do link.
function ligarAcoes() {
  document.querySelectorAll('[data-acao]').forEach((no) => {
    no.href = conversa;
    no.target = '_blank';
    no.rel = 'noopener';
  });
  document.querySelectorAll('[data-rota], [data-maps]').forEach((no) => { no.href = rotaMaps; });
}
ligarAcoes();

preencher('[data-endereco]', negocio.endereco || `${negocio.bairro}, ${negocio.cidade} — ${negocio.estado}`);
preencher('[data-nota]', (negocio.nota || '').replace('.', ','));
preencher('[data-avaliacoes]', negocio.avaliacoes ?? '—');
preencher('[data-telefone]', negocio.telefoneVisivel || negocio.telefone);
preencher('[data-bairro]', negocio.bairro || negocio.cidade);
preencher('[data-ano]', String(new Date().getFullYear()));

document.querySelectorAll('[data-instagram]').forEach((no) => {
  if (!negocio.instagram) { no.closest('[data-linha-dado]')?.remove(); return; }
  no.href = negocio.instagram;
  no.textContent = '@' + negocio.instagram.replace(/\/+$/, '').split('/').pop();
});

const listaServicos = document.querySelector('[data-lista-servicos]');
if (listaServicos) {
  listaServicos.innerHTML = negocio.servicos.map((servico) => `
    <article class="cartao">
      <h3>${servico.nome}</h3>
      <p>${servico.texto}</p>
      <a class="cartao-acao" data-acao href="">Perguntar no WhatsApp</a>
    </article>
  `).join('');
}

const listaFotos = document.querySelector('[data-lista-fotos]');
if (listaFotos) {
  listaFotos.innerHTML = negocio.fotos.length
    ? negocio.fotos.map((foto, i) => `
        <figure class="foto foto-${i + 1}">
          <img src="fotos/${foto}" alt="Espaço do ${negocio.nome}" loading="lazy" decoding="async">
        </figure>
      `).join('')
    : '<p class="galeria-vazia">As fotos do espaço entram aqui assim que o estabelecimento enviar.</p>';
}

ligarAcoes();

/* ------------------------------------------------------- menu do celular */

const botaoMenu = document.querySelector('.abrir-menu');
const menuCelular = document.querySelector('.navegacao-celular');

const fecharMenu = () => {
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.querySelector('.sr').textContent = 'Abrir menu';
  menuCelular.hidden = true;
};

botaoMenu?.addEventListener('click', () => {
  const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  botaoMenu.setAttribute('aria-expanded', String(!aberto));
  botaoMenu.querySelector('.sr').textContent = aberto ? 'Abrir menu' : 'Fechar menu';
  menuCelular.hidden = aberto;
});

menuCelular?.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'A') fecharMenu();
});

document.addEventListener('keydown', (evento) => {
  if (evento.key !== 'Escape' || menuCelular?.hidden !== false) return;
  fecharMenu();
  botaoMenu.focus();
});
