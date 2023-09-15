"use strict"

var nsOptions =
{
    sliderId: "ninja-slider",
    transitionType: "slide", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
    autoAdvance: false,
    delay: "default",
    transitionSpeed: 700,
    aspectRatio: "1",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    pauseOnHover: false,
    keyboardNav: true,
    before: function (currentIdx, nextIdx, manual) { if(manual && typeof mcThumbnailSlider!="undefined") mcThumbnailSlider.display(nextIdx);},
    license: "b2e981"
};
var nslider = new NinjaSlider(nsOptions);

var thumbnailSliderOptions =
{
    sliderId: "thumbnail-slider",
    orientation: "vertical",
    thumbWidth: "133px",
    thumbHeight: "153px",
    autoAdvance: true,
    selectable: true,
    slideInterval: 3000,
    transitionSpeed: 900,
    shuffle: false,
    startSlideIndex: 0, //0-based
    pauseOnHover: true,
    initSliderByCallingInitFunc: false,
    rightGap: 0,
    keyboardNav: false,
    mousewheelNav: true,
    before: function (currentIdx, nextIdx, manual) { if (typeof nslider != "undefined") nslider.displaySlide(nextIdx); },
    license: "mylicense"
};
var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);