import { Entity } from "./Entity";

export class Component{
    public entity:Entity;
    public id:number = 0;

    constructor(entity:Entity,id:number = 0){
        this.entity = entity;
        this.id = id;
    }

    public update(deltaTime:number){

    }
}