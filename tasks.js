
performance = document.getElementById("btn").onclick =function (){
    score=document.getElementById('score').value;
   

    

    if(score >= 80 && score <= 100){
        results = "excellent";
    }
    else if(score >= 60 && score < 80){
        results = "good";
    }
    else if(score >= 50 && score < 60){
        results = "pass";
    }
    else if(score >= 0 && score < 50){
        results = "fail";
    }
    else{
        results = "invalid input";
    }
   
    document.getElementById('results').textContent= `you got which is ${results}`;
};

oddOrEven = document.getElementById('sub').onclick = function(){
    number = document.getElementById('number').value;



    if(number%2 !==0){
        typeofnumber ="odd"
    }
    else{
        typeofnumber="even"
    }
    document.getElementById('typeOfNumber').textContent =`it is an ${typeofnumber}`
}

account = document.getElementById('Spassword').onclick = function(){
   password = document.getElementById('password').value;

   
   if(password=1234){
    access= 'access granted'

   }
   else{
    access = 'access denied'
   }
   document.getElementById('access').textContent = `you ${access}`
}

Permit=document.getElementById('checkAge').onclick = function(){
    age = document.getElementById('age').value;

    if (age >= 18){
        drive = 'you are old enough to drive'

    }
    else{
        drive = 'you are not old enough to drive'
    }
    document.getElementById('driving').textContent = `${drive}`
}

rand = document.getElementById('generate').onclick=function(){
    random = Math.floor(Math.random()*100);
    document.getElementById('randomNumber').textContent = `your random number is ${random}`
}