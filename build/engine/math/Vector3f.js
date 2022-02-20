"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3f = void 0;
class Vector3f {
    constructor(v) {
        this.v = new Float32Array(3);
        console.log(v);
        if (v != null && v.length == 3) {
            this.v = v;
            return this;
        }
        this.v[0] = 0;
        this.v[1] = 0;
        this.v[2] = 0;
        return this;
    }
    set(x, y, z) {
        this.v[0] = x;
        this.v[1] = y;
        this.v[2] = z;
    }
}
exports.Vector3f = Vector3f;
