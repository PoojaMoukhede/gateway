
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

// Get the card elements
const card1 = document.getElementById('Waiting');
const card2 = document.querySelector('.Waiting');
const card3 = document.getElementById('Waiting3');



// Store the original background colors of the cards
const originalColors = {
  card1: card1.style.backgroundColor,
  card2: card2.style.backgroundColor,
  card3: card3.style.backgroundColor,

};

// Function to change the color of the cards
function changeColor() {
  // Change the background color to the desired color
  card1.style.backgroundColor = '#D7F7D7';
  card2.style.backgroundColor = '#D7F7D7';
  card3.style.backgroundColor = '#D7F7D7';


  // Set a timeout to revert the color back to the original after 2 seconds
  setTimeout(() => {
    card1.style.backgroundColor = originalColors.card1;
    card2.style.backgroundColor = originalColors.card2;
    card3.style.backgroundColor = originalColors.card3;

  }, 5000);
}

// Set an interval to call the changeColor function every 2 seconds
setInterval(changeColor, 10000);



const bookmark1 = document.getElementById('bookmark_yellow');
// const originalColors2 = {
//   bookmark1: bookmark1.style.backgroundColor,
// };

// Function to change the color of the cards
function changeColor2() {
  bookmark1.style.backgroundColor = 'green'

//   setTimeout(() => {
//     bookmark1.style.backgroundColor = originalColors2.bookmark1;
//   }, 1000);
}

// Set an interval to call the changeColor function every 2 seconds
setInterval(changeColor2, 3000);



// var cards = [
//     { title: 'Gateway 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Gateway 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 20', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 2', content: 'Lorem ipsum dolor sit amet.' },
//     { title: 'Card 20', content: 'Lorem ipsum dolor sit amet.' },
    
//     // Add more card objects as needed
//     // ...
//     { title: 'Card 20', content: 'Lorem ipsum dolor sit amet.' }
// ]
// // Assuming you have an empty container element with the id "gateways"
// var container = document.getElementById('gateways');

// // Function to get a random color from an array of colors
// function getRandomColor() {
//   var colors = ['red', 'green', 'yellow'];
//   var randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// }

// // Iterate over the cards array
// for (var i = 0; i < cards.length; i++) {
//   // Create the necessary HTML elements
//   var cardItem = document.createElement('div');
//   cardItem.className = 'item';

//   var thumbnail = document.createElement('div');
//   thumbnail.className = 'thumbnail card';

//   var caption = document.createElement('div');
//   caption.className = 'caption card-body';

//   var title = document.createElement('h4');
//   title.className = 'group card-title inner list-group-item-heading';
//   title.textContent = cards[i].title;

//   var content = document.createElement('p');
//   content.textContent = cards[i].content;

//   // Add a random background color
//   var randomColor = getRandomColor();
//   thumbnail.style.backgroundColor = randomColor;

//   // Check if online and update the background color
//   if (randomColor === 'green') {
//     // If online, set the background color to green
//     thumbnail.style.backgroundColor = 'green';
//   }
//   else if (randomColor === 'yellow') {
//     // If online, set the background color to green
//     thumbnail.style.backgroundColor = 'yellow';
//   } 
//   else {
//     // If offline, set the background color to red
//     thumbnail.style.backgroundColor = 'red';
//   }

//   // Append the elements to build the card structure
//   caption.appendChild(title);
//   thumbnail.appendChild(caption);
//   thumbnail.appendChild(content);
//   cardItem.appendChild(thumbnail);

//   // Append the card to the container
//   container.appendChild(cardItem);
// }
