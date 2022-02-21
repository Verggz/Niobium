"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix3f = exports.MATRIX_TYPE = void 0;
var MATRIX_TYPE;
(function (MATRIX_TYPE) {
    MATRIX_TYPE[MATRIX_TYPE["IDENTITY"] = 0] = "IDENTITY";
})(MATRIX_TYPE = exports.MATRIX_TYPE || (exports.MATRIX_TYPE = {}));
class Matrix3f {
    constructor(m) {
        this.m = new Float32Array(9);
        if (m != MATRIX_TYPE.IDENTITY) {
            this.m = m;
            return this;
        }
        this.m[Matrix3f.m00] = 1;
        this.m[Matrix3f.m11] = 1;
        this.m[Matrix3f.m22] = 1;
        return this;
    }
    mul(m) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        target = Matrix3f.mul(this, m);
        return target;
    }
    static mul(left, right) {
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
    static setScale(scale) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        target.m[Matrix3f.m00] = scale.v[0];
        target.m[Matrix3f.m11] = scale.v[1];
        return target;
    }
    static setTranslation(pos) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        target.m[Matrix3f.m02] = pos.v[0];
        target.m[Matrix3f.m12] = pos.v[1];
        return target;
    }
    translate(pos) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var translation = Matrix3f.setTranslation(pos);
        target = Matrix3f.mul(this, translation);
        return target;
    }
    scale(scale) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var scalemat = Matrix3f.setScale(scale);
        target = Matrix3f.mul(this, scalemat);
        return target;
    }
    static SetProjection(width, height) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        target.m[Matrix3f.m00] = 2 / width;
        target.m[Matrix3f.m11] = -2 / height;
        return target;
    }
    static SetRotation(degrees) {
        var radians = Matrix3f.degreesToRadians(degrees);
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        target.m[Matrix3f.m00] = cos;
        target.m[Matrix3f.m01] = sin;
        target.m[Matrix3f.m10] = -sin;
        target.m[Matrix3f.m11] = cos;
        return target;
    }
    rotate(degrees) {
        var target = new Matrix3f(MATRIX_TYPE.IDENTITY);
        var rotatemat = Matrix3f.SetRotation(degrees);
        target = Matrix3f.mul(this, rotatemat);
        return target;
    }
    static radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
    static degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    get() {
        return this.m;
    }
}
exports.Matrix3f = Matrix3f;
Matrix3f.m00 = 0;
Matrix3f.m01 = 1;
Matrix3f.m02 = 2;
Matrix3f.m10 = 3;
Matrix3f.m11 = 4;
Matrix3f.m12 = 5;
Matrix3f.m20 = 6;
Matrix3f.m21 = 7;
Matrix3f.m22 = 8;
