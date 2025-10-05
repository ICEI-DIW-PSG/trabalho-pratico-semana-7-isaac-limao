const carros = [
  { 
    id: 1, 
    nome: "Ford Mustang 1967", 
    descricao: "Clássico americano, conhecido pela potência e estilo marcante.", 
    imagem: "img/Ford Mustang 1967.jpg",
    preco: "R$ 750.000",
    detalhes: "O Ford Mustang 1967 é um dos muscle cars mais icônicos já produzidos. Com seu motor V8 e design agressivo, marcou o início de uma nova era na indústria automobilística americana. Este modelo ficou imortalizado em filmes e séries, representando liberdade e velocidade nas estradas dos anos 60."
  },
  { 
    id: 2, 
    nome: "Chevrolet Bel Air 1957", 
    descricao: "Ícone dos anos 50, com muito cromado e design retrô.", 
    imagem: "img/Chevrolet Bel Air.jpg",
    preco: "R$ 620.000",
    detalhes: "O Chevrolet Bel Air 1957 é um símbolo da cultura americana do pós-guerra. Conhecido por suas aletas traseiras e abundância de cromados, ele personifica o otimismo e o luxo da década de 1950. Hoje, é um dos modelos mais valorizados por colecionadores de carros clássicos."
  },
  { 
    id: 3, 
    nome: "Chrysler 300 C", 
    descricao: "Um dos carros mais populares e queridos do mundo.", 
    imagem: "img/Chrysler CHRRYSLER 300 C.jpg",
    preco: "R$ 280.000",
    detalhes: "O Chrysler 300 C combina luxo e desempenho em um só pacote. Seu motor V8 HEMI entrega uma condução poderosa, enquanto o interior espaçoso e refinado garante conforto e sofisticação. É considerado um sedã clássico moderno, com presença marcante nas ruas."
  },
  { 
    id: 4, 
    nome: "Mercedes-Benz SL 480 - 1975", 
    descricao: "Modelo de colecionador, um dos mais raros da marca Mercedes-Benz.", 
    imagem: "img/Mercedes 450 SL.jfif",
    preco: "R$ 540.000",
    detalhes: "O Mercedes-Benz SL 480 de 1975 é um conversível de luxo que combina elegância atemporal e engenharia alemã. Com carroceria robusta e interior refinado, tornou-se um símbolo de status entre celebridades e empresários da época. É um dos clássicos mais desejados da marca."
  },
  { 
    id: 5, 
    nome: "Ferrari F40", 
    descricao: "Clássico italiano, conhecido pela potência e design marcante.", 
    imagem: "img/Ferrari F40.jpg",
    preco: "R$ 8.500.000",
    detalhes: "A Ferrari F40 é um ícone absoluto da marca italiana. Produzida entre 1987 e 1992, foi o último modelo aprovado pessoalmente por Enzo Ferrari. Com motor V8 biturbo e carroceria leve de fibra de carbono, foi o carro mais rápido do mundo em sua época, atingindo mais de 320 km/h."
  },
  { 
    id: 6, 
    nome: "Porsche 911 Turbo", 
    descricao: "Carro esportivo mais conhecido do mundo, perfeito para colecionadores iniciantes.", 
    imagem: "img/porshe.jfif",
    preco: "R$ 950.000",
    detalhes: "O Porsche 911 Turbo é a personificação da engenharia esportiva alemã. Desde sua estreia nos anos 70, o modelo impressiona pela combinação entre potência, equilíbrio e tração traseira. É um carro admirado tanto nas pistas quanto nas ruas, mantendo o mesmo DNA por décadas."
  },
  { 
    id: 7, 
    nome: "Chevrolet Impala", 
    descricao: "Um dos carros mais populares e queridos do mundo.", 
    imagem: "img/Impala.jfif",
    preco: "R$ 480.000",
    detalhes: "O Chevrolet Impala é um dos modelos mais emblemáticos da marca. Lançado em 1958, o Impala representava conforto, espaço e estilo. Com o passar dos anos, tornou-se um símbolo da cultura americana e presença constante em filmes e séries clássicas."
  },
  { 
    id: 8, 
    nome: "ALFA ROMEO SPIDER - 1983", 
    descricao: "Clássico para colecionadores e amantes de carros antigos.", 
    imagem: "img/Spider.jfif",
    preco: "R$ 390.000",
    detalhes: "O Alfa Romeo Spider 1983 é um conversível italiano conhecido por seu design elegante e dirigibilidade leve. Famoso após aparecer no filme 'A Primeira Noite de um Homem', o modelo combina esportividade e romance à moda italiana, tornando-se um item de desejo entre colecionadores."
  },
  { 
    id: 9, 
    nome: "Porsche 911 Clássico", 
    descricao: "Esportivo alemão que marcou gerações.", 
    imagem: "img/Porche 911 classico.jfif",
    preco: "R$ 1.200.000",
    detalhes: "O Porsche 911 Clássico é um dos carros esportivos mais reconhecidos do mundo. Seu design inconfundível e desempenho impressionante definiram padrões na indústria automobilística. Mesmo décadas após seu lançamento, continua sendo um dos carros mais desejados por entusiastas."
  },
  { 
    id: 10, 
    nome: "Chevrolet Camaro 1969", 
    descricao: "Muscle car icônico dos anos 60, rival do Mustang.", 
    imagem: "img/Chevrolet Camaro 1969.jfif",
    preco: "R$ 680.000",
    detalhes: "O Chevrolet Camaro 1969 é considerado por muitos o ápice da era dos muscle cars. Seu visual agressivo, som do motor V8 e postura imponente o tornaram um rival direto do Mustang. É um carro que representa força, velocidade e o espírito da liberdade americana."
  },
  { 
    id: 11, 
    nome: "Chevrolet Opala SS", 
    descricao: "Clássico brasileiro em versão de colecionador.", 
    imagem: "img/Chevrolet Opala SS.jfif",
    preco: "R$ 250.000",
    detalhes: "O Chevrolet Opala SS é um dos carros mais icônicos da indústria automobilística brasileira. Lançado nos anos 70, unia design americano com robustez nacional. A versão SS destacava-se pelo desempenho e visual esportivo, tornando-se um verdadeiro símbolo de potência e nostalgia."
  },
  { 
    id: 12, 
    nome: "Cadillac Eldorado 1959", 
    descricao: "Luxo e extravagância em um clássico americano.", 
    imagem: "img/Cadillac Eldorado 1959.jfif",
    preco: "R$ 920.000",
    detalhes: "O Cadillac Eldorado 1959 é o auge da extravagância dos anos 50. Suas enormes aletas traseiras e acabamento luxuoso o tornaram um ícone da cultura pop. Era o carro preferido das estrelas de Hollywood, representando luxo, poder e o estilo inconfundível da época dourada do automóvel."
  }
];

const container = document.getElementById('cards-carros');
if (container) {
  carros.forEach(carro => {
    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <article class="card h-100">
          <a href="detalhes.html?id=${carro.id}">
            <img src="${carro.imagem}" class="card-img-top" alt="${carro.nome}">
            <div class="card-body">
              <h3 class="card-title">${carro.nome}</h3>
              <p class="card-text">${carro.descricao}</p>
            </div>
          </a>
        </article>
      </div>
    `;
  });
}

const imgEl = document.querySelector('#imagem');
const nomeEl = document.querySelector('#nome');
const descEl = document.querySelector('#descricao');
const precoEl = document.querySelector('#preco');
const detaEl = document.querySelector('#detalhes');

if (imgEl && nomeEl && descEl && detaEl && precoEl) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const carro = carros.find(c => c.id === id);

  if (carro) {
    imgEl.src = carro.imagem;
    imgEl.alt = carro.nome;
    nomeEl.textContent = carro.nome;
    descEl.textContent = carro.descricao;
    detaEl.textContent = carro.detalhes;
    precoEl.textContent = carro.preco;
  }
}
