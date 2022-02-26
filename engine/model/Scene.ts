import { Vector2f } from "../math/Vector2f";
import { NiobiumManager } from "../NiobiumManager";
import { View } from "../rendering/area/View";
import { NioRenderer } from "../rendering/NioRenderer";
import { Entity } from "./Entity";

export class Scene{
    public entities:Entity[];
    private entityId:number = 0;
    private gl:WebGL2RenderingContext;

    constructor(gl:WebGL2RenderingContext,entites:Entity[]){
        this.entities = entites;
        this.gl = gl;
    }

    public update(deltaTime:number){
        for(var i = 0; i < this.entities.length; i++){
            this.entities[i].update(deltaTime);
        }
    }

    public draw(){
        for(var i = 0; i < this.entities.length; i++){
            if(Vector2f.distance(NiobiumManager.view.pos,this.entities[i].transform.position) < NioRenderer.POPIN_DISTANCE){
                this.entities[i].draw();
            }
            
        }
    }

    public addEntity(view:View,position:Vector2f,textureSrc:string = ""){
        this.entities.push(new Entity(this.gl,this.entityId,view,position.x(),position.y(),textureSrc));
        this.entityId++;
    }

    public removeEntity(entity:Entity){
        for(var i = 0; i < this.entities.length; i++){
            if(this.entities[i].getID() == entity.getID()){
                this.entities.splice(i,1);
                return;
            }
        }
    }
}