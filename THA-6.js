//Question1
var a1=[1,2,3];
var a2='hello';
function is_Array(arr){
 return arr instanceof Array
}
console.log(is_Array(a1))
console.log(is_Array(a2))

//Question2


//Question3
a4=[7,9,0,-2]
a5=[]
function first(arr,n){
if(n==undefined)
  return arr[0]
else if(n<0)
  return []
else if(n>arr.length)
  return arr
else
  return arr.slice(0,n)
}
console.log(first(a4))
console.log(first(a4,3))
console.log(first(a4,6))
console.log(first(a4,-3))
console.log(first([],3))


//Question4
var a3=["Red","Green","Yellow","Black"]
console.log(a3.join(','))
console.log(a3.join('+'))

//Question5

