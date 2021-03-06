import { Matrix3f } from "../math/Matrix3f";
import { Vector2f } from "../math/Vector2f";
import { NioRenderer } from "../rendering/NioRenderer";

export class TransformComponent{
    public position:Vector2f;
    public scale:Vector2f;
    public rotation:number;

    constructor(x:number,y:number){
        this.position = new Vector2f(new Float32Array([x,y]));
        this.scale = new Vector2f(new Float32Array([1,1]));
        this.rotation = 0;
    }

    public setRotation(degrees:number){
        this.rotation = degrees;
    }

    public setPosition(x:number,y:number){
        this.position.set(x,y );
    }

    public addPosition(x:number,y:number){
        this.position.set(this.position.x() + x,this.position.y() + y );
    }

    public GetTransform():Matrix3f{
        var target = Matrix3f.setTranslation(this.position).rotate(this.rotation).scale(this.scale);

        return target;
    }
}