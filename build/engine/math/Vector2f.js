"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2f = void 0;
class Vector2f {
    constructor(v) {
        this.v = new Float32Array(2);
        if (v != null && v.length == 2) {
            this.v = v;
            return this;
        }
        this.v[0] = 0;
        this.v[1] = 0;
    }
    x() {
        return this.v[0];
    }
    y() {
        return this.v[1];
    }
    get() {
        return this.v;
    }
    set(x, y) {
        this.v[0] = x;
        this.v[1] = y;
        return this;
    }
    add(x, y) {
        this.v[0] += x;
        this.v[1] += y;
        return this;
    }
    static distance(v1, v2) {
        return Math.sqrt(((v1.x() - v2.x()) * (v1.x() - v2.x())) + ((v1.y() - v2.y()) * (v1.y() - v2.y())));
    }
    scale(x, y) {
        var target = new Vector2f(new Float32Array(this.v));
        target.v[0] *= x;
        target.v[1] *= y;
        return target;
    }
}
exports.Vector2f = Vector2f;
