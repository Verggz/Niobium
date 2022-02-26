export class Texture {
    private gl:WebGL2RenderingContext;

    public texture:WebGLTexture;
    public textureSource:string;

    constructor(gl:WebGL2RenderingContext,source:string){
        this.gl = gl;
        this.textureSource = source;
        
        this.texture = this.gl.createTexture();

        this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([0,255,0,255]));
        this.gl.bindTexture(this.gl.TEXTURE_2D,null);

        if(source == "none"){
            return;
        }
        var image = new Image();
        var main = this;

        image.onload = function(){
            main.gl.bindTexture(main.gl.TEXTURE_2D,main.texture);
            main.gl.texParameteri(main.gl.TEXTURE_2D, main.gl.TEXTURE_WRAP_S, main.gl.CLAMP_TO_EDGE);
            main.gl.texParameteri(main.gl.TEXTURE_2D, main.gl.TEXTURE_WRAP_T, main.gl.CLAMP_TO_EDGE);
            main.gl.texParameteri(main.gl.TEXTURE_2D,main.gl.TEXTURE_MIN_FILTER,main.gl.NEAREST);
            main.gl.texParameteri(main.gl.TEXTURE_2D,main.gl.TEXTURE_MAG_FILTER,main.gl.NEAREST);
            main.gl.texImage2D(main.gl.TEXTURE_2D,0,main.gl.RGBA,main.gl.RGBA,main.gl.UNSIGNED_BYTE,image);
        }

        image.src = this.textureSource;

    }

    public bind(sampler:number){
        if(sampler >= 0 && sampler <= 31){
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);
        }
    }

    private static isPowerOf2(val:number){
        return (val & (val - 1)) == 0;
    }
}