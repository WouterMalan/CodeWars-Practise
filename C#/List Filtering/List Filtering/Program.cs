// See https://aka.ms/new-console-template for more information
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
public static IEnumerable<int> GetIntegersFromList(List<object> listOfItems)
{
    foreach (var item in listOfItems)
    {
        if (item is int)
        {
            yield return (int)item;
        }
        else
        {
            continue;
        }
    }
}

public static IEnumerable<int> GetIntegersFromList(List<object> listOfItems)
{
    return listOfItems.Where(x => x is int).Cast<int>();
}
