import Sprite from "./Sprite";

export default class Pipes {
  constructor(canvas, imgUrl, pipeSpeed, scale) {
    this.canvas = canvas;
    this.imgUrl = imgUrl;
    this.pipe = null;
    this.pipeSpeed = pipeSpeed ? pipeSpeed : -2;
    this.items = [];
    this.scale = scale ? scale : 1;

    this.initPipes();
  }

  reset() {
    this.initPipes();
  }

  initPipes() {
    this.items = [];
    this.pipe = new Image();
    this.pipe.onload = () => {
      this.items = this.addPipes(
        this.canvas,
        this.imgUrl,
        this.pipe,
        this.pipeSpeed
      );
    };
    this.pipe.src = this.imgUrl;
  }

  addPipes(canvas, imageUrl, pipe, pipeSpeed) {
    let pipes = [];

    // Pipes
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 400, 100, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 600, 50, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 800, 250, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1000, 150, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1200, 100, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1400, 150, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1600, 200, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1800, 250, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2000, 30, 100)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2200, 300, 100)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2400, 100, 80)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2600, 250, 80)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2800, 50, 60)
    );

    // Finish Line
    let finishLine = new Sprite(canvas, "./end.png", this.scale);
    finishLine.axisX = 3000;
    finishLine.velocityX = pipeSpeed;
    pipes.push(finishLine);

    return pipes;
  }

  addPipe(canvas, imageUrl, pipeSpeed, pipe, axisX, topOfGap, gapWidth) {
    let pipes = [];

    // Top Pipe
    let topPipe = new Sprite(canvas, imageUrl, this.scale);
    topPipe.axisX = axisX * this.scale;
    topPipe.axisY = topOfGap * this.scale - pipe.height * this.scale;
    topPipe.velocityX = pipeSpeed;
    pipes.push(topPipe);

    // Bottom Pipe
    let bottomPipe = new Sprite(canvas, imageUrl, this.scale);
    bottomPipe.flipV = true;
    bottomPipe.axisX = axisX * this.scale;
    bottomPipe.axisY = topOfGap * this.scale + gapWidth * this.scale;
    bottomPipe.velocityX = pipeSpeed;
    pipes.push(bottomPipe);

    return pipes;
  }

  renderFrame() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].renderFrame();
    }
  }
}
