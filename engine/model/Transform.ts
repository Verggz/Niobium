import { Matrix3f } from "../math/Matrix3f";
import { Vector2f } from "../math/Vector2f";
import { NioRenderer } from "../rendering/NioRenderer";

export class Transform{
    public position:Vector2f;
    public rotation:number;

    constructor(x:number,y:number){
        this.position = new Vector2f(new Float32Array([x / NioRenderer.SCALE_SIZE,y / NioRenderer.SCALE_SIZE]));
        this.rotation = 0;
    }

    public setRotation(degrees:number){
        this.rotation = degrees;
    }

    public setPosition(x:number,y:number){
        this.position.set(x/ NioRenderer.SCALE_SIZE,y / NioRenderer.SCALE_SIZE);
    }

    public addPosition(x:number,y:number){
        this.position.set(this.position.v[0] + x / NioRenderer.SCALE_SIZE,this.position.v[1] + y / NioRenderer.SCALE_SIZE);
    }

    public GetTransform():Matrix3f{
        var target = Matrix3f.setTranslation(this.position);

        return target;
    }
}