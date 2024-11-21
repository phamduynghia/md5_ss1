const mergeObjects = (...objects) => {
    return objects.reduce((merged,current) => ({...merged,...current}),{});
};

const result = mergeObjects(
    {a: 1, b: 2 },
    { b: 3, c: 4 },
  { d: 5, a: 6 }
);

console.log(result);