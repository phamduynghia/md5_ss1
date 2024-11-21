const sumArrays = (...array) => {
    return array.map(arr => arr.reduce((sum,num) => sum + num, 0))  ;
};

const i = sumArrays([1,2],[6,7,8],[12,8]);
console.log(i);