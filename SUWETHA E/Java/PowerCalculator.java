import java.util.Scanner;

public class PowerCalculator {
    public static double calculatePower(double base, int exponent) {
        if (exponent == 0) {
            return 1.0;
        }

        long exp = exponent;
        if (exp < 0) {
            base = 1.0 / base;
            exp = -exp;
        }

        double result = 1.0;
        double currentProduct = base;

        while (exp > 0) {
            if ((exp % 2) == 1) {
                result *= currentProduct;
            }
            currentProduct *= currentProduct;
            exp /= 2;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base (a): ");
        double base = scanner.nextDouble();

        System.out.print("Enter exponent (b): ");
        int exponent = scanner.nextInt();

        double answer = calculatePower(base, exponent);
        System.out.println(base + " ^ " + exponent + " = " + answer);

        scanner.close();
    }
}
