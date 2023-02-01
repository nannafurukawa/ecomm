import { randomUUID } from 'node:crypto';

export const produto1 = {
    nome: "Cerveja Pilsen",
    valor: "10",
    quantidade: 1,
    categoria: "bebidas",
    caracteristicas: {
      nome: "Cerveja Pilsen", 
      descricao: "description"
    },
    usuarioId: "2",
    data: "2022-04-12",
    imagens: [
      {
        url: "image.png",
        descricaoImagem: "imagem de cerveja",
      },
    ],
  };
  
  export const produto2 = {
    nome: "cerveja IPA",
    valor: 10,
    quantidade: 4,
    descricao: "description",
    categoria: "bebidas",
    usuarioId: "3",
    caracteristicas: 
      {
        nome: "cerveja Weiss",
        descricao: "cerveja Weiss",
    
      },
    
    imagens: [
      {
        url: "image.png",
        descricaoImagem: "imagem da cerveja",
      },
    ],
  };