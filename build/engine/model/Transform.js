"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const Matrix3f_1 = require("../math/Matrix3f");
const Vector2f_1 = require("../math/Vector2f");
const NioRenderer_1 = require("../rendering/NioRenderer");
class Transform {
    constructor(x, y) {
        this.position = new Vector2f_1.Vector2f(new Float32Array([x / NioRenderer_1.NioRenderer.SCALE_SIZE, y / NioRenderer_1.NioRenderer.SCALE_SIZE]));
        this.rotation = 0;
    }
    setRotation(degrees) {
        this.rotation = degrees;
    }
    setPosition(x, y) {
        this.position.set(x / NioRenderer_1.NioRenderer.SCALE_SIZE, y / NioRenderer_1.NioRenderer.SCALE_SIZE);
    }
    addPosition(x, y) {
        this.position.set(this.position.v[0] + x / NioRenderer_1.NioRenderer.SCALE_SIZE, this.position.v[1] + y / NioRenderer_1.NioRenderer.SCALE_SIZE);
    }
    GetTransform() {
        var target = Matrix3f_1.Matrix3f.setTranslation(this.position);
        return target;
    }
}
exports.Transform = Transform;
