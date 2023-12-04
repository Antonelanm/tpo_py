// JavaScript en detalles.html
document.addEventListener('DOMContentLoaded', function () {
  // Obtener los datos del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productDataString = urlParams.get('data');

  if (productDataString) {
    // Decodificar y parsear los datos del producto
    const productData = JSON.parse(decodeURIComponent(productDataString));

    // Crear una tarjeta de producto en base a los datos recuperados
    const productCard = document.createElement('div');
    productCard.classList.add('card-details');

    const productImage = document.createElement('img');
    productImage.src = productData.image;
    productCard.appendChild(productImage);
    productImage.classList.add('img-details');

    const containerDescription = document.createElement('div');
    productCard.appendChild(containerDescription);
    containerDescription.classList.add('container-description');

    const productTitle = document.createElement('h3');
    productTitle.textContent = productData.title;
    containerDescription.appendChild(productTitle);
    productTitle.classList.add('title-details');

    const productDescription = document.createElement('p');
    productDescription.textContent = productData.description;
    containerDescription.appendChild(productDescription);
    productDescription.classList.add('description-details');


    const containerBuy = document.createElement('div');
    containerDescription.appendChild(containerBuy);
    containerBuy.classList.add('container-buy');


    const productPrice = document.createElement('p');
    productPrice.textContent = productData.price;
    containerBuy.appendChild(productPrice);
    productPrice.classList.add('price-details');

    const buy = document.createElement('a');
    buy.href = '/message';
    containerBuy.appendChild(buy);
    buy.classList.add('btn-buy');
    buy.textContent= 'COMPRAR';

    // Agregar la tarjeta de producto al DOM
    const mainContent = document.getElementById('productDetails');
    mainContent.appendChild(productCard);
  } else {
    // Manejar el caso en el que no se proporcionaron datos de productos
    console.log('No se encontraron datos de productos en la URL.');
  }
});