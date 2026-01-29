// 1
// for(let i = 1; i<=100; i++){
//     console.log(i);
// }

// 2
// for(let i=1; i<=10; i++){
    
//     console.log(i*i);
// }

// 3
// let sum = 0
// for(let i=1; i<=50; i++){
//     if(i%2 !==0){
//         sum+=i
//     }
        
// }
// console.log(sum);

// 4
// let a = 12
// for(let i=1; i<=a; i++){
//     if(a%i == 0){
//         console.log(i);
//     }
// }


// 5
// for(let i=100; i>=1; i--){
//     console.log(i);
// }


// 6
// let a ="nonu"
// let bag =""
// for(let i=a.length-1; i>=0; i--){
//     bag+=a[i]
// }
// if(a==bag){
//     console.log("This is a Palindrome");
// }
// else{
//     console.log("This is not a Palindrome");
// }


// 7
// let a ="Hello Gitesh"
// let count = 0
// for(let i=0; i<a.length; i++){
//     if(a[i]== 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' ){
//         count++
//     }
// }
// console.log(count);


// 8
// let a = 5
// for(let i=1; i<=100; i++){
//     if(i%a==0){
//         console.log(i);
//     }
// }    

// 9
// let sum =""
// for(let i=1; i<=4; i++){
//     sum+=i
//     console.log(sum);
// }


// Nested For Loop

// 1
// for(let i=0; i<=5; i++){
//     let bag="";
//     for(let j=1; j<=5; j++){
//         bag+="*"
//     }
//     console.log(bag);
// }


// 2
// for(let i=1; i<=5; i++){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+="*"
//     }
//     console.log(bag);
// }


// 4
// for(let i=5; i>=1; i--){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+="*"
//     }
//     console.log(bag);
// }



// 6
// for(let i=1; i<=5; i++){
//     let bag=""
//     for(let j=1; j<=i; j++){
//         bag+=i
//     }
//     console.log(bag);
// }


// 7
// for(let i=1; i<=5; i++){
//     let bag=""
//     for(let j=1; j<=6-1-i; j++){
//         bag+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         bag+="*"
//     }
//     console.log(bag);
// }
// for(let i=4; i>=1; i--){
//     let bag=""
//     for(let j=1; j<=6-1-i; j++){
//         bag+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         bag+="*"
//     }
//     console.log(bag);
// }



// 8 
// for(let i=5; i>=1; i--){
//     let bag=""
//     for(let j=i; j>=1; j--){
//         bag+=j
//     }
//     console.log(bag);
// }


// 9
for(let i=5; i>=1; i--){
    let bag=""
    for(let j=i; j>=1; j--){
        bag+=j
    }
    console.log(bag);
}