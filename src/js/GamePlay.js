export default class GamePlay {
  constructor() {
    this.hit = 0;
    this.pass = 0;
    this.clickOrNo = false;
  }

  eventClick() {
    const column = document.getElementsByClassName('game-board')[0];

    column.addEventListener('click', (event) => {
      this.clickOrNo = true;
      event.preventDefault();
      this.checkClick(event.target);
    });

    setInterval(() => {
      if (this.clickOrNo === false) {
        this.scoring(false);
        this.clickOrNo = false;
      }
    }, 1000);
  }

  checkClick(clickTarget) {
    const column = document.getElementsByClassName('game-board')[0];
    const imgGoblin = column.getElementsByClassName('goblin')[0];

    if (clickTarget === imgGoblin) {
      this.scoring(true);
    } else {
      this.scoring(false);
    }
  }

  scoring(score) {
    const hit = document.getElementsByClassName('hit-score')[0];
    const pass = document.getElementsByClassName('pass-score')[0];
    if (score) {
      this.hit += 1;
      hit.textContent = this.hit;
    } else {
      this.pass += 1;
      pass.textContent = this.pass;
      if (GamePlay.checkLoss(this.pass, this.hit)) {
        this.hit = 0;
        this.pass = 0;
        hit.textContent = this.hit;
        pass.textContent = this.pass;
      }
    }
  }

  static checkLoss(pass, hit) {
    if (pass === 5) {
      alert(`Game Over! Your account ${hit}`);
      return 1;
    }
    return 0;
  }
}
