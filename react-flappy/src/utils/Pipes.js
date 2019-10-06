import Sprite from './Sprite';

export default class Pipes {
  constructor(canvas, imgUrl, pipeSpeed) {
    this.canvas = canvas;
    this.imgUrl = imgUrl;
    this.pipe = null;
    this.pipeSpeed = pipeSpeed ? pipeSpeed : -2;
    this.items = [];

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
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 500, 100, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 800, 50, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1000, 250, 140)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1200, 150, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1600, 100, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 1800, 150, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2000, 200, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2200, 250, 120)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2400, 30, 100)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 2700, 300, 100)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 3000, 100, 80)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 3300, 250, 80)
    );
    pipes = pipes.concat(
      this.addPipe(canvas, imageUrl, pipeSpeed, pipe, 3600, 50, 60)
    );

    // Finish Line
    let finishLine = new Sprite(
      canvas,
      './end.png'
    );
    finishLine.axisX = 3900;
    finishLine.velocityX = pipeSpeed;
    pipes.push(finishLine);

    return pipes;
  }

  addPipe(canvas, imageUrl, pipeSpeed, pipe, axisX, topOfGap, gapWidth) {
    let pipes = [];

    // Top Pipe
    let topPipe = new Sprite(canvas, imageUrl);
    topPipe.axisX = axisX;
    topPipe.axisY = topOfGap - pipe.height;
    topPipe.velocityX = pipeSpeed;
    pipes.push(topPipe);

    // Bottom Pipe
    let bottomPipe = new Sprite(canvas, imageUrl);
    bottomPipe.flipV = true;
    bottomPipe.axisX = axisX;
    bottomPipe.axisY = topOfGap + gapWidth;
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
