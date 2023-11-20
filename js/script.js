$(document).ready(function () {

	//КНОПКА БУРГЕР МЕНЮ
	$('.burger').on('click', function () {
		$(this).toggleClass('burger--active'); /* Поварачивает на 45 градусов вернию и нижнию линии кнопки бургер */
		$('.burger-line').toggleClass('burger--active'); /* Прячет у кнопки бургер среднию линию */
		$('.mobile-nav').toggleClass('is-active'); /* Открывает меню для мобильных устройств */
		$('body').toggleClass('stop-scroll'); /* Скрывает скрол при открытитии мобильного меню */
	});

});
