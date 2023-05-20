


 
var listData = [1,2,3,4,5,6] 
document.querySelector(".value1").value=0
var dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]


function playerOne(){ 
    var randomNum =Math.round(Math.random()*6);
    
    document.querySelector(".img1").setAttribute("src",dice[randomNum]);
    document.querySelector(".value1").value=listData[randomNum]
    


}

var dice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
function playerTwo(){
    var response = document.querySelector("h1")
    var random2 =Math.round(Math.random()*6);
    document.querySelector(".img2").setAttribute("src",dice[random2]);
    document.querySelector(".value2").value=listData[random2]



    var play2 =document.querySelector(".value2").value
    var play1 =document.querySelector(".value1").value
   

   if(play1==0){
    response.innerHTML="Player1 has not played";
   }else if(play1>play2){
    response.innerHTML="Player 1 Won!";

   }else if(play2>play1){
    response.innerHTML="Player 2 Won!";
   }else{
    response.innerHTML="Draw";
   }
    

}
