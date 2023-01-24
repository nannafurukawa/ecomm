import { randomUUID } from 'crypto';

export const productExample = {
    user_id: randomUUID(),
    name: "Cerveja",
    value: 15,
    quantity: 2,
    description: "Cerveja Sierra Nevada Big Little Thing Ipa",
    category: "bebidas",
    features: [{name: "IBU", description: "45%"}],
    images: [{url: "https://taafrl.vtexassets.com/arquivos/ids/160112-800-auto?v=637958385816970000&width=800&height=auto&aspect=true", description: "Cerveja Sierra Nevada Big Little Thing Ipa"}]
  };