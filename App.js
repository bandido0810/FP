import React, { useState } from 'react';
import products, { categories } from './mock/data';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Divider from './components/Divider';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra en Panolti!');
    setCartItems([]);
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        onToggleCart={() => setShowCart(!showCart)}
      />
      
      <main className="container mx-auto px-4 py-8">
        {showCart ? (
          <div className="max-w-md mx-auto">
            <Cart 
              cartItems={cartItems} 
              onRemoveItem={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onCheckout={handleCheckout}
            />
          </div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-2">Nuestras Flores</h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Descubre nuestra exclusiva selección de flores frescas y coronas para cada ocasión
              </p>
            </div>
            
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            
            <Divider />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;

// DONE