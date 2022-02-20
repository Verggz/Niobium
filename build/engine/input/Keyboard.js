"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
class Keyboard {
    constructor() {
        this.keys = {};
        this.oldkeys = {};
    }
    update(win) {
        var main = this;
        win.addEventListener("keydown", function (e) {
            main.keys[e.key] = true;
            console.log(e.key);
            main.oldkeys = main.keys;
        });
        win.addEventListener("keyup", function (e) {
            if (main.keys[e.key] == true || !main.keys[e.key]) {
                //console.log("key2",main.keys[e.type]);
                main.keys[e.key] = false;
            }
            main.oldkeys = main.keys;
        });
    }
    isKeyDown(type) {
        if (this.keys[type]) {
            return this.keys[type];
        }
        else {
            return false;
        }
    }
    isKeyUp(type) {
        if (this.keys[type]) {
            return !this.keys[type];
        }
        else {
            return true;
        }
    }
}
exports.Keyboard = Keyboard;
