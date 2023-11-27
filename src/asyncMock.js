const products = [
    {
        id: '1',
        name: 'Resident Evil 4',
        platform: 'PS5',
        price: '60',
        img: 'https://media.vandal.net/m/120274/resident-evil-4-remake-202321717493566_1.jpg',
        description: 'descripcion de Resident Evil 4 Remake'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}