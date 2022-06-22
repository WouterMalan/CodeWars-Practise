// See https://aka.ms/new-console-template for more information

public static int TotalPoints(string[] games)
{
    //Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
    int total = 0;
    int[] x = new int[games.Length];
    int[] y = new int[games.Length];
    for (int i = 0; i < games.Length; i++)
    {
        string[] game = games[i].Split(':');
        x[i] = int.Parse(game[0]);
        y[i] = int.Parse(game[1]);
        
        if (x[i] > y[i])
        {
            total += 3;
        }
        else if (x[i] < y[i])
        {
            total += 0;
        }
        else
        {
            total += 1;
        }
    }
    return total;

}