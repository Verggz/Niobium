import { Keyboard } from "./input/Keyboard";
import { Mouse } from "./input/Mouse";
import { Vector3f } from "./math/Vector3f";
import { Entity } from "./model/Entity";
import { Scene } from "./model/Scene";
import { View } from "./rendering/area/View";

export class NiobiumManager{
    private static gl:WebGL2RenderingContext;

    public static backgroundColor:Vector3f;

    public static mouse:Mouse =  new Mouse();
    public static keyboard:Keyboard = new Keyboard(); 

    public static scenes:Scene[];
    public static currentScene: Scene;
    public static view:View;

    constructor(gl:WebGL2RenderingContext,width:number,height:number){
        NiobiumManager.gl = gl;
        NiobiumManager.backgroundColor = new Vector3f(null);

        NiobiumManager.scenes = [];
        NiobiumManager.currentScene = NiobiumManager.scenes[0];
        NiobiumManager.view = new View(width,height);
        
    }

    public static setView(width:number,height:number){
        NiobiumManager.view = new View(width,height);
    }

    public static loadScene(sceneFile:string): Scene{
        return new Scene(NiobiumManager.gl,[]);
    }
}