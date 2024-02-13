export default (products)=>{
    products.forEach(product=>{
        product.images = product.images.map(img=>{
            img = img.replaceAll("[", "")
            img = img.replaceAll("]", "")
            img = img.replaceAll('"', "")
            return img
        })
    })
    return products
}