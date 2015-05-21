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

// Evaluation
{
  "question": "Distinguish between lazy and eager evaluation in the implementation of applicative (functional) programming languages, illustrating your answer with suitable examples.",
  "color": "pastel",
  "answer": "something"
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

// Prolog
{
  "question": "Briefly explain the term non-monotonic logic.",
  "color": "red",
  "answer": "I don't know"
},
{
  "question": "What is a rule and what is a fact?",
  "color": "red",
  "answer": "I don't know"
},
{
  "question": "What is the difference between a procedure a method and a function?",
  "color": "red",
  "answer": "I don't know"
},

// General
{
  "question": "State briefly what the Blub Paradox is.",
  "color": "dark",
  "answer": "I don't know"
},
{
  "question": "Define the term atomic operation.",
  "color": "dark",
  "answer": "I don't know"
},
{
  "question": "List the advantages and disadvantages of the paradigms.",
  "color": "dark",
  "answer": "I don't know"
},
{
  "question": "What is the difference between calling by value and calling by name? What are the advantages of each strategy?",
  "color": "dark",
  "answer": "Both strategies reduce to the same final value, as long as: the reduced expression consists of pure functions; both evaluations terminate. Call-by-value has the advantage that it evaluates every function argument only once. Call-by-name has the advantage that a function argument is not evaluated if the corresponding parameter is unused in the evaluation of the function body."
}];
