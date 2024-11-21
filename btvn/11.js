const array = (array1,array2) => {
    let arr = [];
    let i = 0 ; j = 0;

    while(i < array1.length && j <array2.length){
        if(array1[i] < array2[j]) {
arr.push(array1[i]);
i++;
        } else {
            arr.push(array2[j]);
            j++;
        }
    }

    while(i < array1.length) {
        arr.push(array1[i]);
        i++;
    }

    while(j < array2.length) {
        arr.push(array2[j]);
        j++;
    }
    return arr;
};

const array1 = [1, 2, 3, 5, 9];
const array2 = [4, 6, 7, 8];
const result = array(array1,array2);
console.log(result); 