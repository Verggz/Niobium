"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_js_1 = require("./model/Entity.js");
const Scene_js_1 = require("./model/Scene.js");
const NiobiumManager_js_1 = require("./NiobiumManager.js");
const fpselement = document.querySelector("#fpscounter");
class Niobium {
    constructor() {
        this.prevTime = 0;
        this.canvas = document.querySelector("#maincanvas");
        this.gl = this.canvas.getContext("webgl2");
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    init() {
        new NiobiumManager_js_1.NiobiumManager(this.gl, this.gl.canvas.width, this.gl.canvas.height);
        NiobiumManager_js_1.NiobiumManager.scenes.push(new Scene_js_1.Scene(this.gl, [new Entity_js_1.Entity(this.gl, 0, NiobiumManager_js_1.NiobiumManager.view, 0, 0, `${__dirname}/../assets/test2.png`), new Entity_js_1.Entity(this.gl, 0, NiobiumManager_js_1.NiobiumManager.view, -640, -360), new Entity_js_1.Entity(this.gl, 0, NiobiumManager_js_1.NiobiumManager.view, -100, 0)]));
        NiobiumManager_js_1.NiobiumManager.currentScene = NiobiumManager_js_1.NiobiumManager.scenes[0];
    }
    updateScreen() {
        var canvas = document.querySelector("#maincanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var gl = canvas.getContext("webgl2");
        gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        NiobiumManager_js_1.NiobiumManager.view.updateView(window.innerWidth, window.innerHeight);
        //console.log("yes")
    }
    run() {
        NiobiumManager_js_1.NiobiumManager.keyboard.update(window);
        NiobiumManager_js_1.NiobiumManager.mouse.update(this.canvas);
        this.update(0);
    }
    update(time) {
        var deltaTime = (time - this.prevTime) * 0.001;
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        //if(this.mouse.buttons[0] == true){
        //    //this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y()
        //    this.entities[0].transform.setPosition(this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y());
        //    console.log( this.entities[0].transform.position.x());
        //    console.log( this.entities[0].transform.position.y() );
        //
        //}
        //this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y()
        //console.log(`x: ${this.mouse.screenToView(this.view).x()} y: ${this.mouse.screenToView(this.view).y()}`);
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("w") == true) {
            NiobiumManager_js_1.NiobiumManager.currentScene.entities[0].transform.addPosition(0, -100 * deltaTime);
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("a") == true) {
            NiobiumManager_js_1.NiobiumManager.currentScene.entities[0].transform.addPosition(-100 * deltaTime, 0);
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("s") == true) {
            NiobiumManager_js_1.NiobiumManager.currentScene.entities[0].transform.addPosition(0, 100 * deltaTime);
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("d") == true) {
            NiobiumManager_js_1.NiobiumManager.currentScene.entities[0].transform.addPosition(100 * deltaTime, 0);
        }
        NiobiumManager_js_1.NiobiumManager.view.followEntity(NiobiumManager_js_1.NiobiumManager.currentScene.entities[0]);
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("l") == true) {
            NiobiumManager_js_1.NiobiumManager.view.pos.v[0] += -50 * deltaTime;
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("j") == true) {
            NiobiumManager_js_1.NiobiumManager.view.pos.v[0] += 50 * deltaTime;
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("k") == true) {
            NiobiumManager_js_1.NiobiumManager.view.pos.v[1] += -50 * deltaTime;
        }
        if (NiobiumManager_js_1.NiobiumManager.keyboard.isKeyDown("i") == true) {
            NiobiumManager_js_1.NiobiumManager.view.pos.v[1] += 50 * deltaTime;
        }
        NiobiumManager_js_1.NiobiumManager.currentScene.draw();
        NiobiumManager_js_1.NiobiumManager.currentScene.update(deltaTime);
        fpselement.textContent = `FPS: ${1 / deltaTime}`;
        this.prevTime = time;
        requestAnimationFrame(this.update.bind(this));
    }
}
var niobium = new Niobium();
niobium.init();
//window.addEventListener("resize",niobium.updateScreen.bind(niobium));
niobium.run();
