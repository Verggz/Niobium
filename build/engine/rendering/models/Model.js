"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const VAO_1 = require("../primitive/VAO");
const VBO_1 = require("../primitive/VBO");
class Model {
    constructor(gl, vertices, texcoords) {
        this.gl = gl;
        this.vertices = vertices;
        this.texcoords = texcoords;
        this.vao = new VAO_1.VAO(this.gl);
        this.shapebuf = new VBO_1.VBO(this.gl, this.vertices);
        this.texcoordsbuf = new VBO_1.VBO(this.gl, texcoords);
        this.vao.attachBuffer(this.shapebuf, 0, this.gl.FLOAT);
        this.vao.attachBuffer(this.texcoordsbuf, 1, this.gl.FLOAT);
    }
    render(texture, transform, view, shader) {
        this.vao.bind();
        shader.bind();
        shader.setUniformMatrix3("view", view.getView());
        shader.setUniformMatrix3("model", transform.GetTransform());
        shader.setUniformMatrix3("projection", view.getProjection());
        shader.setUniformMatrix3("scale", view.getScale());
        shader.setUniform1i("sampler", 0);
        texture.bind(0);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices.length / 2);
        this.vao.unbind();
    }
}
exports.Model = Model;
