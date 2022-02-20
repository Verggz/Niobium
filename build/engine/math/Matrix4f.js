"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix4f = void 0;
class Matrix4f {
    constructor(m) {
        this.m = new Float32Array(16);
        //create identity matrix if no values are set
        if (m == null) {
            this.m[0] = 1;
            this.m[5] = 1;
            this.m[10] = 1;
            this.m[15] = 1;
            return this;
        }
        if (m.length == 16) {
            this.m = m;
            return this;
        }
        throw new Error("Invalid input for Matrix4f");
    }
    set(m) {
        if (m.length == 16) {
            this.m = m;
        }
    }
    get() {
        return this.m;
    }
    static identity() {
        return new Matrix4f(null);
    }
    static setScale(v) {
        var target = new Matrix4f(null);
        target.m[0] = v.v[0];
        target.m[5] = v.v[1];
        target.m[10] = v.v[2];
        target.m[15] = 1;
        return target;
    }
    //create translation matrix from vector
    static setTranslation(v) {
        var target = new Matrix4f(null);
        target.m[0] = 1;
        target.m[1] = 0;
        target.m[2] = 0;
        target.m[3] = 0;
        target.m[4] = 0;
        target.m[5] = 1;
        target.m[6] = 0;
        target.m[7] = 0;
        target.m[8] = 0;
        target.m[9] = 0;
        target.m[10] = 1;
        target.m[11] = 0;
        target.m[12] = v.v[0];
        target.m[13] = v.v[1];
        target.m[14] = v.v[2];
        target.m[15] = 1;
        return target;
    }
    static scale(m, v) {
        var target = new Matrix4f(null);
        var x = v.v[0];
        var y = v.v[1];
        var z = v.v[2];
        target.m[0] = m.m[0] * x;
        target.m[1] = m.m[1] * x;
        target.m[2] = m.m[2] * x;
        target.m[3] = m.m[3] * x;
        target.m[4] = m.m[4] * y;
        target.m[5] = m.m[5] * y;
        target.m[6] = m.m[6] * y;
        target.m[7] = m.m[7] * y;
        target.m[8] = m.m[8] * z;
        target.m[9] = m.m[9] * z;
        target.m[10] = m.m[10] * z;
        target.m[11] = m.m[11] * z;
        target.m[12] = m.m[12];
        target.m[13] = m.m[13];
        target.m[14] = m.m[14];
        target.m[15] = m.m[15];
        return target;
    }
    static mul(left, right) {
        var target = new Matrix4f(null);
        //left row 1
        const l00 = left.m[0], l01 = left.m[1], l02 = left.m[2], l03 = left.m[3];
        //left row 2
        const l10 = left.m[4], l11 = left.m[5], l12 = left.m[6], l13 = left.m[7];
        //left row 3
        const l20 = left.m[8], l21 = left.m[9], l22 = left.m[10], l23 = left.m[11];
        //left row 3
        const l30 = left.m[12], l31 = left.m[13], l32 = left.m[14], l33 = left.m[15];
        //replace every right row for higher memory effciency
        var r0 = right.m[0], r1 = right.m[1], r2 = right.m[2], r3 = right.m[3];
        target.m[0] = (r0 * l00) + (r1 * l10) + (r2 * l20) + (r3 * l30);
        target.m[1] = (r0 * l01) + (r1 * l11) + (r2 * l21) + (r3 * l31);
        target.m[2] = (r0 * l02) + (r1 * l12) + (r2 * l22) + (r3 * l32);
        target.m[3] = (r0 * l03) + (r1 * l13) + (r2 * l23) + (r3 * l33);
        r0 = right.m[4],
            r1 = right.m[5],
            r2 = right.m[6],
            r3 = right.m[7];
        target.m[4] = (r0 * l00) + (r1 * l10) + (r2 * l20) + (r3 * l30);
        target.m[5] = (r0 * l01) + (r1 * l11) + (r2 * l21) + (r3 * l31);
        target.m[6] = (r0 * l02) + (r1 * l12) + (r2 * l22) + (r3 * l32);
        target.m[7] = (r0 * l03) + (r1 * l13) + (r2 * l23) + (r3 * l33);
        r0 = right.m[8],
            r1 = right.m[9],
            r2 = right.m[10],
            r3 = right.m[11];
        target.m[8] = (r0 * l00) + (r1 * l10) + (r2 * l20) + (r3 * l30);
        target.m[9] = (r0 * l01) + (r1 * l11) + (r2 * l21) + (r3 * l31);
        target.m[10] = (r0 * l02) + (r1 * l12) + (r2 * l22) + (r3 * l32);
        target.m[11] = (r0 * l03) + (r1 * l13) + (r2 * l23) + (r3 * l33);
        r0 = right.m[12],
            r1 = right.m[13],
            r2 = right.m[14],
            r3 = right.m[15];
        target.m[12] = (r0 * l00) + (r1 * l10) + (r2 * l20) + (r3 * l30);
        target.m[13] = (r0 * l01) + (r1 * l11) + (r2 * l21) + (r3 * l31);
        target.m[14] = (r0 * l02) + (r1 * l12) + (r2 * l22) + (r3 * l32);
        target.m[15] = (r0 * l03) + (r1 * l13) + (r2 * l23) + (r3 * l33);
        return target;
    }
    static setOrtho2D(left, right, bottom, top) {
        var target = new Matrix4f(null);
        target.m[0] = (2 / (right - left));
        target.m[5] = (2 / (top - bottom));
        target.m[10] = -1;
        target.m[12] = ((right + left) / (left - right));
        target.m[13] = ((top + bottom) / (bottom - top));
        return target;
    }
}
exports.Matrix4f = Matrix4f;
