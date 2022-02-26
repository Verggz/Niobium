import { WebGLModel } from "../base/WebGLModel";

export class IBO extends WebGLModel{
    public buffer: WebGLBuffer | null;
    constructor(gl:WebGL2RenderingContext,data:number[]){
        super(gl);

        this.buffer = this.gl.createBuffer();

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.buffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,data.length,this.gl.DYNAMIC_DRAW);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null);
    }

    public bind(){
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.buffer);
    }

    public unbind(){
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null);
    }
}