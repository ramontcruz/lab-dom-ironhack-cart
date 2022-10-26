// ITERATION 1


function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = document.querySelector('.quantity input');
  let subtotal = parseFloat(price.innerHTML)*quantity.valueAsNumber;
  let uSubtotal = product.querySelector('.subtotal span');
  uSubtotal.innerHTML = subtotal;
  return subtotal;
; 
  //... your code goes here
}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  console.log("single "+singleProduct);
  
  //const preco = document.getElementsByTagName('td');
    // ITERATION 2
  //... your code goes here
  const preco = document.getElementsByClassName('subtotal');
  const produtos = document.getElementsByClassName('product');

  for (let i=0;i<produtos.length;i++){
    updateSubtotal(produtos[i]);
  }


  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (let i=0;i<preco.length;i++){
    total += parseFloat(preco[i].textContent.replace(/[^0-9]/g,''));
  }
  let saidaTotal = document.querySelector('#total-value span');
  saidaTotal.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


