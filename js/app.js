const categoryList = document.getElementsByClassName('category-list')[0];
const productsList = document.getElementsByClassName('products-list')[0];
const productDescription = document.getElementsByClassName('product-description')[0];
const productPrice = document.getElementsByClassName('product-price')[0];
const btnBuy = document.getElementsByClassName('btn-buy')[0];
const form = document.getElementsByTagName('form')[0];
const btnConfirm = document.getElementById('btn-confirm');
const errorMessage = document.getElementsByClassName('error')[0];
const orderInfo = document.getElementById('order-info');
const myOrdersBtn = document.getElementById('btn-orders');
const main = document.getElementsByTagName('main')[0];
const userOrders = document.getElementById('user-orders');

function selectCategory (category, itemCategory) {
  itemCategory.addEventListener('click', function () {
    productsList.innerHTML = '';
    productDescription.innerHTML = '';
    btnBuy.classList.add('hidden');
    form.classList.add('hidden');
    showProduts(category.products)
  })
}

function saveOrder (order) {
  let orders = localStorage.getItem('orders');
  if (orders) {
    orders = JSON.parse(orders);
    orders.push(order);
  } else {
    orders = [order];
  }
  localStorage.setItem('orders', JSON.stringify(orders));
}

function confirmOrder (product) {
  btnConfirm.addEventListener('click', function () {
    const formObj = document.forms[0];
    const fullName = formObj.elements.fullName.value;
    const city = formObj.elements.city.value;
    const mailNumber = formObj.elements.mailNumber.value;
    const paymentType = formObj.elements.paymentType.value;
    const countProducts = formObj.elements.countProducts.value;
    const comment = formObj.elements.comment.value;

    if (!fullName || !city || !mailNumber || !paymentType || !countProducts) {
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
      form.classList.add('hidden');
      orderInfo.innerHTML = `
        <span class="order-info-label">Full Name:</span> ${fullName} </br>
        <span class="order-info-label">City:</span> ${city} </br>
        <span class="order-info-label">Mail number:</span> ${mailNumber} </br>
        <span class="order-info-label">Payment type:</span> ${paymentType} </br>
        <span class="order-info-label">Product name:</span> ${product.name} </br>
        <span class="order-info-label">Count products:</span> ${countProducts} </br>
        <span class="order-info-label">Comment:</span> ${comment}
      `;
      const order = {
        fullName,
        city,
        mailNumber,
        paymentType,
        productName: product.name,
        price: countProducts * product.price,
        countProducts,
        comment,
        date: Date.now(),
      };
      saveOrder(order);
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
      productPrice.innerHTML = products[j].price + '$';
      btnBuy.classList.remove('hidden');
      form.classList.add('hidden');

      btnBuy.onclick = function() {
        form.classList.remove('hidden');
        confirmOrder(products[j]);
      };
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

myOrdersBtn.addEventListener('click', function () {
  main.classList.add('hidden');
  userOrders.innerHTML = '';

  let orders = localStorage.getItem('orders');
  orders = JSON.parse(orders);

  for (let i = 0; i < orders.length; i++)  {
    const orderElem = document.createElement('div');
    orderElem.classList.add('user-order-info');

    const date = new Date(orders[i].date);
    orderElem.innerHTML = `
      ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} 
      ${date.getHours()}:${date.getMinutes()}  -  "${orders[i].productName}" ${orders[i].price}$
    `;

    const bntDelete = document.createElement('button');
    bntDelete.innerHTML = 'Delete';
    bntDelete.addEventListener('click', function(event) {
      event.stopPropagation();
      orders.splice(i, 1);
      localStorage.setItem('orders', JSON.stringify(orders));
      orderElem.remove();
    })
    orderElem.appendChild(bntDelete);
    userOrders.appendChild(orderElem);
    
    const orderElemDetails = document.createElement('p');
      orderElemDetails.innerHTML += `
      </br>
      <span class="order-info-label">Full Name:</span> ${orders[i].fullName} </br>
      <span class="order-info-label">City:</span> ${orders[i].city} </br>
      <span class="order-info-label">Mail number:</span> ${orders[i].mailNumber} </br>
      <span class="order-info-label">Payment type:</span> ${orders[i].paymentType} </br>
      <span class="order-info-label">Product name:</span> ${orders[i].productName} </br>
      <span class="order-info-label">Count products:</span> ${orders[i].countProducts} </br>
      <span class="order-info-label">Comment:</span> ${orders[i].comment}
    `;
    
    orderElemDetails.classList.add('hidden');
    orderElem.appendChild(orderElemDetails);
    
    orderElem.addEventListener('click', function () {
      orderElemDetails.classList.toggle('hidden');
    });
  }
})




