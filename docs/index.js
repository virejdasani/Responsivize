// back to top button
var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 500) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, 1000);
});

// dark mode toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}