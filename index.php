<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    
    <title>Сайт кухни на заказ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
</head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="header">
       <?php
       include "question-test.php"
       ?>
      <div class="info">
        <div class="component1">
        <img class="svg" width="22" height="429" alt="" data-mu-svgfallback="images/component_poster_.png?crc=467193301" src="img/info/component1.svg" id="u7775">
       <p>Срок эксплуатации <br> <span>10 лет</span> </p>
      </div>
        <div class="component2">
        <img class="svg" width="22" height="528" alt="" data-mu-svgfallback="images/component%202_poster_.png?crc=4161326813" src="img/info/component-2.svg" id="u7781">
        <p>Уложимся <br> <span>в ваш бюджет</span> </p>  
      </div>
        <div class="component3">
        <img class="svg" width="22" height="342" alt="" data-mu-svgfallback="images/component%203_poster_.png?crc=4200763440" src="img/info/component-3.svg" id="u7787">
        <p>Производим кухни <br>  <span>с 2003 года</span></p>  
      </div>
        <div class="logo">
        <a href="index.php">
            <div class="logo-img">
            <img src="img/logo.png" alt="" width="150px">
            </div>
            <div class="logo-text">
            <p>Кухни на заказ по любым размерам и идеям</p>
            </div>
            </a>
           
        </div>
        <div class="main-text">
            <p>Узнайте за 1 минуту<br>
            <span>Точную стоимость кухни по Вашим параметрам</span></p>
            
        </div>
        <div class="secondary-text">
            <p>Пройдите тест из 6 вопросов и <span>получите гарантированный подарок </span>на выбор:</p>
        </div>



<div class="container">
<div class="slider" data-slider="chiefslider">
  <div class="slider__container">
    <div class="slider__wrapper">
      <div class="slider__items">
        <div class="slider__item">
          <div class="slider__item-container">
            <div class="slider__item-content">
                <img src="img/montaj.svg">
                <span>Бесплатный монтаж</span></div>
          </div>
        </div>
        <div class="slider__item">
          <div class="slider__item-container">
            <div class="slider__item-content">
            <img src="img/moika.svg">
            <span>Кухонная мойка</span></div>
          </div>
        </div>
        <div class="slider__item">
          <div class="slider__item-container">
          
            <div class="slider__item-content">
            <img src="img/gamerroom.svg">
            <span>Игровая детская кухня</span></div>
          </div>
        </div>
        <div class="slider__item">
          <div class="slider__item-container">
              
            <div class="slider__item-content">
            <img src="img/svet.svg">
                <span>Светодиодная подсветка</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
<button id="button" class="t580__btn">ПРОЙТИ ТЕСТ</button>



</div>




<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>


<script src="js/chiefslider.js"></script>
<script src="js/sidebar.js"></script>

<script>
    $.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$("#phone").click(function(){
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
</script>



<script>
const $slider = document.querySelector('[data-slider="chiefslider"]');
const slider = new ChiefSlider($slider, {
  loop: true,
  autoplay: true,
  interval: 5000,
});
</script>
<script>
      
       $('.t580__btn').addClass('autoink').append('<div class="ink animate" style="height: 200px;width: 350px;top: -20px;left: -140px;"></div>');
</script>


</body>
</html>