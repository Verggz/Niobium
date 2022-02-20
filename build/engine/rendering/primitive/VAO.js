"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAO = void 0;
const WebGLModel_1 = require("../base/WebGLModel");
class VAO extends WebGLModel_1.WebGLModel {
    constructor(gl) {
        super(gl);
        this.vao = this.gl.createVertexArray();
    }
    attachBuffer(buffer, attrib, type) {
        this.bind();
        this.gl.enableVertexAttribArray(attrib);
        buffer.bind();
        this.gl.vertexAttribPointer(attrib, 2, type, false, 0, 0);
        buffer.unbind();
        this.unbind();
    }
    bind() {
        this.gl.bindVertexArray(this.vao);
    }
    unbind() {
        this.gl.bindVertexArray(null);
    }
}
exports.VAO = VAO;
