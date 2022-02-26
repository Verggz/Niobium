"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformComponent = void 0;
const Matrix3f_1 = require("../math/Matrix3f");
const Vector2f_1 = require("../math/Vector2f");
class TransformComponent {
    constructor(x, y) {
        this.position = new Vector2f_1.Vector2f(new Float32Array([x, y]));
        this.scale = new Vector2f_1.Vector2f(new Float32Array([1, 1]));
        this.rotation = 0;
    }
    setRotation(degrees) {
        this.rotation = degrees;
    }
    setPosition(x, y) {
        this.position.set(x, y);
    }
    addPosition(x, y) {
        this.position.set(this.position.x() + x, this.position.y() + y);
    }
    GetTransform() {
        var target = Matrix3f_1.Matrix3f.setTranslation(this.position).rotate(this.rotation).scale(this.scale);
        return target;
    }
}
exports.TransformComponent = TransformComponent;
