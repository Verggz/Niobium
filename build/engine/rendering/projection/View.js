"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const Matrix4f_1 = require("../../math/Matrix4f");
const Vector3f_1 = require("../../math/Vector3f");
class View {
    constructor(width, height) {
        this.pos = new Vector3f_1.Vector3f(null);
        this.view = new Matrix4f_1.Matrix4f(null);
        this.pos.set(100, 0, 0);
        this.view = Matrix4f_1.Matrix4f.setOrtho2D(-1280 / 2, 1280 / 2, -720 / 2, 720 / 2);
    }
    //public setPosition(position:vec2){
    //    this.pos = position;
    //}
    //public addPosition(position:vec2){
    //    vec2.add(this.pos,this.pos,position);
    //}
    getView() {
        var target = new Matrix4f_1.Matrix4f(null);
        var translation = Matrix4f_1.Matrix4f.setTranslation(this.pos);
        target = Matrix4f_1.Matrix4f.mul(this.view, translation);
        return target;
    }
}
exports.View = View;
