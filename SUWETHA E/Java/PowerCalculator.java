import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double a = sc.nextDouble();
        int b = sc.nextInt();

        double result = 1;

        for (int i = 0; i < Math.abs(b); i++)
            result *= a;

        if (b < 0)
            result = 1 / result;

        System.out.println(result);
    }
}
