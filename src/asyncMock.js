const products = [
    {
        id: '1',
        name: 'Resident Evil 4',
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        stock: '10',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png',
        description: 'Resident Evil 4 Remake es la reimaginación del clásico juego de acción y terror en tercera persona desarrollado por Capcom. Se trata de la puesta al día del survival horror de la saga Resident Evil lanzado en 2005, una ambiciosa puesta al día a nivel jugable y gráfico que nos devuelve a Leon S. Kennedy en su viaje a un récondito pueblo de España en su rescate de la hija del presidente de Estados Unidos.'
    },
    {
        id: '2',
        name: "Baldur's Gate 3",
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        stock: '10',
        img: 'https://blog.playstation.com/uploads/2023/09/b8df496d3cbfc43f7d2103e3157cf07b352c3b71.jpeg',
        description: "Baldur's Gate 3 es la tercera parte de la emblemática saga de videojuegos de rol Baldur's Gate. Considerada como una de las series más influyentes de la historia, en esta ocasión, los encargados de darle vida son los desarrolladores de Larian Studios, creadores de Divinity, prometiendo gran fidelidad a los manuales de Dragones y Mazmorras en su quinta edición, así como a la serie que dio origen a al rol occidental más puro en los videojuegos ."
    },
    {
        id: '3',
        name: "Resident Evil Village",
        category: "consola",
        platform: 'PS5',
        price: '39.99',
        stock: '10',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
        description: "Es un videojuego de acción-aventura de disparos en primera persona perteneciente al subgénero de terror y supervivencia desarrollado y publicado por Capcom. la novena entrega de la serie principal de Resident Evil y secuela narrativa de Resident Evil 7: Biohazard del año 2017, el videojuego sigue a Ethan Winters, quien, después de un fatídico encuentro con Chris Redfield, se encuentra en un pueblo lleno de criaturas mutantes en un esfuerzo por encontrar a su hija secuestrada. Si bien Village mantiene los elementos fundamentales de terror de supervivencia de la serie, el videojuego adopta un estilo de videojuego más orientado a la acción en comparación con su predecesor."
    },
    {
        id: '4',
        name: "Spider-Man 2",
        category: "consola",
        platform: 'PS5',
        price: '59.99',
        stock: '10',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png',
        description: "Marvel's Spider-Man 2 es un juego para un jugador. Pero podrán jugar con dos personajes, Peter Parker y Miles Morales, y cambiar entre los dos heroicos Spider-Men durante sus aventuras de lucha contra el crimen para vivir y experimentar el estilo de juego, habilidades e historia de cada uno de ellos."
    },
    {
        id: '5',
        name: "Day by Daylight",
        category: "pc",
        platform: 'PC',
        price: '10.49',
        stock: '10',
        img: 'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7',
        description: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados, torturados y asesinados."
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