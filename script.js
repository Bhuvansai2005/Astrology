const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const backToTop = document.querySelector('.back-to-top');
const cartDrawer = document.querySelector('.cart-drawer');
const cartBackdrop = document.querySelector('.cart-backdrop');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartCount = document.querySelector('.cart-count');
const checkoutButton = document.querySelector('.checkout-button');
const checkoutView = document.querySelector('#checkout');
const checkoutItems = document.querySelector('.checkout-items');
const checkoutTotal = document.querySelector('.checkout-total strong');
let cart = [];

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

function openCart() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('visible');
  }

function renderCart() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    cartTotal.textContent = `₹${total}`;
    checkoutButton.disabled = cart.length === 0;
    cartItems.innerHTML = cart.length ? cart.map((item) => `
      <div class="cart-item">
        <div><strong>${item.name}</strong><small>₹${item.price} × ${item.quantity}</small></div>
        <div class="cart-controls"><button data-action="decrease" data-name="${item.name}">−</button><span>${item.quantity}</span><button data-action="increase" data-name="${item.name}">+</button></div>
      </div>`).join('') : '<p class="empty-cart">Your cart is empty. Add a book to begin.</p>';
}

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.category-card');
    if (!card) return;

    const name = card.dataset.book;
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price: Number(card.dataset.price), quantity: 1 });
    }

    renderCart();
    openCart();
  });
});

document.querySelector('.nav-cart').addEventListener('click', (event) => {
    event.preventDefault();
    openCart();
});
document.querySelector('.close-cart').addEventListener('click', () => {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('visible');
});
cartBackdrop.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('visible');
});
cartItems.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const item = cart.find((entry) => entry.name === button.dataset.name);
    if (button.dataset.action === 'increase') item.quantity += 1;
    if (button.dataset.action === 'decrease') item.quantity -= 1;
    cart = cart.filter((entry) => entry.quantity > 0);
    renderCart();
});

checkoutButton.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    checkoutItems.innerHTML = cart.map((item) => `<div><span>${item.name} × ${item.quantity}</span><strong>₹${item.price * item.quantity}</strong></div>`).join('');
    checkoutTotal.textContent = `₹${total}`;
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('visible');
    checkoutView.hidden = false;
    checkoutView.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.checkout-form').addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.innerHTML = '<div class="order-success"><span>✓</span><h3>Thank you for your order!</h3><p>Your demo order has been received. We will contact you on WhatsApp to confirm the details.</p><a class="button button-primary" href="#home">Back to home</a></div>';
    cart = [];
    renderCart();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('#year').textContent = new Date().getFullYear();
renderCart();
