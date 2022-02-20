import { NioRenderer } from "./rendering/NioRenderer.js";
import { View } from "./rendering/area/View.js";
import { Entity } from "./model/Entity.js";
import { Keyboard } from "./input/Keyboard.js";
import { Vector2f } from "./math/Vector2f.js";
import { Mouse } from "./input/Mouse.js";

const fpselement = document.querySelector("#fpscounter");

class Niobium{
    public gl: WebGL2RenderingContext;
    public canvas: HTMLCanvasElement;

    public entities: Entity[];
    public view: View;

    public mouse:Mouse;
    public keyboard:Keyboard;

    private prevTime:number = 0;

    constructor(){
        this.canvas = document.querySelector("#maincanvas") as HTMLCanvasElement;
        this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;

        this.view = new View(this.gl.canvas.width,this.gl.canvas.height);

        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0,0,0,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public init(){
        this.entities = [new Entity(this.gl,this.view,0,0,`${__dirname}/../assets/test2.png`),new Entity(this.gl,this.view,640,360),new Entity(this.gl,this.view,-100,0)];
        this.keyboard = new Keyboard(); 
        this.mouse = new Mouse();
    }

    public updateScreen(){
        var canvas = document.querySelector("#maincanvas") as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        

        var gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
        gl.viewport(0,0,window.innerWidth,window.innerHeight);
        this.view.updateView(window.innerWidth,window.innerHeight);
        //console.log("yes")
    }

    public run(){
        this.keyboard.update(window);
        this.mouse.update(this.canvas);
        this.update(0);
    }

    public update(time:number){
        var deltaTime = (time - this.prevTime) * 0.001;

        this.gl.clearColor(0,0,0,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);



        if(this.mouse.buttons[0] == true){
            //this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y()
            this.entities[0].transform.setPosition(this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y());
            console.log( this.entities[0].transform.position.x() * 32 );
            console.log( this.entities[0].transform.position.y() * 32 );

        }
        //this.mouse.screenToView(this.view).x(),this.mouse.screenToView(this.view).y()
        //console.log(`x: ${this.mouse.screenToView(this.view).x()} y: ${this.mouse.screenToView(this.view).y()}`);
        if(this.keyboard.isKeyDown("w") == true){
            this.entities[0].transform.addPosition(0,-100 * deltaTime);
        }
        if(this.keyboard.isKeyDown("a") == true){
            this.entities[0].transform.addPosition(-100 * deltaTime,0);
        }
        if(this.keyboard.isKeyDown("s") == true){
            this.entities[0].transform.addPosition(0,100 * deltaTime);
        }
        if(this.keyboard.isKeyDown("d") == true){
            this.entities[0].transform.addPosition(100 * deltaTime,0);
        }

        this.view.followEntity(this.entities[0])

        if(this.keyboard.isKeyDown("l") == true){
            this.view.pos.v[0] += -50 * deltaTime;
        }

        if(this.keyboard.isKeyDown("j") == true){
            this.view.pos.v[0] += 50 * deltaTime;
        }

        if(this.keyboard.isKeyDown("k") == true){
            this.view.pos.v[1] += -50 * deltaTime;
        }

        if(this.keyboard.isKeyDown("i") == true){
            this.view.pos.v[1] += 50 * deltaTime;
        }

        for(var i = 0; i < this.entities.length; i++){
            if(Vector2f.distance(this.view.pos,this.entities[i].transform.position) < NioRenderer.POPIN_DISTANCE){
                this.entities[i].draw();

               
            }
            //this.entities[i].draw();
           //this.entities[i].draw();
            //if()
            
        }

        fpselement.textContent = `FPS: ${1 / deltaTime}`
        this.prevTime = time;
        requestAnimationFrame(this.update.bind(this));
    }
}

var niobium = new Niobium();

niobium.init();

window.addEventListener("resize",niobium.updateScreen.bind(niobium));

niobium.run();


