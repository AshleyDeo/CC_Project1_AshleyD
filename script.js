//------CLASSES----------------------------------
class Firework_1 {
    constructor() {
        this.xpos = 0;
        this.ypos = 0;
        this.rad = 10; //radius
        this.run = false; //bool for update to run contents
        this.blow = false; //bool for explosion
        this.splodex = 20; //position x for explosion particles
        this.splodeSpd = 1; //speed of explosion particles
        //this.alpha = 255;
    }

    update() {
        if (this.run) { //if mouse clicked run explosion
            this.grow();
        }
    }

    grow() { //grows explosion particle
        push();
        //console.log(this.blow);
        translate(this.xpos, this.ypos); //center at mouse
        if (this.blow == false) { 
            fill(255,200,100);
            stroke(200,100,100);
            strokeWeight(3);
            ellipse(0, 0, this.rad);
            this.rad += 10;
            if (this.rad > 50) {
                this.blow = true;
                this.rad = 10;
            }
        } else {
            this.explode();
        }
        pop();
    }
    explode() {
        if (this.splodex < 400) {
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    push();
                    rotate(degrees(i * 15 + j));
                    noStroke();
                    strokeWeight(2);
                    fill(255, 200, 200);
                    ellipse(this.splodex, this.splodex / 2, 10);
                    pop();
                    
                }
                this.splodex++;
            }
        } else {
            this.run = false; //stop running and reset vars
            this.blow = false;
            this.splodex = 20;
        }
    }
}

class Firework_2 {
    constructor(x,y,ys,n) {
        this.xpos = x;
        this.ypos = y;
        this.yStop = ys; // position y to stop at
        this.rad = 10; //radius
        this.blow = false;
        this.splodex = 20;  //particle position x
        this.splodey = 20; //particle position y
        this.splodeSpd = 2; //explosion particle speed
        //this.falling = false;
        this.splodeNum = n; //particle type
    }

    update() {
        this.grow();
    }

    grow() {
        push();
        translate(this.xpos, this.ypos);
        if (this.ypos > this.yStop) {
            fill(random(150, 255),random(50,150),random(0,100));
            noStroke();
            ellipse(0, 0, this.rad);
            this.ypos -= 10;
            this.rad += 0.5;
        } else {
            this.rad = 10;
            this.explode();
        }
        pop();
        /*if (this.falling) {
            this.fall();
        }*/
    }
    explode() {
        if (this.splodex < 300) {
            if (this.splodeNum == 0) {
                for (let i = 0; i < 8; i++) {
                    push();
                    rotate(degrees(i * 20));
                    stroke(255, 0, 0);
                    strokeWeight(2);
                    fill(255, 200, 200);
                    rect(this.splodex/2, this.splodey/2, 10);
                    pop();
                    this.splodex += this.splodeSpd;
                    this.splodey += this.splodeSpd;
                }
            } else if (this.splodeNum == 1) {
                for (let i = 0; i < 6; i++) {
                    push();
                    rotate(degrees(i * 35));
                    stroke(200, 100, 200);
                    strokeWeight(2);
                    fill(100, 100, 255);
                    ellipse(this.splodex, this.splodex, 60);
                    pop();
            
                    push();
                    rotate(degrees(i * 40));
                    stroke(200, 100, 200);
                    strokeWeight(2);
                    fill(200, 0, 100);
                    rect(this.splodex, this.splodex, 30);
                    pop();
                    this.splodex += this.splodeSpd;
                    this.splodey += this.splodeSpd;
                }
            } else if (this.splodeNum == 2) {
                for (let i = 0; i < 7; i++) {
                    push();
                    rotate(degrees(i * 30));
                    stroke(100, 100, 100);
                    strokeWeight(2);
                    fill(100, 255, 100);
                    rect(this.splodex - 20, this.splodey - 10, 30);
                    pop();
                    this.splodex++;
                    this.splodey++;
                }
            }
        } else if (this.splodey < 400) {
            if (this.splodeNum == 0) {
                for (let i = 0; i < 8; i++) {
                    push();
                    rotate(degrees(i * 20));
                    stroke(255, 0, 0);
                    strokeWeight(2);
                    fill(255, 200, 200);
                    rect(this.splodex, this.splodey, 10);
                    pop();
                    this.splodey += this.splodeSpd;
                }
            } else if (this.splodeNum == 1) {
                for (let i = 0; i < 6; i++) {
                    push();
                    rotate(degrees(i * 35));
                    stroke(200, 100, 200);
                    strokeWeight(2);
                    fill(100, 100, 255);
                    ellipse(this.splodex, this.splodey, 60);
                    pop();
                    this.splodex += this.splodeSpd;
                    this.splodey += this.splodeSpd;
                }
            } else if (this.splodeNum == 2) {
                for (let i = 0; i < 7; i++) {
                    push();
                    rotate(degrees(i * 30));
                    stroke(100, 100, 100);
                    strokeWeight(2);
                    fill(100, 255, 100, 255/2);
                    rect(this.splodex - 20, this.splodey - 10, 20);
                    pop();
                    this.splodex += 1;
                    this.splodey += 1;
                }
            }
        } else {
            this.splodex = 20;
            this.splodey = 20;
            this.splodeNum = Math.floor(Math.random() * 3);
            this.xpos = random(20, width - 20);
            this.ypos = height;
            this.yStop = random(20, height / 2)
        }
    }

