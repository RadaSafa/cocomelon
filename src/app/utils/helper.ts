export function formatPrice(price: any) {
  if (price > 0) {
    var reverse = price.toString().split('').reverse().join(''),
      price = reverse.match(/\d{1,3}/g);
    price = price.join('.').split('').reverse().join('');
    return price;
  }
  return 0;
}
