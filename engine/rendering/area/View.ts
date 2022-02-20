import { Matrix3f, MATRIX_TYPE } from "../../math/Matrix3f";
import { Vector2f } from "../../math/Vector2f";
import { Entity } from "../../model/Entity";
import { NioRenderer } from "../NioRenderer";

export class View{
    public width:number = 1280;
    public height:number = 720;
    public SCALE_FACTOR:number = 480;
    public W_RATIO:number = 0;

    public pos:Vector2f = new Vector2f(null);
    public view:Matrix3f = new Matrix3f(MATRIX_TYPE.IDENTITY);

    constructor(width:number,height:number){
        this.width = width;
        this.height = height;
        this.setPosition(0,0);
        console.log(this.pos)

        this.view = Matrix3f.SetProjection(this.width,this.height);

        //this.SCALE_FACTOR = this.height * 0.5;
        //this.W_RATIO = (this.width/(this.height/this.SCALE_FACTOR));
//
        //this.view = Matrix3f.setTranslation(new Vector2f(new Float32Array([-1,0]))).scale(new Vector2f(new Float32Array([1 / this.W_RATIO,-1 / this.SCALE_FACTOR])));
    }

    // public updateView(width:number,height:number){
    //     this.width = width;
    //     this.height = height;
    //     this.setPosition(0,0);
    //     //this.SCALE_FACTOR = this.height * 0.5;
    //     this.W_RATIO = (this.width/(this.height/this.SCALE_FACTOR));

    //     this.view = Matrix3f.setTranslation(new Vector2f(new Float32Array([-1,1]))).scale(new Vector2f(new Float32Array([1/this.W_RATIO,-1/this.SCALE_FACTOR])));
    // }

    public updateView(width:number,height:number){
        this.width = width;
        this.height = height;
    }

    public rotateView(angle:number){

    }

    public setPosition(x:number,y:number){
        this.pos.set(x,y);
    }

    public addPosition(x:number,y:number){
        this.pos.set(this.pos.v[0] + x,this.pos.v[1] + y);
    }

    public followEntity(entity:Entity){
        //multiplied by the scale size to make the entity position relative to the view 
        this.setPosition(-entity.transform.position.x(),-entity.transform.position.y());
    }

    public lerpToPos(pos:Vector2f){
        this.pos.v[0] = ((1 - 0.1) * this.pos.v[0] + 0.1 + pos.v[0]);
        this.pos.v[1] = ((1 - 0.1) * this.pos.v[1] + 0.1 + pos.v[1]);
    }

    public getProjection(){
        return this.view;
    }

    public getScale(){
        return Matrix3f.setScale(new Vector2f(new Float32Array([NioRenderer.SCALE_SIZE,NioRenderer.SCALE_SIZE])))
    }

    //public getView(transf:Matrix3f):Matrix3f{
    //    var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
    //    var translation =  Matrix3f.mul(Matrix3f.setTranslation(this.pos),transf).scale(new Vector2f(new Float32Array([-NioRenderer.SCALE_SIZE,-NioRenderer.SCALE_SIZE])));
    //    target = target.mul(this.view);
//
    //    target = target.mul(translation);
//
    //    
//
    //    return target;
    //}

    public getView(){
        return Matrix3f.setTranslation(this.pos);
    }
}