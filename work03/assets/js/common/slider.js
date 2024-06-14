$(".js-slider").slick({
    autoplay: true,
    infinite: true,
    centerMode:true,
    centerPadding:"20px",
    variableWidth:true,
    arrows:false,
    responsive: [
        {
        breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});