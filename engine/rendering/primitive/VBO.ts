import { WebGLModel } from "../base/WebGLModel";

export class VBO extends WebGLModel{
    public buffer: WebGLBuffer | null;
    constructor(gl:WebGL2RenderingContext,data:number[]){
        super(gl);

        this.buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(data),this.gl.DYNAMIC_DRAW);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null);
    }
    public bind(){
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer);
    }

    public unbind(){
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null);
    }
}