const misProductos = [
    {id: "1", nombre:"iphone 14", precio: 1000, img:"../image/iphone/iphone14.jpg", idCat: "1"},
    {id: "2", nombre:"iphone 13", precio:700, img:"../image/iphone/iphone13.jpg", idCat: "1"},
    {id: "3", nombre:"iphone SE", precio:850, img:"../image/iphone/iphoneSE.jpg", idCat: "1"},
    {id: "4", nombre:"iphone 14 Pro Max", precio:1300, img:"../image/iphone/iphone14ProMax.jpg", idCat: "1"},
    {id: "5", nombre:"iphone 11", precio:550, img:"../image/iphone/iphone11.jpg", idCat: "1"},
    {id: "6", nombre:"iphone 13 Pro Max", precio:950, img:"../image/iphone/iphone13ProMax.jpg", idCat: "1"},
    {id: "7", nombre:"ipad", precio: 1000, img:"../image/ipad/ipad.jpg", idCat: "2"},
    {id: "8", nombre:"ipad Pro", precio:700, img:"../image/ipad/ipadPro.jpg", idCat: "2"},
    {id: "9", nombre:"ipad Air", precio:850, img:"../image/ipad/ipadAir.jpg", idCat: "2"},
    {id: "10", nombre:"ipad Mini", precio:1300, img:"../image/ipad/ipadMini.jpg", idCat: "2"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        },600)
    })
}


export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        },200)
    })
}

export const getProductoCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        },500)
    })
}