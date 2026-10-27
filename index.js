const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to carpet.", author: "Chris Heilmann" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "My code works, I don't know why.", author: "Anonymous Developer" },
  { text: "Debugging is like being a detective in a crime movie where you are also the murderer.", author: "Filipe Fortes" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Software comes from heaven when you have good hardware.", author: "Ken Thompson" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "I love my computer because all my friends live inside it.", author: "Programmer Life" }
];
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.querySelectorAll("button")[0];
const tweetBtn = document.querySelectorAll("button")[1];

let remainingQuotes = [...quotes]; // copy bana liya

function getQuote() {
  // Agar saare quotes dikh gaye to list ko fir se bhar do
  if (remainingQuotes.length === 0) {
    remainingQuotes = [...quotes];
  }

  // Random index remaining list se
  const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
  const selectedQuote = remainingQuotes[randomIndex];

  // Screen pe dikhao
  quoteElement.innerText = selectedQuote.text;
  authorElement.innerText = "- " + selectedQuote.author;

  // Jo dikh gaya use list se hata do
  remainingQuotes.splice(randomIndex, 1);
}

function tweetQuote() {
  const tweetText = `"${quoteElement.innerText}" ${authorElement.innerText}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
}

newQuoteBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweetQuote);

getQuote(); // pehli baar
