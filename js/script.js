// The items inside ID_FOR_EACH_OFFICE means,
// the ordinal number, from top to bottom on 
// html document. For example A = 1, B = 2 
// and C = 3. It represent the position of the
// office. Not all fraction has explicity
// the office name; sometimes just the years. 
const ID_FOR_EACH_OFFICE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; 

let yearsArr = [
  '#_2020A', // Be carful with this line, isn't allow
  '#_2021A', '#_2022A', '#_2023A', '#_2024A', '#_2025A',
  '#_2021B', '#_2022B', '#_2023B', '#_2024B',
  '#_2021C', '#_2022C', '#_2023C', '#_2024C',
  '#el_aA', '#el_bA', '#el_cA', '#el_dA', '#el_eA', '#el_fA', '#el_gA', '#el_hA', '#el_iA', '#el_jA', '#el_kA', '#el_lA', '#el_mA', '#el_nA', '#el_oA',
  // remanent to do something; finanzas.
  '#el_aB', '#el_bB', '#el_cB', '#el_dB', '#el_eB', '#el_fB', '#el_gB', '#el_hB', //////
  '#el_aC', '#el_bC', '#el_cC', '#el_dC', '#el_eC', '#el_fC', '#el_gC', '#el_hC', //////
  '#el_aD', '#el_bD', '#el_cD', '#el_dD', '#el_eD', '#el_fD', '#el_gD', '#el_hD', //////
  '#el_aE', '#el_bE', '#el_cE', '#el_dE', '#el_eE', '#el_fE', '#el_gE', '#el_hE', //////
  '#el_aF', '#el_bF', '#el_cF', '#el_dF', '#el_eF', '#el_fF', '#el_gF', '#el_hF', //////
  '#el_aG', '#el_bG', '#el_cG', '#el_dG', '#el_eG', '#el_fG', '#el_gG', '#el_hG', //////
  '#el_aH', '#el_bH', '#el_cH', '#el_dH', '#el_eH', '#el_fH', '#el_gH', '#el_hH' 
];

let dataYearsArr = [
  '#data2020A', // Be carful with this line, isn't allow
  '#data2021A', '#data2022A', '#data2023A', '#data2024A', '#data2025A',
  '#data2021B', '#data2022B', '#data2023B', '#data2024B',
  '#data2021C', '#data2022C', '#data2023C', '#data2024C',
  '#dataaA', '#databA', '#datacA', '#datadA', '#dataeA', '#datafA', '#datagA', '#datahA', '#dataiA', '#datajA', '#datakA', '#datalA', '#datamA', '#datanA', '#dataoA',
  // remanent to do something; finanzas.
  '#dataaB', '#databB', '#datacB', '#datadB', '#dataeB', '#datafB', '#datagB', '#datahB', //////
  '#dataaC', '#databC', '#datacC', '#datadC', '#dataeC', '#datafC', '#datagC', '#datahC', ////
  '#dataaD', '#databD', '#datacD', '#datadD', '#dataeD', '#datafD', '#datagD', '#datahD', ////
  '#dataaE', '#databE', '#datacE', '#datadE', '#dataeE', '#datafE', '#datagE', '#datahE', ////
  '#dataaF', '#databF', '#datacF', '#datadF', '#dataeF', '#datafF', '#datagF', '#datahF', ////
  '#dataaG', '#databG', '#datacG', '#datadG', '#dataeG', '#datafG', '#datagG', '#datahG', ////
  '#dataaH', '#databH', '#datacH', '#datadH', '#dataeH', '#datafH', '#datagH', '#datahH'
];

let activeUnderlineArr = [ 
  '#inactive2020A', // Be careful with this line, isn't allow
  '#inactive2021A', '#inactive2022A', '#inactive2023A', '#inactive2024A', '#inactive2025A',
  '#inactive2021B', '#inactive2022B', '#inactive2023B', '#inactive2024B',
  '#inactive2021C', '#inactive2022C', '#inactive2023C', '#inactive2024C',
  '#inactive_aA', '#inactive_bA', '#inactive_cA', '#inactive_dA', '#inactive_eA', '#inactive_fA', '#inactive_gA', '#inactive_hA', '#inactive_iA', '#inactive_jA', '#inactive_kA', '#inactive_lA', '#inactive_mA', '#inactive_nA', '#inactive_oA',
  // remanent to do something; finanzas.
  '#inactive_aB', '#inactive_bB', '#inactive_cB', '#inactive_dB', '#inactive_eB', '#inactive_fB', '#inactive_gB', '#inactive_hB', ////
  '#inactive_aC', '#inactive_bC', '#inactive_cC', '#inactive_dC', '#inactive_eC', '#inactive_fC', '#inactive_gC', '#inactive_hC', ////
  '#inactive_aD', '#inactive_bD', '#inactive_cD', '#inactive_dD', '#inactive_eD', '#inactive_fD', '#inactive_gD', '#inactive_hD', ////
  '#inactive_aE', '#inactive_bE', '#inactive_cE', '#inactive_dE', '#inactive_eE', '#inactive_fE', '#inactive_gE', '#inactive_hE', ////
  '#inactive_aF', '#inactive_bF', '#inactive_cF', '#inactive_dF', '#inactive_eF', '#inactive_fF', '#inactive_gF', '#inactive_hF', ////
  '#inactive_aG', '#inactive_bG', '#inactive_cG', '#inactive_dG', '#inactive_eG', '#inactive_fG', '#inactive_gG', '#inactive_hG', ////
  '#inactive_aH', '#inactive_bH', '#inactive_cH', '#inactive_dH', '#inactive_eH', '#inactive_fH', '#inactive_gH', '#inactive_hH'
];

