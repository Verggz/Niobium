import { TransformComponent } from "../components/TransformComponent";
import { NioRenderer } from "../rendering/NioRenderer";
import { View } from "../rendering/area/View";
import { Component } from "./Component";
import { Blueprint } from "./Blueprint";

export class Entity{
    private id:number;
    public transform:TransformComponent;
    public renderer:NioRenderer;

    public components: Component[];
    public blueprint:Blueprint;
    
    public entityScale:number = 1;

    constructor(gl:WebGL2RenderingContext,id:number,view:View,x:number,y:number,textureSrc:string = `none`){
        this.id = id;
        this.transform = new TransformComponent(x,y);
        this.renderer = new NioRenderer(gl,view,[-1 * this.entityScale,1 * this.entityScale,-1 * this.entityScale,-1 * this.entityScale,1 * this.entityScale,-1 * this.entityScale,1 * this.entityScale,-1 * this.entityScale,1 * this.entityScale,1* this.entityScale,-1 * this.entityScale,1 * this.entityScale],[
            1,1,
            1,0,
            0,0
            ,0,0
            ,0,1,
            1,1],textureSrc);
        this.components = [];
        this.blueprint = new Blueprint();
    }

    public getID():number{
        return this.id;
    }

    public draw():void{
        this.renderer.render(this.transform);
    }

    public update(deltaTime:number){
        //this.renderer.render(this.transform);
    }

}