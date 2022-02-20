"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const Matrix3f_1 = require("../../math/Matrix3f");
const Vector2f_1 = require("../../math/Vector2f");
const NioRenderer_1 = require("../NioRenderer");
class View {
    constructor(width, height) {
        this.width = 1280;
        this.height = 720;
        this.SCALE_FACTOR = 480;
        this.W_RATIO = 0;
        this.pos = new Vector2f_1.Vector2f(null);
        this.view = new Matrix3f_1.Matrix3f(Matrix3f_1.MATRIX_TYPE.IDENTITY);
        this.width = width;
        this.height = height;
        this.setPosition(1000, 0);
        console.log(this.pos);
        this.view = Matrix3f_1.Matrix3f.SetProjection(this.width, this.height);
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
    updateView(width, height) {
        this.width = width;
        this.height = height;
    }
    rotateView(angle) {
    }
    setPosition(x, y) {
        this.pos.set(x, y);
    }
    addPosition(x, y) {
        this.pos.set(this.pos.v[0] + x, this.pos.v[1] + y);
    }
    followEntity(entity) {
        //multiplied by the scale size to make the entity position relative to the view 
        this.setPosition(entity.transform.position.v[0] * NioRenderer_1.NioRenderer.SCALE_SIZE, entity.transform.position.v[1] * NioRenderer_1.NioRenderer.SCALE_SIZE);
    }
    lerpToPos(pos) {
        this.pos.v[0] = ((1 - 0.1) * this.pos.v[0] + 0.1 + pos.v[0]);
        this.pos.v[1] = ((1 - 0.1) * this.pos.v[1] + 0.1 + pos.v[1]);
    }
    getView() {
        var target = new Matrix3f_1.Matrix3f(Matrix3f_1.MATRIX_TYPE.IDENTITY);
        var translation = Matrix3f_1.Matrix3f.setTranslation(this.pos).scale(new Vector2f_1.Vector2f(new Float32Array([-NioRenderer_1.NioRenderer.SCALE_SIZE, -NioRenderer_1.NioRenderer.SCALE_SIZE])));
        target = target.mul(this.view);
        target = target.mul(translation);
        return target;
    }
}
exports.View = View;
