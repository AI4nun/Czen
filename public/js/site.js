/* ============================================
   CZEN SHOP — Shared Cart & Navigation System
   ============================================ */

(function(){
  'use strict';

  // ── Product Catalog ──────────────────────────────────
  window.CZEN_PRODUCTS = [
    { id: 1,  name: "Keramik Foto Mickey",     img: "1",  price: 10000 },
    { id: 2,  name: "Keramik Foto Baju",       img: "2",  price: 10000 },
    { id: 3,  name: "Keramik Foto Buah",       img: "3",  price: 10000 },
    { id: 4,  name: "Mickey Pantai",           img: "4",  price: 10000 },
    { id: 5,  name: "Keramik Doll",            img: "5",  price: 10000 },
    { id: 6,  name: "Keramik Foto Happy Time", img: "6",  price: 10000 },
    { id: 7,  name: "Keramik Foto Sweet Bee",  img: "7",  price: 10000 },
    { id: 8,  name: "Keramik Foto Koala",      img: "8",  price: 10000 },
    { id: 9,  name: "Keramik Foto Bunga",      img: "9",  price: 10000 },
    { id: 10, name: "Keramik Foto Sunset",     img: "10", price: 10000 },
    { id: 11, name: "Keramik Foto Anjing",     img: "11", price: 10000 },
    { id: 12, name: "Keramik Foto Kelinci",    img: "12", price: 10000 },
    { id: 13, name: "Keramik Foto Burung",     img: "13", price: 10000 },
    { id: 14, name: "Keramik Foto Bintang",    img: "14", price: 10000 },
    { id: 15, name: "Keramik Foto Hati",       img: "15", price: 10000 },
    { id: 16, name: "Keramik Foto Bulan",      img: "16", price: 10000 },
    { id: 17, name: "Keramik Foto Matahari",   img: "17", price: 10000 },
    { id: 18, name: "Keramik Foto Awan",       img: "18", price: 10000 },
    { id: 19, name: "Keramik Foto Pohon",      img: "19", price: 10000 },
    { id: 20, name: "Keramik Foto Ikan",       img: "20", price: 10000 },
    { id: 21, name: "Keramik Foto Gajah",      img: "21", price: 10000 },
    { id: 22, name: "Keramik Foto Penguin",    img: "22", price: 10000 },
    { id: 23, name: "Keramik Foto Lumba",      img: "23", price: 10000 }
  ];

  // ── Cart State (localStorage) ────────────────────────
  function loadCart() {
    try { return JSON.parse(localStorage.getItem('czen_cart') || '[]'); }
    catch(e) { return []; }
  }
  function saveCart(items) {
    localStorage.setItem('czen_cart', JSON.stringify(items));
  }
  function getCart() { return loadCart(); }
  function addToCart(productId, qty) {
    qty = qty || 1;
    var items = loadCart();
    var found = items.find(function(it){ return it.id === productId; });
    if (found) { found.qty += qty; }
    else { items.push({ id: productId, qty: qty }); }
    saveCart(items);
    updateCartBadge();
    return items;
  }
  function removeFromCart(productId) {
    var items = loadCart().filter(function(it){ return it.id !== productId; });
    saveCart(items);
    updateCartBadge();
    return items;
  }
  function setCartQty(productId, qty) {
    if (qty < 1) { removeFromCart(productId); return loadCart(); }
    var items = loadCart();
    var found = items.find(function(it){ return it.id === productId; });
    if (found) { found.qty = qty; } else { items.push({ id: productId, qty: qty }); }
    saveCart(items);
    updateCartBadge();
    return items;
  }
  function getCartTotal() {
    var items = loadCart();
    var total = 0;
    items.forEach(function(it){
      var prod = window.CZEN_PRODUCTS.find(function(p){ return p.id === it.id; });
      if (prod) total += prod.price * it.qty;
    });
    return total;
  }
  function getCartCount() {
    return loadCart().reduce(function(acc, it){ return acc + it.qty; }, 0);
  }
  function getCartItemsDetailed() {
    return loadCart().map(function(it){
      var prod = window.CZEN_PRODUCTS.find(function(p){ return p.id === it.id; });
      return prod ? { id: prod.id, name: prod.name, img: prod.img, price: prod.price, qty: it.qty, subtotal: prod.price * it.qty } : null;
    }).filter(Boolean);
  }
  function updateCartBadge() {
    var count = getCartCount();
    document.querySelectorAll('[data-layer="1"]').forEach(function(el){
      if (el.parentElement && el.parentElement.querySelector('circle, [fill="#56B280"]')) {
        el.textContent = count;
      }
    });
  }

  // Expose
  window.CZEN_CART = {
    add: addToCart, remove: removeFromCart, setQty: setCartQty,
    items: getCartItemsDetailed, total: getCartTotal, count: getCartCount,
    raw: loadCart, updateBadge: updateCartBadge
  };

  // ── Navigation Helpers ───────────────────────────────
  window.CZEN_NAV = {
    go: function(page){ window.location.href = page; },
    init: function() {
      updateCartBadge();
      // Discovery nav
      var disc = document.querySelector('[data-layer="Discovery"]');
      if (disc) { disc.style.cursor = 'pointer'; disc.addEventListener('click', function(){ window.location.href='product.html'; }); }
      // Logo → home
      var logos = document.querySelectorAll('[data-layer="logo"]');
      logos.forEach(function(l){ l.style.cursor='pointer'; l.addEventListener('click', function(){ window.location.href='home.html'; }); });
      // Footer Discovery
      var ft = document.querySelector('[data-layer="title-col1"]');
      if (ft) { ft.style.cursor='pointer'; ft.addEventListener('click', function(){ window.location.href='product.html'; }); }
      document.querySelectorAll('[data-layer="item-1"], [data-layer="item-2"], [data-layer="item-3"]').forEach(function(el){
        var t = el.textContent.trim();
        if (t === 'New season' || t === 'Most searched' || t === 'Most selled') {
          el.style.cursor='pointer'; el.addEventListener('click', function(){ window.location.href='product.html'; });
        }
        if (t === 'Shipping') {
          el.style.cursor='pointer'; el.addEventListener('click', function(){ window.location.href='shipping.html'; });
        }
      });
      // Profile → auth
      var prof = document.querySelector('[data-layer="Profile"]');
      if (prof) { prof.style.cursor='pointer'; prof.addEventListener('click', function(){ window.location.href='auth.html'; }); }
      // Cart icon → cart
      var cartEl = document.querySelector('[data-layer="Cart"]');
      if (cartEl && !cartEl.closest('[data-layer="big-button"]')) {
        cartEl.style.cursor='pointer'; cartEl.addEventListener('click', function(){ window.location.href='cart.html'; });
      }
      // CZEN SHOP label → home
      document.querySelectorAll('[data-layer="CZEN SHOP"]').forEach(function(el){
        el.style.cursor='pointer'; el.addEventListener('click', function(){ window.location.href='home.html'; });
      });
    }
  };

  // ── Input Enhancer ────────────────────────────────────
  window.CZEN_INPUT = {
    enhance: function(containerSelector) {
      var container = containerSelector ? document.querySelector(containerSelector) : document;
      if (!container) container = document;
      // Convert placeholder divs to real inputs
      var selectors = [
        '[data-layer="InputBig"] [data-layer="placeholder"]',
        '[data-layer="InputMedium"] [data-layer="placeholder"]',
        '[data-layer="InputSmall"] [data-layer="placeholder"]',
        '[data-layer="InputPayBig"] [data-layer="placeholder"]',
        '[data-layer="InputPaySmall"] [data-layer="placeholder"]',
        '[data-layer="input/big"] [data-layer="placeholder"]',
        '[data-layer="input/medium"] [data-layer="placeholder"]',
        '[data-layer="input/small"] [data-layer="placeholder"]',
        '[data-layer="input-pay/big"] [data-layer="placeholder"]',
        '[data-layer="input-pay/small"] [data-layer="placeholder"]',
        '[data-layer="input/coupon"] [data-layer="placeholder"]'
      ].join(', ');
      container.querySelectorAll(selectors).forEach(function(el){
        var parent = el.parentElement;
        if (parent && !parent.querySelector('input')) {
          var input = document.createElement('input');
          var placeholder = el.textContent.trim();
          input.type = 'text';
          input.placeholder = placeholder;
          input.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;outline:none;background:transparent;font-size:14px;font-family:Alegreya Sans,sans-serif;color:#272727;padding:8px 17px;box-sizing:border-box;z-index:5;';
          parent.style.position = 'relative';
          parent.appendChild(input);
        }
      });
    }
  };

  // ── Run on load ──────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function(){
    window.CZEN_NAV.init();
    window.CZEN_INPUT.enhance();
    updateCartBadge();
  });

})();
