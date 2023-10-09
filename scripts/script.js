productsDiv = document.querySelector('#products')
productHeader = document.querySelector('#product-header')
servicesHeader = document.querySelector('#services-header')
let form = document.querySelector('#products-form')
SectionHeading = document.createElement('h2')
let productSelected = ''
let categorias = document.querySelector('#categorias')
let todos = document.querySelector('#todos-produtos')
let destaques = document.querySelector('#destaques')
let services = document.querySelector('#services')
let servicesUl = document.querySelector('#services-ul')

SectionHeading.textContent = 'Destaques'
productHeader.append(SectionHeading)
form.classList.add('none')
servicesHeader.classList.add('none')
servicesUl.classList.add('none')
const productsChildren = Array.from(productsDiv.children);
productsChildren.forEach(product => {
    productsDiv.removeChild(product);
});
let productsList = []
for (product of destaquesData) {
    productsList.push(product)
}
//ordenar produtos por preço
productsList.sort(sortPrice)
for (product of productsList) {
    //adicionar os produtos na tela
    let newProductSection = document.createElement('section')
    newProductSection.classList.add('product-section')
    newProductSection.width = '50px'
    let newProductImgAnchor = document.createElement('a')
    newProductImgAnchor.classList.add('img-anchor')
    newProductImgAnchor.target = '_blank'
    newProductImgAnchor.href = product.img
    let newProductImg = document.createElement('img')
    newProductImg.src = product.img
    newProductImg.classList.add('product-img')
    newProductImgAnchor.append(newProductImg)
    let newProductName = document.createElement('h2')
    newProductName.textContent = product.name
    newProductName.classList.add('product-name')
    let newProductBio = document.createElement('div')
    newProductBio.classList.add('product-bio')
    let newProductBrand = document.createElement('h3')
    newProductBrand.textContent = 'Marca: ' + product.brand
    newProductBrand.classList.add('product-brand')
    let newProductPrice = document.createElement('h2')
    if (product.falta == true) {
        newProductPrice.textContent = 'EM FALTA'
        newProductSection.style.opacity = 0.85
    }
    else {
        productPrice = product.price.replace('.', ',')
        newProductPrice.textContent = 'R$ ' + productPrice
    }
    newProductPrice.classList.add('product-price')
    newProductBio.append(newProductName, newProductBrand, newProductPrice)
    newProductSection.append(newProductImgAnchor, newProductBio)
    newProductSection.classList.add('animation')
    productsDiv.append(newProductSection)
    productHeader.append(productsDiv)
}

