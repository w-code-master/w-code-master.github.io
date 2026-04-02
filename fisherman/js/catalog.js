$(document).ready(function () {
	// Range slider days
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
	// Listen to keydown events on the input field.
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

	// Range slider price
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
	// Listen to keydown events on the input field.
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
});
