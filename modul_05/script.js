// zadanie z podwojeniem liczb z tablicy


// mapowanie i podwojenie liczb
const numberDouble = (numbers) => {
    return numbers.map(numbers => numbers*2);
}

// Testowanie funkcji
const numbers = [1, 2, 3, 4, 5];
const numbersDouble = numberDouble(numbers);

// wyświetlanie w consol logu tablicy podstawowej i podwojonej
console.log("Oryginalna tablica:", numbers); // [1, 2, 3, 4, 5]
console.log("Podwojona tablica:", numbersDouble); // [2, 4, 6, 8, 10]




// zadanie z wyciągnięciem imiona z tablicy obiektów



const zwrocImionaStudentow = (studenci) => {
    return studenci.map(student => student.name);
  };
  
  // Testowanie funkcji
  const studenci = [
    { name: 'Anna', age: 22 },
    { name: 'Bartek', age: 23 },
    { name: 'Celina', age: 21 }
  ];
  const imionaStudentow = zwrocImionaStudentow(studenci);
  
  console.log("Oryginalna tablica obiektów studentów:", studenci);
  console.log("Tablica zawierająca tylko imiona:", imionaStudentow);