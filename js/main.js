var txt_header = `I'm Ahmed Tannoubi a Full Stack Developer.`,
  header_element = document.getElementById("txt_header"),
  j = 0;

var write_method = setInterval(function () {
  header_element.textContent += txt_header[j];
  j++;
  if (j > txt_header.length - 1) {
    clearInterval(write_method);
  }
}, 100);

function scrumPreview() {
  window.open(
    "https://www.scrumstudy.com/certification/verify?type=SFC&number=917999",
    "_blank" // <- This is what makes it open in a new window.
  );
}
function viewCv() {
  window.open(
    "https://drive.google.com/file/d/1NRyhcZNkaJL-8Dpz0miPjAupneUenZam/view?usp=share_link",
    "_blank" // <- This is what makes it open in a new window.
  );
}

function changeImage(element) {
  var main_prodcut_image = document.getElementById("main_product_image");
  main_prodcut_image.src = element.src;
}

/*****************(model-zoom)********************* */
let btn_zoom = document.querySelectorAll(".btn_zoom"),
  div_zoom = document.getElementById("zoom_image"),
  hide_div = document.getElementById("ovarlay");

let src_img_1 = [
    `images/dentiste/2.PNG`,
    `images/dentiste/4.PNG`,
    `images/dentiste/1.PNG`,
    `images/dentiste/3.PNG`,
  ],
  src_img_2 = [
    `images/vodSF/1.PNG`,
    `images/vodSF/2.PNG`,
    `images/vodSF/3.PNG`,
    `images/vodSF/4.PNG`,
  ];

btn_zoom.forEach((element) => {
  element.onclick = function () {
    div_zoom.style.display = "block";
    var result;
    if (this.id == "btn_1") {
      result = src_img_2;
    } else if (this.id == "btn_2") {
      result = src_img_1;
    }
    let content_table = document.querySelector(".model-zoom .carousel-inner");
    content_table.innerHTML = " ";
    let tr = document.createElement("div");
    let temaple = `
    <div class="carousel-item active">
      <img src="${result[0]}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="${result[1]}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div class="carousel-item">
    <img src="${result[2]}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">

    </div>
  </div>
  <div class="carousel-item">
  <img src="${result[3]}" class="d-block w-100" alt="...">
  <div class="carousel-caption d-none d-md-block">

  </div>
</div>
    `;
    tr.innerHTML = temaple;
    content_table.append(tr);
  };
});

hide_div.onclick = function () {
  div_zoom.style.display = "none";
};

/************(top btn)**************/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

var myNav = document.getElementById("nav_fixed");
var protfolioNav = document.getElementById("portfolio-nav");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // if (
  //   document.body.scrollTop > 2500 ||
  //   document.documentElement.scrollTop > 2500
  // ) {
  //   mybutton.style.display = "block";
  // } else {
  //   mybutton.style.display = "none";
  // }

  if (
    document.body.scrollTop >= 580 ||
    document.documentElement.scrollTop >= 580
  ) {
    myNav.classList.add("scroll");
    protfolioNav.classList.add("protfolio-nav");
  } else {
    myNav.classList.remove("scroll");
    protfolioNav.classList.remove("protfolio-nav");
  }
}
document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.code;
  }
  if (isEscape) {
    div_zoom.style.display = "none";
  }
};
