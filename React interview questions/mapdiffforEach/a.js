 const num=[1,2,3]
// const newArrAY=num.forEach((el,i,arr)=>arr[i]=el*2)//return undefined

// const newArraY=num.forEach((el,i,arr)=>arr[i]=el*2)// map retuns new array
// console.log(newArrAY)



const output = num.filter((el) =>el % 2) // filter out odd numbers
console.log(output); //

const sum = num.reduce((total, el) => {
    return total + el;
}, 0)

console.log(sum);