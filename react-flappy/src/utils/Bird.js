import Sprite from './Sprite';

export default class Bird extends Sprite {
  constructor(canvas, imgUrl, maxFallSpeed, acceleration) {
    super(canvas, imgUrl);
    this.maxFallSpeed = maxFallSpeed ? maxFallSpeed : +10;
    this.acceleration = acceleration ? acceleration : 1;
  }

  reset() {
    this.axisY = 0;
    this.angle = 0;
  }

  renderFrame() {
    Sprite.prototype.renderFrame.call(this);
    this.makeBirdTiltAppropriately();
    this.makeBirdSlowAndFall();
  }

  makeBirdTiltAppropriately() {
    if (this.velocityY < 0) {
      this.angle = -15;
    } else if (this.angle < 70) {
      this.angle = this.angle + 4;
    }
  }

  makeBirdSlowAndFall() {
    if (this.velocityY < this.maxFallSpeed) {
      this.velocityY = this.velocityY + this.acceleration;
    }
  }

  isTouching(thing) {
    if (thing) {
      if (!this.visible || !thing.visible) {
        return false;
      }

      if (
        this.axisX >= thing.axisX + thing.image.width ||
        this.axisX + this.image.width <= thing.axisX
      ) {
        return false;
      }

      if (
        this.axisY >= thing.axisY + thing.image.height ||
        this.axisY + this.image.height <= thing.axisY
      ) {
        return false;
      }

      return true;
    }

    return false;
  }
}
