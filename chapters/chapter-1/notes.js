/*

VALUES, TYPES AND OPERATORS 

*/ 


/*

1) Numbers 

    • Numbers are numeric values, when written in JS it will cause the but pattern for the number to come into existence inside the computer's memory --> ex) 13  

    • Fractional numbers are written by using a dot --> 9.81

    • For very big or very small numbers, you can use scientific notation by adding an e(exponent), followed by the exponent of the number --> 2.998e8 = 2.998 * 10^8 = 299,800,000

    • Calculations with whole numbers (integers) are always precise. However calculations with fractional numbers are generally not. Many numbers will lose some precision when there is only 64 bits available to store them. It causes practical problems in important situations, but the important this is to be aware of it and treat fractional numbers as approximations, not precise values. 

*/

/*

2) Arithmetic 

    • + means addition 
    • - means subtraction 
    • * means multiplication 
    • / means division 
    • The arithmetic in code follows PEMDAS 
    • % (modulo) is the remainder operation --> 314 % 100 = 14 

*/

/* 

3) Special Numbers 

    • Infinity, - Infinity, NaN
    • The first two represent the positive and negative infinities. Infinity - 1 is still Infinity. Don't put too mich trust in infinity based computations.
    • NaN stands for not a number. You will get this result when any number operations do not yield a meaningful result. For example 0 / 0 or Infinity - Infinity. 

*/

/////////////////////////////////////////////////////////////

/* 

4) Strings 

    • Strings are used to represent text. They are written between a set of quotes:
        'I am a string'
        "I am a string"
        `I am a string`
        
    • Newlines (characters you get when you pres enter) can be included without escaping only when they is quoted with backticks.

    • When backslashes are found inside a quoted text, it indicates that the character after it has a special emaning. This is called the escaping character. When an n character appears after a backslask it indicates a new line. A t after a backslash means a tab character. (example 4a)

    • Sometimes there may be a case where you want to use a backslash. To use a backslash put another backslash, the two will collapse into one. (example 4b)

    • strings cannot be divided, multiplied or subtracted, but the + operator can be used to concatenante strings (glue two strings together). (example 4c)

    • single and double quotes virtually behave the same, the only difference is in which type of quote you need to escape inside of them. Backtick quoted string are called template literals. They can do a couple of more trips like embed values. (example 4d)


*/

// 4a 
    console.log("This is the first line \nAnd this is the second line")

// 4b
    console.log("A new line character is written like \"\\n\"")

// 4c 
    console.log("con" + "cat" + "e" + "nate")

// 4d 
    let value = 4 + 5;
    let sentence = `4 + 5 = ${value}`
    console.log(sentence)


/*

5. Unary Operators 
    
    • Not all operators are symbols, some are words like typeOf. The typeOf operator produces a string value naming the type of value you give it. (example 5a)

    • TypeOf is a unary operator because it takes in one value. Binary operators like *, /, +, - take is 2 values. The minus operator can however be unary and binary. (Unary because it can indicate a negative number)

*/

// 5a 
    console.log(typeof 45)
    console.log(typeof "hat")


/* 

6. Boolean Values 

    • Boolean type has two values, true and false which are written in those words 

    • > and < are the traditional symbols for "is greater than and is less than" respectively. These are binary operators and applying them results in a boolean value. (example 6a)

    • Strings can be compared withthe >, < opeartors. The strings are roughly ordered in alphabetical order but there are some rules. For example, uppercase letters are "less" than lowercase. Nonalphabetic letters are also included in the ordering. When JavaScript compares the ordering it goes left to right checking individual unicodes

    • Other operators are >= (greater than or equal to), <= (less than or equal to), !=== (not equal to), === (equal to) (example 6b)

    • There is only one number that is not equal to itself NaN. NaN is suppose to mena the result of a nonsensical number. A nonsensical number is not equal to the result of any other nonsensical number.

*/ 

// 6a 
    console.log(3 > 2)
    console.log(3 < 2)
    console.log("Aardvark" < "Zoroaster")

// 6b 
    console.log("Itchy" !== "Scratchy")
    console.log("Apple" === "Orange")
    console.log(NaN === NaN)


/*

7) Logical Operators 

    • There are also soem operations that can be applied to boolean values themselves. The operators  and, or, not  can be used to "reason" about booleans.

    • The && operator represents local and. it i sa binary operator and its result is true onlu if both the values given to it are true. (example 7a)

    • The || operator means or. It produces true if either of the values given to it is ture. (example 7b)

    • Not is written with a ! . It is a unary operation that flips th evalue given to it. !true produces false and !false produces true
    
    • The ternary operator uses three values. It is writted with a question mark and a colon. It can also be reffered to as a conditional operator. The value on the left of the question mark picks which of the other two values will come out. If it is true then it will choose the midddle value, if it is false then it will choose the right value. (exampel 7c)

*/

// 7a 
    console.log(true && false)
    console.log(true && true)

// 7b 
    console.log(true || false)
    console.log(false || false)

// 7c 
    console.log(true ? 1 : 2)
    console.log(false ? 1 : 2)


/* 

8. Empty Values 

    • There are two special values: null and undefined, that are used to show the absence of a meaningful value. They themselves are values but they carry no information. They can be used interchangably for the most part. 

*/


/*

9. Short - circuiting of logical operators 

    • The || operator will try to evaluate whatever is on the left hand side as a boolean value. If it is equal to true then it will return it, if it cannot make it equal to true then it will return the value on the righthand side. (example 9a) We can use this functionality as a way to fall back on a default value

    • The && value works opposite the ||. if the left value is false it will return it. And if both the values are true it will return the second value (example 9b)

*/

// 9a
    console.log(undefined || "user")
    console.log("Cherry" || "Orange")

// 9b 
    console.log(NaN && "hi")
    console.log("Cherry" && "orange")



