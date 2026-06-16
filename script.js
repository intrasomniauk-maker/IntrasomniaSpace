// Configuration
const CHECKOUT_ENDPOINT = "/api/create-checkout";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgobrdza";

// Product data with images
const PRODUCTS = {
    'tee-001': {
        name: 'heavyweight drop shoulder tee - Black',
        serial: 'INTS001',
        price: 30,
        image: 'MERCHANDISE/Heavyweight Drop Shoulder Cotton T-Shirt Black Front.png'
    },
    'tee-002': {
        name: 'heavyweight drop shoulder tee - Light Grey',
        serial: 'INTS002',
        price: 30,
        image: 'MERCHANDISE/Heavyweight Drop Shoulder Cotton T-Shirt-mockups-3.png'
    },
    'tee-003': {
        name: 'heavyweight drop shoulder tee - Pink',
        serial: 'INTS003',
        price: 30,
        image: 'MERCHANDISE/Heavyweight Drop Shoulder Cotton T-Shirt-Pink Front.png'
    },
    'tee-004': {
        name: 'heavyweight cotton t-shirt - Abstract 2',
        serial: 'INTS004',
        price: 30,
        image: 'MERCHANDISE/Heavywieght Cotton T Shirt ABSTRACT2 - Front.png'
    },
    'tee-005': {
        name: 'human sonics neon lines - Pink',
        serial: 'INTS005',
        price: 30,
        image: 'MERCHANDISE/Human Sonics Neon Lines PINK-FRONT.png'
    },
    'tee-006': {
        name: 'human sonics neon lines - Teal',
        serial: 'INTS006',
        price: 30,
        image: 'MERCHANDISE/Human Sonics Neon Lines TIEL - FRONT.png'
    },
    'tee-007': {
        name: 'human sonics neon lines - Yellow',
        serial: 'INTS007',
        price: 30,
        image: 'MERCHANDISE/Human Sonics Neon Lines YELLOW - FRONT.png'
    },
    'tee-008': {
        name: 'crewneck long-sleeve t-shirt - Abstract 5',
        serial: 'INTS008',
        price: 30,
        image: 'MERCHANDISE/Crewneck Long-Sleeve T-Shirt - ABSTRACT5 - FRONT.png'
    },
    'tee-009': {
        name: 'drop shoulder cotton t-shirt - Stereo Split',
        serial: 'INTS009',
        price: 30,
        image: 'MERCHANDISE/Drop Shoulder Cotton T-Shirt - STEREO SPLIT - FRONT.png'
    },
    'tee-010': {
        name: 'heavyweight drop shoulder tee - Abstract 4',
        serial: 'INTS010',
        price: 30,
        image: 'MERCHANDISE/Heavyweight Drop Shoulder Cotton T-Shirt - ABSTRACT4 - FRONT.png'
    },
    'tee-011': {
        name: 'heavyweight drop shoulder tee - Boaz Jachin',
        serial: 'INTS011',
        price: 30,
        image: 'MERCHANDISE/Heavyweight Drop Shoulder Cotton T-Shirt - BOAZ JACHIN - FRONT.png'
    },
    'tee-012': {
        name: 'crewneck long-sleeve t-shirt - Abstract 1',
        serial: 'INTS012',
        price: 30,
        image: 'MERCHANDISE/Crewneck Long-Sleeve T-Shirt - ABSTRACT1 - FRONT.png'
    },
    'tee-013': {
        name: 'crewneck long-sleeve t-shirt - Abstract 2',
        serial: 'INTS013',
        price: 30,
        image: 'MERCHANDISE/Crewneck Long-Sleeve T-Shirt - ABSTRACT2 - FRONT.png'
    },
    'tee-014': {
        name: 'heavyweight cotton t-shirt - Abstract 1',
        serial: 'INTS014',
        price: 30,
        image: 'MERCHANDISE/Heavywieght Cotton T Shirt ABSTRACT1 - Front.png'
    },
    'tee-015': {
        name: 'heavyweight cotton t-shirt - Abstract 3',
        serial: 'INTS015',
        price: 30,
        image: 'MERCHANDISE/Heavywieght Cotton T Shirt ABSTRACT3 - FRONT.png'
    }
};

// Shopping cart storage
let shoppingCart = [];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const purchaseForm = document.getElementById('purchaseForm');
const formMessage = document.getElementById('formMessage');