    fall() {
        if (this.fallNum < 60) {
            console.log(this.ypos);
            push();
            translate(this.xpos, this.ypos);
            for (let i = 0; i < 7; i++) {
                rotate(degrees(i * 30));
                stroke(100, 100, 100);
                strokeWeight(2);
                fill(100, 255, 100);
                ellipse(this.splodex - 20, this.splodex - 10, 30);
            }
            pop();
            this.fallNum++;
            this.ypos += 5;
        } else {
            this.splodex = 20;
            this.splodeNum = Math.floor(Math.random() * 3);
            this.fallNum = 0;
            this.falling = false;
            this.xpos = random(20, width - 20);
            this.ypos = height;
            this.yStop = random(20, height / 2)
        }
    }
}

class ShootingStar {
    consrtuctor(x,y,xs,ys,r) {
        this.xpos = x;
        this.ypos = y;
        this.xspd = xs;
        this.yspd = ys;
        this.rad = r;
        this.run = false;
        this.blow = false;
        this.splodex = 20;
    }
    update() {
        if (this.run) {
            this.grow();
        } else {
            console.log(this.xpos);
            this.xpos += this.xs;
            this.ypos += this.ys;
            fill(255, 200, 100);
            noStroke();
            ellipse(this.xpos, this.ypos, this.rad);
        }
    }

    grow() {
        push();
        //console.log(this.blow);
        translate(this.xpos, this.ypos);
        if (this.blow == false) {
            fill(255, 200, 100);
            noStroke();
            ellipse(0, 0, this.rad);
            this.rad += 10;
            if (this.rad > 50) {
                this.blow = true;
                this.rad = 10;
            }
        } else {
            this.explode();
        }
        pop();
    }
    explode() {
        if (this.splodex < 200) {
            for (let i = 0; i < 8; i++) {
                push();
                rotate(degrees(i * 20));
                stroke(255, 0, 0);
                strokeWeight(2);
                fill(255, 200, 200);
                rect(this.splodex, this.splodex, 10);
                pop();
                this.splodex++;
            }
        } else {
            this.run = false;
            this.blow = false;
            this.splodex = 20;
        }
    }
}

//------GLOBAL VARS---------------------------------
let mouseFires = [5];
let mouseIndex = 0;
let fires = [10]
let star_1;

//------ FUNCTIONS-----------------------------------
function setup() {
    let canvas = createCanvas(windowWidth - 20, windowHeight - 20);

    for (let i = 0; i < 5; i++) {
        mouseFires[i] = new Firework_1();
    }
    for (let i = 0; i < 10; i++) {
        fires[i] = new Firework_2(random(20, width - 20), height, random(20, height * 3 / 4), Math.floor(Math.random() * 3));
    }

    star_1 = new ShootingStar(random(20, width-20), random(20, height - 20), 0, 0, random(20,30))
}

function draw() {
    background(0,0,70);
    for (let i = 0; i < 5; i++) {
        mouseFires[i].update();
    }
    for (let i = 0; i < 10; i++) {
        fires[i].update();
    }
}

function windowResized() {
    resizeCanvas(windowWidth - 20, windowHeight - 20);
}

function mouseClicked() {
    mouseFires[mouseIndex].xpos = mouseX;
    mouseFires[mouseIndex].ypos = mouseY;
    mouseFires[mouseIndex].run = true;
    mouseIndex++;
    if (mouseIndex >= 5) {
        mouseIndex = 0;
    }
}

function mouseMoved() {
    if (star_1.xpos + star_1.rad < mouseX && star_1.xpos - star_1.rad > mouseX) {
        if (star_1.ypos + star_1.rad < mouseY && star_1.ypos - star_1.rad > mouseY) {
            star_1.blow = true;
        }
    }
}

// Adjective: Explosive