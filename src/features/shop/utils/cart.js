// simple cart helper using localStorage
const STORAGE_KEY = "shop_cart_v1";

export function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading cart", e);
    return { items: [] };
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving cart", e);
  }
}

export function clearCart() {
  const cart = { items: [] };
  saveCart(cart);
  return cart;
}

export function addToCartLocal(product, quantity = 1) {
  if (!product) return getCart();
  const cart = getCart();
  const existing = cart.items.find(
    (it) => String(it.productId) === String(product.id)
  );
  if (existing) {
    existing.quantity = (existing.quantity || 0) + quantity;
  } else {
    cart.items.push({ productId: product.id, product: product, quantity });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId) {
  const cart = getCart();
  cart.items = cart.items.filter(
    (it) => String(it.productId) !== String(productId)
  );
  saveCart(cart);
  return cart;
}
