const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 }
];

//get people who were born in 1500s using filter
const fifteen = inventors.filter( inventor => inventor.year >= 1500 && inventor.year < 1600 );
//console.log(fifteen);

//array of people's first and last name using map
const fullname = inventors.map( inventor => `${inventor.first} ${inventor.last}` );
//console.log(fullname);

//sort by birthdate, oldest to youngest
const birthdate = inventors.sort( (a, b) => (a.year > b.year) ? 1 : -1 );
//console.log(birthdate);

//reduce - how many years did all inventors live?
const totalYears = inventors.reduce( (total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
//console.log(totalYears);

//sort inventors by years lived
const oldest = inventors.sort( (a, b) => ((a.passed - a.year) > (b.passed - b.year)) ? -1 : 1);
//console.log(oldest);

//create list of Boulevards in Paris that contain 'de' anywhere in the name
//from this page: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//answer:
//const boulevards = Array.from(document.querySelectorAll('.mw-category li'));
//boulevards.map( c => c.innerText ).filter( d => d.includes('de') );

//sort people alphabetically by last name
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const alpha = people.sort( (currentName, nextName) => {
	const [lastNameA, firstNameA] = currentName.split(", ");
	const [lastNameB, firstNameB] = nextName.split(", ");
	return (lastNameA > lastNameB) ? 1 : -1;
});
//console.log(alpha);

//Sum up instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transpo = data.reduce( (obj, item) => {
	if (!obj[item]) { obj[item] = 0 }
	obj[item]++;
	return obj;
}, {});

console.log(transpo);
