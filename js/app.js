const categoryList = document.getElementsByClassName('category-list')[0];
const productsList = document.getElementsByClassName('products-list')[0];
const productDescription = document.getElementsByClassName('product-description')[0];
const btnBuy = document.getElementsByClassName('btn-buy')[0];
const form = document.getElementsByTagName('form')[0];
const btnConfirm = document.getElementById('btn-confirm');
const errorMessage = document.getElementsByClassName('error')[0];
const orderInfo = document.getElementById('order-info');

function selectCategory (category, itemCategory) {
  itemCategory.addEventListener('click', function () {
    productsList.innerHTML = '';
    productDescription.innerHTML = '';
    btnBuy.classList.add('hidden');
    form.classList.add('hidden');
    showProduts(category.products)
  })
}

function confirmOrder (product) {
  btnConfirm.addEventListener('click', function () {
    const formObj = document.forms[0];
    const fullName = formObj.elements.fullName.value;
    let city = '';
    for (let i = 0; i < formObj.elements.city.length; i++) {
      if (formObj.elements.city[i].selected) {
        city = formObj.elements.city[i].value;
      }
    }
    const mailNumber = formObj.elements.mailNumber.value;
    const paymentType = formObj.elements.paymentType.value;
    const countProducts = formObj.elements.countProducts.value;
    const comment = formObj.elements.comment.value;

    if (!fullName || !city || !mailNumber || !paymentType || !countProducts) {
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
      orderInfo.innerHTML = `
        <span class="order-info-label">Full Name:</span> ${fullName} </br>
        <span class="order-info-label">City:</span> ${city} </br>
        <span class="order-info-label">Mail number:</span> ${mailNumber} </br>
        <span class="order-info-label">Payment type:</span> ${paymentType} </br>
        <span class="order-info-label">Product name:</span> ${product.name} </br>
        <span class="order-info-label">Count products:</span> ${countProducts} </br>
        <span class="order-info-label">Comment:</span> ${comment}
      `;
    }
  })
}

function showProduts (products) {
  for (let j = 0; j < products.length; j++) {
    const itemProduct = document.createElement('li');
    itemProduct.innerHTML = products[j].name;
    productsList.appendChild(itemProduct);
    itemProduct.addEventListener('click', function() {
      productDescription.innerHTML = products[j].description;
      btnBuy.classList.remove('hidden');
      form.classList.add('hidden');
      btnBuy.addEventListener('click', function() {
        form.classList.remove('hidden');
        confirmOrder (products[j]);
      })
    })
  }
}

function showCategories () {
  for (let i = 0; i < arrayCategory.length; i++) {
    const itemCategory = document.createElement('li');
    itemCategory.innerHTML = arrayCategory[i].name;
    categoryList.appendChild(itemCategory);
    selectCategory(arrayCategory[i], itemCategory);
  }
}
showCategories();


