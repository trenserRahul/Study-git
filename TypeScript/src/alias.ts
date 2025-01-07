type Person = {
    name:String;
    age:Number;
    isStudent:Boolean;
    address:{
        city:String;
        country:string
    }
}

const person:Person= {
    name:"arun",
    age:21,
    isStudent:true,
    address:{
        city:"tvm",
        country:"ind"
    }

}
const personOne:Person= {
    name:"athul",
    age:25,
    isStudent:false,
    address:{
        city:"klm",
        country:"ind"
    }

}

console.log(`name ${person.name} address ${person.address.city}`);
console.log(`name ${personOne.name} address ${personOne.address.city}`);