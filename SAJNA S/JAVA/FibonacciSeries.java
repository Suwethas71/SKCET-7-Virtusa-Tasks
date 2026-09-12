import java.util.Scanner;

public class FibonacciSeries {

    /**
     * Prints the Fibonacci series up to n terms.
     * @param n number of terms to generate
     */
    public static void printFibonacci(int n) {
        if (n <= 0) {
            System.out.println("Please enter a positive integer greater than 0.");
            return;
        }

        long first = 0;
        long second = 1;

        System.out.print("Fibonacci Series (" + n + " terms): ");

        for (int i = 1; i <= n; i++) {
            System.out.print(first + (i == n ? "" : ", "));
            long next = first + second;
            first = second;
            second = next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms (N): ");

        if (scanner.hasNextInt()) {
            int n = scanner.nextInt();
            printFibonacci(n);
        } else {
            System.out.println("Invalid input. Please enter a valid integer.");
        }

        scanner.close();
    }
}
