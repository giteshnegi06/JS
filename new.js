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


// 3
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
//     for(let j=1; j<=5-i; j++){
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


// 10
// for(let i=1; i<=5; i++){
//     let bag=""
//     for(let j=1; j<=5-i; j++){
//         bag+=" "
//     }
//     for(let k=1; k<=i; k++){
//         bag+="*"
//     }
//     console.log(bag);
// }


// 9
// let n=5
// for(let i=1; i<=n; i++){
//     let bag=""
//     for(let k=1; k<=n; k++){
//         if(i===1 || i===n || k===1 || k===n){
//             bag+="*"
//         }
//         else{
//             bag+=" "
//         }
//     }
//     console.log(bag);
// }



// SWITCH STATEMENT
 
// 1
// let score = 96
// let grade;
// switch(true){
//     case score>=90 && score<=100:
//     grade = "A"
//     break;

//     case score>=80 && score<=89:
//     grade = "B"
//     break;

//     case score>=70 && score<=79:
//     grade = "C"
//     break;

//     case score>=60 && score<=69:
//     grade = "D"
//     break;

//     case score>=0 && score<=60:
//     grade = "F"
//     break;

//     default : grade = "Enter the valed Score"
// }
// console.log(grade);



// 2

// let day = 1;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
    
//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thurday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid Data");
// }



// 3
// let month = 5;
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febury");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
// }


// 4
// let colour ="Red"
// let msg
// switch(true){
//     case colour=="Red":
//         msg = "Stop"
//         break;
//     case colour=="Green":
//         msg ="Go"
//         break;
//     case colour=="Yellow":
//         msg ="Slow Down"
//         break;
//     default:
//         msg = "Invalid value"
// }
// console.log(msg);


// 5
// let a = 5
// let b = 6
// let operator = "+"
// let result
// switch(operator){
//     case "+":
//         result = a+b
//         break;

//     case "-":
//         result = a-b
//         break;

//     case "*":
//         result = a*b
//         break;

//     case "/":
//         if(b !==0){
//             result = a/b
//         }
//         else{
//             result ="Error"
//         }
//         break;

//     default:
//         result = "Invalid Operator"
// }
// console.log(result);



// 6
// let a = 6
// let result
// switch(true){
//     case a==1 || a==2 || a==3 || a==4 || a==5:
//         console.log("Day is a weekday");
//         break;

//     case a==6 || a==7:
//         console.log("Day is a weekend");
//         break;

//     default:
//         console.log("Invalid Day");

// }



// 7
// let a = 9
// let season
// switch(true){
//     case a==1 || a==2 || a==12:
//         season = "Winter"
//         break;

//     case a==3 || a==4 || a==5:
//         season = "Spring"
//         break;

//     case a==6 || a==7 || a==8:
//         season = "Summer"
//         break;

//     case a==9 || a==10 || a==11:
//         season = "Fall"
//         break;

//     default:
//         season = "Invalid Month"
// }
// console.log(season);



// 8
// let score = 98
// let performance
// switch(true){
//     case score>=90 && score<=100:
//         performance = "It's Excellent"
//         break;

//     case score>=70 && score<=89:
//         performance = "It's Good"
//         break;

//     case score<=70:
//         performance = "Need Improvement"
//         break;

//     default:
//         performance = "Invalid Score"
        
// }
// console.log(performance);



// 9
// let age = 10
// let category
// switch(true){
//     case age>=0 && age<=12:
//         category = "Child"
//         break;
//     case age>=13 && age<=19:
//         category = "Teenager"
//         break;
//     case age>=20 && age<=35:
//         category = "Young Adult"
//         break;
//     case age>=36 && age<=60:
//         category = "Adult"
//         break;
//     case age>=60:
//         category = "Senior"
//         break;
//     default:
//         category = "Invalid Age"
// }
// console.log(category);


