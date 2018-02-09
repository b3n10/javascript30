const people = [
	{ name: 'ben', year: 1988},
	{ name: 'neth', year: 1968},
	{ name: 'ethan', year: 2014},
	{ name: 'jairah', year: 2008}
];

const comments = [
	{ text: 'hi, there', id: 34523 },
	{ text: 'hello world', id: 54633 },
	{ text: 'yow wazzup', id: 76344 },
	{ text: 'it supposed to be', id: 23122 },
	{ text: 'heroes of new age', id: 63849 }
];

//Array.prototype.some() - at least 1 meets criteria
//example should be at least 30 yrs old

const isThirty = people.some( person => ((new Date()).getFullYear()) - person.year >= 30 );
console.log({isThirty});

//Array.prototype.every() - all should meet criteria
const isAllThirty = people.every( person => ((new Date()).getFullYear()) - person.year >= 30 );
console.log({isAllThirty});

//Array.prototype.find() - find one meeting criteria
const comment = comments.find( comment => comment.id === 76344 );
console.log(comment);

//Array.prototype.findIndex() - get index of meeting criteria
const index = comments.findIndex( comment => comment.id === 76344 );

const newComments = [
	...comments.slice(0, index),
	...comments.slice(index + 1)
];//use spread to distribute array slices in new array
console.log(newComments);
