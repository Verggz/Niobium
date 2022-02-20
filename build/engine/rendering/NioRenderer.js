"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NioRenderer = void 0;
const Model_1 = require("./models/Model");
const Shader_1 = require("./models/Shader");
const Texture_1 = require("./models/Texture");
class NioRenderer {
    constructor(gl, mainview, vertices, texcoords, textureSrc) {
        this.gl = gl;
        this.view = mainview;
        this.vertices = vertices;
        this.texture = new Texture_1.Texture(this.gl, textureSrc);
        this.texcoords = texcoords;
        this.model = new Model_1.Model(this.gl, this.vertices, this.texcoords);
        this.shader = new Shader_1.Shader(this.gl, "./build/assets/shader.vsh", "./build/assets/shader.fsh");
    }
    render(transform) {
        this.model.render(this.texture, transform, this.view, this.shader);
    }
}
exports.NioRenderer = NioRenderer;
NioRenderer.SCALE_SIZE = 32;
//the distance at which an object stops rendering from the cameras
NioRenderer.POPIN_DISTANCE = 5000;
