import Letters from "./Classes/Letters.js";

const xyzControllers = (req,res) => {
    const reqLetters = req.query.letters ?? 'XYZ';
    const reqSize = req.query.size ?? 3;
    const reqDirection = req.query.direction ?? 'vertical';
    const letterFactory = new Letters(reqSize);
    
    if(!reqLetters.match(/^[XYZxyz]/g) || reqLetters.match(/[a-wA-W0-9!@#\$%\^\&*\)\(+=._-]/g)) {
        res.send('Oops xyz only')
        return '';
    }
    if(reqSize % 2 == 0  || reqSize < 1) {
        res.send('Oops uhm odd number only and size should be greater than one.')
        return '';
    }
    if(reqDirection.toLowerCase() != 'horizontal' && reqDirection.toLowerCase() != 'vertical') {
        res.send('horizontal or vertical direction only')
        return '';
    }

    let letterStorage = []
    for(let i = 0; i < reqLetters.length; i++) {
        letterStorage.push(letterFactory.createLetters(reqLetters[i]));
    }
    if(reqDirection.toLowerCase() == 'horizontal') {
        let deconstructLetterStorage = [];
        let lettersStretch = '';
        for(let i = 0; i < letterStorage.length; i++) {
            deconstructLetterStorage.push(letterStorage[i].split('\n'));
        }

        for(let i = 0; i < deconstructLetterStorage[0].length; i++) {
            for(let j= 0; j < deconstructLetterStorage.length; j++) {
                lettersStretch += deconstructLetterStorage[j][i]+" ";
                if( j == deconstructLetterStorage.length-1) {
                    lettersStretch += '\n';
                }
            }
        }
        res.send('ok');
        return lettersStretch;
    }else { 
        res.send('ok');
        return letterStorage.map((data) => data+'\n\n').toString().replace(/,/g,'');
    }
}
export default xyzControllers;