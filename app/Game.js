import { Quote } from "./Quote.js";
export class Game {
  currentStep = 0;
  lastStep = 8;
  quotes = [
    {
      text: "pan tadeusz",
      category: "Utwór Literacki",
    },
    {
      text: "janko muzykant",
      category: "Utwór literacki",
    },
    {
      text: "akademia pana kleksa",
      category: "Film",
    },
    {
      text: "ogniem i mieczem",
      category: "Film",
    },
  ];
  constructor({
    lettersWrapper,
    categoryWrapper,
    wordWrapper,
    outputWrapper,
  } = obj) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }
  guess(letter, e) {
    e.target.disabled = true;
    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName("step")[
        this.currentStep
      ].style.opacity = 1;
    }
  }
  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", (e) => {
        this.guess(label, e);
      });
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
  }

  start() {
    document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
    this.drawLetters();
    this.drawQuote();
  }
}
