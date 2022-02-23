export class SoundDriver{
    public context:AudioContext;
    public track:MediaElementAudioSourceNode;
    public element:HTMLAudioElement;


    constructor(element:HTMLAudioElement){
        
        this.context = new AudioContext();
        this.track = this.context.createMediaElementSource(element)
    }
}