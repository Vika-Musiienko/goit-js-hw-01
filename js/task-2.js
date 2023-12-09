function getShippingMessage (country, price, deliveryFree) {
    const totalPrice = price + deliveryFree;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;
    return message;
  }

  console.log(getShippingMessage("Australia", 120, 50)); 
console.log(getShippingMessage("Germany", 80, 20)); 
console.log(getShippingMessage("Sweden", 100, 20));