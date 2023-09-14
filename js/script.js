// The items inside ID_FOR_EACH_OFFICE means,
// the ordinal number, from top to bottom on 
// html document. For example A = 1, B = 2 
// and C = 3. It represent the position of the
// office. Not all fraction has explicity
// the office name; sometimes just the years. 
const ID_FOR_EACH_OFFICE = ['A', 'B', 'C']; 

let yearsArr = [
  '#_2021A', '#_2022A', '#_2023A',
  '#_2021B', '#_2022B', '#_2023B',
  '#_2021C', '#_2022C', '#_2023C'
];

let dataYearsArr = [
  '#data2021A', '#data2022A', '#data2023A',
  '#data2021B', '#data2022B', '#data2023B',
  '#data2021C', '#data2022C', '#data2023C'
];

let activeUnderlineArr = [
  '#inactive2021A', '#inactive2022A', '#inactive2023A', 
  '#inactive2021B', '#inactive2022B', '#inactive2023B',
  '#inactive2021C', '#inactive2022C', '#inactive2023C'
];

function selectData(ID, currentArray, letter, newArray) {
    for (let count = 0; count < ID.length; count++) {
        if (ID[count] === letter) {
            for (let item = 0; item < currentArray.length; item++) {
                for (let char of currentArray[item]) {
                    if (char === letter) {
                        newArray.push(currentArray[item]);
                    }
                } 
            }
        }
    }
    return newArray;
}

// It show the years of each office
function toggleYears(letter) {
	// Hide the information and the years of the opposite office
	//const oppositeLetter = (letter === 'A') ? 'F' : 'A'; // Change 'F' for the letter that correspond to the opposite office
	for (let count = 0; count < ID_FOR_EACH_OFFICE.length; count++) {
		const currentLeter = ID_FOR_EACH_OFFICE[count];
		if (currentLeter !== letter) {
			const oppositeLetter = currentLeter;
			const oppositeOfficeAndHisYears = [];
			const oppositeOfficeAndHisDataOfEachYear = [];
			// What are the opposite office information?
			selectData(ID_FOR_EACH_OFFICE, yearsArr, oppositeLetter, oppositeOfficeAndHisYears);
			selectData(ID_FOR_EACH_OFFICE, dataYearsArr, oppositeLetter, oppositeOfficeAndHisDataOfEachYear);
			// Process the information of each office
			const oppositeYears = document.querySelectorAll(oppositeOfficeAndHisYears.join(', '));
			const oppositeDataYears = document.querySelectorAll(oppositeOfficeAndHisDataOfEachYear.join(', '));
			// Not display please :)
			for (let i = 0; i < oppositeYears.length; i++) {
				oppositeYears[i].style.display = 'none';
				oppositeDataYears[i].style.display = 'none';
			}
		}
	}
	// To store valuable information: new array with only the information
	// that match with the "letter" parameter
	let officeAndHisYears = [];
	let officeAndHisDataOfEachYear = [];
	let yearActiveUnderline = [];
	// New array with only the years that correspond to the current office
	selectData(ID_FOR_EACH_OFFICE, yearsArr, letter, officeAndHisYears);
	// New array with only the data that correspond to the current office
	selectData(ID_FOR_EACH_OFFICE, dataYearsArr, letter, officeAndHisDataOfEachYear);
	// New array with only tha underline that correspond to the current office
	selectData(ID_FOR_EACH_OFFICE, activeUnderlineArr, letter, yearActiveUnderline);

	// Only the data choosed
	const years = document.querySelectorAll(officeAndHisYears.join(', '));
	const dataYears = document.querySelectorAll(officeAndHisDataOfEachYear.join(', '));
	const activeUnderline = document.querySelectorAll(yearActiveUnderline.join(', '));
	// Values that are present in class property; see HTML document
	const classList = ['text-white', 'text-decoration-none', 'clickable'];

	// To process all years from the office selected
	for (let count = 0; count < years.length; count++) {
		const year = years[count];
		const data = dataYears[count];
		const line = activeUnderline[count];
		// If the link is hidden, we show it; otherwise, we hidden it.
		if (year.style.display === 'none') {
			year.style.display = 'block';
			// Reset to the original values in class attribute
			line.setAttribute('class', classList.join(' '));
		} else {
			year.style.display = 'none';
			// If the container of the links to PDF's are shown it, we reset it
			data.style.display = 'none';
			// Reset to the original values in class attribute
			line.setAttribute('class', classList.join(' '));
		}
	}
}

// When a year is selected, only show the info that correspond to it 
function toggleDataFromYears(dataIdYear, idYearUnderline) {
	const data = document.querySelector(dataIdYear);
	const activeUnderline = document.querySelector(idYearUnderline);
	const allActiveUnderlines = document.querySelectorAll(activeUnderlineArr.join(', '));
	const dataYear = document.querySelectorAll(dataYearsArr.join(', '));
	const originalClassList = ['text-white', 'text-decoration-none', 'clickable'];
	// Obtain the value from class attribute
	const classList = activeUnderline.getAttribute('class');
	// Divide the value from attribute into an array
	const valuesClass = classList.split(' ');
	// Delete the value "text-decoration-none" from array
	valuesClass.splice(valuesClass.indexOf('text-decoration-none'), 1);	
	// Establish the new value from class attribute
	activeUnderline.setAttribute('class', valuesClass.join(' '));
	
  	// If the links to files are hidden, we show it, otherwise, we hidden it.
	if (data.style.display === 'none') {
		// Show the data links
		data.style.display = 'block';
		// Hide the data links of the other year 
		for (let count = 0; count < dataYear.length; count++) {
			const underli = allActiveUnderlines[count];
			const dataLink = dataYear[count];
			if (dataLink !== data && underli !== activeUnderline) {
				dataLink.style.display = 'none';
				underli.setAttribute('class', originalClassList.join(' '));
			}
		}
	} else {
		data.style.display = 'none';
		// Reset to the original values in class attribute
		valuesClass.splice(0, 0, 'text-white', 'text-decoration-none', 'clickable');
		activeUnderline.setAttribute('class', valuesClass.join(' '));
	}																							
}
