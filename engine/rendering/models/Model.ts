import { VAO } from "../primitive/VAO";
import { VBO } from "../primitive/VBO";
import { View } from "../area/View";
import { Shader } from "./Shader";
import {TransformComponent } from "../../components/TransformComponent";
import { Texture } from "./Texture";

export class Model{
    private gl:WebGL2RenderingContext;
    public vao:VAO;
    public shapebuf:VBO;
    public texcoordsbuf:VBO;

    public vertices:number[];
    public texcoords:number[];

    constructor(gl:WebGL2RenderingContext,vertices:number[],texcoords:number[]){
        this.gl = gl;

        this.vertices = vertices;
        this.texcoords = texcoords;

        this.vao = new VAO(this.gl);
        this.shapebuf = new VBO(this.gl,this.vertices);
        this.texcoordsbuf = new VBO(this.gl,texcoords);

        this.vao.attachBuffer(this.shapebuf,0,this.gl.FLOAT);
        this.vao.attachBuffer(this.texcoordsbuf,1,this.gl.FLOAT);
    }

    public render(texture:Texture,transform:TransformComponent,view:View,shader:Shader){
        this.vao.bind();

        shader.bind();
        
        shader.setUniformMatrix3("view",view.getView());
        shader.setUniformMatrix3("model",transform.GetTransform());
        shader.setUniformMatrix3("projection",view.getProjection());
        shader.setUniformMatrix3("scale",view.getScale());

        shader.setUniform1i("sampler",0);

        texture.bind(0);
        this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertices.length/ 2);
        this.vao.unbind();
    }
}