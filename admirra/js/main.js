$(document).ready(function () {
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
