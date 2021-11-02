const categoryList = document.getElementsByClassName('category-list')[0];
const productsList = document.getElementsByClassName('products-list')[0];
const productDescription = document.getElementsByClassName('product-description')[0];
const btnBuy = document.getElementsByClassName('btn-buy')[0];
const form = document.getElementsByTagName('form')[0];
const btnConfirm = document.getElementById('btn-confirm');

function showCategories () {
  for (let i = 0; i < arrayCategory.length; i++) {
    const itemCategory = document.createElement('li');
    itemCategory.innerHTML = arrayCategory[i].name;
    categoryList.appendChild(itemCategory);
    itemCategory.addEventListener('click', function () {
      productsList.innerHTML = '';
      productDescription.innerHTML = '';
      btnBuy.classList.add('hidden');
      for (let j = 0; j < arrayCategory[i].products.length; j++) {
        const itemProduct = document.createElement('li');
        itemProduct.innerHTML = arrayCategory[i].products[j].name;
        productsList.appendChild(itemProduct);
        itemProduct.addEventListener('click', function() {
          productDescription.innerHTML = arrayCategory[i].products[j].description;
          btnBuy.classList.remove('hidden');
          btnBuy.addEventListener('click', function() {
            form.classList.remove('hidden');
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
              const body = document.body;
              const orderInfo = document.createElement('div');
              orderInfo.innerHTML  += fullName + '</br>';
              orderInfo.innerHTML += city + '</br>';
              orderInfo.innerHTML += mailNumber + '</br>';
              orderInfo.innerHTML += paymentType + '</br>';
              orderInfo.innerHTML += arrayCategory[i].products[j].name + '</br>';
              orderInfo.innerHTML += countProducts + '</br>';
              orderInfo.innerHTML += comment + '</br>';
              body.appendChild(orderInfo);
            })
          })
        })
      }
    })
  }
}
showCategories();


