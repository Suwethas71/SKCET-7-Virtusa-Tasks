import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        double result = 1;

        for (int i = 1; i <= b; i++)
            result *= a;

        System.out.println(result);
    }
}
