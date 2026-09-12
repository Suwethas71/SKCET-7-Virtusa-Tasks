import java.util.Scanner;

public class StringReverser {

    public static String reverseString(String input) {
        if (input == null || input.isEmpty()) {
            return input;
        }

        char[] chars = input.toCharArray();
        int left = 0;
        int right = chars.length - 1;

        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }

        return new String(chars);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string to reverse: ");
        String text = scanner.nextLine();

        String reversedText = reverseString(text);
        System.out.println("Reversed string: " + reversedText);

        scanner.close();
    }
}
