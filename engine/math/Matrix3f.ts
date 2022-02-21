import { Vector2f } from "./Vector2f";

export enum MATRIX_TYPE{
    IDENTITY
}

export class Matrix3f{
    public m: Float32Array = new Float32Array(9);

    public static m00:number = 0;
    public static m01:number = 1;
    public static m02:number = 2;

    public static m10:number = 3;
    public static m11:number = 4;
    public static m12:number = 5;

    public static m20:number = 6;
    public static m21:number = 7;
    public static m22:number = 8;


    constructor(m:Float32Array| MATRIX_TYPE){
        if(m != MATRIX_TYPE.IDENTITY){
            this.m = m;
            return this;
        }

        this.m[Matrix3f.m00] = 1;
        this.m[Matrix3f.m11] = 1;
        this.m[Matrix3f.m22] = 1;
        
        return this;
    }
    public mul(m:Matrix3f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);

        target = Matrix3f.mul(this,m);
        
        return target;
    }
    public static mul(left:Matrix3f,right:Matrix3f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        target.m[0] = left.m[Matrix3f.m00] * right.m[Matrix3f.m00] + left.m[Matrix3f.m01] * right.m[Matrix3f.m10] + left.m[Matrix3f.m02] * right.m[Matrix3f.m20];
        target.m[1] = left.m[Matrix3f.m00] * right.m[Matrix3f.m01] + left.m[Matrix3f.m01] * right.m[Matrix3f.m11] + left.m[Matrix3f.m02] * right.m[Matrix3f.m21];
        target.m[2] = left.m[Matrix3f.m00] * right.m[Matrix3f.m02] + left.m[Matrix3f.m01] * right.m[Matrix3f.m12] + left.m[Matrix3f.m02] * right.m[Matrix3f.m22];

        target.m[3] = left.m[Matrix3f.m10] * right.m[Matrix3f.m00] + left.m[Matrix3f.m11] * right.m[Matrix3f.m10] + left.m[Matrix3f.m12] * right.m[Matrix3f.m20];
        target.m[4] = left.m[Matrix3f.m10] * right.m[Matrix3f.m01] + left.m[Matrix3f.m11] * right.m[Matrix3f.m11] + left.m[Matrix3f.m12] * right.m[Matrix3f.m21];
        target.m[5] = left.m[Matrix3f.m10] * right.m[Matrix3f.m02] + left.m[Matrix3f.m11] * right.m[Matrix3f.m12] + left.m[Matrix3f.m12] * right.m[Matrix3f.m22];

        target.m[6] = left.m[Matrix3f.m20] * right.m[Matrix3f.m00] + left.m[Matrix3f.m21] * right.m[Matrix3f.m10] + left.m[Matrix3f.m22] * right.m[Matrix3f.m20];
        target.m[7] = left.m[Matrix3f.m20] * right.m[Matrix3f.m01] + left.m[Matrix3f.m21] * right.m[Matrix3f.m11] + left.m[Matrix3f.m22] * right.m[Matrix3f.m21];
        target.m[8] = left.m[Matrix3f.m20] * right.m[Matrix3f.m02] + left.m[Matrix3f.m21] * right.m[Matrix3f.m12] + left.m[Matrix3f.m22] * right.m[Matrix3f.m22];

        return target;
    }

    public static setScale(scale:Vector2f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);

        target.m[Matrix3f.m00] = scale.v[0];
        target.m[Matrix3f.m11] = scale.v[1];

        return target;
    }

    public static setTranslation(pos:Vector2f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);

        target.m[Matrix3f.m02] = pos.v[0];
        target.m[Matrix3f.m12] = pos.v[1];

        return target;
    }

    public translate(pos:Vector2f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var translation = Matrix3f.setTranslation(pos);

        target = Matrix3f.mul(this,translation);

        return target;
    }

    public scale(scale:Vector2f):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var scalemat = Matrix3f.setScale(scale);

        target = Matrix3f.mul(this,scalemat);

        return target;
    }

    public static SetProjection(width:number,height:number):Matrix3f{
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);

        target.m[Matrix3f.m00] = 2 / width;
        target.m[Matrix3f.m11] = -2 / height;

        return target;
    }
    
    public static SetRotation(degrees:number):Matrix3f{
        var radians = Matrix3f.degreesToRadians(degrees);
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);

        var cos =  Math.cos(radians);
        var sin = Math.sin(radians);

        target.m[Matrix3f.m00] = cos
        target.m[Matrix3f.m01] = sin

        target.m[Matrix3f.m10] = -sin;
        target.m[Matrix3f.m11] = cos;

        return target;
    }

    public rotate(degrees:number){
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var rotatemat = Matrix3f.SetRotation(degrees);
        
        target = Matrix3f.mul(this,rotatemat);

        return target;
    }

    public static radiansToDegrees(radians:number):number{
        return radians *  180 / Math.PI;
    }

    public static degreesToRadians(degrees:number):number{
        return degrees * Math.PI/180;
    }



    public get():Float32Array{
        return this.m;
    }
}