"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const TransformComponent_1 = require("../components/TransformComponent");
const NioRenderer_1 = require("../rendering/NioRenderer");
const Blueprint_1 = require("./Blueprint");
class Entity {
    constructor(gl, id, view, x, y, textureSrc = `none`) {
        this.entityScale = 1;
        this.id = id;
        this.transform = new TransformComponent_1.TransformComponent(x, y);
        this.renderer = new NioRenderer_1.NioRenderer(gl, view, [-1 * this.entityScale, 1 * this.entityScale, -1 * this.entityScale, -1 * this.entityScale, 1 * this.entityScale, -1 * this.entityScale, 1 * this.entityScale, -1 * this.entityScale, 1 * this.entityScale, 1 * this.entityScale, -1 * this.entityScale, 1 * this.entityScale], [
            1, 1,
            1, 0,
            0, 0,
            0, 0,
            0, 1,
            1, 1
        ], textureSrc);
        this.components = [];
        this.blueprint = new Blueprint_1.Blueprint();
    }
    getID() {
        return this.id;
    }
    draw() {
        this.renderer.render(this.transform);
    }
    update(deltaTime) {
        //this.renderer.render(this.transform);
    }
}
exports.Entity = Entity;
