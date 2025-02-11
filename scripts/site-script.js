// Dynamic Tip Toggle Functionality
document.getElementById('toggleBtn').addEventListener('click', function() {
  const tipsSection = document.getElementById('tips-section');
  const isVisible = tipsSection.style.display === 'block';
  tipsSection.style.display = isVisible ? 'none' : 'block';
  this.textContent = isVisible ? 'Show More Tips' : 'Show Less Tips';
  this.setAttribute('aria-expanded', !isVisible);
});

// Populate Eco-Friendly Products List Dynamically
const products = [
  { name: 'Reusable Water Bottle', description: 'Stay hydrated, reduce plastic waste.' },
  { name: 'Bamboo Toothbrush', description: 'Eco-friendly alternative to plastic.' },
  { name: 'Compostable Plates', description: 'Perfect for eco-friendly parties.' }
];

const productList = document.getElementById('productList');
products.forEach(product => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
  productList.appendChild(li);
});
