var tour = new Tour();

tour.addSteps([
  {
    element: "#index",
    placement: "bottom",
    title: "Welcome to the Phoenix",
    content: "Let me guide you!!",
  },
  {
    element: "#story",
    placement: "bottom",
    title: "History of the Phoenix",
    content: "First flight of Phoenix!!",
  },
  {
    element: "#courses",
    placement: "bottom",
    title: "Courses we offer",
    content: "Eggs of Phoenix!!",
  },
  {
    element: "#signup",
    placement: "bottom",
    title: "Become a part of Family",
    content: "Welcome to Family!!",
  },
  {
    element: "#faq",
    placement: "bottom",
    title: "Answers of your Queries",
    content: "Let's clear your Queries!!",
  },
  {
    element: "#contact",
    placement: "bottom",
    title: "Contact Details",
    content: "Let's talk!!",
  },
  {
    orphan: true,
    title: "End of Tour!!",
    content: "THANK YOU 😊",
  },
]);
tour.init();
tour.start();

// const popup = document.querySelectorAll("a.btn-success");
// const icons = document.querySelectorAll("i.fa");
// for (const button of popup) {
//   button.addEventListener("mouseover", () => {
//     console.log("we are in");
//     button.style.transition = "all 0.75s ease";
//     button.style.background = "#184d47";
//     button.style.transform = `perspective(500px) translateZ(100px)`;
//   });
//   button.addEventListener("mouseleave", () => {
//     console.log("we are out");
//     button.style.transition = `"all 0.75s ease"`;
//     button.style.background = `#5cb85c`;
//     button.style.transform = `perspective(0px) translateZ(0px)`;
//   });
// }

// for (const icon of icons) {
//   icon.addEventListener("mouseover", () => {
//     console.log("I am icon in");
//     icon.style.transition = "all 0.5s ease";
//     icon.style.color = "#222831";
//     icon.style.transform = `perspective(500px) translateZ(100px)`;
//   });
//   icon.addEventListener("mouseleave", () => {
//     console.log("I am icon out");
//     icon.style.transition = "all 0.5s ease";
//     icon.style.color = "#2969b1";
//     icon.style.transform = `perspective(0px) translateZ(0px)`;
//   });
// }
