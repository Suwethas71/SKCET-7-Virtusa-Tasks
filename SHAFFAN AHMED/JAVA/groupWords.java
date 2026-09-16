import java.util.*;

public class groupWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of words: ");
        int n = sc.nextInt();

        Map<Character, List<String>> groups = new HashMap<>();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter word: ");
            String word = sc.next();

            char first = Character.toLowerCase(word.charAt(0));

            groups.putIfAbsent(first, new ArrayList<>());
            groups.get(first).add(word);
        }

        for (Map.Entry<Character, List<String>> entry : groups.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
