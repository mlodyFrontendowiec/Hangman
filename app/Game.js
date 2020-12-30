export class Game {
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
  }
  guess(letter) {
    console.log(letter);
  }
  start() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => {
        this.guess(label);
      });
      this.lettersWrapper.appendChild(button);
    }
  }
}
