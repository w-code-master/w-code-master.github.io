$(document).ready(function () {
	// mobile nav
	$(".burger").click(function () {
		$(".burger").toggleClass("active");
		$("html").toggleClass("overflow-y-hidden");
	});
	$(".burger").click(function () {
		if ($(".sidebar-panel").is(":visible")) {
			$(".sidebar-panel").removeClass("active").fadeOut(300);
			$("html").removeClass("overflow-y-hidden");
		} else {
			$(".sidebar-panel").addClass("active").fadeIn(300);
			$("html").addClass("overflow-y-hidden");
		}
	});

	// Toggle aside panel
	$(".header__aside-btn").click(function () {
		$(".header__aside, .main-aside").toggleClass("active");
	});

	$(".navigation-item.subMenu").beefup({
		trigger: ".navigation-link",
		content: ".navigation-submenu",
	});

	$(".dropdown").beefup({
		trigger: ".dropdown-head",
		content: ".dropdown-body",
		selfClose: true,
		animation: "fade",
	});

	$(".tariff-tabs").easytabs({
		tabs: ".tariff-tabs__item",
		defaultTab: ".tariff-tabs__item:nth-child(1)",
		updateHash: false,
	});

	$("select").niceSelect();
});
