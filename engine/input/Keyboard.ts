export class Keyboard{
    public keys:any = {};
    public oldkeys:any = {};

    public update(win:Window){
        var main = this;
        win.addEventListener("keydown",function(e){
            main.keys[e.key] = true;
            console.log(e.key);
            main.oldkeys = main.keys;
           
        });

        win.addEventListener("keyup",function(e){
            if(main.keys[e.key] == true || !main.keys[e.key]){
                //console.log("key2",main.keys[e.type]);
                main.keys[e.key] = false;
               
            }
            
            main.oldkeys = main.keys;
           
        });
    }

    public isKeyDown(type:string): boolean{
        if(this.keys[type]){
            return this.keys[type];
        }else{
            return false;
        }
        
    }

    public isKeyUp(type:string):boolean{
        if(this.keys[type]){
            return !this.keys[type];
        }else{
            return true;
        }
       
    }
}
