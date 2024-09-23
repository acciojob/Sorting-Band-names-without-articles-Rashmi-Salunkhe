//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles and sort the array
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array without considering articles
touristSpots.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Get the UL element with ID 'bands'
const ul = document.querySelector('#bands');

// Create list items for each tourist spot and append them to the UL
touristSpots.forEach(spot => {
  const li = document.createElement('li');
  li.textContent = spot;
  ul.appendChild(li);
});
