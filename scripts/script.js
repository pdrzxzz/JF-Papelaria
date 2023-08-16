productsDiv = document.querySelector('#products')
productHeader = document.querySelector('#product-header')
form = document.querySelector('#products-form')
let productSelected = ''


form.addEventListener('click', () => {
    productsDiv.innerHTML = ''
    productHeader.innerHTML = ''
    for (productLabel of form) {
        //procurar qual produto foi clicado
        if (productLabel.checked === true) {
            productSelected = productLabel.value
            //adicionar heading
            SectionHeading = document.createElement('h2')
            SectionHeading.textContent = productLabel.id.replaceAll('-', ' ')
            SectionHeading.classList.add('section-heading')
            productHeader.append(SectionHeading)
            for (product of data) {
                //filtrar os produtos da database
                if (product.type == productSelected) {
                    //adicionar os filtrados na tela
                    newProductSection = document.createElement('section')
                    newProductSection.classList.add('product-section')
                    newProductSection.width = '50px'
                    newProductImgAnchor = document.createElement('a')
                    newProductImgAnchor.classList.add('img-anchor')
                    newProductImgAnchor.target = '_blank'
                    newProductImgAnchor.href = product.img
                    newProductImg = document.createElement('img')
                    newProductImg.src = product.img
                    newProductImg.classList.add('product-img')
                    newProductImgAnchor.append(newProductImg)
                    newProductName = document.createElement('h3')
                    newProductName.textContent = product.name
                    newProductName.classList.add('product-name')
                    newProductPrice = document.createElement('h4')
                    newProductPrice.textContent = 'R$ ' + product.price
                    newProductPrice.classList.add('product-price')
                    newProductSection.addEventListener('click', grow)
                    newProductSection.append(newProductImgAnchor, newProductName, newProductPrice)
                    newProductSection.classList.add('animation')
                    productsDiv.append(newProductSection)
                    productHeader.append(productsDiv)
                }
            }
        }
    }
})

function grow() {
    console.log('a')
}