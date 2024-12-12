export default class Scene {
  constructor(name, width, height, background) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.name = name;
    this.objects = [];
    this.body = document.body;
    this.background = background;
  }
  render() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.body.appendChild(this.canvas);
    this.ctx.beginPath();
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();
    this.objects.forEach((object) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = object.color;
      const drawMode = object.drawMode;
      if (drawMode === 'rect' || drawMode === 'rectangle') {
        this.ctx.rect(object.x, object.y, object.width, object.height);
        this.ctx.fill()
        if (object.stroke) this.ctx.stroke()
      } else if (drawMode === 'circle' || drawMode === 'arc') {
        this.ctx.arc(
          object.x,
          object.y,
          object.radius,
          object.startAngle,
          object.endAngle
        );
        this.ctx.fill();
        if (object.stroke) this.ctx.stroke();
      }
    });
    this.ctx.closePath();
  }
  removeRender() {
    this.body.removeChild(this.canvas);
  }
  addObject(object) {
    this.objects.push(object);
  }
}
