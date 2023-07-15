
$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault() 
       window.location.href= "./list.html"
    });
    $('#grid').click(function (event) { event.preventDefault() 
        window.location.href= "./index.html"
    });
});

function openModal() {  
    // Open the modal
    $('#itemModal').modal('show');
  }
  
function toNavigate(){
  window.location.href= './login.html'
}  

// Random color generator

var colors = ['#FAC5CE', '#D7F7D7', '#F5F5B8'];
var colors2 = ['#DC3545', '#5AC55A', '#FABD20'];

function changeCardColor() {
    $('.card').each(function() {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        var randomColor2 = colors2[colors.indexOf(randomColor)];
        $(this).css('background-color', randomColor);
        $(this).find('.bookmark').css('background-color', randomColor2);
    });
}

// Set an interval of 5 seconds
setInterval(changeCardColor, 5000);

// Immediately change the color after 2 seconds
setTimeout(function() {
    changeCardColor();
    setInterval(changeCardColor, 5000);
}, 2000);
