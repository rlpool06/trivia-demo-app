export async function getTriviaData () {
	const res = await fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');

	if(!res.ok) {
		throw new Error('Failed to fetch data');
	};

	const data = res.json();

	return data;
}