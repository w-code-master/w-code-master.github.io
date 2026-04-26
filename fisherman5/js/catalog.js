$(document).ready(function () {
	// mobile nav
	$(".burger").click(function () {
		$(".burger").toggleClass("active");
		$("html").toggleClass("overflow-y-hidden");
	});
	$(".nav li a, .mobile-nav__close").click(function () {
		$(".mobile-nav").fadeOut(300);
		$("html").removeClass("overflow-y-hidden");
		$(".burger").removeClass("active");
	});
	$(".burger").click(function () {
		if ($(".mobile-nav").is(":visible")) {
			$(".mobile-nav").fadeOut(300);
			$("html").removeClass("overflow-y-hidden");
		} else {
			$(".mobile-nav").fadeIn(300);
			$("html").addClass("overflow-y-hidden");
		}
	});

	// niceSelect
	$("select").niceSelect();

	$(".entry-modal-form").magnificPopup({
		removalDelay: 300,
		mainClass: "mfp-fade",
		fixedContentPos: true,
		fixedBgPos: true,
	});

	// Toggle active class on filter menu
	const directoryParametersButtons = document.querySelectorAll(".directory-parameters__btn");
	directoryParametersButtons.forEach((directoryParametersButton) => {
		directoryParametersButton.addEventListener("click", () => {
			// 1. Убрать active у всех
			directoryParametersButtons.forEach((i) => i.classList.remove("active"));
			// 2. Добавить active текущему
			directoryParametersButton.classList.add("active");
		});
	});

	// intlTelInput
	var inputCountryTel = document.querySelector(".inputCountryTel");
	window.intlTelInput(inputCountryTel, {
		separateDialCode: true,
		preferredCountries: ["ru", "ua", "by"],
	});
	// intlTelInput validation
	var inputKeyTel = document.querySelector(".inputKeyTel");
	inputKeyTel.addEventListener("keypress", function (e) {
		if (e.which < 48 || e.which > 57) {
			e.preventDefault();
		}
	});

	// Сладер-диапазон дней
	var rangeSliderDays = document.getElementById("range-slider-days");
	var inputDayFrom = document.getElementById("input-day-from");
	var inputDayTo = document.getElementById("input-day-to");
	var fromToDaysInputs = [inputDayFrom, inputDayTo];
	noUiSlider.create(rangeSliderDays, {
		range: {
			min: 0,
			max: 14,
		},
		start: [2, 10],
		connect: true,
		tooltips: true,
		step: 1,
		format: {
			to: function (value) {
				return parseInt(value) + "";
			},
			from: function (value) {
				return Number(value.replace("", ""));
			},
		},
	});
	rangeSliderDays.noUiSlider.on("update", function (values, handle) {
		fromToDaysInputs[handle].value = values[handle];
	});
	fromToDaysInputs.forEach(function (input, handle) {
		input.addEventListener("change", function () {
			rangeSliderDays.noUiSlider.setHandle(handle, this.value);
		});
		input.addEventListener("keydown", function (e) {
			var values = slider.noUiSlider.get();
			var value = Number(values[handle]);
			var steps = slider.noUiSlider.steps();
			var step = steps[handle];
		});
	});

	// Сладер-диапазон дней 2 (на телефоне)
	var rangeSliderDays2 = document.getElementById("range-slider-days2");
	var inputDayFrom2 = document.getElementById("input-day-from2");
	var inputDayTo2 = document.getElementById("input-day-to2");
	var fromToDaysInputs2 = [inputDayFrom2, inputDayTo2];
	noUiSlider.create(rangeSliderDays2, {
		range: {
			min: 0,
			max: 14,
		},
		start: [2, 10],
		connect: true,
		tooltips: true,
		step: 1,
		format: {
			to: function (value) {
				return parseInt(value) + "";
			},
			from: function (value) {
				return Number(value.replace("", ""));
			},
		},
	});
	rangeSliderDays2.noUiSlider.on("update", function (values, handle) {
		fromToDaysInputs2[handle].value = values[handle];
	});
	fromToDaysInputs2.forEach(function (input, handle) {
		input.addEventListener("change", function () {
			rangeSliderDays2.noUiSlider.setHandle(handle, this.value);
		});
		input.addEventListener("keydown", function (e) {
			var values = slider.noUiSlider.get();
			var value = Number(values[handle]);
			var steps = slider.noUiSlider.steps();
			var step = steps[handle];
		});
	});

	/*****************************************************************/

	// Сладер-диапазон цени
	var rangeSliderPrice = document.getElementById("range-slider-price");
	var inputPriceFrom = document.getElementById("input-price-from");
	var inputPriceTo = document.getElementById("input-price-to");
	var fromToPriceInputs = [inputPriceFrom, inputPriceTo];
	noUiSlider.create(rangeSliderPrice, {
		range: {
			min: 10,
			max: 250,
		},
		start: [50, 150],
		connect: true,
		tooltips: true,
		step: 5,
		format: {
			to: function (value) {
				return parseInt(value) + " 000";
			},
			from: function (value) {
				return Number(value.replace(" 000", ""));
			},
		},
	});
	rangeSliderPrice.noUiSlider.on("update", function (values, handle) {
		fromToPriceInputs[handle].value = values[handle];
	});
	fromToPriceInputs.forEach(function (input, handle) {
		input.addEventListener("change", function () {
			rangeSliderPrice.noUiSlider.setHandle(handle, this.value);
		});
		input.addEventListener("keydown", function (e) {
			var values = slider.noUiSlider.get();
			var value = Number(values[handle]);
			var steps = slider.noUiSlider.steps();
			var step = steps[handle];
		});
	});

	// Сладер-диапазон цени 2 (на телефоне)
	var rangeSliderPrice2 = document.getElementById("range-slider-price2");
	var inputPriceFrom2 = document.getElementById("input-price-from2");
	var inputPriceTo2 = document.getElementById("input-price-to2");
	var fromToPriceInputs2 = [inputPriceFrom2, inputPriceTo2];
	noUiSlider.create(rangeSliderPrice2, {
		range: {
			min: 10,
			max: 250,
		},
		start: [50, 150],
		connect: true,
		tooltips: true,
		step: 5,
		format: {
			to: function (value) {
				return parseInt(value) + " 000";
			},
			from: function (value) {
				return Number(value.replace(" 000", ""));
			},
		},
	});
	rangeSliderPrice2.noUiSlider.on("update", function (values, handle) {
		fromToPriceInputs2[handle].value = values[handle];
	});
	fromToPriceInputs2.forEach(function (input, handle) {
		input.addEventListener("change", function () {
			rangeSliderPrice2.noUiSlider.setHandle(handle, this.value);
		});
		input.addEventListener("keydown", function (e) {
			var values = slider.noUiSlider.get();
			var value = Number(values[handle]);
			var steps = slider.noUiSlider.steps();
			var step = steps[handle];
		});
	});
});
