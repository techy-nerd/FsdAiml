// const a=30
// if(a>20){
//     let a=50
//     console.log('inside value'+a)
// }
// else{
//    console.log('inside else')
// }
//  console.log('outside'+a)

// function grettings(msg){
//     // console.log('hello')
//     return msg
// }
// const val=grettings('hello  guys')
// console.log(val)

// annoymous func++++++++++++++
// const data=function (msg){
//     return 'hello'
// }
// const msg=data('gn')
// console.log(msg);

// arrow function+++++++++
// const data=(msg)=>{
//     return ('hi '+msg);
    
// }
// const val=data('raghav')
// console.log(val);

// const data=msg=>msg
// const data1=data('heloooooooooo')
// console.log(data1);

// iife+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// (()=>{
//     console.log('heloow');
    
// })()


// function greetings(msg='hi'){
//     console.log(msg);
    
// }
// greetings('welcome to abes')

function selectLanguage(lang){
    let data
    if(lang=='java'){
        function javaCompiler(){
            return 'hey,java compiler calling'
        }
        data=javaCompiler()
    }
    else if(lang=='c'){
        function CCompiler(){
            return 'hey,c compiler calling'
        }
        data=CCompiler()
    }
    else{
        data='no compiler available'
    }
   return data
}
const val=selectLanguage('python')
console.log(val);
