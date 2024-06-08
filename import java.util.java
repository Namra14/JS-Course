import java.util.Random;

public class Main {
    public static void main(String[] args) {
        GenerateRandomNumbers();
    }

public static void GenerateRandomNumbers()
    {
        int[][] num = new int[5][5];
        int[] countOccurence = {0,0,0,0,0,0,0,0,0,0};
        int highest = 0;
        int lowest = 0;
        int rows, cols;
        
        Random r = new Random();
       
        //input and process
        for(rows = 0; rows < 5; rows++)
        {
         for(cols = 0; cols < 5; cols++)
         {
           num[rows][cols] = r.nextInt(10) + 1; 
           countOccurence[num[rows][cols] - 1]++;
         }
        }
        
        //output
        for(rows = 0; rows < 5; rows++)
        {
         for(cols = 0; cols < 5; cols++)
         {
           System.out.printf("%5d",  num[rows][cols] );
         }
         System.out.println();
        }
        System.out.println("=========================================");
        for(rows = 0; rows < 10; rows++)
        {
          System.out.printf("%5d = %d\n", (rows + 1), countOccurence[rows]);
        }
        
        System.out.println("=========================================");
        for(rows = 0; rows < 10; rows++)
        {
          if(countOccurence[rows] > highest) {highest =  countOccurence[rows];}
          if(rows == 0) {lowest = countOccurence[rows];}
          else{
           if(countOccurence[rows]<lowest){lowest = countOccurence[rows]; }
          }
        }
        
        
        System.out.println("List of Highest Occurence");
        for(rows = 0; rows < 10; rows++)
        {
          if(highest == countOccurence[rows])
            System.out.printf("%5d = %d\n", (rows + 1), countOccurence[rows]);
        }
        
        System.out.println("=========================================");
        
        System.out.println("List of Lowest Occurence");
        for(rows = 0; rows < 10; rows++)
        {
          if(lowest == countOccurence[rows])
            System.out.printf("%5d = %d\n", (rows + 1), countOccurence[rows]);
        }
        
    }