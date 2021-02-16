const popup = document.querySelectorAll("a.btn-success");
const icons = document.querySelectorAll(".social-media .fa");
const navItems = document.querySelectorAll("li.nav-item");
for (const button of popup) {
  button.addEventListener("mouseover", () => {
    console.log("we are in");
    button.style.transition = "all 0.75s ease";
    button.style.background = "#184d47";
    button.style.transform = `perspective(500px) translateZ(100px)`;
  });
  button.addEventListener("mouseleave", () => {
    console.log("we are out");
    button.style.transition = `"all 0.75s ease"`;
    button.style.background = `#5cb85c`;
    button.style.transform = `perspective(0px) translateZ(0px)`;
  });
}

for (const icon of icons) {
  icon.addEventListener("mouseover", () => {
    console.log("I am icon in");
    icon.style.transition = "all 0.5s ease";
    icon.style.color = "#222831";
    icon.style.transform = `perspective(500px) translateZ(100px)`;
  });
  icon.addEventListener("mouseleave", () => {
    console.log("I am icon out");
    icon.style.transition = "all 0.5s ease";
    icon.style.color = "#2969b1";
    icon.style.transform = `perspective(0px) translateZ(0px)`;
  });
}

for (const item of navItems) {
  item.addEventListener("mouseover", () => {
    console.log("I am Nav-item in");
    // item.style.fontWeight = "bold";
    item.style.transform = `perspective(500px) translateZ(100px)`;
  });
  item.addEventListener("mouseleave", () => {
    console.log("I am Nav-item out");
    // item.style.fontWeight = "light";
    item.style.transform = `perspective(0px) translateZ(0px)`;
  });
}

//TO hide the navbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
