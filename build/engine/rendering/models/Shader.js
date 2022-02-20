"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shader = void 0;
const fs_1 = __importDefault(require("fs"));
class Shader {
    constructor(gl, vpath, fpath) {
        this.uniformLocs = {};
        this.gl = gl;
        const vsource = this.readShader(vpath);
        const fsource = this.readShader(fpath);
        this.vId = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(this.vId, vsource);
        this.compileShader(this.vId);
        this.fId = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(this.fId, fsource);
        this.compileShader(this.fId);
        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, this.vId);
        this.gl.attachShader(this.program, this.fId);
        this.linkProgram(this.program);
        this.validateProgram(this.program);
        var alluniforms = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < alluniforms; i++) {
            const uniformName = this.gl.getActiveUniform(this.program, i);
            if (uniformName !== null) {
                const uniformLoc = this.gl.getUniformLocation(this.program, uniformName.name);
                if (uniformLoc !== null) {
                    this.uniformLocs[uniformName.name] = uniformLoc;
                }
            }
        }
    }
    compileShader(shader) {
        this.gl.compileShader(shader);
        const success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!success) {
            const infolog = this.gl.getShaderInfoLog(shader);
            throw new Error(`Error occurred whilst compiling Shader.\n\n${infolog}`);
        }
    }
    linkProgram(program) {
        this.gl.linkProgram(program);
        const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (!success) {
            const infolog = this.gl.getProgramInfoLog(program);
            throw new Error(`Error occurred whilst linking Program.\n\n${infolog}`);
        }
    }
    validateProgram(program) {
        this.gl.validateProgram(program);
        const success = this.gl.getProgramParameter(program, this.gl.VALIDATE_STATUS);
        if (!success) {
            const infolog = this.gl.getProgramInfoLog(program);
            throw new Error(`Error occurred whilst compiling Program.\n\n${infolog}`);
        }
    }
    bind() {
        this.gl.useProgram(this.program);
    }
    readShader(path) {
        var file = fs_1.default.readFileSync(path).toString();
        return file;
    }
    setUniformMatrix3(name, value) {
        this.gl.uniformMatrix3fv(this.uniformLocs[name], true, value.get());
    }
    setUniform1i(name, value) {
        this.gl.uniform1i(this.uniformLocs[name], value);
    }
}
exports.Shader = Shader;
