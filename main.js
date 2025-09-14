const DATE = '202310';
const TIME_PERIOD = 'q';

// Базовий домен
const url = new URL('https://bank.gov.ua/');
// Шлях
url.pathname = '/NBUStatService/v1/statdirectory/banksincexp';

// URLSearchParams збирає параметри (query)
const params = new URLSearchParams();
params.set('date', DATE); 
params.set('period', TIME_PERIOD); 

const queryString = params.toString() + '&json';

// Записуємо query-параметри в об'єкт url
url.search = queryString;

console.log(url.toString());