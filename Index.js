// Get references to DOM elements
const toggleBtn = document.querySelector('.toggle_btn'); // Toggle button 
const toggleBtnIcon = document.querySelector('.toggle_btn i'); // Icon within the toggle button
const dropDownMenu = document.querySelector('.dropdown_menu'); // Dropdown menu element

// Toggle dropdown menu and change the toggle button icon on click
toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open'); // Toggle the 'open' class on the dropdown menu
    toggleBtnIcon.classList.toggle('uil-times'); // Toggle the 'uil-times' class on the toggle button icon
    toggleBtnIcon.classList.toggle('uil-bars'); // Toggle the 'uil-bars' class on the toggle button icon
};


let icon = document.getElementById("dark"); // Dark mode toggle button
let logo = document.getElementsByClassName("logo")[0]; // Logo element

// Function to toggle dark mode on click of the dark mode toggle button
icon.onclick = () => {
    document.body.classList.toggle("darktheme"); // Toggle the 'darktheme' class on the body element

    // Check if dark theme is active
    if (document.body.classList.contains("darktheme")) {
        // Switch icon and change logo when dark theme is activated
        icon.classList.remove("bx-sun");
        icon.classList.add("bxs-moon");
        logo.src = "logo/logo.png"; // Set logo image to the light mode version
    } else {
        // Switch icon and change logo when dark theme is deactivated
        icon.classList.remove("bxs-moon");
        icon.classList.add("bx-sun");
        logo.src = "logo/logo2.png"; // Set logo image to the dark mode version
    }
};
