import fs from 'fs';
import { Matrix3f } from '../../math/Matrix3f';

export class Shader{
    public gl:WebGL2RenderingContext;

    public program: WebGLProgram;
    public vId: WebGLShader;
    public fId:WebGLShader;
    public uniformLocs: {[key:string]:WebGLUniformLocation} = {};

    constructor(gl:WebGL2RenderingContext,vpath:string,fpath:string){
        this.gl = gl;

        const vsource:string = this.readShader(vpath);
        const fsource:string = this.readShader(fpath);

        this.vId = this.gl.createShader(this.gl.VERTEX_SHADER) as WebGLShader;
        this.gl.shaderSource(this.vId,vsource);
        this.compileShader(this.vId);

        this.fId = this.gl.createShader(this.gl.FRAGMENT_SHADER) as WebGLShader;
        this.gl.shaderSource(this.fId,fsource);
        this.compileShader(this.fId);

        this.program = this.gl.createProgram() as WebGLProgram;

        this.gl.attachShader(this.program,this.vId);
        this.gl.attachShader(this.program,this.fId);

        this.linkProgram(this.program);
        this.validateProgram(this.program);

        var alluniforms = this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);

        for(var i =0; i < alluniforms;i++){
            const uniformName = this.gl.getActiveUniform(this.program,i);
            if(uniformName !== null){
                const uniformLoc = this.gl.getUniformLocation(this.program,uniformName.name);

                if(uniformLoc !== null){
                    this.uniformLocs[uniformName.name] = uniformLoc;
                }
            }
        }
    }

    private compileShader(shader:WebGLShader):void{
        this.gl.compileShader(shader);
        const success = this.gl.getShaderParameter(shader,this.gl.COMPILE_STATUS);

        if(!success){
            const infolog = this.gl.getShaderInfoLog(shader);
            throw new Error(`Error occurred whilst compiling Shader.\n\n${infolog}`);
        }

    }

    private linkProgram(program:WebGLProgram):void{
        this.gl.linkProgram(program);
        const success = this.gl.getProgramParameter(program,this.gl.LINK_STATUS);

        if(!success){
            const infolog = this.gl.getProgramInfoLog(program);
            throw new Error(`Error occurred whilst linking Program.\n\n${infolog}`);
        }
    }

    private validateProgram(program:WebGLProgram):void{
        this.gl.validateProgram(program);
        const success = this.gl.getProgramParameter(program,this.gl.VALIDATE_STATUS);

        if(!success){
            const infolog = this.gl.getProgramInfoLog(program);
            throw new Error(`Error occurred whilst compiling Program.\n\n${infolog}`);
        }
    }

    public bind(){
        this.gl.useProgram(this.program);
    }

    private readShader(path:string):string{
        var file = fs.readFileSync(path).toString();
        return file;
    }

    public setUniformMatrix3(name:string,value:Matrix3f){
        this.gl.uniformMatrix3fv(this.uniformLocs[name],true,value.get());
    }

    public setUniform1i(name:string,value:number){
        this.gl.uniform1i(this.uniformLocs[name],value);
    }

}