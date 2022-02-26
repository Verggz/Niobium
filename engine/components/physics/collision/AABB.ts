import { Vector2f } from "../../../math/Vector2f";

export class AABB{
    public position:Vector2f;
    public size:Vector2f;
    constructor(x:number,y:number,width:number,height:number,scale:number){
        this.position = new Vector2f(new Float32Array([x,y]));
        this.size = new Vector2f(new Float32Array([width * scale,height * scale]));
    }
}