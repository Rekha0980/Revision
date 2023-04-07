// const numbers = [1, 2, 3];

// console.log(...numbers);


// function sum(...theArgs) {
//     //console.log(theArgs)
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));

  
//   console.log(sum(1, 2, 3, 4))

//   function val(b){
//     const a=10
//     a=b
//     return a
//   }
//   console.log(val(100))

// var iauth
// console.log(iauth)

// var str="masai"
// var {length}=str
// console.log(length)

// var arr=["a","b","c","d","e"]
// const func=([f,...r])=>r.reduce((a,c)=>a+c)+f
// func(arr)



// var arr=[1,2,3,4,5]
// arr.map(a=>a*5)
// console.log(arr)


// function getName(){
//     var status=true;
//     if(status){
// var name="masai"
//     }
//     console.log(name)
// }

// getName()



// function cont(x){
//     var y=x*10
//     function val(z){
//         console.log(x,y,z)
//     }
//     val(y*5)
// }
// cont(3)


// function alpa(){
//     var x=100
//     this.beta()
// }

// function beta(){
//     var x=200
//     console.log(this.x)
// }

// alpa()


const obj={
    a:5,
    myfunc:function(){
        console.log(this)
    }
}*''

obj.myfunc()