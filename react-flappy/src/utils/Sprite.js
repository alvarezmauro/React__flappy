export default class Sprite {
  constructor(canvas, imgUrl) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d');
    this.axisX = 0;
    this.axisY = 0;
    this.visible = true;
    this.velocityX = 0;
    this.velocityY = 0;
    this.image = new Image();
    this.image.src = imgUrl || '';
    this.angle = 0;
    this.flipV = false;
    this.flipH = false;
  }

  renderFrame() {
    if (this.context) {
      this.context.save();
      this.context.translate(
        this.axisX + this.image.width / 2,
        this.axisY + this.image.height / 2
      );
      this.context.rotate((this.angle * Math.PI) / 180);
      if (this.flipV) {
        this.context.scale(1, -1);
      }
      if (this.flipH) {
        this.context.scale(-1, 1);
      }
      if (this.visible)
        this.context.drawImage(
          this.image,
          -this.image.width / 2,
          -this.image.height / 2
        );
      this.axisX = this.axisX + this.velocityX;
      this.axisY = this.axisY + this.velocityY;
      this.context.restore();
    }
  }
}
