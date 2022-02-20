"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_js_1 = require("./rendering/area/View.js");
const Entity_js_1 = require("./model/Entity.js");
class WebGLInterface {
    constructor() {
        this.canvas = document.querySelector("#maincanvas");
        this.gl = this.canvas.getContext("webgl2");
        this.view = new View_js_1.View(this.gl.canvas.width, this.gl.canvas.height);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.entities = [new Entity_js_1.Entity(this.gl, this.view, 200, 200), new Entity_js_1.Entity(this.gl, this.view, -200, -200), new Entity_js_1.Entity(this.gl, this.view, 50, 50)];
        //this.entities.push();
        //this.entities.push();
    }
    init() {
    }
    updateScreen() {
        var canvas = document.querySelector("#maincanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var gl = canvas.getContext("webgl2");
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        //console.log("yes")
    }
    run() {
        this.update(0);
    }
    update(time) {
        //console.log(this.renderer);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        //this.renderer.render(new Transform(500,-500));
        //console.log(this.view);
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        }
        this.view.updateView(window.innerWidth, window.innerHeight);
        //this.view.addPosition([100,0]);
        requestAnimationFrame(this.update.bind(this));
    }
}
var webglinterface = new WebGLInterface();
window.addEventListener("resize", webglinterface.updateScreen);
webglinterface.run();