// Shopping cart elements
const productSelect = document.getElementById('productSelect');
const sizeSelect = document.getElementById('sizeSelect');
const quantitySelect = document.getElementById('quantitySelect');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartSection = document.getElementById('cartSection');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const previewImage = document.getElementById('previewImage');
const productImagePreview = document.getElementById('productImagePreview');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupModal();
    setupForm();
});

// Navigation Setup
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
        });
    });
}

// Show Section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    hideModal();
}

// Modal Setup
function setupModal() {
    closeBtn.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

// Hide Modal
function hideModal() {
    modal.classList.add('hidden');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Form Setup
function setupForm() {
    // Product selection preview
    productSelect.addEventListener('change', (e) => {
        const productId = e.target.value.split('|')[0];
        
        if (productId && PRODUCTS[productId]) {
            previewImage.src = PRODUCTS[productId].image;
            productImagePreview.style.display = 'block';
        } else {
            productImagePreview.style.display = 'none';
        }
    });
    
    // Add to cart button
    addToCartBtn.addEventListener('click', addToCart);
    
    // Form submission
    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const submitBtn = purchaseForm.querySelector('[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'processing...';
            
            redirectToPayment();
        }
    });
}

// Form Validation
function validateForm() {
    // Validate cart
    if (shoppingCart.length === 0) {
        showFormError('add items to cart');
        return false;
    }
    
    const customer_name = document.getElementById('customer_name').value;
    const email = document.getElementById('email').value;
    const shipping_address = document.getElementById('shipping_address').value;
    
    if (!customer_name) {
        showFormError('name required');
        return false;
    }
    
    if (customer_name.length < 2) {
        showFormError('name too short');
        return false;
    }
    
    if (!email) {
        showFormError('email required');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showFormError('invalid email format');
        return false;
    }
    
    if (!shipping_address) {
        showFormError('shipping address required');
        return false;
    }
    
    if (shipping_address.length < 10) {
        showFormError('address too short');
        return false;
    }
    
    return true;
}

// Add to cart function
function addToCart() {
    const productValue = productSelect.value;
    const size = sizeSelect.value;
    const quantity = quantitySelect.value;
    
    if (!productValue) {
        showFormError('select a product');
        return;
    }
    
    if (!size) {
        showFormError('select a size');
        return;
    }
    
    if (!quantity) {
        showFormError('select a quantity');
        return;
    }
    
    const [productId, serial, color] = productValue.split('|');
    const product = PRODUCTS[productId];
    
    // Add item to cart
    const cartItem = {
        id: Date.now(),
        productId: productId,
        serial: serial,
        name: product.name,
        price: product.price,
        size: size,
        quantity: parseInt(quantity),
        image: product.image,
        total: product.price * parseInt(quantity)
    };
    
    shoppingCart.push(cartItem);
    
    // Reset form
    productSelect.value = '';
    sizeSelect.value = '';
    quantitySelect.value = '';
    productImagePreview.style.display = 'none';
    
    // Update display
    updateCartDisplay();
    showFormSuccess('item added to cart');
}

// Remove from cart function
function removeFromCart(itemId) {
    shoppingCart = shoppingCart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showFormSuccess('item removed from cart');
}

