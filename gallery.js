// Function to divide the movies into the given categories and display accurately
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(button => {
        // Display the relevant items in each category when a button is clicked
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterImages(filter);
        });
    });

    // Function to filter images based on data-filter attribute
    function filterImages(filter) {
        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            if (filter === 'all' || image.classList.contains(filter)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    
});


// Initialize Magnific Popup-like functionality
const gallery = document.querySelector('.gallery');
// Display an enlarged image when the radio button is clicked
gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const imageUrl = event.target.getAttribute('href');
        console.log('Image URL:', imageUrl);
    }
});




// Function to display a description about the image 
  function showText(imageURL,content) {
    var largeImage = document.getElementById("maximisedImage");
    var imageContent = document.getElementById("imageContent");
    largeImage.src = imageURL;
    imageContent.textContent = content;

    var maxImageContainer = document.getElementById("largeImage");
    maxImageContainer.scrollIntoView({behavior: "smooth"})
  }

