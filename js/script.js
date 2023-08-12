
function toggleYears() {
  const year2021 = document.querySelector('#year-2021');
  const dataLinks = document.getElementById('data-year-2021');
  const textDecoration = document.querySelector('#year-2021-link');
  // Original values from class attribute
  const classList = ['text-white', 'text-decoration-none'];

  // If the link 2021 is hidden, we show it; otherwise, we hidden it.
  if (year2021.style.display === 'none') {
    year2021.style.display = 'block';
  } else {
    year2021.style.display = 'none';
    // If the container of the links to PDF's are shown it, we reset it
    dataLinks.style.display = 'none';
    // Reset to the original values in class attribute
    textDecoration.setAttribute('class', classList.join(' '));
  }
}

function toggleData2021() {
  const dataLinks = document.getElementById('data-year-2021');
  const textDecoration = document.querySelector('#year-2021-link');
  // Obtain the value from class attribute
  const classList = textDecoration.getAttribute('class');
  // Divide the value from attribute on the array
  const valuesClass = classList.split(' ');
  // Delete the value "text-decoration-none" from array
  valuesClass.splice(valuesClass.indexOf('text-decoration-none'), 1);
  // Establish the new value from class attribute
  textDecoration.setAttribute('class', valuesClass.join(' '));
  
  // If the links to PDF's are hidden, we show it, otherwise, we hidden it.
  if (dataLinks.style.display === 'none') {
    dataLinks.style.display = 'block';    
  } else {
    dataLinks.style.display = 'none';
    // Reset to the original values in class attribute
    valuesClass.splice(0, 0, 'text-white', 'text-decoration-none');
    textDecoration.setAttribute('class', valuesClass.join(' '));
  }
}
