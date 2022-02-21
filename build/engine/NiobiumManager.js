"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiobiumManager = void 0;
const Vector3f_1 = require("./math/Vector3f");
class NiobiumManager {
    constructor(gl) {
        this.gl = gl;
        this.backgroundColor = new Vector3f_1.Vector3f(null);
        this.entities = [];
    }
}
exports.NiobiumManager = NiobiumManager;
