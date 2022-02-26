"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiobiumManager = void 0;
const Keyboard_1 = require("./input/Keyboard");
const Mouse_1 = require("./input/Mouse");
const Vector3f_1 = require("./math/Vector3f");
const Scene_1 = require("./model/Scene");
const View_1 = require("./rendering/area/View");
class NiobiumManager {
    constructor(gl, width, height) {
        NiobiumManager.gl = gl;
        NiobiumManager.backgroundColor = new Vector3f_1.Vector3f(null);
        NiobiumManager.scenes = [];
        NiobiumManager.currentScene = NiobiumManager.scenes[0];
        NiobiumManager.view = new View_1.View(width, height);
    }
    static setView(width, height) {
        NiobiumManager.view = new View_1.View(width, height);
    }
    static loadScene(sceneFile) {
        return new Scene_1.Scene(NiobiumManager.gl, []);
    }
}
exports.NiobiumManager = NiobiumManager;
NiobiumManager.mouse = new Mouse_1.Mouse();
NiobiumManager.keyboard = new Keyboard_1.Keyboard();
