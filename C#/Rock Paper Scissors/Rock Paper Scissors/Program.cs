// See https://aka.ms/new-console-template for more information
public string Rps(string p1, string p2)
{
    if(p1 == p2)
    {
        return "Draw!";
    }
    else if(p1 == "scissors")
    {
        if (p2 == "rock")
        {
            return "Player 1 wins!";
        }
        else
        {
            return "Player 2 wins!";
        }
    }
    else if (p1 == "rock")
    {
        if (p2 == "paper")
        {
            return "Player 1 wins!";
        }
        else
        {
            return "Player 2 wins!";
        }
    }
    else if (p1 == "paper")
    {
        if (p2 == "scissors")
        {
            return "Player 1 wins!";
        }
        else
        {
            return "Player 2 wins!";
        }
    }
    else
    {
        return "Error!";
    }
}