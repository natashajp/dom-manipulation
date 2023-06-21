let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.getElementById("main-title").innerHTML = "Dom Torretto's Website";

  // Part 2
document.querySelector("body").style.backgroundColor = "lightblue"

  // Part 3
const favThings = document.getElementById("favorite-things");

favThings.removeChild(favThings.lastElementChild);

  // Part 4
const specialTitle = document.querySelectorAll(".special-title"); i = specialTitle.length;

while(i--) {
  specialTitle[i].style.fontSize = "2rem";
}

  // Part 5
const pastRaces = document.getElementById("past-races");

if (pastRaces.hasChildNodes()) {
  pastRaces.removeChild(pastRaces.children[3])
}

  // Part 6
const li = document.createElement('li');
li.textContent = "Baltimore";
pastRaces.appendChild(li);

  // Part 7
const mainEl = document.querySelector(".main"); 

const div = document.createElement("div");
div.setAttribute("class", "blog-post");
div.innerHTML = "<h1 style = 'color: white'>Baltimore</h1> <p style = 'font-size: 1.5rem'>I RACED AROUND THE INNER HARBOR!</p>";
div.style.backgroundColor = "rebeccapurple";
mainEl.appendChild(div);

  // Part 8
const quoteTitle = document.querySelector("#quote-title");

quoteTitle.addEventListener("click", randomQuote);

  // Part 9
const blogPost = document.querySelectorAll(".blog-post");

for (let j = 0; j < blogPost.length; j++) {
  blogPost[j].addEventListener("mouseout", function() {
    blogPost[j].classList.toggle("purple");
  })
  blogPost[j].addEventListener("mouseenter", function() {
    blogPost[j].classList.toggle("red");
  })
}
 
// const blogPost = document.querySelectorAll(".blog-post"); j = blogPost.length;

// while(j--) {
//   blogPost[j].addEventListener("mouseout", function() {
//     blogPost[j].classList.toggle("purple")
//   })
//   blogPost[j].addEventListener("mouseenter", function() {
//     blogPost[j].classList.toggle("red")
//   })
// }

});
