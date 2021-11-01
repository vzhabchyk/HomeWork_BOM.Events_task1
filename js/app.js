const categoryList = document.getElementsByClassName('category-list')[0];
const productsList = document.getElementsByClassName('products-list')[0];
const productDescription = document.getElementsByClassName('product-description')[0];
const btnBuy = document.getElementsByClassName('btn-buy')[0];

function showCategories () {
  for (let i = 0; i < arrayCategory.length; i++) {
    const itemCategory = document.createElement('li');
    itemCategory.innerHTML = arrayCategory[i].name;
    categoryList.appendChild(itemCategory);
    itemCategory.addEventListener('click', function () {
      productsList.innerHTML = '';
      productDescription.innerHTML = '';
      btnBuy.classList.add('btn-hidden');
      for (let j = 0; j < arrayCategory[i].products.length; j++) {
        const itemProduct = document.createElement('li');
        itemProduct.innerHTML = arrayCategory[i].products[j].name;
        productsList.appendChild(itemProduct);
        itemProduct.addEventListener('click', function() {
          productDescription.innerHTML = arrayCategory[i].products[j].description;
          btnBuy.classList.remove('btn-hidden');
        })
      }
    })
  }
}
showCategories();

function buyProduct () {
  alert('Item bought.');
  btnBuy.classList.add('btn-hidden');
  productDescription.innerHTML = '';
  productsList.innerHTML = '';
}

