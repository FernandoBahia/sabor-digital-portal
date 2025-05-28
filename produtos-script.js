
// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Pescada Amarela",
        descricao: "Peixe de água salgada, saboroso e versátil para diversos preparos culinários",
        preco: "R$ 49,90/kg",
        imagem: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        nome: "Salmão Fresco",
        descricao: "Rico em ômega 3, ideal para preparos crus como sushi ou grelhados",
        preco: "R$ 89,90/kg",
        imagem: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        nome: "Camarão Rosa",
        descricao: "Fresco e selecionado, perfeito para moquecas, risotos e outros pratos especiais",
        preco: "R$ 95,90/kg",
        imagem: "https://images.unsplash.com/photo-1565280654386-36c3ea205191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        nome: "Polvo Limpo",
        descricao: "Já limpo e pronto para preparo, ideal para saladas e pratos mediterrâneos",
        preco: "R$ 75,90/kg",
        imagem: "https://images.unsplash.com/photo-1565843714144-d5a504320191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        nome: "Ostras Frescas",
        descricao: "Ostras frescas da região, perfeitas para consumo in natura ou gratinadas",
        preco: "R$ 36,90/dúzia",
        imagem: "https://images.unsplash.com/photo-1627891079554-64206a399f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        nome: "Lula Limpa",
        descricao: "Lula já limpa e pronta para seu preparo favorito, fresca e de alta qualidade",
        preco: "R$ 42,90/kg",
        imagem: "https://images.unsplash.com/photo-1585545335512-777bba540557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

let currentIndex = 0;

// Função para atualizar o produto em destaque
function updateFeaturedProduct() {
    const produto = produtos[currentIndex];
    
    document.getElementById('featured-image').src = produto.imagem;
    document.getElementById('featured-image').alt = produto.nome;
    document.getElementById('featured-name').textContent = produto.nome;
    document.getElementById('featured-description').textContent = produto.descricao;
    document.getElementById('featured-price').textContent = produto.preco;
    
    // Atualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    // Atualizar grade de outros produtos
    updateProductsGrid();
}

// Função para atualizar a grade de outros produtos
function updateProductsGrid() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    // Mostrar 3 produtos que não são o produto em destaque
    const otherProducts = produtos.filter((_, index) => index !== currentIndex).slice(0, 3);
    
    otherProducts.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card small';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-details">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="product-info">
                    <span class="price">${produto.preco}</span>
                    <div class="stock-status">
                        <div class="stock-indicator"></div>
                        <span>Em estoque</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Navegação do carrossel
function nextProduct() {
    currentIndex = (currentIndex + 1) % produtos.length;
    updateFeaturedProduct();
}

function prevProduct() {
    currentIndex = (currentIndex - 1 + produtos.length) % produtos.length;
    updateFeaturedProduct();
}

function currentProduct(index) {
    currentIndex = index;
    updateFeaturedProduct();
}

// Auto-play do carrossel
let autoPlay = setInterval(nextProduct, 5000);

// Pausar auto-play quando o mouse estiver sobre a seção
const productSection = document.querySelector('.products-section');
if (productSection) {
    productSection.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });

    productSection.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextProduct, 5000);
    });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateFeaturedProduct();
});

// Suporte para navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevProduct();
    } else if (e.key === 'ArrowRight') {
        nextProduct();
    }
});
