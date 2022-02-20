"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VBO = void 0;
const WebGLModel_1 = require("../base/WebGLModel");
class VBO extends WebGLModel_1.WebGLModel {
    constructor(gl, data) {
        super(gl);
        this.buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.DYNAMIC_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
    bind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    }
    unbind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
}
exports.VBO = VBO;
