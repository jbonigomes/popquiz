var questions = [
// OOP
{
  "question": "Discuss how the following object-oriented concepts help a programmer design and implement an application. Illustrate your answer with appropriate examples: encapsulation; inheritance, polymorphism",
  "color": "orange",
  "answer": "I don't know"
},
{
  "question": "Define the term uniform access principle.",
  "color": "orange",
  "answer": "The ability to get a value without having to know whether it is stored in a variable or being computed by a function."
},

// Types
{
  "question": "Briefly describe the main differences between weakly typed and strongly typed languages. What are the relative advantages and disadvantages?",
  "color": "purple",
  "answer": "In a strongly typed language, applying the wrong operation to a typed data will raise an error (e.g. it is not possible to subtract a string from another string). In a weakly typed language, a language will try to interpret one type as another (e.g., the string '3.4028E+12' will automatically be interpreted as a number, can lead to unintended consequences, e.g., if a string such as hello is interpreted as 0)."
},

// Functional
{
  "question": "Explain what it means for a function call to be tail-recursive",
  "color": "blue",
  "answer": "The recursive call is the last thing done in the function or, more accurately, every possible path through the function returns either a result computed without recursion, or a result that is the unmodified result (i.e., no further work is done) of a recursive call."
},
{
  "question": "Briefly explain the concept of referential transparency. You should provide appropriate examples using functional and imperative programming languages",
  "color": "blue",
  "answer": "- Given the same input, functions always return the same output. - Functions do not have side effects, i.e, they do not modify programs state. - A variable can only be assigned (matched) a value once."
},
{
  "question": "Define the term recursion",
  "color": "blue",
  "answer": "A recursive method is a method that calls itself either directly or indirectly. Two key requirements to make sure recursion is successful are: Every recursive call must simplify the computation in some way; There must be special cases to handle simplified computation. If a recursive method is called with a base case the method returns a result. If called with a complex problem, the method divides into two or more conceptual process. For recursion to terminate each time the recursion method calls itself with a slightly simpler version of the original problem, the sequence of smaller and smaller problems must converge on the base case. When the method recognises the base case, the result is returned to the previous method call and a sequence of returns ensures all the way up the line until the original call of the method eventually returns the final result."
},
{
  "question": "Define the term iteration",
  "color": "blue",
  "answer": "It is where statements or a group of instructions within a computer program are repeated while some condition is true"
},
{
  "question": "Contrast iteration and recursion",
  "color": "blue",
  "answer": "Both iteration and recursion are based on a control structure. Iteration uses a repetition structure, recursion achieves repetition through repeated method calls. Both involve a termination test. Iteration terminates when loop continuation condition fails. Recursion terminates when the base case is recognised. Recursion repeatedly invokes method calls which has an overhead, this can be expensive, it consumes time and memory. Both can repeat infinitely."
},
{
  "question": "Contrast recursion and tail-recursion",
  "color": "blue",
  "answer": "In normal recursion, every function call must run to completion in order to get the final result. The difference with tail recursion is that all the recursive calls to the method do no actually need to return to get the final result. Its called tail recursive because the final function call actually holds the final result. A second argument is that tail recursion holds the result of the current call which is passed into the function. The final function call holds the final result."
},
{
  "question": "Distinguish between lazy and eager evaluation in the implementation of applicative (functional) programming languages, illustrating your answer with suitable examples.",
  "color": "blue",
  "answer": "I don't know"
},

// Prolog
{
  "question": "Briefly explain the term non-monotonic logic.",
  "color": "red",
  "answer": "A logic in which facts, and therefore conclusions drawn from those facts, may change."
},
{
  "question": "What is a rule and what is a fact?",
  "color": "red",
  "answer": "I don't know"
},
{
  "question": "Define the logical programming paradigm and give its advantages and disadvantages.",
  "color": "red",
  "answer": "A declarative approach to problem solving. Various logical assertions are used in conjunction with know facts to query answers. Some of the advantages are: The system solves the problem so the number of programming steps are kept to a minimum. Proving the validity of a program is simple. Suited for rapid prototyping. Disadvantages: Highly inefficient, methods for making large programs are yet to be developed. Only effective for a few small areas of applications."
},

// General
{
  "question": "State briefly what the Blub Paradox is.",
  "color": "dark",
  "answer": "A programmer used to a particular language (“Blub”) sees languages missing some of Blub’s features as inferior, but cannot see the value of features in other languages that are not in Blub."
},
{
  "question": "What is the difference between calling by value and calling by name? What are the advantages of each strategy?",
  "color": "dark",
  "answer": "Both strategies reduce to the same final value, as long as: the reduced expression consists of pure functions; both evaluations terminate. Call-by-value has the advantage that it evaluates every function argument only once. Call-by-name has the advantage that a function argument is not evaluated if the corresponding parameter is unused in the evaluation of the function body."
},
{
  "question": "Describe the differences between a function, a method and a procedure.",
  "color": "dark",
  "answer": "A function is a subroutine (repeatable piece of a procedural code that can be called by name), that returns one or more values. It should provide an answer based on the arguments or compute a new value based on the arguments. A function calculates a new value based on its inputs. Pure functions do not cause side effects, do not modify state, given the same input, will give the same output. A procedure is a subroutine that does not return a value but does have side effects. A method is a procedure that is executed in the context of an object. This means there are two types of methods. A function method and a procedure method. A procedure method modifies the state of the object instance it is being executed and applies to the object oriented paradigm."
},
{
  "question": "Describe the imperative programming paradigm and give its advantages and disadvantages.",
  "color": "dark",
  "answer": "The imperative programming paradigm assumes that the program can maintain its state through environment variables. Computations are performed through a guided sequence of steps in which variables are referred to or changed. The order of steps are crucial, different execution paths will cause different results. Some of its advantages are: efficiency, close to the machine, popular and familiar. Some of the disadvantages are, the semantics of a program can be complex to understand or prove because functions do not hold referential transparency. Side effects make debugging harder. Abstractions are more limited. Order of execution is crucial."
}];
