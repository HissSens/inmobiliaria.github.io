// Sample property data
const properties = [
    {
        id: 1,
        title: "Casa en condominio",
        location: "Aldama, Santa María Tepepan, Xochimilco",
        price: 6000000,
        type: "casa",
        bedrooms: 3,
        bathrooms: 2,
        area: 270,
        images: [
            "images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/4.jpg",
            "images/5.jpg",
            "images/6.jpg",
            "images/7.jpg",
            "images/8.jpg",
            "images/9.jpg",
            "images/10.jpg",
            "images/11.jpg",
            "images/12.jpg",
            "images/13.jpg",
            "images/14.jpg",
            "images/15.jpg",
            "images/16.jpg",
            "images/17.jpg",
            "images/18.jpg",
            "images/19.jpg",
            "images/20.jpg",
            "images/21.jpg",
            "images/22.jpg",
            "images/23.jpg",
            "images/23.jpg",
            "images/24.jpg",
            "images/25.jpg",
            "images/26.jpg",
            "images/27.jpg"
        ],
        city: "cdmx"
    },
    {
        id: 2,
        title: "Casa en condominio",
        location: "Paseo del Cantil , Cantil del Pedregal, Coyoacán",
        price: 7650000,
        type: "casa",
        bedrooms: 4,
        bathrooms: 2,
        area: 207,
        images: [
            "images/28.jpg",
            "images/29.jpg",
            "images/30.jpg",
            "images/31.jpg",
            "images/32.jpg",
            "images/33.jpg",
            "images/34.jpg",
            "images/35.jpg",
            "images/36.jpg",
            "images/37.jpg",
            "images/38.jpg",
            "images/39.jpg",
            "images/40.jpg",
            "images/41.jpg",
            "images/42.jpg",
            "images/43.jpg",
            "images/44.jpg",
            "images/45.jpg",
            "images/46.jpg",
            "images/47.jpg",
            "images/48.jpg",
            "images/49.jpg",
            "images/50.jpg",
            "images/51.jpg",
            "images/52.jpg",
            "images/53.jpg",
            "images/54.jpg",
            "images/55.jpg",
            "images/56.jpg",
            "images/57.jpg",
            "images/58.jpg",
            "images/59.jpg",
            "images/60.jpg",
            "images/61.jpg",
            "images/62.jpg",
            "images/63.jpg",
            "images/64.jpg",
            "images/65.jpg",
            "images/66.jpg",
            "images/67.jpg",
            "images/68.jpg",
            "images/69.jpg"
        ],
        city: "cdmx"
    },
    {
        id: 3,
        title: "Casa en renta",
        location: "Camino Real Al Ajusco, Santa María Tepepan, Xochimilco",
        price: 29000,
        type: "casa",
        bedrooms: 3,
        bathrooms: 3,
        area: 155,
        images: [
            "images/70.jpg",
            "images/71.jpg",
            "images/72.jpg",
            "images/73.jpg",
            "images/74.jpg",
            "images/75.jpg",
            "images/76.jpg",
            "images/77.jpg",
            "images/78.jpg",
            "images/79.jpg",
            "images/80.jpg",
            "images/81.jpg",
            "images/82.jpg",
            "images/83.jpg",
            "images/84.jpg",
            "images/85.jpg",
            "images/86.jpg",
            "images/87.jpg",
            "images/88.jpg",
            "images/89.jpg",
            "images/90.jpg",
            "images/91.jpg",
            "images/92.jpg",
            "images/93.jpg",
            "images/94.jpg",
            "images/95.jpg",
            "images/96.jpg",
            "images/97.jpg",
            "images/98.jpg",
            "images/99.jpg",
            "images/100.jpg",
            "images/101.jpg",
            "images/102.jpg",
            "images/103.jpg",
            "images/104.jpg",
            "images/105.jpg",
            "images/106.jpg",
            "images/107.jpg",
            "images/108.jpg",
            "images/109.jpg",
            "images/110.jpg",
            "images/111.jpg"


        ],
        city: "cdmx"
    },
    {
        id: 4,
        title: "Penthouse Exclusivo",
        location: "San Pedro, Monterrey",
        price: 12000000,
        type: "departamento",
        bedrooms: 4,
        bathrooms: 4,
        area: 450,
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600566753379-218c8ca5f0b0?w=800&h=400&fit=crop"
        ],
        city: "monterrey"
    },
    {
        id: 5,
        title: "Casa Colonial",
        location: "Roma Norte, CDMX",
        price: 7200000,
        type: "casa",
        bedrooms: 3,
        bathrooms: 2,
        area: 220,
        images: [
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600585153490-76fb20a0f2b4?w=800&h=400&fit=crop"
        ],
        city: "cdmx"
    },
    {
        id: 6,
        title: "Departamento Vista al Mar",
        location: "Puerto Vallarta",
        price: 3800000,
        type: "departamento",
        bedrooms: 2,
        bathrooms: 2,
        area: 120,
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop"
        ],
        city: "puerto-vallarta"
    }
];

let cart = [];
let filteredProperties = [...properties];
let currentPropertyId = null;
let currentImageIndex = 0;

// Format price function
function formatPrice(price) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(price);
}

