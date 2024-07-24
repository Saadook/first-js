function rectAreaGreaterThan50(length,width){
var area= length*width
return area > 50
}




function FullName(firstName,LastName){
var person = firstName+ " " +LastName
return person
  
}




function CalculateAge(BirthYear){
    var  year =new Date().getFullYear()
    var age=year-BirthYear
    return age
}




function  add (){
    return "hello my name is "+ FullName('sadok',"Ghanouchi") + " "+"and my age is "+ CalculateAge(2002)
}




function CalculateAverage(num1,num2,num3){
    var avg=(num1+num2+num3)/3;
    return (avg);

}




function isArgBiggerThan(max,avg){
    return avg>max
}



function decodeColor(code){
    if (code===1){
        console.log('red');
    }else if(code===2){

     console.log('yellow');
    }else if(code===3){
    console.log('green');
    }else {
        console.log('unknown code');
    }   
}


function CheckTemperateur(temp){
if (temp<10){
console.log("It's cold");
}else if (10<=temp &&temp<25){
    console.log("it's warm");
}else{
    console.log("it's hot");
}
}



function ValidateCredentials(username,password,confirmPassword,){
    if (username && password.length>=8 && password==confirmPassword){
    console.log("Valid credentials");
    }else console.log("invalid credentials");
}


function FindLargest (num1,num2,num3,){
   var  largest= Math.max(num1,num2,num3)
    console.log("the largest number is: ",largest);
}


function IsLeapYear(year){
    if (year % 4 == 0 && year % 100 !=0 || year % 400 == 0){
    console.log("leap year");
    }else {
        console.log("not a leap year");
    }

}


function decodeColorColor(code){
    switch(code){
        case 1:
            console.log("red");
            case 2:
                console.log("yellow");
                case "x":
                    console.log("green");
                default: 
                console.log("unknown code");

    }
}


function ToUpperCase(str){
    return str.ToUpperCase()
}


function substringExample(str,start,end){
return str.substring(start,end)
}


function roundNumber(floatingPoint){
    return Math.round(floatingPoint)
}


function ReplaceSubstring(str,find,replace){
    return str.replace(find,replace)
}



function ConvertToFixed(floatingPoint,decimalNumber){
    return floatingPoint.toFixed(decimalNumber)
}


function CapitalizeFirstLetter(str){
    return str.charAt(0).ToUpperCase()+str.slice(1)
}



function endsWith(str,ending){
    if (str.endsWith(ending)){
        return true;
    }else{
        return false;
    }
}


function reverseString(str){
    const strRev=
    str.split("").reverse().join("");
    console.log(strRev);
}



var fruits = ['apple' ,'banana','cherry']
 console.log(fruits[0]);
 console.log(fruits[fruits.length-1]);
 fruits.push('orange')
 fruits.unshift('grape')
 fruits.pop()
 fruits.shift()
 fruits.unshift(0)
 fruits.shift()


 var arr1=[1 , 2 , 3 ]
 var arr2=[4 , 5 , 6 ]
 var combinedArr = arr1.concat(arr2)


var letter=['a','b','c','d','e']
var NewArray=letter.slice(1,4)


var letters=['a','b','c','d','e']
var RemovedElement= letters.splice(2,1,'x','y')


var color=['red','green','blue']
color.includes('yellow')
color.push('yellow')


var numbers=[12 , 5 , 8 , 130 , 44 ]
var=math.max(numbers)


var ages=[18 , 21 , 16, 25 , 30]
var check= = ages.every(element=> element >=18)
console.log(check);



    for (let i = 0;i<=10;i++){
        console.log(i);
    }
 
 
    var x = [1,2,3,4]
    for (var i =0;i<x.length;i++){
        console.log(i);
    } 
 
    var o=[1,2,3,4,5]
    for (var i =0;i<.length;i++){
        console.log(i);
    }
 
 
    var colors = ["red", "green" , "blue" , "yellow"]
 for (let i = 0;i<colors.length;i++){
    console.log(colors[i]);
 }
 
 
 for(var i=0;i<=20;i++){
    console.log(i);
 }
 
 
 for (var i=0;i<=10;i++){
    console.log(5*i);
 }


 function somme(array){
    var x=0
    for(let i=0;i<array.length;i++){
        x=array[i]
        console.log(array[i]);
    }
 }


 function ProductOfEveryElement(array,multiplier){
    var array1=[]
    for (var i=0;i<array.length;i++){
        array1.push(array[i]*multiplier)
    } return(array1)
 }



 function length(array){
    var ResultArray=[]
    for(i=0;i< array.length;i++){
        ResultArray.push(array[i].length)
        console.log(array[i],"ele");
        console.log(array[i]);
    }return 
 }



 function avg(array){
    var sum=0;
    for (let i =0;i<array.length;i++){
        sum+= array[i];
    }
    var avg = sum/array.length;
    return avg
 }
