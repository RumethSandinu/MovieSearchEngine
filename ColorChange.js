// Access color change options bu id
const backgroundColorSelect = document.getElementById('BackgroundColor');
const textColorSelect = document.getElementById('TextColor');
function updateColors() {
    //Getting the selected colors
    const backgroundColor = backgroundColorSelect.value;
    const textColor = textColorSelect.value;
    // Select all the element is html page
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      //Exclude footer,header and aside from the selection
      if ((element.tagName !== 'footer' && !element.closest('footer')) && (element.tagName !== 'header' && !element.closest('header')) && (element.className !== 'aside' && !element.closest('aside'))){
        //Setting the colors
        element.style.backgroundColor = backgroundColor;
        element.style.color = textColor;
      }
    });
  }
  // Looking for any settings in color settings and call the updateColors()
backgroundColorSelect.addEventListener('change', updateColors);
textColorSelect.addEventListener('change', updateColors);
updateColors();








