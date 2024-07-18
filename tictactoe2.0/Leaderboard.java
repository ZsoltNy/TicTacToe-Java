import java.util.HashMap;
import java.util.Map;

public class Leaderboard {
    private Map<String, Integer> leaderboard;

    public Leaderboard() {
        leaderboard = new HashMap<>();
    }

    public void updateLeaderboard(String playerName) {
        leaderboard.put(playerName, leaderboard.getOrDefault(playerName, 0) + 1);
    }

    public void printLeaderboard() {
        System.out.println("\nLeaderboard:");
        for (Map.Entry<String, Integer> entry : leaderboard.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " győzelem");
        }
    }
}

