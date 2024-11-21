// rest
const printArguments = (...args) =>{
    console.log("các đối số truyền vào: ",args);
};

printArguments (1 ,2 ,3);
printArguments ("như con...","dí lung...","chó ghẻ");
printArguments (true,false,1,{id: 1,name:"Bo"});