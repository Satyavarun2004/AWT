const person={
    name:"varun",
    age:20
  }
  const {name,age,gender}=person
  console.log(name);
  console.log(age);
  console.log(gender);

  const number=[1,2,3,4]
  const[a,b,c,d]=number
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)

let array1=[1,2,3,4]
let array2=[...array1,6,7,8]
console.log(array2)


const data={
  reg_no:139,
  branch:"IT"
}
const student={
  name:"varun",
  age:19,
  marks:90,
  ...data
}

console.log(student)

const pers={
    name:"varun",
    age:20,
    marks:95,
    gender:"male"
  }
  const {name,age,...other}=pers
  console.log(name);
  console.log(age);
  console.log(other);
