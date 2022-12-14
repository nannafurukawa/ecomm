import { createProductUseCase } from "../../src/usecase/createProductUseCase.js";

const produto =
{

    nome: "cerveja Colombina",
    valor: 10,
    quantidade: 1,
    descricao: "cerveja garrafa",
    categoria: "adega",
    caracteristicas: [
      {
        nome: "cerveja",
        descricao: "bebida alcoolica",
      }
    ],
    imagens: [
      {
        url: "https://cdn.awsli.com.br/1000x1000/1577/1577274/produto/58826149/f40dd006cf.jpg",
        descricao: "cerveja garrafa"
      }
    ],
  }
  const product = await createProductUseCase(produto);
  console.log("product: " , product)