destaques.addEventListener('click', () => {
    SectionHeading.textContent = 'Destaques'
    productHeader.append(SectionHeading)
    form.classList.add('none')
    servicesHeader.classList.add('none')
    servicesUl.classList.add('none')
    const productsChildren = Array.from(productsDiv.children);
    productsChildren.forEach(product => {
        productsDiv.removeChild(product);
    });
    let productsList = []
    for (product of destaquesData) {
        productsList.push(product)
    }
    //ordenar produtos por preço
    productsList.sort(sortPrice)
    for (product of productsList) {
        //adicionar os produtos na tela
        let newProductSection = document.createElement('section')
        newProductSection.classList.add('product-section')
        newProductSection.width = '50px'
        let newProductImgAnchor = document.createElement('a')
        newProductImgAnchor.classList.add('img-anchor')
        newProductImgAnchor.target = '_blank'
        newProductImgAnchor.href = product.img
        let newProductImg = document.createElement('img')
        newProductImg.src = product.img
        newProductImg.classList.add('product-img')
        newProductImgAnchor.append(newProductImg)
        let newProductName = document.createElement('h2')
        newProductName.textContent = product.name
        newProductName.classList.add('product-name')
        let newProductBio = document.createElement('div')
        newProductBio.classList.add('product-bio')
        let newProductBrand = document.createElement('h3')
        newProductBrand.textContent = 'Marca: ' + product.brand
        newProductBrand.classList.add('product-brand')
        let newProductPrice = document.createElement('h2')
        if (product.falta == true) {
            newProductPrice.textContent = 'EM FALTA'
            newProductSection.style.opacity = 0.85
        }
        else {
            productPrice = product.price.replace('.', ',')
            newProductPrice.textContent = 'R$ ' + productPrice
        }
        newProductPrice.classList.add('product-price')
        newProductBio.append(newProductName, newProductBrand, newProductPrice)
        newProductSection.append(newProductImgAnchor, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
    productHeader.scrollIntoView({ behavior: 'smooth' })
})


todos.addEventListener('click', () => {
    form.classList.add('none')
    servicesHeader.classList.add('none')
    servicesUl.classList.add('none')
    SectionHeading.textContent = 'Todos os produtos'
    productHeader.append(SectionHeading)
    const productsChildren = Array.from(productsDiv.children);
    productsChildren.forEach(product => {
        productsDiv.removeChild(product);
    });
    let productsList = []
    for (product of data) {
        productsList.push(product)
    }
    //ordenar produtos por preço
    productsList.sort(sortPrice)
    for (product of productsList) {
        //adicionar os produtos na tela
        let newProductSection = document.createElement('section')
        newProductSection.classList.add('product-section')
        newProductSection.width = '50px'
        let newProductImgAnchor = document.createElement('a')
        newProductImgAnchor.classList.add('img-anchor')
        newProductImgAnchor.target = '_blank'
        newProductImgAnchor.href = product.img
        let newProductImg = document.createElement('img')
        newProductImg.src = product.img
        newProductImg.classList.add('product-img')
        newProductImgAnchor.append(newProductImg)
        let newProductName = document.createElement('h2')
        newProductName.textContent = product.name
        newProductName.classList.add('product-name')
        let newProductBio = document.createElement('div')
        newProductBio.classList.add('product-bio')
        let newProductBrand = document.createElement('h3')
        newProductBrand.textContent = 'Marca: ' + product.brand
        newProductBrand.classList.add('product-brand')
        let newProductPrice = document.createElement('h2')
        if (product.falta == true) {
            newProductPrice.textContent = 'EM FALTA'
            newProductSection.style.opacity = 0.5
        }
        else {
            productPrice = product.price.replace('.', ',')
            newProductPrice.textContent = 'R$ ' + productPrice
        }
        newProductPrice.classList.add('product-price')
        newProductBio.append(newProductName, newProductBrand, newProductPrice)
        newProductSection.append(newProductImgAnchor, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
    productHeader.scrollIntoView({ behavior: 'smooth' })
})

categorias.addEventListener('click', () => {
    servicesHeader.classList.add('none')
    servicesUl.classList.add('none')
    SectionHeading.textContent = ''
    for (product of productsDiv.children) {
        productsDiv.remove(product)
    }
    form.classList.toggle('none')
})

services.addEventListener('click', () => {
    const productsChildren = Array.from(productsDiv.children);
    productsChildren.forEach(product => {
        productsDiv.removeChild(product);
    });
    SectionHeading.textContent = ''
    productHeader.append(SectionHeading)
    form.classList.add('none')
    servicesUl.classList.toggle('none')
    servicesHeader.classList.toggle('none')
})

form.addEventListener('click', () => {
    for (productLabel of form) {
        if (productSelected === productLabel.value) { }
        //procurar qual produto foi clicado
        else if (productLabel.checked === true) {
            productsDiv.innerHTML = ''
            productHeader.innerHTML = ''
            productSelected = productLabel.value
            //adicionar heading
            SectionHeading.textContent = productLabel.id.replaceAll('-', ' ')
            productHeader.append(SectionHeading)
            productsList = []
            for (product of data) {
                //filtrar os produtos da database
                if (product.type == productSelected) {
                    productsList.push(product)
                }
            }
            //ordenar produtos por preço
            productsList.sort(sortPrice)
            for (product of productsList) {
                //adicionar os produtos na tela
                let newProductSection = document.createElement('section')
                newProductSection.classList.add('product-section')
                newProductSection.width = '50px'
                let newProductImgAnchor = document.createElement('a')
                newProductImgAnchor.classList.add('img-anchor')
                newProductImgAnchor.target = '_blank'
                newProductImgAnchor.href = product.img
                let newProductImg = document.createElement('img')
                newProductImg.src = product.img
                newProductImg.classList.add('product-img')
                newProductImgAnchor.append(newProductImg)
                let newProductName = document.createElement('h2')
                newProductName.textContent = product.name
                newProductName.classList.add('product-name')
                let newProductBio = document.createElement('div')
                newProductBio.classList.add('product-bio')
                let newProductBrand = document.createElement('h3')
                newProductBrand.textContent = 'Marca: ' + product.brand
                newProductBrand.classList.add('product-brand')
                let newProductPrice = document.createElement('h2')
                if (product.falta == true) {
                    newProductPrice.textContent = 'EM FALTA'
                    newProductSection.style.opacity = 0.5
                }
                else {
                    productPrice = product.price.replace('.', ',')
                    newProductPrice.textContent = 'R$ ' + productPrice
                }
                newProductPrice.classList.add('product-price')
                newProductBio.append(newProductName, newProductBrand, newProductPrice)
                newProductSection.append(newProductImgAnchor, newProductBio)
                newProductSection.classList.add('animation')
                productsDiv.append(newProductSection)
                productHeader.append(productsDiv)
            }
            productHeader.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
)


function sortPrice(a, b) {
    return a.price - b.price;
}
