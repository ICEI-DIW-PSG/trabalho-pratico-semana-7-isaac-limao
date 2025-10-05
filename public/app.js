const carros = [
  {
    id: 1,
    nome: "Ford Mustang 1967",
    descricao: "Clássico americano, conhecido pela potência e estilo marcante.",
    imagem: "img/Ford Mustang 1967.jpg"
  },
  {
    id: 2,
    nome: "Chevrolet Bel Air 1957",
    descricao: "Ícone dos anos 50, com muito cromado e design retrô.",
    imagem: "img/Chevrolet Bel Air.jpg"
  },
  {
    id: 3,
    nome: "Chrysler 300 C",
    descricao: "Um dos carros mais populares e queridos do mundo.",
    imagem: "img/Chrysler CHRRYSLER 300 C.jpg"
  } ,
  {
    id: 4,
    nome: "Mercedes-Benz SL 480 - 1975",
    descricao: "Modelo de colecionador, um dos mais raros da marca Mercedes-Benz.",
    imagem: "img/Mercedes 450 SL.jfif"
  },
  {
    id: 5,
    nome: "Ferrari F40",
    descricao: "Clássico italiano, conhecido pela potência e design marcante.",
    imagem: "img/Ferrari F40.jpg"
  },
  {
    id: 6,
    nome: "Porsche 911 Turbo",
    descricao: "Carro esportivo mais conhecido do mundo, perfeito para colecionadores iniciantes.",
    imagem: "img/porshe.jfif"
  },
  {
    id: 7,
    nome: "Chrysler 300 C",
    descricao: "Um dos carros mais populares e queridos do mundo.",
    imagem: "img/Impala.jfif"
  },
  {
    id: 8,
    nome: "ALFA ROMEO SPIDER - 1983",
    descricao: "Clássico para colecionadores e amantes de carros antigos.",
    imagem: "img/Spider.jfif"
  },
  {
    id: 9,
    nome: "Porsche 911 Clássico",
    descricao: "Esportivo alemão que marcou gerações.",
    imagem: "img/Porche 911 classico.jfif"
  },
  {
    id: 10,
    nome: "Chevrolet Camaro 1969",
    descricao: "Muscle car icônico dos anos 60, rival do Mustang.",
    imagem: "img/Chevrolet Camaro 1969.jfif"
  },
  {
    id: 11,
    nome: "Chevrolet Opala SS",
    descricao: "Clássico brasileiro em versão de colecionador.",
    imagem: "img/Chevrolet Opala SS.jfif"
  },
  {
    id: 12,
    nome: "Cadillac Eldorado 1959",
    descricao: "Luxo e extravagância em um clássico americano.",
    imagem: "img/Cadillac Eldorado 1959.jfif"
  }
  
 
];


const container = document.getElementById('cards-carros');

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

