import { Model } from "./models/Model";
import { Shader } from "./models/Shader";
import { View } from "./area/View";
import { Transform } from "../model/Transform";
import { Texture } from "./models/Texture";

export class NioRenderer{
    private gl:WebGL2RenderingContext;

    public model:Model;
    public shader:Shader;
    public view:View;
    public texture:Texture;

    public vertices:number[];
    public texcoords:number[];

    public static SCALE_SIZE:number = 32;
    //the distance at which an object stops rendering from the cameras
    public static POPIN_DISTANCE:number = 5000 * 32;

    constructor(gl:WebGL2RenderingContext,mainview:View,vertices:number[],texcoords:number[],textureSrc:string){
        this.gl = gl;

        this.view = mainview;
        this.vertices = vertices;

        this.texture = new Texture(this.gl,textureSrc);
        this.texcoords = texcoords;

        this.model = new Model(this.gl,this.vertices,this.texcoords);
        this.shader = new Shader(this.gl,"./build/assets/shader.vsh","./build/assets/shader.fsh");
    }

    public render(transform:Transform):void{
        this.model.render(this.texture,transform,this.view,this.shader);
    }
}