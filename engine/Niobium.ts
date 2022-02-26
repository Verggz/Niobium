import { NioRenderer } from "./rendering/NioRenderer.js";
import { View } from "./rendering/area/View.js";
import { Entity } from "./model/Entity.js";
import { Keyboard } from "./input/Keyboard.js";
import { Vector2f } from "./math/Vector2f.js";
import { Mouse } from "./input/Mouse.js";
import { Scene } from "./model/Scene.js";
import { NiobiumManager } from "./NiobiumManager.js";

const fpselement = document.querySelector("#fpscounter");

class Niobium{
    public gl: WebGL2RenderingContext;
    public canvas: HTMLCanvasElement;


    private prevTime:number = 0;

    constructor(){
        this.canvas = document.querySelector("#maincanvas") as HTMLCanvasElement;
        this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;

        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0,0,0,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public init(){
        new NiobiumManager(this.gl,this.gl.canvas.width,this.gl.canvas.height);

        NiobiumManager.scenes.push(new Scene(this.gl,[new Entity(this.gl,0,NiobiumManager.view,0,0,`${__dirname}/../assets/test2.png`),new Entity(this.gl,0,NiobiumManager.view,-640,-360),new Entity(this.gl,0,NiobiumManager.view,-100,0)]));
        NiobiumManager.currentScene = NiobiumManager.scenes[0];
    }

    public updateScreen(){
        var canvas = document.querySelector("#maincanvas") as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        

        var gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
        gl.viewport(0,0,window.innerWidth,window.innerHeight);
        NiobiumManager.view.updateView(window.innerWidth,window.innerHeight);
        //console.log("yes")
    }

    public run(){
        NiobiumManager.keyboard.update(window);
        NiobiumManager.mouse.update(this.canvas);
        this.update(0);
    }

    public update(time:number){
        var deltaTime = (time - this.prevTime) * 0.001;

        this.gl.clearColor(0,0,0,1);
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
        if(NiobiumManager.keyboard.isKeyDown("w") == true){
            NiobiumManager.currentScene.entities[0].transform.addPosition(0,-100 * deltaTime);
        }
        if(NiobiumManager.keyboard.isKeyDown("a") == true){
            NiobiumManager.currentScene.entities[0].transform.addPosition(-100 * deltaTime,0);
        }
        if(NiobiumManager.keyboard.isKeyDown("s") == true){
            NiobiumManager.currentScene.entities[0].transform.addPosition(0,100 * deltaTime);
        }
        if(NiobiumManager.keyboard.isKeyDown("d") == true){
            NiobiumManager.currentScene.entities[0].transform.addPosition(100 * deltaTime,0);
        }

        NiobiumManager.view.followEntity(NiobiumManager.currentScene.entities[0])

        if(NiobiumManager.keyboard.isKeyDown("l") == true){
            NiobiumManager.view.pos.v[0] += -50 * deltaTime;
        }

        if(NiobiumManager.keyboard.isKeyDown("j") == true){
            NiobiumManager.view.pos.v[0] += 50 * deltaTime;
        }

        if(NiobiumManager.keyboard.isKeyDown("k") == true){
            NiobiumManager.view.pos.v[1] += -50 * deltaTime;
        }

        if(NiobiumManager.keyboard.isKeyDown("i") == true){
            NiobiumManager.view.pos.v[1] += 50 * deltaTime;
        }

        NiobiumManager.currentScene.draw();
        NiobiumManager.currentScene.update(deltaTime);

        fpselement.textContent = `FPS: ${1 / deltaTime}`
        this.prevTime = time;
        requestAnimationFrame(this.update.bind(this));
    }
}

var niobium = new Niobium();

niobium.init();

//window.addEventListener("resize",niobium.updateScreen.bind(niobium));

niobium.run();


