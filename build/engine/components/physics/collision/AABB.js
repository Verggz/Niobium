"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AABB = void 0;
const Vector2f_1 = require("../../../math/Vector2f");
class AABB {
    constructor(x, y, width, height, scale) {
        this.position = new Vector2f_1.Vector2f(new Float32Array([x, y]));
        this.size = new Vector2f_1.Vector2f(new Float32Array([width * scale, height * scale]));
    }
}
exports.AABB = AABB;
