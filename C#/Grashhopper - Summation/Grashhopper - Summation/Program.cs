// See https://aka.ms/new-console-template for more information
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
public static int summation(int num)
{
    int sum = 0;
    for (int i = 0; i < num; i++)
    {
        sum += i + 1;
    }
    return sum;
}

static int summation2(int num)
{
    return Enumerable.Range(1, num).Sum();
}