import { Transform } from "./Transform";
import { NioRenderer } from "../rendering/NioRenderer";
import { View } from "../rendering/area/View";
import { Component } from "./Component";
import { Blueprint } from "./Blueprint";

export class Entity{
    public transform:Transform;
    public renderer:NioRenderer;

    public components: Component[];
    public blueprint:Blueprint;

    constructor(gl:WebGL2RenderingContext,view:View,x:number,y:number,textureSrc:string = `${__dirname}/../../assets/test.jpeg`){
        this.transform = new Transform(x,y);
        this.renderer = new NioRenderer(gl,view,[-1,1,-1,-1,1,-1,1,-1,1,1,-1,1],[
            0,0,
            0,1,
            1,1
            ,1,1
            ,1,0,
            0,0],textureSrc);
        this.components = [];
        this.blueprint = new Blueprint();
    }

    public draw():void{
        this.renderer.render(this.transform);
    }

    public update(deltaTime:number){
        this.renderer.render(this.transform);
    }

}