$(document).ready(function(){
    $(".profile").hide();
    $("#profile").on("click", function(){
        $(".profile").toggle(150);
    });

    $(".skills").hide();
    $("#skills").on("click", function(){
        $(".skills").toggle(150);
    });

    $(".work").hide();
    $("#work").on("click", function(){
        $(".work").toggle(150);
    });

    $(".contact").hide();
    $("#contact").on("click", function(){
        $(".contact").toggle(150);
    });
});

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 300);
//         return false;
//       }
//     }
//   });
// });
