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

starter()

var catalogoSuperior = document.getElementById('catalogo-superior');

  // Obtém a posição inicial do elemento
  var posicaoInicial = catalogoSuperior.offsetTop;

  // Adiciona um ouvinte de evento de rolagem
  window.addEventListener('scroll', function() {
    // Obtém a posição atual de rolagem
    var posicaoAtual = window.pageYOffset;

    var alturaElemento = catalogoSuperior.offsetHeight;
    // Verifica se a posição de rolagem ultrapassou a posição inicial do elemento
    if (posicaoAtual >= posicaoInicial) {
      // Adiciona a classe "sticky" ao elemento para destacá-lo
      catalogoSuperior.classList.add('sticky');
      productsDiv.classList.add('down')
      form.classList.add('down')
    } else {
      // Remove a classe "sticky" se a posição de rolagem for anterior à posição inicial
      catalogoSuperior.classList.remove('sticky');
      productsDiv.classList.remove('down')
      form.classList.remove('down')
    }
  });
  

destaques.addEventListener('click', () => {
    categorias.classList.remove('chosen')
    destaques.classList.add('chosen')
    services.classList.remove('chosen')
    todos.classList.remove('chosen')
    SectionHeading.textContent = ''
    productHeader.append(SectionHeading)
    form.classList.add('none')
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
        newProductBrand.textContent = 'Marca: ' + product.brand.toUpperCase()
        newProductBrand.classList.add('product-brand')
        let newProductFalta = document.createElement('h2')
        if (product.falta == true) {
            newProductFalta.textContent = 'EM FALTA'
            newProductSection.style.opacity = 0.85
        }
        newProductFalta.classList.add('product-falta')
        newProductBio.append(newProductName, newProductBrand, newProductFalta)
        newProductSection.append(newProductImgAnchor, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
    productHeader.scrollIntoView({ behavior: 'smooth' })
})


todos.addEventListener('click', () => {
    categorias.classList.remove('chosen')
    destaques.classList.remove('chosen')
    services.classList.remove('chosen')
    todos.classList.add('chosen')
    form.classList.add('none')
    SectionHeading.textContent = ''
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
        newProductBrand.textContent = 'Marca: ' + product.brand.toUpperCase()
        newProductBrand.classList.add('product-brand')
        let newProductFalta = document.createElement('h2')
        if (product.falta == true) {
            newProductFalta.textContent = 'EM FALTA'
            newProductSection.style.opacity = 0.5
        }
        newProductFalta.classList.add('product-falta')
        newProductBio.append(newProductName, newProductBrand, newProductFalta)
        newProductSection.append(newProductImgAnchor, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
    productHeader.scrollIntoView({behavior:'smooth'})
})

categorias.addEventListener('click', () => {
    categorias.classList.add('chosen')
    destaques.classList.remove('chosen')
    services.classList.remove('chosen')
    todos.classList.remove('chosen')
    SectionHeading.textContent = ''
    for (product of productsDiv.children) {
        productsDiv.remove(product)
    }
    form.classList.remove('none')
    form.scrollIntoView({behavior: 'smooth'})
})

services.addEventListener('click', () => {
    categorias.classList.remove('chosen')
    destaques.classList.remove('chosen')
    services.classList.add('chosen')
    todos.classList.remove('chosen')
    const productsChildren = Array.from(productsDiv.children);
    productsChildren.forEach(product => {
        productsDiv.removeChild(product);
    });
    SectionHeading.textContent = ''
    productHeader.append(SectionHeading)
    form.classList.add('none')
    let productsList = []
    for (product of servicesData) {
        productsList.push(product)
    }
    //ordenar produtos por preço
    productsList.sort(sortPrice)
    for (product of productsList) {
        //adicionar os produtos na tela
        let newProductSection = document.createElement('section')
        newProductSection.classList.add('product-section')
        newProductSection.style.flexDirection = 'column'
        newProductSection.width = '50px'
        let newProductImg = document.createElement('img')
        newProductImg.src = product.img
        newProductImg.classList.add('product-img')
        newProductImg.style.width = '90%'
        newProductImg.style.height = '90%'
        let newProductName = document.createElement('h2')
        newProductName.textContent = product.name
        newProductName.classList.add('product-name')
        let newProductBio = document.createElement('div')
        newProductBio.classList.add('product-bio')
        newProductBio.append(newProductName )
        newProductSection.append(newProductImg, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
    productHeader.scrollIntoView({behavior:'smooth'})
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
                if (product.type.includes(productSelected)) {
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
                newProductBrand.textContent = 'Marca: ' + product.brand.toUpperCase()
                newProductBrand.classList.add('product-brand')
                let newProductFalta = document.createElement('h2')
                if (product.falta == true) {
                    newProductFalta.textContent = 'EM FALTA'
                    newProductSection.style.opacity = 0.5
                }
                newProductFalta.classList.add('product-falta')
                newProductBio.append(newProductName, newProductBrand, newProductFalta)
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

function starter() {
    categorias.classList.remove('chosen')
    destaques.classList.add('chosen')
    services.classList.remove('chosen')
    todos.classList.remove('chosen')
    SectionHeading.textContent = ''
    productHeader.append(SectionHeading)
    form.classList.add('none')
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
        newProductBrand.textContent = 'Marca: ' + product.brand.toUpperCase()
        newProductBrand.classList.add('product-brand')
        let newProductFalta = document.createElement('h2')  
        if (product.falta == true) {
            newProductFalta.textContent = 'EM FALTA'
            newProductSection.style.opacity = 0.85
        }
        newProductFalta.classList.add('product-falta')
        newProductBio.append(newProductName, newProductBrand, newProductFalta)
        newProductSection.append(newProductImgAnchor, newProductBio)
        newProductSection.classList.add('animation')
        productsDiv.append(newProductSection)
        productHeader.append(productsDiv)
    }
}
function sortPrice(a, b) {
    return a.price - b.price;
}
