
import java.io.File;
import java.io.IOException;
import java.util.Scanner;
class mainclass
{
	class base {
		public void print() {
			System.out.println("Usage :-\n" +
					"$ ./todo add \"todo item\"  # Add a new todo\n" +
					"$ ./todo ls               # Show remaining todos\n" +
					"$ ./todo del NUMBER       # Delete a todo\n" +
					"$ ./todo done NUMBER      # Complete a todo\n" +
					"$ ./todo help             # Show usage\n" +
					"$ ./todo report           # Statistic\n");
		}
	}
	void display()
	{
		base ob = new base();
		ob.print();
	}

}
class todo {
	public class createFile {

		public
		void main(String args[]) {

//			mainclass mainob = new mainclass();
//			mainob.display();
			try
			{
				File obj = new File("filename.txt");
				if(obj.createNewFile())
				{
					System.out.println("file created"+obj.getName());
					System.out.println("path: " + obj.getAbsolutePath());
				}
				else System.out.println("file already exists");
			}
			catch(IOException excep)
			{
				System.out.println("An error occurred.");
				excep.printStackTrace();
			}
		}
	}


}



