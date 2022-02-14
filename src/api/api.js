
const products = [
    {
        id: 1,
        title: 'ISOPURE PROTEÍNA CERO CARBOHIDRATOS VAINILLA - 3 LB',
        description: 'Este producto no es un medicamento, y es responsabilidad de quien lo recomienda y de quien lo usa.',
        price: 900,
        pictureUrl: 'https://gnc.com.mx/media/catalog/product/cache/d5c3974ef86b1c3c0d3b6947ccba778f/n/a/natures_best_zero_carb_isopure-vainilla_106306005_a.jpg',
        category:'vitaminas'
    },
    {
        id: 2,
        title: 'OPTIMUM NUTRITION GOLD STANDARD 100% WHEY PROTEÍNA DE SUERO DE LECHE CHOCOLATE - 5 LB',
        description: 'Este producto no es un medicamento, y es responsabilidad de quien lo recomienda y de quien lo usa.',
        price: 200,
        pictureUrl: 'https://gnc.com.mx/media/catalog/product/cache/d5c3974ef86b1c3c0d3b6947ccba778f/1/0/107206001-on-gold-standard-100-whey-choc-5-lbs.png',
        category:'suplementos'
    },
    {
        id: 3,
        title: 'OPTIMUM NUTRITION GOLD STANDARD 100% WHEY PROTEÍNA DE SUERO DE LECHE CHOCOLATE - 5 LB',
        description: 'Este producto no es un medicamento, y es responsabilidad de quien lo recomienda y de quien lo usa.',
        price: 200,
        pictureUrl: 'https://gnc.com.mx/media/catalog/product/cache/d5c3974ef86b1c3c0d3b6947ccba778f/1/0/107206001-on-gold-standard-100-whey-choc-5-lbs.png',
        category:'otros'
    }
]

const promesa = new Promise(function(resolve,reject){
    setTimeout (function(){
        resolve(products)
    },2000)
})

function getProducts() {
   return promesa;
}

export {
    getProducts,
}