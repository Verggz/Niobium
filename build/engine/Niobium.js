"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NioRenderer_js_1 = require("./rendering/NioRenderer.js");
const View_js_1 = require("./rendering/area/View.js");
const Entity_js_1 = require("./model/Entity.js");
const Keyboard_js_1 = require("./input/Keyboard.js");
const Vector2f_js_1 = require("./math/Vector2f.js");
const Mouse_js_1 = require("./input/Mouse.js");
const fpselement = document.querySelector("#fpscounter");
class Niobium {
    constructor() {
        this.prevTime = 0;
        this.canvas = document.querySelector("#maincanvas");
        this.gl = this.canvas.getContext("webgl2");
        this.view = new View_js_1.View(this.gl.canvas.width, this.gl.canvas.height);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    init() {
        this.entities = [new Entity_js_1.Entity(this.gl, this.view, 0, 0, `${__dirname}/../assets/test2.png`), new Entity_js_1.Entity(this.gl, this.view, 640, 360), new Entity_js_1.Entity(this.gl, this.view, -100, 0)];
        this.keyboard = new Keyboard_js_1.Keyboard();
        this.mouse = new Mouse_js_1.Mouse();
    }
    updateScreen() {
        var canvas = document.querySelector("#maincanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var gl = canvas.getContext("webgl2");
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        this.view.updateView(window.innerWidth, window.innerHeight);
        //console.log("yes")
    }
    run() {
        this.keyboard.update(window);
        this.mouse.update(this.canvas);
        this.update(0);
    }
    update(time) {
        var deltaTime = (time - this.prevTime) * 0.001;
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        if (this.keyboard.isKeyDown("w") == true) {
            this.entities[0].transform.addPosition(0, 100 * deltaTime);
        }
        if (this.mouse.buttons[0] == true) {
            this.entities[0].transform.setPosition(this.mouse.screenToView(this.view).x(), this.mouse.screenToView(this.view).y());
        }
        console.log(`x: ${this.mouse.screenToView(this.view).x()} y: ${this.mouse.screenToView(this.view).y()}`);
        if (this.keyboard.isKeyDown("a") == true) {
            this.entities[0].transform.addPosition(100 * deltaTime, 0);
        }
        if (this.keyboard.isKeyDown("s") == true) {
            this.entities[0].transform.addPosition(0, -100 * deltaTime);
        }
        if (this.keyboard.isKeyDown("d") == true) {
            this.entities[0].transform.addPosition(-100 * deltaTime, 0);
        }
        //this.view.followEntity(this.entities[0])
        if (this.keyboard.isKeyDown("l") == true) {
            this.view.pos.v[0] += -50 * deltaTime;
        }
        if (this.keyboard.isKeyDown("j") == true) {
            this.view.pos.v[0] += 50 * deltaTime;
        }
        if (this.keyboard.isKeyDown("k") == true) {
            this.view.pos.v[1] += -50 * deltaTime;
        }
        if (this.keyboard.isKeyDown("i") == true) {
            this.view.pos.v[1] += 50 * deltaTime;
        }
        for (var i = 0; i < this.entities.length; i++) {
            if (Vector2f_js_1.Vector2f.distance(this.view.pos, this.entities[i].transform.position.scale(NioRenderer_js_1.NioRenderer.SCALE_SIZE, NioRenderer_js_1.NioRenderer.SCALE_SIZE)) < NioRenderer_js_1.NioRenderer.POPIN_DISTANCE) {
                this.entities[i].draw();
            }
            //this.entities[i].draw();
            //this.entities[i].draw();
            //if()
        }
        fpselement.textContent = `FPS: ${1 / deltaTime}`;
        this.prevTime = time;
        requestAnimationFrame(this.update.bind(this));
    }
}
var niobium = new Niobium();
niobium.init();
window.addEventListener("resize", niobium.updateScreen.bind(niobium));
niobium.run();
