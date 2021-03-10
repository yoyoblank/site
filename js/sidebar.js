
let but = document.getElementById('button');
but.onclick = function(){
     let div = document.getElementById('block-test');
     div.style.display = 'block';
     setTimeout(function () {  
      div.style.zIndex = '10000';
     div.style.opacity = '1'; 
   }, 20); 
     
  
}
let close = document.getElementById('close');
close.onclick = function(){
     let div = document.getElementById('block-test');
       
     div.style.opacity = '0';
     div.style.zIndex = '0';  
     setTimeout(function () {
     div.style.display = 'none';  
   }, 200); 
}

let phonecheck = document.getElementById('phone');
phonecheck.onchange = function(){
   let buttonnext = document.getElementById('next8');
   buttonnext.classList.remove("disabled");
}
// Первый тест
for(var s = 1; s < 10; s++){
let nextpageactive = document.getElementById('go-next1-'+s);
nextpageactive.onclick = function(){
   let buttonnext = document.getElementById('next1');
   buttonnext.classList.remove("disabled");
}
}
let next = document.getElementById('next1');
next.onclick = function(){
   for(var z = 1; z < 10; z++){
      if($("#spoilerid1-"+z).prop("checked")){
         nametextpquestion1 = document.getElementById("p1").textContent;
         nametextspanquestion1 = document.getElementById("span1-"+z).textContent;   
      }
   }

     document.getElementById("number-question").innerHTML="Вопрос 2 из 6";
     document.getElementById("change-text-bonus").innerHTML="5 ВОПРОСОВ";
     let div = document.getElementById('progress-bar_line2');
     div.classList.add("active")
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions2');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions1');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }    
}
// Второй тест
for(var s = 1; s < 5; s++){
   let nextpageactive = document.getElementById('go-next2-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next2');
      buttonnext.classList.remove("disabled");
   }
   }
   let next2 = document.getElementById('next2');
   next2.onclick = function(){
   for(var z = 1; z < 5; z++){
      if($("#spoilerid2-"+z).prop("checked")){
         nametextpquestion2 = document.getElementById("p2").textContent;
         nametextspanquestion2 = document.getElementById("span2-"+z).textContent;   
      }
   }
     
     document.getElementById("number-question").innerHTML="Вопрос 3 из 6";
     document.getElementById("change-text-bonus").innerHTML="4 ВОПРОСА";
     let div = document.getElementById('progress-bar_line3');
     div.classList.add("active")
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions3');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions2');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }    
}  
// Третий тест
for(var s = 1; s < 5; s++){
   let nextpageactive = document.getElementById('go-next3-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next3');
      buttonnext.classList.remove("disabled");
   }
   }
   let next3= document.getElementById('next3');
   next3.onclick = function(){
   for(var z = 1; z < 5; z++){
      if($("#spoilerid3-"+z).prop("checked")){
         nametextpquestion3 = document.getElementById("p3").textContent;
         nametextspanquestion3 = document.getElementById("span3-"+z).textContent;   
      }
   }
    
     document.getElementById("number-question").innerHTML="Вопрос 4 из 6";
     document.getElementById("change-text-bonus").innerHTML="3 ВОПРОСА";
     let div = document.getElementById('progress-bar_line4');
     div.classList.add("active")
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions4');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions3');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }    
}  
//Четвертый тест
for(var s = 1; s < 7; s++){
   let nextpageactive = document.getElementById('go-next4-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next4');
      buttonnext.classList.remove("disabled");
   }
   }
   let next4= document.getElementById('next4');
   next4.onclick = function(){
   for(var z = 1; z < 7; z++){
      if($("#spoilerid4-"+z).prop("checked")){
         nametextpquestion4 = document.getElementById("p4").textContent;
         nametextspanquestion4 = document.getElementById("span4-"+z).textContent;   
      }
   }
    
     document.getElementById("number-question").innerHTML="Вопрос 5 из 6";
     document.getElementById("change-text-bonus").innerHTML="2 ВОПРОСА";
     let div = document.getElementById('progress-bar_line5');
     div.classList.add("active")
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions5');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions4');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }    
}  
//Пятый тест
for(var s = 1; s < 4; s++){
   let nextpageactive = document.getElementById('go-next5-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next5');
      buttonnext.classList.remove("disabled");
   }
   }
   let next5= document.getElementById('next5');
   next5.onclick = function(){
   for(var z = 1; z < 4; z++){
      if($("#spoilerid5-"+z).prop("checked")){
         nametextpquestion5 = document.getElementById("p5").textContent;
         nametextspanquestion5 = document.getElementById("span5-"+z).textContent;   
      }
   }
     
     document.getElementById("number-question").innerHTML="Вопрос 6 из 6";
     document.getElementById("change-text-bonus").innerHTML="1 ВОПРОС";
     let div = document.getElementById('progress-bar_line6');
     div.classList.add("active")
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions6');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions5');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }    
}  
//Шестой тест
for(var s = 1; s < 7; s++){
   let nextpageactive = document.getElementById('go-next6-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next6');
      buttonnext.classList.remove("disabled");
   }
   }
   var nametextspanquestion6 = ''
   let next6= document.getElementById('next6');
   next6.onclick = function(){
   for(var z = 1; z < 7; z++){
      if($("#spoilerid6-"+z).prop("checked")){
         
         nametextpquestion6 =   document.getElementById("p6").textContent;
         nametextspanquestion6 += " ";
         nametextspanquestion6 +=  document.getElementById("span6-"+z).textContent;   
      }
   }
     
     document.getElementById("number-question").innerHTML="Подарок";
     document.getElementById("change-name-bonus").innerHTML="Поздравляю теперь можете забрать";
     document.getElementById("change-text-bonus").innerHTML="Ваш подарок:";
     document.getElementById('present').innerHTML=" <img src='/img/unclose.png' alt=''>";
     
  
     
     for (var k = 1; k < 8; k++){
       let setbox = document.getElementById('block-test-questions7');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions6');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }   

}  
//Седьмой тест тест
for(var s = 1; s < 5; s++){
   let nextpageactive = document.getElementById('go-next7-'+s);
   nextpageactive.onclick = function(){
      let buttonnext = document.getElementById('next7');
      buttonnext.classList.remove("disabled");
   }
   }
  
   let next7= document.getElementById('next7');
   next7.onclick = function(){
   for(var z = 1; z < 5; z++){
      if($("#spoilerid7-"+z).prop("checked")){
         
         nametextpquestion7 =   document.getElementById("p7").textContent;
         nametextspanquestion7 =  document.getElementById("span7-"+z).textContent; 
         if(z==1){
            document.getElementById("change-text-bonus").innerHTML="Ваш подарок:  <br>" + nametextspanquestion7;
            document.getElementById("change-name-bonus").innerHTML="Спасибо за прохождение теста";
            document.getElementById("present-picture").src='/img/7test/7-1.png';
            document.getElementById("present-picture").style.width="17vw";
            document.getElementById("present-picture").style.textAlign="center";
            document.getElementById("test-bonus").style.backgroundColor="rgb(229,229,229)"
            document.getElementById("test-bonus").style.backgroundImage="none";
         }  
         if(z==2){
            document.getElementById("change-text-bonus").innerHTML="Ваш подарок: <br>" + nametextspanquestion7;
            document.getElementById("change-name-bonus").innerHTML="Спасибо за прохождение теста";
            document.getElementById("present-picture").src='/img/7test/7-2.jpg';
            document.getElementById("present-picture").style.width="17vw";
            document.getElementById("present-picture").style.textAlign="center";
            document.getElementById("test-bonus").style.backgroundColor="rgb(229,229,229)"
            document.getElementById("test-bonus").style.backgroundImage="none";
         }  
         if(z==3){
            document.getElementById("change-text-bonus").innerHTML="Ваш подарок:  <br>" + nametextspanquestion7;
            document.getElementById("change-name-bonus").innerHTML="Спасибо за прохождение теста";
            document.getElementById("present-picture").src='/img/7test/7-3.jpg';
            document.getElementById("present-picture").style.width="17vw";
            document.getElementById("present-picture").style.textAlign="center";
            document.getElementById("test-bonus").style.backgroundColor="rgb(229,229,229)"
            document.getElementById("test-bonus").style.backgroundImage="none";
         }  
         if(z==4){
            document.getElementById("change-text-bonus").innerHTML="Ваш подарок:  <br>" + nametextspanquestion7;
            document.getElementById("change-name-bonus").innerHTML="Спасибо за прохождение теста";
            document.getElementById("present-picture").src='/img/7test/7-4.jpg';
            document.getElementById("present-picture").style.width="17vw";
            document.getElementById("present-picture").textAlign="center";
            document.getElementById("test-bonus").style.backgroundColor="rgb(229,229,229)"
            document.getElementById("test-bonus").style.backgroundImage="none";
         }  
      }
   }
     
     
   document.getElementById("number-question").innerHTML=" ";
     
     for (var k = 1; k < 9; k++){
       let setbox = document.getElementById('block-test-questions8');
       setbox.style.display = 'block';
       setTimeout(function () {  
       setbox.style.zIndex = '10';
       setbox.style.opacity = '1';
      }, 200); 
       let delbox = document.getElementById('block-test-questions7');
       delbox.style.display = 'none';
       delbox.style.zIndex = '0';
       delbox.style.opacity = '0';
   }   

}  
$(document).ready(function(){
   
   $('#next8').on('click',function(){
   var text = document.getElementById('phone');
   var phone = text.value;
     $.ajax({
          url : "sendinfo.php",
          type: "POST", 
          data: {name1: nametextpquestion1, text1: nametextspanquestion1,name2: nametextpquestion2, text2: nametextspanquestion2,name3: nametextpquestion3, text3: nametextspanquestion3,name4: nametextpquestion4, text4: nametextspanquestion4,name5: nametextpquestion5, text5: nametextspanquestion5,name6: nametextpquestion6, text6: nametextspanquestion6,name7: nametextpquestion7, text7: nametextspanquestion7,phone1: phone},
          success: function() {
            alert('Спасибо за заявку');
            window.location.href = 'index.php';
            
          }
     });
 })
 }); 