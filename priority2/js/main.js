$(function () {
	$('input[type="tel"]').mask("+7 (999) 999 - 99 - 99");

	$("select").niceSelect();
});

(function (document, window, index) {
	var inputs = document.querySelectorAll(".choise-file__input");
	Array.prototype.forEach.call(inputs, function (input) {
		var label = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener("change", function (e) {
			var fileName = "";
			if (this.files && this.files.length > 1) {
				fileName = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length);
			} else {
				fileName = e.target.value.split("\\").pop();
			}

			if (fileName) {
				label.querySelector(".choise-file__text").innerHTML = fileName;
				input.classList.add("_choise");
			} else {
				label.innerHTML = labelVal;
				input.classList.remove("_choise");
			}
		});

		// Firefox bug fix
		input.addEventListener("focus", function () {
			input.classList.add("has-focus");
		});
		input.addEventListener("blur", function () {
			input.classList.remove("has-focus");
		});
	});
})(document, window, 0);

window.addEventListener("load", function () {
	new Swiper(".sliderCards", {
		slidesPerView: "auto",
		spaceBetween: 10,
		loop: true,
		centeredSlides: true,
	});

	var sticky = new Sticky(".block-sticky");
});
