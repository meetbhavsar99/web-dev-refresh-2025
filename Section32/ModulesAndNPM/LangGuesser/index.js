import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';

// let str1 = 'Kem chho? majama?';
// let str2 = 'kese hai? badhiya?';
// let str3 = 'Alle menslike wesens word vry';

let str = process.argv[2];
let langCode = franc(str);
//console.log(langCode);

if(!process.argv[2]) {
    console.log(colors.red("Please provide the 3rd argument as a language string."));
} else {
    if(langCode === 'und') {
        console.log(colors.red("Sorry! Couldn't figure it out! TRY SIMPLE TEXT!"));
    } else {
        let langName = langs.where("3", langCode);
        if(!langName) {
            console.log(colors.red("Sorry! Couldn't figure it out! TRY SIMPLE TEXT!"));
        } else {
            console.log(colors.green(langName.name));
        }
    }
    
}


