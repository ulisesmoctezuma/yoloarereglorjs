const products = [
    {
        id: 1, 
        name: 'Desengrasante Green Alchemist',
        precio: 50,
        category: 'Desengrasante',
        img: 'https://m.media-amazon.com/images/I/61MQeui7z2L._AC_SX679_.jpg',
        stock: 10,
        description: 'Desengrasante multiusos 100% biodegradable | Green Alchemist | Horno, grill, estufa, electrodomésticos | 500ml'
    },
    { 
        id: 2, 
        name: 'Desengrasante Green Land',
        precio: 45,
        category: 'Desengrasante',
        img: 'https://m.media-amazon.com/images/I/71Mura8LNBL._AC_SY879_.jpg',
        stock: 18,
        description: 'Green Land Limpiador Líquido Desengrasante, color Naranja, 700 m'
    },
    { 
        id: 3, 
        name: 'Limpiador Multiusos Para Baños',
        precio: 45,
        category: 'Jabón Líquido',
        img: 'https://m.media-amazon.com/images/I/61lB-9iRiFL._AC_SX679_.jpg',
        stock: 22,
        description: 'Method Limpiador Multiusos Para Baños, Con Poder de Limpieza de Ingredientes Derivados de Plantas, Menta Eucalipto, 828 ml'
    }
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
        })
}