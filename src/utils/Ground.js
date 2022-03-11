export default class Ground {
  constructor(canvas, imgUrl, groundSpeed, scale) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.image = new Image();
    this.image.src = imgUrl;
    this.groundOffset = 0;
    this.groundSpeed = groundSpeed ? groundSpeed : -2;
    this.scale = scale ? scale : 1;
  }

  renderFrame() {
    if (this.groundOffset < -23) {
      this.groundOffset = 0;
    } else {
      this.groundOffset = this.groundOffset + this.groundSpeed;
      this.groundOffset = isNaN(this.groundOffset) ? 0 : this.groundOffset;
    }

    this.context.drawImage(
      this.image,
      this.groundOffset,
      this.canvas.height - this.image.height * this.scale,
      this.image.width * this.scale,
      this.image.height * this.scale
    );
  }
}
