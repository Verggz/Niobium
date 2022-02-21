import { Keyboard } from "./input/Keyboard";
import { Mouse } from "./input/Mouse";
import { Vector3f } from "./math/Vector3f";
import { Entity } from "./model/Entity";

export class NiobiumManager{
    private gl:WebGL2RenderingContext;

    public backgroundColor:Vector3f;
    public entities:Entity[];
    public mouse:Mouse;
    public keyboard:Keyboard;

    constructor(gl:WebGL2RenderingContext){
        this.gl = gl;
        this.backgroundColor = new Vector3f(null);
        this.entities = [];
    }
}