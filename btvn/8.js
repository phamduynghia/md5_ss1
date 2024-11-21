const arr = (array1,array2,position) => {
    if(position<0 || position > array1.length) {
        console.log("vị trí không hợp lệ");
        return array1;
    }

    const i = [
        ...array1.slice(0,position),
        ...array2,
        ...array1.slice(position)
    ];

    return i;
};
 
const i1 = arr([1,2,3,4,7,8],[5,6],4);
console.log(i1);

const i2 = arr(["a","b","c","f"],["d","e"],3);
console.log(i2);


