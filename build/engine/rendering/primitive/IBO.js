"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBO = void 0;
const WebGLModel_1 = require("../base/WebGLModel");
class IBO extends WebGLModel_1.WebGLModel {
    constructor(gl, data) {
        super(gl);
        this.buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data.length, this.gl.DYNAMIC_DRAW);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    }
    bind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    }
    unbind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    }
}
exports.IBO = IBO;
