const getFilteredObject = (array, object) => {
    return array.filter((element) => {
        let result = false;
        Object.keys(object).forEach((key) => {
            if (!element[key] || element[key] !== object[key]) {
                result = true;
            }
        });
        return result;
    });
};

const laptops = [
    {
        brand: "HP",
        processor: "i5",
        ram: 8
    },
    {
        brand: "Lenovo",
        processor: "i5",
        ram: 16
    },
    {
        brand: "Acer",
        processor: "i5",
        ram: 8
    }, {
        brand: "Asus",
        processor: "i7",
        ram: 16
    }
];

const result = getFilteredObject(laptops, { processor: "i5", ram: 8 });
console.log('result: ', result);

// scrieți o funcție care primește un array de obiecte și un string și returnează array - ul sortat după cheia specificată prin string.
const sampleString = 'brand';

const getSortedObject = (array, str) => {
    return array.sort((obj1, obj2) => obj1[str] < obj2[str] ? -1 : obj1[str] > obj2[str] ? 1 : 0);
};

console.log(getSortedObject(laptops, sampleString));

const sortObjects = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        else {
            return 1;
        }
    });
};

console.log(sortObjects(laptops, "ram"));