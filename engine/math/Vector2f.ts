export class Vector2f{
    public v: Float32Array = new Float32Array(2);
    constructor(v:Float32Array | null){
        if(v != null && v.length == 2){
            this.v = v;
            
            return this;
        }

        this.v[0] = 0;
        this.v[1] = 0;
    }

    public x(): number{
        return this.v[0];
    }

    public y():number{
        return this.v[1];
    }

    public get():Float32Array{
        return this.v;
    }

    public set(x:number,y:number):Vector2f{
        this.v[0] = x;
        this.v[1] = y;

        return this;
    }

    public static distance(v1:Vector2f,v2:Vector2f):number{
        return Math.sqrt(((v1.x() - v2.x())* (v1.x() - v2.x())) + ((v1.y() - v2.y())* (v1.y() - v2.y())));
    }

    public scale(x:number,y:number):Vector2f{
        var target = new Vector2f(new Float32Array(this.v));
        target.v[0] *= x;
        target.v[1] *= y;

        return target;
    }
}