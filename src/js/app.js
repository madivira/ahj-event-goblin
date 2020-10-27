import MovingGoblin from './MovingGoblin';
import GamePlay from './GamePlay';

const clickGoblin = new GamePlay();

setInterval(MovingGoblin.showImage, 1000);
clickGoblin.eventClick();
