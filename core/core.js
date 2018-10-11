
_FRAME_RATE_ = 60;

class Core {
    constructor() {
        setInterval(this.update, 1);
        setInterval(this.darw, 1000 / _FRAME_RATE_);
        setInterval(this.fixedUpdate, 1000 / _FRAME_RATE_);
    }

    update() {
    }

    fixedUpdate() {
    }

    draw() {
    }
}

class Canvas {
    createCanvas(id){
        $("body").append('<canvas id="'+ id + '" width="800" height="400" style="background-color:#666" ></canvas>');
    }
}
