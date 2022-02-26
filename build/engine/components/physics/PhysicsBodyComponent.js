"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsBodyComponent = void 0;
const Vector2f_1 = require("../../math/Vector2f");
const Component_1 = require("../../model/Component");
const NioRenderer_1 = require("../../rendering/NioRenderer");
const AABB_1 = require("./collision/AABB");
class PhysicsBodyComponent extends Component_1.Component {
    constructor(entity) {
        super(entity);
        this.collider = new AABB_1.AABB(entity.transform.position.x(), entity.transform.position.y(), NioRenderer_1.NioRenderer.SCALE_SIZE, NioRenderer_1.NioRenderer.SCALE_SIZE, entity.entityScale);
        this.velocity = new Vector2f_1.Vector2f(new Float32Array([0, 0]));
    }
    update(deltaTime) {
        super.update(deltaTime);
        this.entity.transform.addPosition(this.velocity.x(), this.velocity.y());
    }
    addForce(x, y) {
        this.velocity.add(x, y);
    }
    setVelocity(x, y) {
        this.velocity.set(x, y);
    }
}
exports.PhysicsBodyComponent = PhysicsBodyComponent;
