// See https://aka.ms/new-console-template for more information

bool buttonClick = true;
int counter = 0;
do
{
    Console.WriteLine("BLARRRRR");
    counter++;
    if (counter > 3)
    {
        buttonClick = false;
    }

} while (!buttonClick);
