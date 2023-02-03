import { randomUUID } from 'node:crypto';

export const productExample = {
    name: 'Cerveja IPA',
    value: 15,
    quantity: 10,
    user_id: "35",
    description: 'Cerveja IPA ibu 45%',
    category: 'bebidas alcóolicas',
    features: [
        {
            name: 'Cerveja IPA lata',
            description: 'Cerveja IPA ibu 45%',
        },
    ],
    images: [
        {
            url: 'https://taafrl.vtexassets.com/arquivos/ids/160112-800-auto?v=637958385816970000&width=800&height=auto&aspect=true',
            description: 'Cerveja IPA  lata ibu 45%',
        },
    ],
}