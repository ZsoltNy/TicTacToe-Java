import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class TictactoeappApplication {
	private char[][] board;
	private char currentPlayer;
	private String playerX;
	private String playerO;
	private Map<String, Integer> leaderboard;
	private Random random;

	public TictactoeappApplication() {
		board = new char[3][3];
		currentPlayer = 'X';
		initializeBoard();
		leaderboard = new HashMap<>();
		random = new Random();
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

	private void updateLeaderboard(String playerName) {
		leaderboard.put(playerName, leaderboard.getOrDefault(playerName, 0) + 1);
	}

	private void printLeaderboard() {
		System.out.println("\nLeaderboard:");
		for (Map.Entry<String, Integer> entry : leaderboard.entrySet()) {
			System.out.println(entry.getKey() + ": " + entry.getValue() + " győzelem");
		}
	}

	private void makeRobotMove() {
		int row, col;
		do {
			row = random.nextInt(3);
			col = random.nextInt(3);
		} while (board[row][col] != '-');
		System.out.println("Robot helyez egy jelet a (" + row + ", " + col + ") pozícióra.");
		placeMark(row, col);
	}

	public void run() {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Adja meg az 'X' játékos nevét: ");
		playerX = scanner.nextLine();
		System.out.print("Adja meg az 'O' játékos nevét (ha 'Robot', akkor a gép játszik): ");
		playerO = scanner.nextLine();

		currentPlayer = 'X';
		printBoard();
		boolean gameEnded = false;

		while (!gameEnded) {
			try {
				if (getCurrentPlayerName().equals("Robot")) {

					makeRobotMove();
				} else {
					System.out.println("Játékos " + getCurrentPlayerName()
							+ " következik. Adja meg a sort és az oszlopot (0, 1 vagy 2) szóközzel elválasztva: ");

					String input = scanner.nextLine();

					String[] parts = input.trim().split("\\s+");

					if (parts.length != 2) {
						throw new IllegalArgumentException(
								"Helytelen formátum. Kérem, adjon meg két számot szóközzel elválasztva.");
					}

					int row = Integer.parseInt(parts[0]);
					int col = Integer.parseInt(parts[1]);

					if (row < 0 || row > 2 || col < 0 || col > 2) {
						throw new IndexOutOfBoundsException("A sor és oszlop értékeknek 0 és 2 között kell lenniük.");
					}

					if (!placeMark(row, col)) {
						throw new IllegalStateException("Ez a pozíció már foglalt. Próbálja újra.");
					}
				}

				printBoard();

				if (checkWin()) {
					String winner = getCurrentPlayerName();
					System.out.println("Játékos " + winner + " nyert!");
					updateLeaderboard(winner);
					gameEnded = true;
				} else if (checkDraw()) {
					System.out.println("A játék döntetlennel végződött!");
					gameEnded = true;
				} else {
					changePlayer();
				}

			} catch (NumberFormatException e) {
				System.out.println("Érvénytelen bemenet. Kérem, számokat adjon meg a sor és oszlop értékekhez.");
			} catch (IndexOutOfBoundsException e) {
				System.out.println(e.getMessage());
				System.out.println(e.getMessage());
				System.out.println(e.getMessage());
			} catch (Exception e) {
				System.out.println("Váratlan hiba történt: " + e.getMessage());
			}
		}

		printLeaderboard();
		scanner.close();
	}

	private String getCurrentPlayerName() {
		return (currentPlayer == 'X') ? playerX : playerO;
	}

	public static void main(String[] args) {
		TictactoeappApplication game = new TictactoeappApplication();
		game.run();
	}
}
