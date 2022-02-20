import { Vector2f } from "../math/Vector2f";
import { View } from "../rendering/area/View";

export class Mouse{
    public position:Vector2f;
    public buttons: any = {}
    public oldbuttons:any = {}
    constructor(){
        this.position = new Vector2f(null);
    }

    public update(canvas:HTMLCanvasElement){
        var main = this;
        canvas.addEventListener("mousemove",this.mouseMove.bind(this));

        canvas.addEventListener("mousedown",function(e){
            main.buttons[e.button] = true;
            main.oldbuttons = main.buttons;
        });
        canvas.addEventListener("mouseup",function(e){
            if(main.buttons[e.button] == true || !main.buttons[e.button]){
                main.buttons[e.button] = false;
                main.oldbuttons = main.buttons;
            }
            

        });
    }

    public mouseMove(e:MouseEvent){
        //console.log(`${e.clientX - 10} | ${e.clientY - 63}`);
        this.position.set(e.clientX - 10,e.clientY - 63);
        //console.log(this.position)
    }


    public screenToView(view:View):Vector2f{
        var target = new Vector2f(null);
        target.set((view.width / 2 + view.pos.x()) - this.position.x(),(view.height / 2 + view.pos.y() )- this.position.y() );

        return target;
    }
}