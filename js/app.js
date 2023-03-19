let forSale = true;

// if (forSale) {
//   return `<div class="for-sale"> For Sale </div>`;
// }

// if (forRent) {
//   return `<div class="for-rent">For Rent </div>`;
// }

// object for dynamic products can be filled later with api

const cardsDetails = [
  {
    cardName: "Villa In Hialeah, Dade County",
    cardPrice: 500000,
    cardDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.",
    cardsProductsDetails: 3500,
    beds: 3,
    rooms: 1,
    bathrooms: 1,
  },
  {
    cardName: " Dade County",
    cardPrice: 700000,
    cardDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.",
    cardsProductsDetails: 3400,
    beds: 4,
    rooms: 2,
    bathrooms: 2,
  },
  {
    cardName: "Villa In Hialeah, Dade County",
    cardPrice: 800000,
    cardDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.",
    cardsProductsDetails: 3600,
    beds: 2,
    rooms: 3,
    bathrooms: 3,
  },
  {
    cardName: "Villa In Hialeah, Dade County",
    cardPrice: 8500000,
    cardDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.",
    cardsProductsDetails: 3500,
    beds: 3,
    rooms: 4,
    bathrooms: 4,
  },
];

// uploading cards from the object

let card = document.querySelector(".products");
let required = document.querySelectorAll("input");
for (let i = 0; i < cardsDetails.length; i++) {
  //   let subcontent = `
  // `;

  let cardContent = ` 
  <div class="cards d-flex-row" >
    <img src="./img/about-us.jpg" alt="" />
    
    <div class="cards-main">
    <h3>${cardsDetails[i].cardName}</h3>
        <span class="price">${cardsDetails[i].cardPrice.toLocaleString()}</span>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>
    </div>
    <p class="details">
    <span><strong>${cardsDetails[
      i
    ].cardsProductsDetails.toLocaleString()}</strong> Sq Ft </span>
    <span><strong>${cardsDetails[i].beds}</strong>  Beds </span>
    <span><strong>${cardsDetails[i].bathrooms}</strong>  Baths </span>
    <span><strong>${cardsDetails[i].rooms}</strong>  Rooms </span>
    </p>

    <button class="btn-send btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
      <i class="fas fa-shopping-cart"></i>
      Contact Us
    </button>

    </div>
 `;
  card.innerHTML += cardContent;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Start autoplaying automatically

let autoplayInterval = setInterval(function () {
  // Get element via id and click next

  document.getElementById("next").click();
}, 5000);

// responsive navbar func

function mobileResp() {
  let responsiveBtn = document.getElementById("myTopnav");
  if (responsiveBtn.className === "topnav") {
    responsiveBtn.className += " responsive";
  } else {
    responsiveBtn.className = "topnav";
  }
}
// onscroll change navbar color
window.onscroll = (e) => {
  let navbar = document.querySelector(".navbar");
  let navList = document.getElementsByClassName("nav-list");

  // adding bg and changing color on navbar

  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 580
  ) {
    navbar.style.background = "rgb(0 0 0 / 50%)";
    for (let i = 0; i < navList.length; i++) {
      navList[i].style.color = "#e7e7e7";
    }
  } else {
    navbar.style.background = "inherit";
    for (let i = 0; i < navList.length; i++) {
      navList[i].style.color = "#000";
    }
  }
};

// adding active class to navigation

$(document).ready(function () {
  $(".nav-list").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    mobileResp();
  });
});
