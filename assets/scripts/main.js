const productContainer = document.querySelector(".container").querySelector(".right")
const checkboxes = document.querySelectorAll(".roomfor input[type='checkbox']");
const anyCheckbox = document.getElementById("any");
const minPriceInput = document.querySelector(".search-price .min");
const maxPriceInput = document.querySelector(".search-price .max");
const minAreaforInput = document.querySelector(".look-area .min");
const maxAreaforInput = document.querySelector(".look-area .max");

const locationCheckboxes = document.querySelectorAll('.locate_c');


function renderProducts() {
  productContainer.innerHTML = '';

  let filteredProducts;
  if ( anyCheckbox.checked) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => {
      const roomCheckbox = document.getElementById(product.room.toString());
      return roomCheckbox.checked;
    });
  }

  

  const minPrice = parseInt(minPriceInput.value);
  const maxPrice = parseInt(maxPriceInput.value);
  filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

  const minArea = parseInt(minAreaforInput.value);
  const maxArea = parseInt(maxAreaforInput.value);
  filteredProducts = filteredProducts.filter(product => product.area >= minArea && product.area <= maxArea);
  

  filteredProducts.forEach(product => {
    const productDiv = generateProduct(product);
    productContainer.append(productDiv);
  });
}


function generateProduct(product){
    const card = document.createElement("div");
    card.innerHTML = `<div class="card">
    <img src="./assets/images/${product.image}" />
    <span> <span class="price">${product.price} AZN</span></span>
    <span> <span class="title">${product.location}</span></span>
    <span>
    <span><span class="rooms">${product.room} otaqli •</span> </span>
    <span><span class="area">${product.area} m2</span></span>
    
    </span>
</div>`;
   return card;  
}
renderProducts()

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', renderProducts);
});
anyCheckbox.addEventListener('change', renderProducts);



 const otaqSayi = document.getElementById('otaqSayi');
 const roomfor = document.querySelector('.roomfor');

    otaqSayi.addEventListener('click', function() {
        roomfor.classList.toggle('active');
    });

    minPriceInput.addEventListener("input", function() {
      if (parseInt(minPriceInput.value) > parseInt(maxPriceInput.value)) {
        maxPriceInput.value = minPriceInput.value;
      }
      renderProducts();
    });
    maxPriceInput.addEventListener("input", function() {
      if (parseInt(maxPriceInput.value) < parseInt(minPriceInput.value)) {
        minPriceInput.value = maxPriceInput.value;
      }
      renderProducts();
    });
    minAreaforInput.addEventListener("input", function() {
      if (parseInt(minAreaforInput.value) > parseInt(maxAreaforInput.value)) {
        maxAreaforInput.value = minAreaforInput.value;
      }
      renderProducts();
    });
    maxAreaforInput.addEventListener("input", function() {
      if (parseInt(maxAreaforInput.value) < parseInt(minAreaforInput.value)) {
        minAreaforInput.value = maxAreaforInput.value;
      }
      renderProducts();
    });
    
    // The Toggles
    let isOpenPrice = false;
    let isOpenArea = false;
    let isOpenLocate = false;
    const priceRange = document.getElementById("priceRange");
    const openRange = document.querySelector(".openRange");
    const areaRange = document.getElementById("areaRange");
    const openArea = document.querySelector(".openArea");
    const locate = document.getElementById("locate");
    const locate_for = document.querySelector(".locatefor");
    
    priceRange.addEventListener("click", function() {
        if (!isOpenPrice) {
            openRange.classList.add("active-range");
        } else {
            openRange.classList.remove("active-range");
        }
        isOpenPrice = !isOpenPrice;
    });

    areaRange.addEventListener("click", function() {
        if (!isOpenArea) {
            openArea.classList.add("active-area");
        } else {
            openArea.classList.remove("active-area");
        }
        isOpenArea = !isOpenArea;
    });
    locate.addEventListener("click", function() {
      if (!isOpenLocate) {
        locate_for.classList.add("active-location");
      } else {
        locate_for.classList.remove("active-location");
      }
      isOpenLocate = !isOpenLocate;
  });
    // For Price Filtering
    const minInput = document.querySelector(".min");
    minInput.value = 1;
    
    const maxInput = document.querySelector(".max");
    maxInput.value = 1000000;
    
    const minSpan = document.querySelector(".min-value");
    minSpan.innerText = minInput.value
    
    const maxSpan = document.querySelector(".max-value");
    maxSpan.innerText = maxInput.value
    
    minInput.addEventListener("change", (e) => {
      let value = e.target.value;
    
      if (parseInt(value) > parseInt(maxInput.value)) {
        console.log("hey");
        value = maxInput.value;
        e.target.value = maxInput.value;
      }
    
      minSpan.innerText = value;
    });
    
    maxInput.addEventListener("change", (e) => {
      console.log(e.target.value);
    
      let value = e.target.value;
    
      if (parseInt(value) < parseInt(minInput.value)) {
        value = minInput.value;
        e.target.value = minInput.value;
      }
    
      maxSpan.innerText = value;
    });
    
//  For Area Filtering
const minAreaInput = document.querySelector(".look-area .min");
minAreaInput.value = 1;

const maxAreaInput = document.querySelector(".look-area .max");
maxAreaInput.value = 1000;

const minAreaSpan = document.querySelector(".look-area .min-value");
minAreaSpan.innerText = minAreaInput.value;

const maxAreaSpan = document.querySelector(".look-area .max-value");
maxAreaSpan.innerText = maxAreaInput.value;

minAreaInput.addEventListener("change", (e) => {
  let value = e.target.value;

  if (parseInt(value) > parseInt(maxAreaInput.value)) {
    value = maxAreaInput.value;
    e.target.value = maxAreaInput.value;
  }

  minAreaSpan.innerText = value;
});

maxAreaInput.addEventListener("change", (e) => {
  let value = e.target.value;

  if (parseInt(value) < parseInt(minAreaInput.value)) {
    value = minAreaInput.value;
    e.target.value = minAreaInput.value;
  }

  maxAreaSpan.innerText = value;
});