// Update cart display
function updateCartDisplay() {
    if (shoppingCart.length === 0) {
        cartSection.style.display = 'none';
        checkoutBtn.style.display = 'none';
        return;
    }
    
    cartSection.style.display = 'block';
    checkoutBtn.style.display = 'block';
    
    // Clear previous items
    cartItems.innerHTML = '';
    
    let total = 0;
    
    shoppingCart.forEach(item => {
        total += item.total;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-serial">Serial: ${item.serial}</p>
                <p class="cart-item-specs">Size: ${item.size.toUpperCase()} | Qty: ${item.quantity}</p>
                <p class="cart-item-price">£${item.total.toFixed(2)}</p>
            </div>
            <button type="button" class="remove-btn" onclick="removeFromCart(${item.id})">remove</button>
        `;
        
        cartItems.appendChild(itemElement);
    });
    
    // Update total
    cartTotal.textContent = `£${total.toFixed(2)}`;
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Form Error
function showFormError(message) {
    formMessage.textContent = 'error: ' + message;
    formMessage.classList.remove('success');
    formMessage.classList.add('error');
}

// Show Form Success
function showFormSuccess(message) {
    formMessage.textContent = 'success: ' + message;
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
}

// Redirect to Payment
function redirectToPayment() {
    const submitBtn = purchaseForm.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'processing...';
    
    const customer_name = document.getElementById('customer_name').value;
    const email = document.getElementById('email').value;
    const shipping_address = document.getElementById('shipping_address').value;
    
    // Format cart items for email
    let cartItemsText = '';
    let totalPrice = 0;
    
    shoppingCart.forEach((item, index) => {
        cartItemsText += `\nItem ${index + 1}:\n`;
        cartItemsText += `- Product: ${item.name}\n`;
        cartItemsText += `- Serial: ${item.serial}\n`;
        cartItemsText += `- Size: ${item.size}\n`;
        cartItemsText += `- Quantity: ${item.quantity}\n`;
        cartItemsText += `- Price: £${item.total.toFixed(2)}\n`;
        totalPrice += item.total;
    });
    
    // Prepare order data for Formspree
    const orderData = {
        customer_name: customer_name,
        email: email,
        shipping_address: shipping_address,
        items_count: shoppingCart.length,
        items: cartItemsText,
        total_price: `£${totalPrice.toFixed(2)}`,
        _replyto: email
    };
    
    // Show loading status
    showFormSuccess('order: status: processing...');
    
    // Submit to Formspree
    fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (response.ok) {
            // Order details recorded — now charge the real cart total via SumUp
            showFormSuccess('order: status: received\npayment: status: loading...');

            // Store order data locally for reference
            localStorage.setItem('lastOrder', JSON.stringify({
                items: shoppingCart,
                customer: { name: customer_name, email: email },
                address: shipping_address,
                total: totalPrice
            }));

            startPayment(totalPrice, { name: customer_name, email: email });
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'proceed to checkout';
            showFormError('order submission failed. please try again.');
        }
    })
    .catch(error => {
        console.error('Formspree error:', error);
        submitBtn.disabled = false;
        submitBtn.textContent = 'proceed to checkout';
        showFormError('connection error. please try again.');
    });
}

// Create a SumUp checkout for the true cart total, then show the payment widget
function startPayment(totalPrice, customer) {
    const submitBtn = purchaseForm.querySelector('[type="submit"]');

    fetch(CHECKOUT_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: totalPrice,
            currency: 'GBP',
            description: `INTRASOMNIA order — ${shoppingCart.length} item(s)`
        })
    })
    .then(response => response.json().then(data => ({ ok: response.ok, data })))
    .then(({ ok, data }) => {
        if (!ok || !data.checkoutId) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'proceed to checkout';
            showFormError(data.error || 'could not start payment. please try again.');
            return;
        }
        showPaymentWidget(data.checkoutId, totalPrice, customer);
    })
    .catch(error => {
        console.error('Checkout error:', error);
        submitBtn.disabled = false;
        submitBtn.textContent = 'proceed to checkout';
        showFormError('connection error. please try again.');
    });
}

// Mount the SumUp card widget so the customer pays the exact total
function showPaymentWidget(checkoutId, totalPrice, customer) {
    const paymentSection = document.getElementById('paymentSection');
    const paymentAmount = document.getElementById('paymentAmount');
    const submitBtn = purchaseForm.querySelector('[type="submit"]');

    paymentAmount.textContent = `£${totalPrice.toFixed(2)}`;
    paymentSection.style.display = 'block';
    submitBtn.style.display = 'none';
    showFormSuccess('payment: status: enter your card details below');
    paymentSection.scrollIntoView({ behavior: 'smooth' });

    if (typeof SumUpCard === 'undefined') {
        showFormError('payment widget failed to load. please refresh and try again.');
        return;
    }

    SumUpCard.mount({
        id: 'sumup-card',
        checkoutId: checkoutId,
        email: customer.email,
        locale: 'en-GB',
        onResponse: function (type, body) {
            if (type === 'success') {
                showFormSuccess('payment received. thank you — your order is confirmed.');
                paymentSection.style.display = 'none';
                shoppingCart = [];
                updateCartDisplay();
            } else if (type === 'error' || type === 'fail') {
                showFormError('payment failed. please check your card details and try again.');
            }
        }
    });
}
