// function sum(){
// console.log(arguments)
// }

// sum(1,2,3)


// arrow function do not support arguments
// const sum=()=>{
//     console.log(arguments)
// }
// sum(1,2,3)

// //< ------------------------------------------------------------------------------>

// function sum(a,a,a){
// console.log(a+a+a)
// }

// sum(1,2,3)

// Duplicate parameter name not allowed in this context
// const sum = (a, a, a) => {
//     console.log(a + a + a)
// }

// sum(1, 2, 3)
// <-------------------------------------------------------------------------------------->>

// console.log(add(1,2))
// function add(a,b){
//     return a+b
// }

// The main difference between Function declaration and Function expression is we can invoke the
//  function add(2,3) before its declaration also in normal function, but the function add(2,3) needs to invoke after it is defined.


// console.log(add(1,2))
// const add=(a,b)=>{
//     return a+b
// }


// <------------------------------------------------------------------------------------------------>

// const user=(n)=>{
// this.da=n
// }

// let person=new user("jay")
// console.log(person)

// The arrow function cannot be invoked with the new keyword, because arrow functions don’t have a constructor.
// function user(da){
//     this.n=da
// }
// let p=new user("v")
// console.log(p)

// <--------------------------------------------------------------------------------------------->

// let userIntro={
//     name:"v",
//     myFun:function(){
//         console.log(this.name)
//     }
// }

// userIntro.myFun()


// let userIntro={
//     name:"v",
    
//     one(){
//      const myFun=()=>{
//             console.log(this.name)
//         }

//         myFun()
//     }
    
// }

// userIntro.one


// implicity return by arrow function
// let b=90

// const a=()=>b

// console.log(a())