import java.util.Scanner;

public class TictactoeappApplication {
	private char[][] board;
	private char currentPlayer;

	public TictactoeappApplication() {
		board = new char[3][3];
		currentPlayer = 'X';
		initializeBoard();
	}

	public void initializeBoard() {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				board[i][j] = '-';
			}
		}
	}

	public void printBoard() {
		System.out.println("-------------");
		for (int i = 0; i < 3; i++) {
			System.out.print("| ");
			for (int j = 0; j < 3; j++) {
				System.out.print(board[i][j] + " | ");
			}
			System.out.println();
			System.out.println("-------------");
		}
	}

	public boolean checkWin() {
		return (checkRows() || checkColumns() || checkDiagonals());
	}

	public boolean checkDraw() {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (board[i][j] == '-') {
					return false;
				}
			}
		}
		return true;
	}

	public void changePlayer() {
		currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
	}

	public boolean placeMark(int row, int col) {
		if (row >= 0 && col >= 0 && row < 3 && col < 3) {
			if (board[row][col] == '-') {
				board[row][col] = currentPlayer;
				return true;
			}
		}
		return false;
	}

	private boolean checkRows() {
		for (int i = 0; i < 3; i++) {
			if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '-') {
				return true;
			}
		}
		return false;
	}

	private boolean checkColumns() {
		for (int i = 0; i < 3; i++) {
			if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != '-') {
				return true;
			}
		}
		return false;
	}

	private boolean checkDiagonals() {
		if ((board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '-') ||
				(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '-')) {
			return true;
		}
		return false;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		TictactoeappApplication game = new TictactoeappApplication();
		game.printBoard();
		boolean gameEnded = false;
	
		while (!gameEnded) {
			try {
				System.out.println("Player " + game.currentPlayer + "'s turn. Enter row and column (0, 1, or 2) separated by a space: ");
				
				// Read the entire line of input
				String input = scanner.nextLine();
				
				// Split the input into row and column parts
				String[] parts = input.trim().split("\\s+");
				
				// Validate input length
				if (parts.length != 2) {
					throw new IllegalArgumentException("Invalid input format. Please enter two numbers separated by a space.");
				}
				
				// Parse the row and column values
				int row = Integer.parseInt(parts[0]);
				int col = Integer.parseInt(parts[1]);
	
				// Check if the row and column are within valid range
				if (row < 0 || row > 2 || col < 0 || col > 2) {
					throw new IndexOutOfBoundsException("Row and column must be between 0 and 2.");
				}
				
				// Attempt to place the mark
				if (!game.placeMark(row, col)) {
					throw new IllegalStateException("This position is already occupied. Try again.");
				}
				
				// Print the board after placing the mark
				game.printBoard();
				
				// Check if the game has ended
				if (game.checkWin()) {
					System.out.println("Player " + game.currentPlayer + " wins!");
					gameEnded = true;
				} else if (game.checkDraw()) {
					System.out.println("The game is a draw!");
					gameEnded = true;
				} else {
					game.changePlayer();
				}
	
			} catch (NumberFormatException e) {
				System.out.println("Invalid input. Please enter valid numbers for row and column.");
			} catch (IndexOutOfBoundsException e) {
				System.out.println(e.getMessage());  // Custom message for out-of-bounds error
			} catch (IllegalArgumentException e) {
				System.out.println(e.getMessage());  // Custom message for input format error
			} catch (IllegalStateException e) {
				System.out.println(e.getMessage());  // Custom message for already occupied position
			} catch (Exception e) {
				System.out.println("An unexpected error occurred: " + e.getMessage());
			}
		}
		scanner.close();
	}
}	