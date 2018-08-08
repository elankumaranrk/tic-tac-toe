export const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
export default class Board {
	constructor(state = new Array(9).fill('')) {
		this.state = state;
	}
	isEmpty = () => this.state.every(cell => !cell);
	isFull = () => this.state.every(cell => cell);
	insert(symbol, position) {
		if (position > 8 || this.state[position]) return false; //Cell is either occupied or does not exist
		this.state[position] = symbol;
		return true;
	}

	getAvailableMoves() {
		const moves = [];
		this.state.forEach((cell, index) => {
			if (!cell) moves.push(index);
		});
		return moves;
	}

	isTerminal() {
		const cells = this.state;
		for (let i = 0; i < winningCombinations.length; i++) {
			const [a, b, c] = winningCombinations[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
				return cells[a];
		}
		return false;
	}
}
