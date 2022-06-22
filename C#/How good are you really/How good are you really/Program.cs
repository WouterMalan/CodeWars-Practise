// See https://aka.ms/new-console-template for more information

public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
{
    int avg = 0;
    int sum = 0;
    //Insert brain here
    foreach (var item in ClassPoints)
    {
        
        sum += item;
    }
    avg = sum / ClassPoints.Length;
    return avg < YourPoints? true: false;
}

//can also just use return YourPoints > ClassPoints.Average();