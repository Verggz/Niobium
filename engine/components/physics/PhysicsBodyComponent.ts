import { Component } from "../../model/Component";
import { Entity } from "../../model/Entity";

export class PhysicsBodyComponent extends Component{
    constructor(entity:Entity){
        super(entity);
    }

    public update(deltaTime: number): void {
        
    }
}