// 1. REEMPLAZA SELECTDATA (Lógica más robusta)
function selectData(ID, currentArray, letter, newArray) {
    for (let i = 0; i < currentArray.length; i++) {
        // Verificamos si el ID termina con la letra de la oficina (ej: "H")
        // Esto evita errores con IDs que tienen letras mezcladas
        if (currentArray[i].endsWith(letter)) {
            newArray.push(currentArray[i]);
        }
    }
    return newArray;
}

// 2. REEMPLAZA TOGGLE YEARS (Para que cierre TODO)
function toggleYears(letter) {
    // Primero, ocultamos absolutamente todo lo que NO sea de esta oficina
    for (let office of ID_FOR_EACH_OFFICE) {
        if (office !== letter) {
            let otherYears = [];
            let otherData = [];
            selectData(ID_FOR_EACH_OFFICE, yearsArr, office, otherYears);
            selectData(ID_FOR_EACH_OFFICE, dataYearsArr, office, otherData);

            document.querySelectorAll(otherYears.join(', ')).forEach(el => el.style.display = 'none');
            document.querySelectorAll(otherData.join(', ')).forEach(el => el.style.display = 'none');
        }
    }

    // Ahora manejamos la oficina actual (H)
    let currentYearsSelectors = [];
    let currentDataSelectors = [];
    let currentUnderlinesSelectors = [];

    selectData(ID_FOR_EACH_OFFICE, yearsArr, letter, currentYearsSelectors);
    selectData(ID_FOR_EACH_OFFICE, dataYearsArr, letter, currentDataSelectors);
    selectData(ID_FOR_EACH_OFFICE, activeUnderlineArr, letter, currentUnderlinesSelectors);

    const years = document.querySelectorAll(currentYearsSelectors.join(', '));
    const data = document.querySelectorAll(currentDataSelectors.join(', '));
    const lines = document.querySelectorAll(currentUnderlinesSelectors.join(', '));

    // Determinar si vamos a abrir o cerrar basándonos en el primer elemento
    const isOpening = years[0].style.display === 'none';

    for (let i = 0; i < years.length; i++) {
        if (isOpening) {
            years[i].style.display = 'block';
        } else {
            // SI CERRAMOS: Ocultamos el título Y su información (dataaH, dataeH, etc)
            years[i].style.display = 'none';
            if (data[i]) data[i].style.display = 'none'; 
            if (lines[i]) lines[i].setAttribute('class', 'text-white text-decoration-none clickable');
        }
    }
}

function toggleDataFromYears(dataIdYear, idYearUnderline) {
    const data = document.querySelector(dataIdYear);
    const activeUnderline = document.querySelector(idYearUnderline);
    
    // Seleccionamos todos los posibles contenedores y subrayados
    const allDataYears = document.querySelectorAll(dataYearsArr.join(', '));
    const allActiveUnderlines = document.querySelectorAll(activeUnderlineArr.join(', '));
    
    const originalClassList = 'text-white text-decoration-none clickable';
    const activeClassList = 'text-white clickable'; // Sin el "text-decoration-none" para que se subraye

    // Si el que clickeamos ya estaba abierto, simplemente lo cerramos
    if (data.style.display === 'block') {
        data.style.display = 'none';
        activeUnderline.setAttribute('class', originalClassList);
    } 
    else {
        // 1. PRIMERO LIMPIAMOS: Ocultamos TODOS los bloques de datos y reseteamos estilos
        for (let i = 0; i < allDataYears.length; i++) {
            allDataYears[i].style.display = 'none';
            if (allActiveUnderlines[i]) {
                allActiveUnderlines[i].setAttribute('class', originalClassList);
            }
        }

        // 2. LUEGO ACTIVAMOS: Mostramos solo el que el usuario seleccionó
        data.style.display = 'block';
        activeUnderline.setAttribute('class', activeClassList);
    }
}
