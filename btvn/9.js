const b = (...arrays) => {
    return arrays[0].map((_, index) => arrays.map(arr => arr[index]));
};

const i = b([1, 2, 3], 
    ['a', 'b', 'c'], 
    [true, false, true]) ;

    console.log(i);