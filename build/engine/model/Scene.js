"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const Vector2f_1 = require("../math/Vector2f");
const NiobiumManager_1 = require("../NiobiumManager");
const NioRenderer_1 = require("../rendering/NioRenderer");
const Entity_1 = require("./Entity");
class Scene {
    constructor(gl, entites) {
        this.entityId = 0;
        this.entities = entites;
        this.gl = gl;
    }
    update(deltaTime) {
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].update(deltaTime);
        }
    }
    draw() {
        for (var i = 0; i < this.entities.length; i++) {
            if (Vector2f_1.Vector2f.distance(NiobiumManager_1.NiobiumManager.view.pos, this.entities[i].transform.position) < NioRenderer_1.NioRenderer.POPIN_DISTANCE) {
                this.entities[i].draw();
            }
        }
    }
    addEntity(view, position, textureSrc = "") {
        this.entities.push(new Entity_1.Entity(this.gl, this.entityId, view, position.x(), position.y(), textureSrc));
        this.entityId++;
    }
    removeEntity(entity) {
        for (var i = 0; i < this.entities.length; i++) {
            if (this.entities[i].getID() == entity.getID()) {
                this.entities.splice(i, 1);
                return;
            }
        }
    }
}
exports.Scene = Scene;
