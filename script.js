//Q1.how to compare two json have the same properties without order?
let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
var a=JSON.stringify(obj1);
var b=JSON.stringify(obj2);
console.log(a==b);
//-------------------------------------------------------------------------------------------------------------------------------------------
//Q2.API URL and display all the county flags in the console:-
var request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function(){
    var data=request.response;
    var convertRequest=JSON.parse(data);
    console.log(convertRequest);
   console.log("Q2.API URL and display all the county flags in the console:-")
    for(var i=0;i<convertRequest.length;i++){
        console.log(i+1,convertRequest[i].flags.png) 
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------
//Q3.print all countries names,regions,sub-regions and populations
var newRequest=new XMLHttpRequest;
newRequest.open("GET","https://restcountries.com/v3.1/all","true");
newRequest.send();
newRequest.onload=function() {
    var responseData = newRequest.response;
    var convertResponese =JSON.parse(responseData);
    console.log(convertResponese);
   console.log("//Q3.print all countries names,regions,sub-regions and populations");
   for(var i=0;i<convertResponese.length;i++){
    console.log(i,convertResponese[i].name.common,convertResponese[i].region,convertResponese[i].subregion,convertResponese[i].population)
   }  
}
//-------------------------------------------------------------------------------------------------------------------------------------------
