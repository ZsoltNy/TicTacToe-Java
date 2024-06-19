import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class TictactoeappApplication {
    private char[][] board;
    private char currentPlayer;
    private String playerX;
    private String playerO;
    private Map<String, Integer> leaderboard;

    // Konstruktor
    public TictactoeappApplication() {
        board = new char[3][3];
        currentPlayer = 'X';
        initializeBoard();
        leaderboard = new HashMap<>();
    }

    // Tábla inicializálása
    public void initializeBoard() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = '-';
            }
        }
    }

    // Tábla kiírása
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

    // Győzelem ellenőrzése
    public boolean checkWin() {
        return (checkRows() || checkColumns() || checkDiagonals());
    }

    // Döntetlen ellenőrzése
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

    // Játékos váltása
    public void changePlayer() {
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    // Jel elhelyezése
    public boolean placeMark(int row, int col) {
        if (row >= 0 && col >= 0 && row < 3 && col < 3) {
            if (board[row][col] == '-') {
                board[row][col] = currentPlayer;
                return true;
            }
        }
        return false;
    }

    // Sorok ellenőrzése győzelemre
    private boolean checkRows() {
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '-') {
                return true;
            }
        }
        return false;
    }

    // Oszlopok ellenőrzése győzelemre
    private boolean checkColumns() {
        for (int i = 0; i < 3; i++) {
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != '-') {
                return true;
            }
        }
        return false;
    }

    // Átlók ellenőrzése győzelemre
    private boolean checkDiagonals() {
        if ((board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '-') ||
                (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '-')) {
            return true;
        }
        return false;
    }

    // Leaderboard frissítése
    private void updateLeaderboard(String playerName) {
        leaderboard.put(playerName, leaderboard.getOrDefault(playerName, 0) + 1);
    }

    // Leaderboard kiírása
    private void printLeaderboard() {
        System.out.println("\nLeaderboard:");
        for (Map.Entry<String, Integer> entry : leaderboard.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " győzelem");
        }
    }

    // Az alkalmazás futtatása (nem statikus metódus)
    public void run() {
        Scanner scanner = new Scanner(System.in);

        // Játékosok neveinek bekérése
        System.out.print("Adja meg az 'X' játékos nevét: ");
        playerX = scanner.nextLine();
        System.out.print("Adja meg az 'O' játékos nevét: ");
        playerO = scanner.nextLine();

        currentPlayer = 'X';
        printBoard();
        boolean gameEnded = false;

        while (!gameEnded) {
            try {
                System.out.println("Játékos " + getCurrentPlayerName() + " következik. Adja meg a sort és az oszlopot (0, 1 vagy 2) szóközzel elválasztva: ");
                
                // Egész sor beolvasása
                String input = scanner.nextLine();
                
                // A bemenet feldarabolása
                String[] parts = input.trim().split("\\s+");
                
                // Bemenet ellenőrzése
                if (parts.length != 2) {
                    throw new IllegalArgumentException("Helytelen formátum. Kérem, adjon meg két számot szóközzel elválasztva.");
                }
                
                // Sor és oszlop értékek kinyerése
                int row = Integer.parseInt(parts[0]);
                int col = Integer.parseInt(parts[1]);

                // Sor és oszlop határok ellenőrzése
                if (row < 0 || row > 2 || col < 0 || col > 2) {
                    throw new IndexOutOfBoundsException("A sor és oszlop értékeknek 0 és 2 között kell lenniük.");
                }
                
                // Jel elhelyezése
                if (!placeMark(row, col)) {
                    throw new IllegalStateException("Ez a pozíció már foglalt. Próbálja újra.");
                }
                
                // Tábla kiírása a jel elhelyezése után
                printBoard();
                
                // Győzelem vagy döntetlen ellenőrzése
                if (checkWin()) {
                    String winner = getCurrentPlayerName();
                    System.out.println("Játékos " + winner + " nyert!");
                    updateLeaderboard(winner); // Leaderboard frissítése
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
                System.out.println(e.getMessage());  // Hibaüzenet a határok túllépésére
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());  // Hibaüzenet a formátum hibára
            } catch (IllegalStateException e) {
                System.out.println(e.getMessage());  // Hibaüzenet a foglalt pozícióra
            } catch (Exception e) {
                System.out.println("Váratlan hiba történt: " + e.getMessage());
            }
        }

        printLeaderboard(); // Leaderboard kiírása a játék végén
        scanner.close();
    }

    // Jelenlegi játékos nevének visszaadása
    private String getCurrentPlayerName() {
        return (currentPlayer == 'X') ? playerX : playerO;
    }

    // A main metódus az alkalmazás indítására
    public static void main(String[] args) {
        TictactoeappApplication game = new TictactoeappApplication();
        game.run();
    }
}
