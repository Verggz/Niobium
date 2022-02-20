"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const Matrix3f_1 = require("../math/Matrix3f");
const Vector2f_1 = require("../math/Vector2f");
class Transform {
    constructor(x, y) {
        this.position = new Vector2f_1.Vector2f(new Float32Array([x, y]));
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
        var target = Matrix3f_1.Matrix3f.setTranslation(this.position);
        return target;
    }
}
exports.Transform = Transform;
