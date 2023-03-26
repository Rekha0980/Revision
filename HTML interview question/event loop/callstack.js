function one(){
    return 1
}
function two(){
    return one()+1
}
function three(){
    return two()+1
}
console.log(one())
console.log(three())