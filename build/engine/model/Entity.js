"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Transform_1 = require("./Transform");
const NioRenderer_1 = require("../rendering/NioRenderer");
const Blueprint_1 = require("./Blueprint");
class Entity {
    constructor(gl, view, x, y, textureSrc = `${__dirname}/../../assets/test.jpeg`) {
        this.transform = new Transform_1.Transform(x, y);
        this.renderer = new NioRenderer_1.NioRenderer(gl, view, [-1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1], [
            0, 0,
            0, 1,
            1, 1,
            1, 1,
            1, 0,
            0, 0
        ], textureSrc);
        this.components = [];
        this.blueprint = new Blueprint_1.Blueprint();
    }
    draw() {
        this.renderer.render(this.transform);
    }
    update(deltaTime) {
        this.renderer.render(this.transform);
    }
}
exports.Entity = Entity;
