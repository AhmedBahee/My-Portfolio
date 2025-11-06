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
function ocpPreview() {
  window.open(
    "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A72355C108C3207E4880B6C0D35CEA8E299DD075EE4CDE17D333F3A343F987D5",
    "_blank" // <- This is what makes it open in a new window.
  );
}
function ocp17Preview() {
  window.open(
    "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A72355C108C3207E4880B6C0D35CEA8E0E3D650B41E8490CD4D07072D0883A31",
    "_blank" // <- This is what makes it open in a new window.
  );
}
function viewCv() {
  window.open(
    "https://drive.google.com/file/d/1F0R2yhJ6g7KNyayDWro6NVYjSf_WhGo7/view?usp=sharing",
    "_blank" // <- This is what makes it open in a new window.
  );
}
function openPreview(id) {
  // Open a new tab
  var previewWindow = window.open("", "_blank");
  var videoPlayerHTML;
  // Construct the video player HTML
  if (id == 1) {
    videoPlayerHTML = `
      <video  width="100%" height="100%" controls>
          <source src="media/board.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
  `;
  } else if (id == 2) {
    videoPlayerHTML = `
      <video  width="100%" height="100%" controls>
          <source src="media/vxdelivery.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
  `;
  }

  // Write the HTML to the new tab
  previewWindow.document.write(videoPlayerHTML);

  // Make sure to close the document to finalize the HTML
  previewWindow.document.close();
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
  ],
  src_img_3 = [
    `images/sofprojets/2.png`,
    `images/sofprojets/1.png`,
    `images/sofprojets/3.png`,
    `images/sofprojets/4.png`,
    `images/sofprojets/5.png`,
  ];

btn_zoom.forEach((element) => {
  element.onclick = function () {
    div_zoom.style.display = "block";
    var result;
    if (this.id == "btn_1") {
      result = src_img_2;
    } else if (this.id == "btn_2") {
      result = src_img_1;
    } else if (this.id == "btn_3") {
      result = src_img_3;
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
