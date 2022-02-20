"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
const Vector2f_1 = require("../math/Vector2f");
class Mouse {
    constructor() {
        this.buttons = {};
        this.oldbuttons = {};
        this.position = new Vector2f_1.Vector2f(null);
    }
    update(canvas) {
        var main = this;
        canvas.addEventListener("mousemove", this.mouseMove.bind(this));
        canvas.addEventListener("mousedown", function (e) {
            main.buttons[e.button] = true;
            main.oldbuttons = main.buttons;
        });
        canvas.addEventListener("mouseup", function (e) {
            if (main.buttons[e.button] == true || !main.buttons[e.button]) {
                main.buttons[e.button] = false;
                main.oldbuttons = main.buttons;
            }
        });
    }
    mouseMove(e) {
        //console.log(`${e.clientX - 10} | ${e.clientY - 63}`);
        this.position.set(e.clientX - 10, e.clientY - 63);
        //console.log(this.position)
    }
    screenToView(view) {
        var target = new Vector2f_1.Vector2f(null);
        target.set((view.width / 2 + view.pos.x()) - this.position.x(), (view.height / 2 + view.pos.y()) - this.position.y());
        ``;
        return target;
    }
}
exports.Mouse = Mouse;
