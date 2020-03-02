//------CLASSES----------------------------------
class Something {
    constructor(x, y, sx, f) {
        this.posx = x;
        this.posy = y;
        this.scalex = sx;
        this.scaley = 100;
        this.dirx = 10;
        this.diry = 1;
        this.flip = f;

    }

    update() {
        fill(255);
        noStroke();
        ellipse(this.posx, this.posy, this.scalex, this.scaley);
        /*this.posx += this.dirx;
        if (this.posx >= windowWidth - 20 || this.posx <= 0) {
            this.dirx *= -1;
        }*/
        this.scalex += this.flip;
        if (this.scalex >= 100 || this.scalex <= 0) {
            this.flip *= -1;
        }
    }
}
class Something_2 {
    constructor(x, y, a, sp, c) {
        this.f_color = c;
        this.posx = x;
        this.posy = y;
        this.scalex = 100;
        this.scaley = 100;
        this.dirx = 10;
        this.diry = 1;
        this.flip = 1;
        this.dist = 40;
        this.angl = a;
        this.spd = sp;
        this.angle_accum = a;
    }

    update() {
        stroke(this.f_color);
        strokeWeight(3);
        push();
        translate(this.posx, this.posy);
        angleMode(DEGREES);
        rotate(this.angl);
        line(-this.dist / 2, -this.dist / 2, this.dist / 2, this.dist / 2);
        this.angl += this.spd;
        this.angle_accum += 5;
        if (this.angl % 170 == 0 || this.angl % 270 == 0) {
            this.spd *= -1;
            this.angle_accum = 0;
        }
        pop();
    }
}


//------GLOBAL VARS---------------------------------
let obj_1 = new Something(100, 100, 0, 5);
let obj_2 = new Something(400, 100, 90, -5);
//let obj_3 = new Something_2(500, 500);
let spins_1 = [];
let spins_2 = [];

//------ FUNCTIONS-----------------------------------
function setup() {
    let canvas = createCanvas(windowWidth - 20, windowHeight - 20);
    let angle = 45;
    for (let j = 0; j < 30; j++) {
        for (let i = 0; i < 15; i++) {
           /* if (j % 25 == 0 && i % 5 == 2) {
                spins_1.push(new Something_2(30 + (50 * j), -17 + (50 * i), i, 7, color(255, 150, 150)));
            } else if (j%13 == 2 && i % 3 == 0) {
                spins_1.push(new Something_2(15 + (50 * j), 15 + (30 * i), i, -13, color(150, 150, 255)));
            } else {
                spins_1.push(new Something_2(30 + (50 * j), 30 + (50 * i), angle, 5, color(255)));
            }*/
            spins_1.push(new Something_2(30 + (50 * j), 30 + (50 * i), angle, 5, color(255)));
            if (angle >= 360) {
                angle -= 360;
            }
            angle += 7;
        }
        angle -= 7 * 14;
    }
    /*angle = 45;
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 15; i++) {
            spins_2.push(new Something_2(780 + (50 * j), 30 + (50 * i), angle, 3));
            angle += 10;
        }
    }*/
}

function draw() {
    background(0);
    //obj_1.update();
    //obj_2.update();
    for (let i = 0; i < spins_1.length; i++) {
        spins_1[i].update();
    }
    for (let i = 0; i < spins_2.length; i++) {
        spins_2[i].update();
    }
}

function windowResized() {
    resizeCanvas(windowWidth - 20, windowHeight - 20);
}
