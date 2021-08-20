$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $('.counter-arrow-up');
    var counterDown = $('.counter-arrow-down');
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".viewflats");
    var flatPath = $(".flats path");
    var flatlink =  $(".flat-link");


    flatlink.on('mouseover', function () { 
        flatPath.removeClass("currentFlat");
        flatlink.removeClass("currentFlat");
        currentFlat = $(this).attr("data-number");
        $(`[data-number=${currentFlat}]`).toggleClass("currentFlat");
     });


    flatPath.on('mouseover', function () { 
        flatPath.removeClass("currentFlat");
        flatlink.removeClass("currentFlat");
        currentFlat = $(this).attr("data-number");
        $(`[data-number=${currentFlat}]`).toggleClass("currentFlat");
     });
    
    viewFlatsButton.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    floorPath.on('click', toggleModal);

    function toggleModal () { modal.toggleClass('is-open'); };

    floorPath.on('mouseover', function () { //Через конструкцию $() Обращаюсь к элементам path класса .home-image, вешаем событие на клик
        floorPath.removeClass('currentFloor');
        currentFloor = $(this).attr("data-floor"); //Через .attr - получаем заданный атрибут
        $(".counter").text(currentFloor);  //Задаём .text содержимое элемента
    });

    counterUp.on('click', function () {
        if (currentFloor < 18 ) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  // приводим целое к виду 0X
            
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('currentFloor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("currentFloor"); //Ищем элемент, в котором data-floor == ${usCurrentFloor} и добавляем ему класс currentFloor
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2 ) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  // приводим целое к виду 0X
            
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('currentFloor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("currentFloor"); //Ищем элемент, в котором data-floor == ${usCurrentFloor} и добавляем ему класс currentFloor
        }
    });

});