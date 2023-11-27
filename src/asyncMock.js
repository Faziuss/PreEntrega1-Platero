const products = [
    {
        id: '1',
        name: 'Resident Evil 4',
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png',
        description: 'descripción de Resident Evil 4 Remake'
    },
    {
        id: '2',
        name: "Baldur's Gate 3",
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        img: 'https://blog.playstation.com/uploads/2023/09/b8df496d3cbfc43f7d2103e3157cf07b352c3b71.jpeg',
        description: "descripcion de Baldur's Gate 3"
    },
    {
        id: '3',
        name: "Resident Evil Village",
        category: "consola",
        platform: 'PS5',
        price: '39.99',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
        description: "descripcion de Resident Evil Village"
    },
    {
        id: '4',
        name: "Spider-Man 2",
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png',
        description: "descripcion de Spider-Man 2"
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        })
    })
}

export const getProductByCategory = (categoryId) => {
    const product = products.filter(prod => prod.category === categoryId)
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(product)
        }, 500)
    })
}