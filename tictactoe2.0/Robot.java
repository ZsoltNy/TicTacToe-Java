import java.util.Random;

public class Robot {
    // private Random random;

    public Robot() {
        // random = new Random();
    }

    public void makeMove(GameTable game) {
        Random random = new Random();
        int row, col;
        do {
            row = random.nextInt(3);
            col = random.nextInt(3);
        } while (!game.placeMark(row, col));
        System.out.println("Robot helyez egy jelet a (" + row + ", " + col + ") pozícióra.");
    }
}
