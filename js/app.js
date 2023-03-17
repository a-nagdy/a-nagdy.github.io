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
  let subcontent = `<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h2>Thank Your For Reaching to US</h2>
      <p>Kindly Fill this form</p>
      <form class="login">
        <label for="fname">First Name:</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Please Enter Your First Name"
          required
        />
        <label for="lname">Last Name:</label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Please Enter Your Last Name"
          required
        />
        <label for="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Please Enter Your Email"
          required
        />
        <label for="phone">phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="Please Enter Your Mobile Number"
          required
        />
        </form>
       
        <div class="modal-footer">
        <button class="btn btn-primary" id="submit" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">submit</button>
      </div>
      </div>
     
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
`;

  let cardContent = ` 
  <div class="cards d-flex-row" >
    <img src="./img/about-us.jpg" alt="" />
    
    <div class="cards-main">
    <h3>${cardsDetails[i].cardName}</h3>
        <span class="price">${cardsDetails[i].cardPrice}</span>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta magni amet atque doloremque velit unde adipisci omnis hic quaerat.</p>
    </div>
    <p class="details">
    <span><strong>${cardsDetails[i].cardsProductsDetails}</strong> Sq Ft </span>
    <span><strong>${cardsDetails[i].beds}</strong>  Beds </span>
    <span><strong>${cardsDetails[i].bathrooms}</strong>  Baths </span>
    <span><strong>${cardsDetails[i].rooms}</strong>  Garages </span>
    </p>

    <button class="btn-send" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
      <i class="fas fa-shopping-cart"></i>
      Contact Us
    </button>

    </div>
    ${subcontent}
 `;
  card.innerHTML += cardContent;

  // function req() {
  //   if (!required.value === 0) {
  //     alert("test");
  //   } else {
  //     alert(true);
  //   }
  // }
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

// // Stop function added to button
// function stopAutoplay() {
//   // Stop the autoplay
//   clearInterval(autoplayInterval);
// }

// responsive navbar func

function mobileResp() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// onscroll change navbar color
window.onscroll = (e) => {
  let navbar = document.querySelector(".navbar");
  // console.log(scrollY);
  // console.log(document.body.scrollTop);
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 580
  ) {
    // console.log(e);
    navbar.style.background = "rgb(0 0 0 / 50%)";
  } else {
    navbar.style.background = "inherit";
  }
};

$(document).ready(function () {
  $(".nav-list").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    mobileResp();
  });
});
