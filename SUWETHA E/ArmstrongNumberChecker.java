import java.util.Scanner;
public class ArmstrongNumberChecker {
    private static int power(int base, int exp) {
        int result = 1;
        for (int i = 0; i < exp; i++) {
            result *= base;
        }
        return result;
    }
    public static boolean isArmstrong(int number) {
        if (number < 0) {
            return false;
        }
        int temp = number;
        int digitCount = 0;
        while (temp != 0) {
            digitCount++;
            temp /= 10;
        }
        temp = number;
        int sum = 0;
        while (temp != 0) {
            int digit = temp % 10;
            sum += power(digit, digitCount);
            temp /= 10;
        }
        return sum == number;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int inputNumber = scanner.nextInt();

        if (isArmstrong(inputNumber)) {
            System.out.println(inputNumber + " is an Armstrong number.");
        } else {
            System.out.println(inputNumber + " is not an Armstrong number.");
        }
        scanner.close();
    }
}
