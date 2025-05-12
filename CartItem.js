import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-12 h-12 object-cover rounded"
        />
        <div className="ml-3">
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-gray-200 rounded mr-3">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="px-2">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;