const formatString = (s, ...format) => {
    let modified = s;
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i]);
        }
    }
    return modified;
};

console.log(formatString("this is a {0} string and we're {1} it.", 'nice', 'formatted'));

// implementați o funcție de formatare a unui string care suportă parametrii numiți; 
// de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".
const sampleString = "un {substantiv} este {adjectiv}";
const sampleFormat = {
    substantiv: "căluț",
    adjectiv: "drăguț"
};

const format = (string, parameters) => {
    let modified = string;
    for (const key in parameters) {

        // for (const key in format) { }
        // for (const key of Object.keys(format)) { }
        // for (const [key, value] of Object.entries(format)) { }

        if (modified.indexOf('{' + key + '}') !== -1) {
            modified = modified.replace('{' + key + '}', parameters[key]);
        }
    }
    return modified;
};

console.log(format(sampleString, sampleFormat));