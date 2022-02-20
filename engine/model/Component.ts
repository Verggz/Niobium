import { Entity } from "./Entity";

export class Component{
    public entity:Entity;

    constructor(entity:Entity){
        this.entity = entity;
    }

    public update(deltaTime:number){

    }
}