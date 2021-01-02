import java.io.*;
import java.util.ArrayList;
import java.util.Scanner;

class todo {

	static void Help() {
		System.out.println("$ ./todo help\n" +
				"Usage :-\n" +
				"$ ./todo add \"todo item\"  # Add a new todo\n" +
				"$ ./todo ls               # Show remaining todos\n" +
				"$ ./todo del NUMBER       # Delete a todo\n" +
				"$ ./todo done NUMBER      # Complete a todo\n" +
				"$ ./todo help             # Show usage\n" +
				"$ ./todo report           # Statistics\n");
	}

	static void Ls() {
//		String[] todos = new String[0];
//		Scanner sc = new Scanner(System.in);
//			for (int i = 0; i < todos.length; i++) {
//				todos[i] = sc.nextLine();
//				System.out.println(todos[i]);
//			}


	}


	static void CreateFile(){
		try
		{
			File myObj = new File("todo.txt");
			if (myObj.createNewFile()) {
				System.out.println("File created: " + myObj.getName());
			}
		} catch(
		IOException e)
		{
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

	public static void appendStrToFile(String fileName,String str)
	{
		try{
			BufferedWriter out = new BufferedWriter(
					new FileWriter(fileName, true));

			out.write(str);
			System.out.println("Added todo: " +str);
			out.close();

		}
		catch (IOException e){
			System.out.println("Exection occured" + e);
		}
	}



	public static ArrayList<String> main(String[] args) throws FileNotFoundException {
		// Part 1
		if(args.length == 0){
			Help();
		}
		if(args.length == 1 && args[0].equals("help") ){
			Help();
		}
		if(args.length == 2 && args[0].equals("add")){
			CreateFile();
			appendStrToFile("todo.txt", args[1] + "\n");
		}
		if(args.length == 1 && args[0].equals("add")){
			System.out.println("Error: Missing todo string. Nothing added!");
		}
		if((args.length == 1) && args[0].equals("ls")){
			ArrayList<String> result = new ArrayList<>();

			try (Scanner s = new Scanner(new FileReader("todo.txt"))){
				while (s.hasNext())
				{
					result.add(s.nextLine());
				}
				System.out.println(return);
			}
		}

		
	}


}
