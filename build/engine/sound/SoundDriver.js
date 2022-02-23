"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundDriver = void 0;
class SoundDriver {
    constructor(element) {
        this.context = new AudioContext();
        this.track = this.context.createMediaElementSource(element);
    }
}
exports.SoundDriver = SoundDriver;
