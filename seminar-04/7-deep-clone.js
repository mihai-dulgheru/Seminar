const deepClone = (inObject) => {
    if (typeof inObject !== "object" || inObject === null) {
        return inObject;
    }
    if (inObject instanceof Date) {
        return new Date(inObject.getTime());
    }
    let outObject = Array.isArray(inObject) ? [] : {};
    for (let key in inObject) {
        outObject[key] = deepClone(inObject[key]);
    }
    return outObject;
};

let originalArray = ['string', 123, true, null, new Date(), undefined, Infinity, {
    string: 'string',
    number: 123,
    bool: false,
    null: null,
    date: new Date(),
    undef: undefined,
    inf: Infinity
}];
let deepCopiedArray = deepClone(originalArray);

originalArray[0] = 'abc';
originalArray[1] = 1000;
originalArray[2] = false;
originalArray[3] = 0;
originalArray[4] = new Date('2021-10-21');
// originalArray[7] = {};
originalArray[7].string = 'abc';
originalArray[7].number = 2000;
originalArray[7].bool = true;

console.log("Original array:", ...originalArray);
console.log("Deep copy:", ...deepCopiedArray);