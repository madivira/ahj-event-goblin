export default class MovingGoblin {
  constructor() {
    this.cellRaw = 0;
    this.cellCol = 0;
  }

  static init() {
    const gameboard = document.getElementsByClassName('game-board')[0];
    gameboard.style = 'cursor: url("https://github.com/madivira/ahj-event-goblin/blob/master/src/img/hammer.png"), auto';
    for (let i = 4; i > 0; i -= 1) {
      const raw = document.createElement('div');
      raw.className = `raw-${i}`;
      gameboard.insertBefore(raw, gameboard.firstChild);
      for (let j = 4; j > 0; j -= 1) {
        const col = document.createElement('div');
        col.className = `column col-${j}`;
        raw.insertBefore(col, raw.firstChild);
      }
    }

    const column = document.getElementsByClassName('column');
    for (const element of column) {
      element.style = 'width: 120px; height: 120px; color: blue; display: inline-block; border: 4px solid black; margin-left: 4px; ';
    }
  }

  static showImage() {
    const gameboard = document.getElementsByClassName('game-board')[0];
    if (this.cellCol && this.cellRaw) {
      gameboard.innerHTML = '';
    }
    MovingGoblin.init();

    const image = document.createElement('img');
    image.classList.add('goblin');
    image.style = ' display:flex;';
    image.setAttribute('src', 'https://raw.githubusercontent.com/madivira/ahj-dom/master/src/img/goblin.png');

    const rawRandom = Math.floor(Math.random() * 4 + 1);
    const colRandom = Math.floor(Math.random() * 4 + 1);

    if (`${this.cellRaw}${this.cellCol}` === `${rawRandom}${colRandom}`) {
      gameboard.innerHTML = '';
      MovingGoblin.showImage();
    } else {
      this.cellRaw = rawRandom;
      this.cellCol = colRandom;
      const rawImage = document.getElementsByClassName(`raw-${this.cellRaw}`)[0];
      const colImage = rawImage.getElementsByClassName(`col-${this.cellCol}`)[0];
      colImage.insertBefore(image, colImage.firstChild);
    }
  }
}
