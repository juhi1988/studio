// Get the back button element
const backButton = document.querySelector('header button');

// Add event listener for click
backButton.addEventListener('click', () => {
    history.back(); // Navigate back to the previous page
});
// Get all icon elements
const icons = document.querySelectorAll('.icons img');

// Add hover effect to each icon
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.opacity = 0.7; // Reduce opacity on hover
    });

    icon.addEventListener('mouseout', () => {
        icon.style.opacity = 1; // Restore opacity when not hovering
    });
});
// Get the settings icon and create a dropdown menu element
const settingsIcon = document.querySelector('.icons img[alt="Settings"]');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown');

// Add menu items to the dropdown
dropdownMenu.innerHTML = `
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
`;

// Toggle the dropdown menu visibility on click
settingsIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
// Get the search icon and create a search input element
const searchIcon = document.querySelector('.icons img[alt="Search"]');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';

// Toggle the search input visibility on click
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('show');
});
// Get the UGC icon element
const ugcIcon = document.querySelector('.ugc-icon');

// Set the width and height (or just width and let height auto-adjust)
ugcIcon.style.width = '30px'; // Adjust the value as needed
ugcIcon.style.height = 'auto'; 
