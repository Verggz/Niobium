export class Vector3f{
    public v:Float32Array = new Float32Array(3);

    constructor(v: Float32Array | null){
        console.log(v)
        if(v != null && v.length == 3){
            this.v = v;

            return this;
        }

        this.v[0] = 0;
        this.v[1] = 0;
        this.v[2] = 0;

        return this;
    }

    public set(x:number,y:number,z:number){
        this.v[0] = x;
        this.v[1] = y;
        this.v[2] = z;
    }

    
}