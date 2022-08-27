import createZ from "../Helpers/zCreationHelper.js";
import createX from "../Helpers/xCreationHelper.js";
import createY from "../Helpers/yCreationHelper.js";

class Letters {
    constructor (fontSize = 3) {
        if(fontSize % 2 == 0 && fontSize <= 1) {
            this.fontSize = 3;
        }else {
            this.fontSize = fontSize
        }
    }
    
    createLetters = (letter) => {
        
        switch(letter.toLowerCase()) {
            case 'x':
                return createX(this.fontSize)
            case 'y':
                return createY(this.fontSize)
            case 'z':
                return createZ(this.fontSize)
        }
    };


}

export default Letters;