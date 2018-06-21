const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

const inventors = [
    {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852,
    },
    {
      first: 'Lise',
      last: 'Meitner',
      year: 1878,
      passed: 1968,
    },
    {
      first: 'Caroline',
      last: 'Herschel',
      year: 1750,
      passed: 1848,
    },
    {
      first: 'Hanna',
      last: 'Hammarström',
      year: 1829,
      passed: 1909,
    },
  ];
  
 
  /*filter nos permite obtener un subconjunto de los elementos del 
  array, que cumplan con cierta condición */
  const deadBeforeSXX = inventors.filter(inventor => (inventor.passed < 1900));
  console.log(deadBeforeSXX);
   

  /*map nos permite visitar cada uno de los elementos del array, recolectando 
  en el proceso, un valor de retorno para cada elemento visitado*/
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(fullNames);
  /*SORT Ordena el array in place.*/
  const compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    /* if (a < b) */
    return -1;
  };
  let arr = [1, 2, 15];
  arr.sort(compareNumeric);

  
  console.log(arr);

  //mas de Sort
  let ordered = inventors.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    return -1;
  });
  console.log (ordered);

  //mas de Sort ORDENAR SEGÚN LA CANTIDAD DE AÑOS VIVIDOS
  const moreYearsAlive = inventors.sort((a, b) => {
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return last > next ? -1 : 1;
  });
  console.log(moreYearsAlive);
  