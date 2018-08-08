import Board from './Board';
const aiPlayer = 'O';
const humanPlayer = 'X';

export default class TicTacToe {
	constructor(max_depth = -1) {
		this.max_depth = max_depth;
		this.nodes_map = new Map();
	}
	getNextBestMove = cells => this.getBestMove(new Board(cells));
	getNextEasyMove = cells => {
		const board = new Board(cells);
		const availableArr = board.getAvailableMoves();
		const rand = Math.floor(Math.random() * availableArr.length);
		return availableArr[rand];
	};
	getNextMediumMove = cells => {
		if (Math.random() > 0.499) return this.getBestMove(cells);
		return this.getNextEasyMove(cells);
	};
	hasWinner = cells => new Board(cells).isTerminal();

	getBestMove(board, maximizing = true, depth = 0) {
		if (depth === 0) this.nodes_map.clear();
		if (board.isTerminal() || depth === this.max_depth) {
			if (board.isTerminal() === aiPlayer) {
				return 100 - depth;
			} else if (board.isTerminal() === humanPlayer) {
				return -100 + depth;
			}
			return 0;
		}

		if (maximizing) {
			let best = -100;
			board.getAvailableMoves().forEach(index => {
				let child = new Board(board.state.slice());
				child.insert(aiPlayer, index);
				let node_value = this.getBestMove(child, false, depth + 1);
				best = Math.max(best, node_value);
				if (depth === 0) {
					var moves = this.nodes_map.has(node_value)
						? `${this.nodes_map.get(node_value)},${index}`
						: index;
					this.nodes_map.set(node_value, moves);
				}
			});
			if (depth === 0) {
				return this.getBestValue(best);
			}
			return best;
		}
		if (!maximizing) {
			let best = 100;
			board.getAvailableMoves().forEach(index => {
				let child = new Board(board.state.slice());
				child.insert(humanPlayer, index);

				let node_value = this.getBestMove(child, true, depth + 1);
				best = Math.min(best, node_value);
				if (depth === 0) {
					var moves = this.nodes_map.has(node_value)
						? this.nodes_map.get(node_value) + ',' + index
						: index;
					this.nodes_map.set(node_value, moves);
				}
			});
			if (depth === 0) {
				return this.getBestValue(best);
			}
			return best;
		}
	}

	getBestValue(best) {
		if (typeof this.nodes_map.get(best) === 'string') {
			const arr = this.nodes_map.get(best).split(',');
			const rand = Math.floor(Math.random() * arr.length);
			return arr[rand];
		} else {
			return this.nodes_map.get(best);
		}
	}
}
