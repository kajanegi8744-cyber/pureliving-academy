/* PureLiving Academy - GTM practice simulator */
(function () {
  "use strict";

  const STORAGE_KEY = "pureliving_demo_cart";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch (error) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("demo-cart-updated", {
      detail: { cart: cart }
    }));
  }

  function track(eventName, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params
    });
    console.log("Simulator event:", eventName, params || {});
  }

  function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(function (item) {
      return item.id === product.id;
    });

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price) || 0,
        quantity: 1
      });
    }

    saveCart(cart);
    track("add_to_cart", {
      currency: "INR",
      value: Number(product.price) || 0,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: Number(product.price) || 0,
        quantity: 1
      }]
    });

    return cart;
  }

  function removeFromCart(productId) {
    const cart = getCart().filter(function (item) {
      return item.id !== productId;
    });
    saveCart(cart);
    track("remove_from_cart", { item_id: productId });
    return cart;
  }

  function clearCart() {
    saveCart([]);
    track("demo_cart_cleared", {});
  }

  function getCartTotal() {
    return getCart().reduce(function (total, item) {
      return total + item.price * item.quantity;
    }, 0);
  }

  window.PureLivingSimulator = {
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartTotal: getCartTotal,
    track: track
  };

  document.addEventListener("click", function (event) {
    const element = event.target.closest("[data-demo-action]");
    if (!element) return;

    const action = element.dataset.demoAction;

    if (action === "add-to-cart") {
      const product = {
        id: element.dataset.productId || "demo-product",
        name: element.dataset.productName || "Demo Product",
        price: element.dataset.productPrice || 0
      };
      addToCart(product);
    }

    if (action === "remove-from-cart") {
      removeFromCart(element.dataset.productId || "demo-product");
    }

    if (action === "clear-cart") {
      clearCart();
    }

    if (action === "demo-purchase") {
      track("begin_checkout", {
        currency: "INR",
        value: getCartTotal(),
        items: getCart()
      });
      alert("Demo only: no payment has been taken.");
    }
  });

  console.log("PureLiving simulator loaded.");
})();
