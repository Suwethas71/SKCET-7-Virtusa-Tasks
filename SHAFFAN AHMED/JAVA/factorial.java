import java.util.Scanner;

public class factorial {

    static long factorialRecursive(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorialRecursive(n - 1);
    }

    static long factorialIterative(int n) {
        long result = 1;

        for (int i = 1; i <= n; i++) {
            result *= i;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Factorial is not defined for negative numbers");
            return;
        }

        System.out.println("Using recursion: " + factorialRecursive(n));
        System.out.println("Using iteration: " + factorialIterative(n));
    }
}
