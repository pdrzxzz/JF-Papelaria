// todos os dados de produtos existentes
const data = [
    //almofadas
    {
        img: "./images/almofada-para-carimbo-radex.jpg",
        name: "Almofadas Para Carimbo",
        brand: 'Radex',
        type: "almofadas",
        price: '4.95',
        falta: false,
    },
    //agendas
    {
        img: "./images/agenda-pepper.webp",
        name: "Agenda Costurada Pepper M4 160fls 2023",
        brand: 'Tilibra',
        type: "agendas",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/agenda-pratika-master.webp",
        name: "Agenda Costurada Pratika Master M4 176fls 2023",
        brand: 'Tilibra',
        type: "agendas",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/agenda-napoli.webp",
        name: "Agenda Costurada Napoli M5 176fls 2023",
        brand: 'Tilibra',
        type: "agendas",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/agenda-infantil.jpg",
        name: "Agenda Escolar Infantil 96fls",
        brand: 'Foroni',
        type: "agendas",
        price: '14.95',
        falta: false,
    },
    {
        img: "./images/agenda-espiral-d+.jfif",
        name: "Agenda Espiral Diária D+ 2023",
        brand: 'Tilibra',
        type: "agendas",
        price: '19.95',
        falta: false,
    },

    //apagadores
    {
        img: "./images/apagador-para-quadro-branco.webp",
        name: "Apagador Básico Preto",
        brand: 'Radex',
        type: "apagadores",
        price: '11.95',
        falta: false,
    },
    {
        img: "./images/apagador-formato-mouse.jpg",
        name: "Apagador Magnético em Formato de Mouse",
        brand: 'Radex',
        type: "apagadores",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/limpador-de-quadro-branco.webp",
        name: "Limpador de Quadro Branco Spray",
        brand: 'Radex',
        type: "apagadoresca",
        price: '24.95',
        falta: false,
    },
    //apontadores
    {
        img: "./images/apontador-metal-onda.webp",
        name: "Apontador de Metal",
        brand: 'Onda',
        type: "apontadores",
        price: '1.95',
        falta: false,
    },
    {
        img: "./images/apontador-plástico-pequeno.jpg",
        name: "Apontador Depósito de Plástico",
        brand: 'Onda',
        type: "apontadores",
        price: '3.95',
        falta: true,
    },
    {
        img: "./images/apontador-oval-onda.jpg",
        name: "Apontador Depósito Oval de Plástico",
        brand: 'Onda',
        type: "apontadores",
        price: '4.95',
        falta: false,
    },
    {
        img: "./images/apontador-batman.webp",
        name: "Apontador Batman",
        brand: 'Tris',
        type: "apontadores",
        price: '7.95',
        falta: false,
    },
    {
        img: "./images/apontador-barbie.webp",
        name: "Apontador Barbie",
        brand: 'Tris',
        type: "apontadores",
        price: '7.95',
        falta: false,
    },
    {
        img: "./images/apontador-naruto.webp",
        name: "Apontador Naruto",
        brand: 'Tris',
        type: "apontadores",
        price: '7.95',
        falta: false,
    },
    //aquarela 
    {
        img: "./images/aquarela-onda.jpg",
        name: "Estojo Tinta Aquarela 12 cores + Pincel",
        brand: 'Onda',
        type: "aquarela",
        price: '11.95',
        falta: false,
    },
    //bingo
    {
        img: "./images/bingo-sidgraph.jpg",
        name: "Cartela de Bingo 100fl",
        brand: 'Sidgraph',
        type: "bingo",
        price: '5.95',
        falta: false,
    },
    //bobinas
    {
        img: "./images/bobina-80-40-48.webp",
        name: "Bobina 80mm x 40m x 48g",
        brand: 'Silfer',
        type: "bobinas",
        price: '6.95',
        falta: false,
    },
    {
        img: "./images/bobina-57-22.webp",
        name: "Bobina 57mm x 22m",
        brand: 'Rio branco',
        type: "bobinas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/bobina-57-300-48.webp",
        name: "Bobina 57mm x 300m x 48g",
        brand: 'Rio branco',
        type: "bobinas",
        price: '44.95',
        falta: false,
    },
    {
        img: "./images/bobina-57-30.jpg",
        name: "Bobina 57mm x 30m",
        brand: 'Silfer',
        type: "bobinas",
        price: '3.95',
        falta: false,
    },
    //borrachas
    {
        img: "./images/borracha-redbor.webp",
        name: "Borracha Bicolor AV40",
        brand: 'Red-bor',
        type: "borrachas",
        price: '1.95',
        falta: false,
    },
    {
        img: "./images/borracha-leoeleo.webp",
        name: "Borracha Colorida",
        brand: 'Leo & Leo',
        type: "borrachas",
        price: '2.95',
        falta: false,
    },
    {
        img: "./images/borracha-bic.webp",
        name: "Borracha Branca com Capa",
        brand: 'Bic',
        type: "borrachas",
        price: '2.95',
        falta: false,
    },
    {
        img: "./images/borracha-onda.webp",
        name: "Borracha Neon com Capa",
        brand: 'Onda',
        type: "borrachas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/borracha-neon-brw.webp",
        name: "Borracha Neon com Capa",
        brand: 'Brw',
        type: "borrachas",
        price: '2.95',
        falta: false,
    },
    {
        img: "./images/borracha-faber-glitz.webp",
        name: "Borracha Max Glitz",
        brand: 'Fabber-Castell',
        type: "borrachas",
        price: '5.95',
        falta: false,
    },
    {
        img: "./images/borracha-maped-shakky.webp",
        name: "Borracha Shakky Bichinhos c/2",
        brand: 'Maped',
        type: "borrachas",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/borracha-branca-leoeleo.jpg",
        name: "Borracha branca com Capa Verde",
        brand: 'Leo & Leo',
        type: "borrachas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/borracha-mercur-big.webp",
        name: "Borracha Branca Big com Capa Preta",
        brand: 'Mercur',
        type: "borrachas",
        price: '5.95',
        falta: false,
    },
    //caixa de som
    {
        img: "./images/caixa-de-som-multilaser.jpg",
        name: "Caixa de Som Multimídia 3WRMS",
        brand: 'Multilaser',
        type: "caixa-de-som",
        price: '39.95',
        falta: false,
    },
    //caligrafia
    {
        img: "./images/aprendendo-a-escrever.webp",
        name: "Livro Aprendendo a Escrever",
        brand: 'Baag',
        type: "caligrafia",
        price: '29.95',
        falta: false,
    },
    {
        img: "./images/amo-meu-abc.webp",
        name: "Livro Eu Amo Meu ABC",
        brand: 'Baag',
        type: "caligrafia",
        price: '5.95',
        falta: false,
    },
    //calculadoras
    {
        img: "./images/calculadora-brw.jpg",
        name: "Calculadora Eletrônica de Mesa 12 Dígitos",
        brand: 'Brw',
        type: "calculadoras",
        price: '29.95',
        falta: false,
    },
    {
        img: "./images/calculadora-cientifica-casio.webp",
        name: "Calculadora Científica fx-82ms 2nd Edition",
        brand: 'Casio',
        type: "calculadoras",
        price: '89.95',
        falta: false,
    },
    //canetas
    {
        img: "./images/caneta-jet-lux.webp",
        name: "Caneta Jet Lux",
        brand: 'Compactor',
        type: "canetas",
        price: '2.00',
        falta: false,
    },
    {
        img: "./images/kit-metalico-bic.webp",
        name: "Kit Canetas Metálicas",
        brand: 'Bic',
        type: "canetas",
        price: '29.95',
        falta: false,
    },
    {
        img: "./images/caneta-bic-cristal.webp",
        name: "Caneta Cristal 1.0mm",
        brand: 'Bic',
        type: "canetas",
        price: '1.50',
        falta: false,
    },
    {
        img: "./images/caneta-bic-fine.webp",
        name: "Caneta Fine 0.8mm",
        brand: 'Bic',
        type: "canetas",
        price: '1.50',
        falta: false,
    },
    {
        img: "./images/caneta-compactor.webp",
        name: "Caneta 0.7mm",
        brand: 'Compactor',
        type: "canetas",
        price: '1.50',
        falta: false,
    },
    {
        img: "./images/caneta-fabber.webp",
        name: "Caneta 1.0mm",
        brand: 'Fabber-Castell',
        type: "canetas",
        price: '1.50',
        falta: false,
    },
    {
        img: "./images/caneta-bic-bold.webp",
        name: "Caneta Bold Intenso 1.6mm",
        brand: 'Bic',
        type: "canetas",
        price: '2.95',
        falta: false,
    },
    {
        img: "./images/caneta-bic-ultrafine.webp",
        name: "Caneta Ultra Fine 0.7mm",
        brand: 'Bic',
        type: "canetas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/caneta-spiro.webp",
        name: "Caneta Spiro 0.7mm",
        brand: 'Cis',
        type: "canetas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/caneta-pilot-bp-1.webp",
        name: "Caneta BP-1 1.0mm",
        brand: 'Pilot',
        type: "canetas",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/caneta-bic-4-cores.webp",
        name: "Caneta 4 cores 1.0mm",
        brand: 'Bic',
        type: "canetas",
        price: '9.95',  
        falta: false,
    },
    {
        img: "./images/caneta-4-cores-capricho.webp",
        name: "Caneta 4 cores Rosa 1.0mm",
        brand: 'Capricho',
        type: "canetas",
        price: '12.95',
        falta: false,
    },
    {
        img: "./images/kit-4-canetas-bic-cores.webp",
        name: "Canetas coloridas 1.2mm c/4",
        brand: 'Bic',
        type: "canetas",
        price: '7.95',
        falta: false,
    },
    {
        img: "./images/kit-10-canetas-bic-cores.webp",
        name: "Canetas coloridas 1.2mm c/10",
        brand: 'Bic',
        type: "canetas",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/caneta-pilot-bp-s.webp",
        name: "Caneta BP-S 0.7mm",
        brand: 'Pilot',
        type: "canetas",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/caneta-pilot-bps-grip.webp",
        name: "Caneta BPS Grip 1.0mm",
        brand: 'Pilot',
        type: "canetas",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/caneta-onda-pro-neon.webp",
        name: "Caneta em Gel Neon",
        brand: 'Onda',
        type: "canetas",
        price: '4.95',
        falta: false,
    },
    //colas
    {
        img: "./images/cola-isopor-pira-80g.png",
        name: "Cola para Isopor Escolar 80g",
        brand: 'Piratininga',
        type: "colas",
        price: '5.95',
        falta: false,
    },
    {
        img: "./images/cola-bastao-scotch-40g.jpg",
        name: "Cola bastão scotch 40g",
        brand: '3M',
        type: "colas",
        price: '14.95',
        falta: false,
    },
    {
        img: "./images/cola-bastao-scotch-20g.webp",
        name: "Cola bastão scotch 20g",
        brand: '3M',
        type: "colas",
        price: '0.0',
        falta: false,
    },
    {
        img: "./images/cola-bastao-scotch-8g.jpeg",
        name: "Cola bastão scotch 8g",
        brand: '3M',
        type: "colas",
        price: '4.95',
        falta: false,
    },
    {
        img: "./images/cola-branca-pira-40g.webp",
        name: "Cola Branca Escolar 40g",
        brand: 'Piratininga',
        type: "colas",
        price: '2.95',
        falta: false,
    },
    {
        img: "./images/cola-branca-pira-90g.webp",
        name: "Cola Branca Escolar 90g",
        brand: 'Piratininga',
        type: "colas",
        price: '3.95',
        falta: false,
    },
    //compassos
    {
        img: "./images/compasso-tris.jfif",
        name: "Compasso Escolar SU123",
        brand: 'Tris',
        type: "compassos",
        price: '11.95',
        falta: false,
    },
    {
        img: "./images/compasso-onda.webp",
        name: "Compasso Escolar Metal",
        brand: 'Onda',
        type: "compassos",
        price: '9.95',
        falta: false,
    },
    //corretivos
    {
        img: "./images/corretivo-bic-ecolutions.jpg",
        name: "Corretivo Líquido ECOlutions 18ml",
        brand: 'Bic',
        type: "corretivos",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/corretivo-toque-magico.webp",
        name: "Corretivo Líquido 18ml",
        brand: 'Toque mágico',
        type: "corretivos",
        price: '6.95',
        falta: false,
    },
    {
        img: "./images/corretivo-fita-radex.jpg",
        name: "Corretivo em Fita 6mx5mm",
        brand: 'Radex',
        type: "corretivos",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/corretivo-fita-mercur.webp",
        name: "Corretivo em Fita 12mx4,2mm",
        brand: 'Mercur',
        type: "corretivos",
        price: '17.95',
        falta: false,
    },
    {
        img: "./images/corretivo-fita-onda.webp",
        name: "Corretivo em Fita 6mx5mm",
        brand: 'Onda',
        type: "corretivos",
        price: '9.95    ',
        falta: false,
    },
    {
        img: "./images/caneta-corretiva-radex.webp",
        name: "Caneta Corretiva",
        brand: 'Radex',
        type: "corretivos",
        price: '9.95',
        falta: false,
    },
    //dicionários
    {
        img: "./images/mini-dicionario-espanhol-scottini.webp",
        name: "Minidicionário Scottini Espanhol",
        brand: 'Todolivro',
        type: "dicionarios",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/mini-dicionario-portugues-scottini.webp",
        name: "Minidicionário Scottini Língua Portuguesa",
        brand: 'Todolivro',
        type: "dicionarios",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/mini-dicionario-ingles-scottini.webp",
        name: "Minidicionário Scottini Inglês",
        brand: 'Todolivro',
        type: "dicionarios",
        price: '9.95',
        falta: false,
    },
    //elásticos
    {
        img: "./images/elastico-redbor-60.jpg",
        name: "Elásticos c/60",
        brand: 'Redbor',
        type: "elasticos",
        price: '3.95',
        falta: false,
    },
    {
        img: "./images/elastico-mercur-60.jpg",
        name: "Elásticos c/60",
        brand: 'Mercur',
        type: "elasticos",
        price: '7.95',
        falta: false,
    },
    {
        img: "./images/elastico-mercur-120.webp",
        name: "Elásticos c/120",
        brand: 'Mercur',
        type: "elasticos",
        price: '14.95',
        falta: false,
    },
    {
        img: "./images/elastico-mercur-1200.jpg",
        name: "Elásticos c/1200",
        brand: 'Mercur',
        type: "elasticos",
        price: '59.95',
        falta: false,
    },
    {
        img: "./images/elastico-mercur-2200.jpg",
        name: "Elásticos c/2200",
        brand: 'Mercur',
        type: "elasticos",
        price: '99.95',
        falta: false,
    },
    //emborrachados
    {
        img: "./images/eva-liso.webp",
        name: "Emborrachado Liso 40x48cm",
        brand: 'Pendente',
        type: "emborrachados",
        price: '3.00',
        falta: false,
    },
    {
        img: "./images/eva-com-glitter.webp",
        name: "Emborrachado com Glitter 40x48cm",
        brand: 'Pendente',
        type: "emborrachados",
        price: '7.00',
        falta: false,
    },
    //extrator
    {
        img: "./images/extrator-chaparrau.jpg",
        name: "Extrator de Grampos Aço Inoxidável",
        brand: 'chaparrau',
        type: "extrator",
        price: '4.95',
        falta: false,
    },
    //grampos
    {
        img: "./images/grampo-2313.jpg",
        name: "Grampos 23/13 c/1000",
        brand: 'Acc',
        type: "grampos",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/grampo-frama.webp",
        name: "Grampos 26/6 c/5000",
        brand: 'Frama',
        type: "grampos",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/grampo-onda.webp",
        name: "Grampos 26/6 c/5000",
        brand: 'Onda',
        type: "grampos",
        price: '8.95',
        falta: false,
    },
    {
        img: "./images/grampo-masterprint.webp",
        name: "Grampos 26/6 c/5000",
        brand: 'Masterprint',
        type: "grampos",
        price: '9.95',
        falta: false,
    },
    //lápis
    {
        img: "./images/lapis-serelepe.jpg",
        name: "Lápis Preto N2",
        brand: 'Serelepe',
        type: "lapis",
        price: '0.75',
        falta: false,
    },
    {
        img: "./images/lapis-serelepe-caixa.webp",
        name: "Caixa de Lápis Preto N2 c/144",
        brand: 'Serelepe',
        type: "lapis",
        price: '59.95',
        falta: false,
    },
    {
        img: "./images/lapis-onda-caixa.webp",
        name: "Caixa de Lápis Preto N2 c/144",
        brand: 'onda',
        type: "lapis",
        price: '59.95',
        falta: false,
    },
    {
        img: "./images/lapis-bic-evolution.jpg",
        name: "Lápis Preto Evolution HB2",
        brand: 'Bic',
        type: "lapis",
        price: '1.00',
        falta: false,
    },
    //lapis de cor
        {
        img: "./images/lapis-de-cor-faber-castell.webp",
        name: "Ecolápis de Cor Sextavado c/36",
        brand: 'Faber-Castell',
        type: "lapis-de-cor",
        price: '69.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-naruto.jfif",
        name: "Lápis de Cor Naruto Shippudden c/12",
        brand: 'Viz',
        type: "lapis-de-cor",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-barbie.webp",
        name: "Lápis de Cor Barbie c/12",
        brand: 'Tris',
        type: "lapis-de-cor",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-batman.webp",
        name: "Lápis de Cor Batman c/12",
        brand: 'Tris',
        type: "lapis-de-cor",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-tons-de-pele-tris.webp",
        name: "Lápis de Cor Tons de Pele c/12",
        brand: 'Tris',
        type: "lapis-de-cor",
        price: '17.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-serelepe.webp",
        name: "Lápis de Cor c/12",
        brand: 'Serelepe',
        type: "lapis-de-cor",
        price: '8.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-onda-12.webp",
        name: "Lápis de Cor Sextavado c/12",
        brand: 'Onda',
        type: "lapis-de-cor",
        price: '8.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-leo&leo.webp",
        name: "Lápis de Cor Redondo c/12",
        brand: 'Leo&Leo',
        type: "lapis-de-cor",
        price: '8.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-onda-24.jpg",
        name: "Lápis de Cor Redondo c/24",
        brand: 'Onda',
        type: "lapis-de-cor",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/lapis-de-cor-onda-big.webp",
        name: "Lápis de Cor BIG triangular c/12",
        brand: 'Onda',
        type: "lapis-de-cor",
        price: '19.95',
        falta: false,
    },
    
    //marca-textos
    {
        img: "./images/marca-texto-pastel-bic.jpg",
        name: "Marca-texto Pastel c/4",
        brand: 'Bic',
        type: "marca-textos",
        price: '14.95',
        falta: false,
    },
    {
        img: "./images/marca-texto-neon-keep.jpg",
        name: "Marca-texto Neon c/4",
        brand: 'Keep',
        type: "marca-textos",
        price: '14.95',
        falta: false,
    },
    //marcador quadro branco
    {
        img: "./images/tinta-marcador-quadro-500ml.webp",
        name: "Tinta para Marcador de Quadro 500ml",
        brand: 'Radex',
        type: "marcador-para-quadro-branco",
        price: '99.95',
        falta: false,
    },
    {
        img: "./images/tinta-marcador-quadro-40ml.webp",
        name: "Tinta para Marcador de Quadro 40ml",
        brand: 'Radex',
        type: "marcador-para-quadro-branco",
        price: '14.95',
        falta: false,
    },
    {
        img: "./images/marcador-quadro-pilot.jpg",
        name: "Marcador WBM-7 Recarregável",
        brand: 'Pilot',
        type: "marcador-para-quadro-branco",
        price: '8.95',
        falta: false,
    },
    {
        img: "./images/marcador-quadro-vboard.jpg",
        name: "Marcador Vboard Master Recarregável",
        brand: 'Pilot',
        type: "marcador-para-quadro-branco",
        price: '12.95',
        falta: false,
    },
    {
        img: "./images/marcador-quadro-keep.webp",
        name: "Marcador Easy Azul",
        brand: 'keep',
        type: "marcador-para-quadro-branco",
        price: '4.95',
        falta: false,
    },
    {
        img: "./images/cartucho-vboard.webp",
        name: "Cartucho de tinta Vboard Master",
        brand: 'Pilot',
        type: "marcador-para-quadro-branco",
        price: '5.95',
        falta: false,
    },
    //mouses
    {
        img: "./images/mouse-com-fio.webp",
        name: "Mouse Óptico com Fio 1200dpi",
        brand: 'Multilaser',
        type: "mouses",
        price: '19.95',
        falta: false,
    },
    {
        img: "./images/mouse-sem-fio.webp",
        name: "Mouse Sem Fio 1200dpi",
        brand: 'Multilaser',
        type: "mouses",
        price: '39.95',
        falta: false,
    },
    //mouse pads
    {
        img: "./images/mouse-pad-multilaser-slim.webp",
        name: "Mouse Pad Slim",
        brand: 'Multilaser',
        type: "mouse-pads",
        price: '8.95',
        falta: true,
    },
    {
        img: "./images/mouse-pad-multilaser-ergonomico.webp",
        name: "Mouse pad Ergonômico com Apoio Gel",
        brand: 'Multilaser',
        type: "mouse-pads",
        price: '29.95?',
        falta: false,
    },
    //papel fotográfico
    {
        img: "./images/papel-foto-nexel-20fl.webp",
        name: "Papel Fotográfico 180gr 20fl",
        brand: 'Nexel',
        type: "papel-fotografico",
        price: '12.00',
        falta: false,
    },
    {
        img: "./images/papel-foto-nexel-50fl.webp",
        name: "Papel Fotográfico 180gr 50fl",
        brand: 'Nexel',
        type: "papel-fotografico",
        price: '25.00',
        falta: false,
    },
    {
        img: "./images/papel-foto-adesivo-nexel-20fl.webp",
        name: "Papel Fotográfico Adesivo 130gr 20fl",
        brand: 'Nexel',
        type: "papel-fotografico",
        price: '18.00',
        falta: false,
    },
    {
        img: "./images/papel-foto-adesivo-nexel-50fl.webp",
        name: "Papel Fotográfico Adesivo 130gr 50fl",
        brand: 'Nexel',
        type: "papel-fotografico",
        price: '35.00',
        falta: false,
    },
    {
        img: "./images/papel-foto-baag-50fl.webp",
        name: "Papel Fotográfico 135gr 50fl",
        brand: 'Baag',
        type: "papel-fotografico",
        price: '25.00',
        falta: false,
    },
    //flip chart
    {
        img: "./images/flip-chart.jpg",
        name: "Flip Chart",
        brand: 'Mademaster',
        type: "flip-chart",
        price: '149.95',
        falta: false,
    },
    {
        img: "./images/papel-para-flip-chart-stalo.webp",
        name: "Papel para Flip Chart 50fl",
        brand: 'Stalo',
        type: "flip-chart",
        price: '79.95',
        falta: false,
    },
    //perfuradores
    {
        img: "./images/perfurador-alicate-brw.webp",
        name: "Perfurador de Papel Alicate Metálico",
        brand: 'Brw',
        type: "perfuradores",
        price: '14.95',
        falta: false,
    },
    //pilhas e baterias
    {
        img: "./images/pilha-elgin-palito.jpg",
        name: "Pilha Alcalina AAA 2un",
        brand: 'Elgin',
        type: "pilhas",
        price: '6.95',
        falta: false,
    },
    {
        img: "./images/pilha-philips-pequena.png",
        name: "Pilha Alcalina AA 4un",
        brand: 'Philips',
        type: "pilhas",
        price: '9.95',
        falta: false,
    },
    {
        img: "./images/bateria-sonic.webp",
        name: "Bateria 9V",
        brand: 'Elgin',
        type: "pilhas",
        price: '14.95',
        falta: false,
    },
    //teclados
    {
        img: "./images/teclado-multilaser.webp",
        name: "Teclado Básico com Fio USB",
        brand: 'Multilaser',
        type: "teclados",
        price: '49.95',
        falta: false,
    },
    //tintas
    {
        img: "./images/tinta-guache-caixinha.webp",
        name: "Tinta Guache Escolar 15ml c/6",
        brand: 'Piratininga',
        type: "tintas",
        price: '5.95',
        falta: false,
    },
    {
        img: "./images/tinta-para-tecido-acrilex.webp",
        name: "Tinta para Tecido 37ml",
        brand: 'Acrilex',
        type: "tintas",
        price: '5.95',
        falta: false,
    },
    {
        img: "./images/tinta-imp-664.webp",
        name: "Tintas para impressora Epson 664 100ml",
        brand: 'Nexel',
        type: "tintas-imp",
        price: '12.95',
        falta: false,
    },
    {
        img: "./images/tinta-imp-544.jpg",
        name: "Tintas para impressora Epson 544 70ml",
        brand: 'Nexel',
        type: "tintas-imp",
        price: '12.95',
        falta: false,
    },
    {
        img: "./images/tinta-imp-504-127ml.jpg",
        name: "Tinta para impressora Epson 544 127ml",
        brand: 'Nexel',
        type: "tintas-imp",
        price: '14.95',
        falta: false,
    },
]
