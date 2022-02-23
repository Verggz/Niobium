"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor(entity, id = 0) {
        this.id = 0;
        this.entity = entity;
        this.id = id;
    }
    update(deltaTime) {
    }
}
exports.Component = Component;