avg([1,4,4])




function SumArray(array){
    array[1,2,3,4,5]
    def SumArray(arr):
    total=0
    for number in (arr):
    total+=number 
    return total
}




function countAdult(arr){
    var acc=0 
    for (let i=0;i<arr.length;i++){
        if (arr[i]>=)
    }
return(arr[i])
}
var students=[
    {name:'Alice',score:90},
    {name:'Blob',score:85}
    {name:'Charlie',score:88}
];

function AverrageScore(students){
  var acc=0
  for(let i=0;i<students.length;i++){
    acc+=students[i].score;
  }
  return acc/students.length
}



function MaxNumber(arr){
    let max =arr[0];
    for(let i = 1<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }
    return max ;
}


function FilterExpensiveProducts(products,minvalue){
    var products =[{name: 'laptop',price: 1000},
    {name:'mouse', price: 25},
    {name:'keyboard',price:75}
    {name:'monitor',price:300}
    ];
    return products.filter(product=>product.price>minvalue);
}


function FilterExpensiveProductss(arr,value){
    var acc=[]
    for (let i =0;i<arr.length;i++){
    if (arr[i].price>value){
        acc.push(arr[i])
    }
    }
    return acc
}


function TotalPages(book){
var total = 0;
for(let i =0;i<book.length;i++){
    total+=book[i].pages
}
return total;
}



function HighestSalary(employees){
    var acc = employees[0];
    for (let i =1;i<employees.length;i++){
        if (employees[i].salary>acc.salary){
            acc=employees[i]
        }
    }
    return acc
}


function studentWithHighestAverage(students){
    var maxstudent = 0
    var maxaverage = (student[0].grades[0]+student[0].grades[1]+student[0].grades[2]+student[0].grades[3])/3
    for(let i=1 ;i<students.length ;i++ ){
    var average = (student[i].grades[0]+student[i].grades[1]+student[i].grades[2]+student[0].grades[3])/3
      }  
      if(average>maxaverage){
        maxaverage=average
        maxstudent=students[i]
      }
      return maxstudent[i]
    }


    function totallnventoryValue(products){
        var acc=0;
        for (let product of products){
            acc +=product.price*product.quantity;
        }
        return acc
    }


    function child (score){
        var total =0
     for (let ele of calculate){
        total+=ele
     }
     return total
    }
    




    function child(athletes){
        var acc =0
        for (let ele of athletes){
            acc+=ele.score*athletes
        }
        return acc
    }
 function main (athletes){
    var bestAthletes=athletes[0]
    var bestScore = child(athletes[0].score)
    for (let i=0; i<athletes.length;i++){
        let score = child(athletes[i].score)
        if (score>bestScore){
            bestScore=score
            bestAthletes=athletes[i]
        }
    }
return bestAthletes
 }
 main([
    {name: 'Athlete One', scores: [10, 8, 9]},
    {name: 'Athlete Two', scores: [9, 9, 10]},
    {name: 'Athlete Three', scores: [8, 7, 9]}
])
function stringDuplicated(arr,str){
    var acc =0
    for (let i =0;i<arr.length;i++){
        if (arr[i]===str){
            acc++
            if (acc>1){
                return true

            }
        }
    }
    return false
}
function jlfdhksd(arr){
    var acc = 0 
    for (let i=0;i<arr.length;i++){
    for (let j = i+1;j<arr.length;j++){
        if(arr[i]=== arr[j]){
            return true
        }
    }    

}
return false
}














    











   












console.log(rectAreaGreaterThan50(2,7));
console.log(FullName('sadok',"Ghanouchi"));
console.log(CalculateAge(2002));
console.log(add());
console.log(CalculateAverage(10,20,30,));
console.log(isArgBiggerThan(1,CalculateAverage,(1,2,3)));
console.log(CheckTemperateur(23));
console.log(ValidateCredentials("sadok",26477197));
console.log(FindLargest(3,7,8));
console.log(decodeColorColor);
console.log(IsLeapYear(2024));
console.log(ToUpperCase);
console.log(substringExample("sadek",1,3));
console.log(roundNumber);
console.log(ReplaceSubstring);
console.log(ConvertToFixed);
console.log(CapitalizeFirstLetter);
console.log(endsWith);
console.log(reverseString);
