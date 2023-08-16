productsDiv = document.querySelector('#products')
productHeader = document.querySelector('#product-header')
form = document.querySelector('#products-form')
let productSelected = ''



form.addEventListener('click', () => {
    productsDiv.innerHTML = ''
    productHeader.innerHTML = ''
    for (productLabel of form) {
        if (productLabel.checked === true) {
            productSelected = productLabel.value
            SectionHeading = document.createElement('h2')
            SectionHeading.textContent = productSelected.toUpperCase()
            productHeader.append(SectionHeading)
            for (product of data) {
                // filtrar os produtos
                if (product.type == productSelected) {
                    //adicionar os filtrados na tela
                    newProductSection = document.createElement('section')
                    newProductSection.classList.add('product-section')
                    newProductImg = document.createElement('img')
                    newProductImg.src = product.img
                    newProductImg.classList.add('product-img')
                    newProductName = document.createElement('h3')
                    newProductName.textContent = product.name
                    newProductSection.append(newProductImg, newProductName)
                    newProductSection.classList.add('animation')
                    productsDiv.append(newProductSection)
                }
            }
        }
    }
})