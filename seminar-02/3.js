function f(a, b, c) {
    console.log(a, b, c);
}

const params = [1, 'a', true];

f(...params);

const [a, b, c] = params;

console.log(a);

const age = 22;

const o = {
    age,
    name: 'jim'
};