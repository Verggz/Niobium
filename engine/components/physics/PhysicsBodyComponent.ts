import { Vector2f } from "../../math/Vector2f";
import { Component } from "../../model/Component";
import { Entity } from "../../model/Entity";
import { NioRenderer } from "../../rendering/NioRenderer";
import { AABB } from "./collision/AABB";

export class PhysicsBodyComponent extends Component{
    public collider:AABB;
    public velocity:Vector2f;
    constructor(entity:Entity){
        super(entity);
        this.collider = new AABB(entity.transform.position.x(),entity.transform.position.y(),NioRenderer.SCALE_SIZE,NioRenderer.SCALE_SIZE,entity.entityScale);
        this.velocity = new Vector2f(new Float32Array([0,0]));
    }

    public update(deltaTime: number): void {
        super.update(deltaTime);
        this.entity.transform.addPosition(this.velocity.x(),this.velocity.y());
    }

    public addForce(x:number,y:number):void{
        this.velocity.add(x,y);
    }

    public setVelocity(x:number,y:number):void{
        this.velocity.set(x,y);
    }


}