// Render properties
function renderProperties(propertiesToRender = filteredProperties) {
    const grid = document.getElementById('propertiesGrid');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    
    grid.innerHTML = '';

    if (propertiesToRender.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>🔍 No se encontraron propiedades</h3>
                <p>Intenta modificar los filtros de búsqueda para encontrar más opciones.</p>
            </div>
        `;
        searchResultsInfo.textContent = 'No se encontraron propiedades con los filtros seleccionados.';
        searchResultsInfo.classList.add('show');
        return;
    }

    // Show search results info
    if (propertiesToRender.length !== properties.length) {
        searchResultsInfo.textContent = `Se encontraron ${propertiesToRender.length} propiedades que coinciden con tu búsqueda.`;
        searchResultsInfo.classList.add('show');
    } else {
        searchResultsInfo.classList.remove('show');
    }

    propertiesToRender.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.dataset.propertyId = property.id;
        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('${property.images[0]}')">
                <div class="property-type">${property.type}</div>
            </div>
            <div class="property-info">
                <div class="property-price">${formatPrice(property.price)}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-features">
                    <div class="feature">🛏️ ${property.bedrooms}</div>
                    <div class="feature">🚿 ${property.bathrooms}</div>
                    <div class="feature">📐 ${property.area}m²</div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${property.id})" id="btn-${property.id}">
                    ${cart.find(item => item.id === property.id) ? '✓ En el carrito' : 'Agregar al Carrito'}
                </button>
            </div>
        `;
        grid.appendChild(propertyCard);
    });
}

// Search properties function
function searchProperties() {
    const typeValue = document.getElementById('propertyType').value.toLowerCase();
    const locationValue = document.getElementById('location').value.toLowerCase();
    const maxPriceValue = document.getElementById('maxPrice').value;

    console.log('Filtros aplicados:', { typeValue, locationValue, maxPriceValue }); // Debug

    filteredProperties = properties.filter(property => {
        // Filter by type
        const typeMatch = !typeValue || property.type.toLowerCase() === typeValue;
        
        // Filter by location/city
        const locationMatch = !locationValue || property.city.toLowerCase() === locationValue;
        
        // Filter by max price
        const priceMatch = !maxPriceValue || property.price <= parseInt(maxPriceValue);
        
        console.log(`Property ${property.id}: type(${typeMatch}), location(${locationMatch}), price(${priceMatch})`); // Debug
        
        return typeMatch && locationMatch && priceMatch;
    });

    console.log('Propiedades filtradas:', filteredProperties.length); // Debug
    renderProperties(filteredProperties);
}

// Add to cart
function addToCart(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (property && !cart.find(item => item.id === propertyId)) {
        cart.push(property);
        updateCartUI();
        
        // Update button text
        const button = document.getElementById(`btn-${propertyId}`);
        if (button) {
            button.textContent = '✓ En el carrito';
            button.classList.add('added');
        }
    }
}

// Remove from cart
function removeFromCart(propertyId) {
    cart = cart.filter(item => item.id !== propertyId);
    updateCartUI();
    renderCartItems();
    
    // Update button text back to "Agregar al Carrito"
    const button = document.getElementById(`btn-${propertyId}`);
    if (button) {
        button.textContent = 'Agregar al Carrito';
        button.classList.remove('added');
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    const isVisible = modal.style.display === 'block';
    modal.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible) {
        renderCartItems();
    }
}

// Render cart items
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        totalAmount.textContent = formatPrice(0);
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.images[0]}')"></div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    totalAmount.textContent = formatPrice(total);
}

// Open carousel modal
function openCarousel(propertyId) {
    currentPropertyId = propertyId;
    currentImageIndex = 0;
    const property = properties.find(p => p.id === propertyId);
    const carouselImages = document.getElementById('carouselImages');
    
    carouselImages.innerHTML = '';
    property.images.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'carousel-image';
        imgDiv.style.backgroundImage = `url('${image}')`;
        carouselImages.appendChild(imgDiv);
    });

    updateCarousel();
    document.getElementById('carouselModal').style.display = 'block';
}

// Close carousel modal
function closeCarousel() {
    document.getElementById('carouselModal').style.display = 'none';
    currentPropertyId = null;
    currentImageIndex = 0;
}

// Navigate to previous image
function prevImage() {
    const property = properties.find(p => p.id === currentPropertyId);
    if (property) {
        currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
        updateCarousel();
    }
}

// Navigate to next image
function nextImage() {
    const property = properties.find(p => p.id === currentPropertyId);
    if (property) {
        currentImageIndex = (currentImageIndex + 1) % property.images.length;
        updateCarousel();
    }
}

// Update carousel position
function updateCarousel() {
    const carouselImages = document.getElementById('carouselImages');
    carouselImages.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`¡Gracias por tu compra! Total: ${formatPrice(total)}\n\nPropiedades adquiridas:\n${cart.map(item => `• ${item.title}`).join('\n')} 
    Contacta al siguiente número para 
    reclamar tus propiedades
    +52 55 7869 1720`);
    
    // Clear cart and update UI
    cart = [];
    updateCartUI();
    toggleCart();
    renderProperties(); // Re-render to update button states
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render initial properties
    renderProperties();
    
    // Add search form event listener
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        searchProperties();
    });
    
    // Add real-time search on input change
    document.getElementById('propertyType').addEventListener('change', searchProperties);
    document.getElementById('location').addEventListener('change', searchProperties);
    document.getElementById('maxPrice').addEventListener('input', function() {
        // Add a small delay for price input to avoid too many searches while typing
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(searchProperties, 500);
    });
    
    // Close cart when clicking outside
    document.getElementById('cartModal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });

    // Close carousel when clicking outside
    document.getElementById('carouselModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCarousel();
        }
    });

    // Add click event for property cards
    document.getElementById('propertiesGrid').addEventListener('click', function(e) {
        const propertyCard = e.target.closest('.property-card');
        if (propertyCard && !e.target.classList.contains('add-to-cart-btn')) {
            const propertyId = parseInt(propertyCard.dataset.propertyId);
            openCarousel(propertyId);
        }
    });
});