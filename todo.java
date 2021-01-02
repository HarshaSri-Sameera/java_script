package com.company;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

class todo {
        static void Myfunction() {
            System.out.println("""
                    Usage :-
                    $ ./todo add "todo item"  # Add a new todo
                    $ ./todo ls               # Show remaining todos
                    $ ./todo del NUMBER       # Delete a todo
                    $ ./todo done NUMBER      # Complete a todo
                    $ ./todo help             # Show usage
                    $ ./todo report           # Statistic
                    """);
        }
        static void otherfunction() {
        System.out.println("""
                    Usage :-
                    $ ./todo add "todo item"  # Add a new todo
                    $ ./todo ls               # Show remaining todos
                    $ ./todo del NUMBER       # Delete a todo
                    $ ./todo done NUMBER      # Complete a todo
                    $ ./todo help             # Show usage
                    $ ./todo report           # Statistic
                    """);
        }


    public static void main(String[] args) {
            try {
                if(args[0].equals("help"))
                    Myfunction();
            } catch(ArrayIndexOutOfBoundsException e) {
                Myfunction();
            }


    }
}
