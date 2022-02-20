import { WebGLModel } from "../base/WebGLModel";
import { VBO } from "./VBO";

export class VAO extends WebGLModel{
    public vao: WebGLVertexArrayObject | null;

    constructor(gl:WebGL2RenderingContext){
        super(gl);
        this.vao = this.gl.createVertexArray();
    }

    public attachBuffer(buffer:VBO,attrib:number,type:number){
        this.bind();

        this.gl.enableVertexAttribArray(attrib);
        buffer.bind();

        this.gl.vertexAttribPointer(attrib,2,type,false,0,0);

        buffer.unbind();
        this.unbind();
    }

    public bind(){
        this.gl.bindVertexArray(this.vao);
    }

    public unbind(){
        this.gl.bindVertexArray(null);
    }
}