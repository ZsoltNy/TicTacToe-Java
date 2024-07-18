import java.util.Scanner;

public class TicTacToeGameManager {
    private GameTable game;
    private Leaderboard leaderboard;
    private Robot robot;
    private String playerX;
    private String playerO;

    public TicTacToeGameManager() {
        game = new GameTable();
        leaderboard = new Leaderboard();
        robot = new Robot();
    }

    public void showMenu() {
        Scanner scanner = new Scanner(System.in);

        loop: while (true) {
            System.out.println("1. Új játék");
            System.out.println("2. Leaderboard megtekintése");
            System.out.println("3. Kilépés");
            System.out.print("Válasszon egy opciót: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    startGame();
                    break;
                case 2:
                    leaderboard.printLeaderboard();
                    break;
                case 3:
                    break loop;
                default:
                    System.out.println("Érvénytelen opció. Kérem, válasszon újra.");
            }
        }
        scanner.close();
    }

    public void startGame() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Adja meg az 'X' játékos nevét: ");
        playerX = scanner.nextLine();
        System.out.print("Adja meg az 'O' játékos nevét (ha 'Robot', akkor a gép játszik): ");
        playerO = scanner.nextLine();

        game.setCurrentPlayer('X');
        game.initializeNewBoard(); // Reset the board for a new game
        game.printBoard();
        boolean gameEnded = false;

        while (!gameEnded) {
            try {
                if (getCurrentPlayerName().equals("Robot")) {
                    robot.makeMove(game);
                } else {
                    System.out.println("Játékos " + getCurrentPlayerName()
                            + " következik. Adja meg a sort és az oszlopot (1, 2 vagy 3) szóközzel elválasztva: ");

                    String input = scanner.nextLine();

                    String[] parts = input.trim().split("\\s+");

                    if (parts.length != 2) {
                        throw new IllegalArgumentException(
                                "Helytelen formátum. Kérem, adjon meg két számot szóközzel elválasztva.");
                    }

                    int row = Integer.parseInt(parts[0]) - 1;
                    int col = Integer.parseInt(parts[1]) - 1;

                    if (row < 0 || row > 2 || col < 0 || col > 2) {
                        throw new IndexOutOfBoundsException("A sor és oszlop értékeknek 1 és 3 között kell lenniük.");
                    }

                    if (!game.placeMark(row, col)) {
                        throw new IllegalStateException("Ez a pozíció már foglalt. Próbálja újra.");
                    }
                }

                game.printBoard();

                if (game.checkWin()) {
                    String winner = getCurrentPlayerName();
                    System.out.println("Játékos " + winner + " nyert!");
                    leaderboard.updateLeaderboard(winner);
                    gameEnded = true;
                } else if (game.checkDraw()) {
                    System.out.println("A játék döntetlennel végződött!");
                    gameEnded = true;
                } else {
                    game.changePlayer();
                }

            } catch (NumberFormatException e) {
                System.out.println("Érvénytelen bemenet. Kérem, számokat adjon meg a sor és oszlop értékekhez.");
            } catch (IndexOutOfBoundsException e) {
                System.out.println(e.getMessage());
            } catch (Exception e) {
                System.out.println("Váratlan hiba történt: " + e.getMessage());
            }
        }

        leaderboard.printLeaderboard();
        scanner.close();
    }

    private String getCurrentPlayerName() {
        return (game.getCurrentPlayer() == 'X') ? playerX : playerO;
    }
}
