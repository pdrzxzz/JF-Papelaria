productsDiv = document.querySelector('#products')
productHeader = document.querySelector('#product-header')
form = document.querySelector('#products-form')
carrinho = document.querySelector('#carrinho')
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
                let newProductBrand = document.createElement('h3')
                newProductBrand.textContent = 'Marca: ' + product.brand
                newProductBrand.classList.add('product-brand')
                let newProductPrice = document.createElement('h2')
                let arrowDown = document.createElement('img')
                arrowDown.src = 'logo/arrow-down.png'; arrowDown.classList.add('arrow-down')
                let arrowUp = document.createElement('img')
                arrowUp.src = 'logo/arrow-up.png'; arrowUp.classList.add('arrow-up')
                let newBuyCount = document.createElement('input')
                newBuyCount.type = 'number'; newBuyCount.id = 'number-count', newBuyCount.value = '1'
                let counterSection = document.createElement('div')
                counterSection.classList.add('counter-section')
                let newBuyButton = document.createElement('div');
                newBuyButton.classList.add('buy-button');
                newBuyButton.textContent = 'Adicionar ao carrinho';
                arrowUp.addEventListener('click', () => increaseNumber(product, newBuyCount))
                arrowDown.addEventListener('click', () => decreaseNumber(product, newBuyCount))
                newBuyButton.addEventListener('click', addCarrinho(product, newBuyCount));

                if (product.falta == true) {
                    newProductPrice.textContent = 'EM FALTA'
                    newProductSection.style.opacity = 0.5
                }
                else {
                    newProductPrice.textContent = 'R$ ' + product.price
                }
                newProductPrice.classList.add('product-price')
                counterSection.append(arrowDown, newBuyCount, arrowUp)
                newProductSection.append(newProductImgAnchor, newProductName, newProductBrand, newProductPrice, counterSection, newBuyButton)
                newProductSection.classList.add('animation')
                productsDiv.append(newProductSection)
                productHeader.append(productsDiv)
            }
        }
    }
}
)

let total = 0
let totalTracker = document.createElement('span')
totalTracker.id = 'total-tracker'
let copyButton = document.createElement('div')
copyButton.id = 'copy-button'
let carrinhoInfo = document.createElement('span')
carrinhoInfo.id = 'carrinho-info'
let liDiv = document.createElement('div')
liDiv.id = 'li-div'
let productTotal = 0
function addCarrinho(product, newBuyCount) {
    return function () {
        const number = parseInt(newBuyCount.value)
        for (let i = 0; i < number; i++) {
            if (!carrinho.querySelector('li')) {
                product.quantity = 1;
                total += parseFloat(product.price)
                total = total.toFixed(2)
                newLi = document.createElement('li')
                newLi.classList.add('new-item')
                newLi.innerHTML = `x${product.quantity} ${product.name} | <b>R$${product.price}</b>`;
                carrinhoInfo.textContent = 'Você pode copiar o conteúdo do seu carrinho e nos mandar via Whatsapp. Se a página for recarregada, o carrinho se esvaziará.'
                totalTracker.textContent = `Total: R$${total}`
                copyButton.textContent = 'Copiar'
                liDiv.append(newLi)
                carrinho.append(liDiv, totalTracker, copyButton, carrinhoInfo)
            }
            else {
                //checar se o produto já está no carrinho
                if (carrinho.textContent.includes(product.name)) {
                    total = parseFloat(total)
                    product.quantity += 1
                    productTotal = (product.quantity * parseFloat(product.price)).toFixed(2)
                    total += parseFloat(product.price)
                    total = total.toFixed(2)
                    for (li of carrinho.children) {
                        if (li.textContent.includes(product.name)) {
                            li.textContent = ''
                            li.innerHTML += `x${product.quantity} ${product.name} | R$${product.price} * ${product.quantity} = <b>R$${productTotal}</b>`;
                        }
                    }
                    totalTracker.textContent = `Total: R$${total}`
                }
                else {
                    total = parseFloat(total)
                    product.quantity = 1
                    total += parseFloat(product.price)
                    total = total.toFixed(2)
                    newLi = document.createElement('li')
                    newLi.classList.add('new-item')
                    newLi.innerHTML = `x${product.quantity} ${product.name} | <b>R$${product.price}</b>`;
                    liDiv.append(newLi)
                    carrinho.append(liDiv)
                    totalTracker.textContent = `Total: R$${total}`
                }
            };
        }
    }
}

function sortPrice(a, b) {
    return a.price - b.price;
}

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(formatarCarrinho(carrinho.textContent))
    copyButton.textContent = 'Copiado! :)'
    setTimeout(() => {
        copyButton.textContent = 'Copiar'
    }, 1250)
})

function formatarCarrinho(text) {
    let newText = text.replace(/x/g, '\nx');
    newText = newText.replace(totalTracker.textContent, '')
    newText = newText.replace(copyButton.textContent, '')
    newText = newText.replace(carrinhoInfo.textContent, '')
    newText = newText + `\n\n${totalTracker.textContent}`
    return newText;
}

function increaseNumber(product, newBuyCount) {
    newBuyCount.value = parseInt(newBuyCount.value) + 1;
}

function decreaseNumber(product, newBuyCount) {
    let number = parseInt(newBuyCount.value);
    if (number > 1) {
        newBuyCount.value = number - 1;
    }
}

