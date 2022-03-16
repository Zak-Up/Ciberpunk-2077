

// ---=== Nabvar Sticky ===-- //

function fix_scroll() {
    let s = $(window).scrollTop();
    let fixedTitle = $('#navbar');
    fixedTitle.css('position','absolute');
    fixedTitle.css('top',s + 'px');
}fix_scroll();

$(window).on('scroll',fix_scroll);


// --=== Scroll Top ===-- //

// $(document).ready(function(){
//     $('.go-top').click(function(){
//         $('body, html').animate({
//             scrollTop: '0px'
//         },1000);
//     })
// })







