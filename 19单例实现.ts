class SoundManager{
    private static instance:SoundManager;
    private constructor(){

    }
    static Instance(){
        if(!SoundManager.instance){
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    }
}

SoundManager.Instance();