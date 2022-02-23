"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsBodyComponent = void 0;
const Component_1 = require("../../model/Component");
class PhysicsBodyComponent extends Component_1.Component {
    constructor(entity) {
        super(entity);
    }
    update(deltaTime) {
    }
    OnCollision() {
    }
    OnCollisionLeft() {
    }
    OnCollisionRight() {
    }
    OnCollisionTop() {
    }
    OnCollisionBottom() {
    }
}
exports.PhysicsBodyComponent = PhysicsBodyComponent;
