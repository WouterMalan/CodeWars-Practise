// See https://aka.ms/new-console-template for more information

 int Fib(int n)
{
    //fibonacci 
    if (n ==1 || n==2)
    {
        return 1;
    }
        return Fib(n - 1) + Fib(n - 2);
    
}

 static void Fib2(int n)
{
    int a = 0, b = 1, c = 0;
    Console.Write($"{a} {b} ");

    for (int i = 2; i < n; i++)
    {
        c = a + b;
        a = b;
        b = c;
        Console.Write($"{c} ");
    }
    



}
Fib2(9);

// get the length of an array
