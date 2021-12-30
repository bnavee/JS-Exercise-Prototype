//JavaScript
Variable declaration:

1) To declare a variable Name use (Var) or (Let) keywords before the variable Name;
2) After Variable name give our input(Value) and colse with (;)-semicolons;
    var(Variable_Name) = Value;
    Ex: 
        var message = 'Hello';

Other: (Note: Every method should have ()Paranthasis)

---typeOf():
    -the typeOf operator retuns a string indicates the type of the unevaluated opend
        Ex:
            console.log(typeof 42);//"number"
            console.log(typeof 'blubber');//"string"
            console.log(typeof true); //"boolean"
            console.log(typeof undeclaredVariable); //"undefined"

---valueOf():
    -in string:
        - valueOf() method returns the primitive value of a string.
        - it does not change the original string.
        - the valueOf method can be used to convert a sting object into a string.
    - in Array:
        - valueOf() method returns the array itself.
        - the valueOf() method does not change the original array.
            Ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
                const myArray = fruits;//fruits

---instanceof(): The instanceof operator tests to see the if the prototype propetry of a  constructor  
                 appears in anywhere in the prototype chain of an object. return the boolean value.
    Ex:
        function Car(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
                } //--- This is an new prototype object.
        const auto = new Car('Honda', 'Accord', 1998);
    
        console.log(auto instanceof Car);// true  
        console.log(auto instanceof Object);// true

                                        Primitie Data Types
Note: 
    1) JS is a dynamic languge therefore a variable does not associate with any type.
    2) To get the currenet type, use the (typeOf) operator.

A) undefined - When a variable is delcared but not itialized, it is the value undefined.
    Ex:
        let name;
        console.log(typeof(name))//output: undefined.

B) Null - Null is an empty object pointer. Datatype that has only one value: null.
    Ex: 
        let obj = null;
        console.log(typeof obj); // object

C) Number type or Integer type: Numbers are 2 types 
    1) Number (Ex: 1 to 9).
        i) Octal digit numbers (0 to 7)-prefix with 0; 
            Ex: 
                let x = 060;//octal for 48).- if octal number out of range it shows as (let d = 090; // output: 90;
        ii) To create Hexadecimal literal use (0x-inlowercase) (
            Ex:
                let h = 0xf;//output: 0xf hexadecimal for 15)
    2) Floating-point number: Decimal point number is called floating 
        Ex: 
            let x = 1.20;// 1.20;  let y = .30; same as 0.30 also valid but not recommended.
            (Note: floating-point value uses twice as much memorey as an integer value.)
    3) e-notation represents vary large or small numbers 
        Ex: 
            let f4 = 2.17e6;//output: 2170000;
    4) To create a number object use Number constructor
        Ex: 
            var numberObject = new Number(100);
    -- To get the primitive value of a Number object use the valueOf() Method();
        Ex: 
            console.log(numberObject.valueOf()); // 100


D) NaN (Not a Number) - JS special numeric value called NaN, it means a invalid number;
    Ex: 
        console.log('a'/2); //output: NaN.

E)String type: a string is a sequence of zero or more charaters. A literal string starts and ends with single quotes or double quotes.
    Ex: 
        let greetings = 'Hi';
            (or) 
        let str = "javascript"; 
    Note: JS strings are immutable.. means you can not modify once created.

E) boolean type: has two values (true and false) 
    Ex: 
        let isDone = false;  
        console.log(typeof(isDone));//output: bolean
    a) Bollean: To convert a value of other Datatype into boolean value. we use the boolean function.
        Type	     -       true	                  -      false
        string	     -  non-empty string	          -  empty string
        number	     -  non-zero number and Infinity  -  0, NaN
        object	     -  non-null object	null          -  null
        undefined	 -	undefined                     -  undefined
    Ex:
        console.log(Boolean('Hi'));// true
        console.log(Boolean(''));  // false

        console.log(Boolean(20));  // true
        console.log(Boolean(Infinity));  // true
        console.log(Boolean(0));  // false

        console.log(Boolean({foo: 100}));  // true on non-empty object
        console.log(Boolean(null));// false

F) Symbol type: 
    - symbole type does not have literal FormData.
    - The symbole function (creates a new unique value every time you call it).
    - use a (descriptive string) into sybole function for (logging and debugging purpose).
    Ex: 
        let s2 = Symbol('event.save');
        let s1 = Symbol(); -- sybole literal form;

G) Object type:
    - object literal form;
        Ex: 
            let emptyObject = {};
    - Object is a collection of properties;
        Ex: 
            let person = {
            (key) firstName : 'John'(value), (----Both are called as key value pair for more properties use (,)comma to saparate the pair.)
            lastName : 'Doe'
            };
    - properties is defined as a key value pair.
    -- we call the object properties by (.)-Dot notation and ([])-Array notation.
        Ex: 
            console.log(contact.firstName);// output: john

    -- nest objects: 
        Ex: 
            let contact = {
                firstName:'Naveen',
                lastName:'Bojja',
                address: {
                    building:'Janapriya lakeform',
                    state:'Telangana'
                }
            }
    -- Object calling using (.)-Dot notation; (console.log(contact.address.state);//Output: Telangana)
    -- Object calling using ([])-Array notation: console.log(contact['lastName']); // Bojja
    -- console.log(contact["address"]["state"]);// output - Telangana

------------------------------------------JavaScript operators---------------------------------------------------------------

                                        Urinary operator
    - Urinary operator (+) - Covers into a number.
        Ex: 
            let a = 10;
            a = +a; // 10 -- Urinary (+) operator does not take any effect.
    - urinary Operator (-) - convers an into a number and negate the value after that.
        Ex: 
            let a = 10;
            a = -a; // -10 -- Urinary (-) operator does the negaties the value.
    - prefix/postfix increments (++) - add one to its opend.
        Ex: 
            let dan = 8;
            ++dan; //--  here adding +1 
            console.log(dan); // 9 (8 + 1)
    - prefix/postfix decrements (--) - substract one from opend.
        Ex: 
            let dan = 9;
                --dan; // -- here minus -1
            console.log(dan); // 8 (9 - 1)

            -Postfix:
                let i = 10, j = 20;
                let m = i-- + j;
            console.log(m); // 30
            console.log(i); // 9

            -Prefix:
                i = 10;
                let n = --i + j;
            console.log(n); // 29
            console.log(i); // 9
        Note: increment or decrement operator on a value of a string, Boolean, and object to convert these values into
            - string convers into value and done the operation- if not converted it returns NaN.
            - when used to Boolean the variable to a number, true become 1; and fales become 0;
            - when used to object the valueOf() is called first; the result is NaN the toString() is called to return the converted value. 
                    
                                                Logical Operators
    1) ! (Logical NOT):
        Ex: 
            let eligible = false,
            required = true;
            console.log(!eligible);//true
            console.log(!required);//false
        Ex:
            console.log(!undefined); // true
            console.log(!null); // true
            console.log(!20); //false
            console.log(!0); //true
            console.log(!NaN); //true
            console.log(!{}); // false
            console.log(!''); //true
            console.log(!'OK'); //false
            console.log(!false); //true
            console.log(!true); //false
        Double-negation (!!): The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.

    2) && (Logical AND) - double ampersand (&&) to represent the logical AND operator.
            a	     b	    a & b
            true	true	true
            true	false	false
            false	true	false
            false	false	false
        - The result of the && operator is true only if both values are true, otherwise, it is false.
            Ex:
                let eligible = false,
                required = true;
                console.log(eligible && required); // false
        - Short-circuit evaluation:
            Ex:
                let b = true;
                let result = b && (1 / 0);
                console.log(result);//infinity        
        - A Chain of && operators
            Ex:
                let result = value1 && value2 && value3;

    3) || (Logical OR) - uses the double pipe || to represent the logical OR operator.
                a	     b	    a || b
                true	true	true
                true	false	true
                false	true	true
                false	false	false
            Ex:
                let result = a || b; 
                (If a can be converted to true, returns a; else, returns b. This rule is also applied to boolean values.)
        - The || operator is also short-circuited
            Ex:
                let result = value1 || value2 || value3;

                                Comparision Operators
    - To compare two values, use the cmoparision operator.
                    Operator	  Meaning
                    <	 -  less than
                    >	 -  greater than
                    <=	 -  less than or equal to
                    >=	 -  greater than or equal to
                    ==	 -  equal to
                    !=	 -  not equal to
            Ex:
                let r1 = 20 > 10; // true
                let r2 = 20 < 10; // false
                let r3 = 10 == 10; // true 
    4) Strict equal (===) and not strict equal (!==)
                    Operator	 Meaning
                    ===   -  strict equal
                    !==	-  not strict equal
        Ex:
            console.log("10" == 10); // true (Converts the operand before comparison)
            console.log("10" === 10); // false (don’t convert the operand before comparison).

------------------------------------------------- Control Flow -------------------------------------------------------------

                                        if else statement
- The if statement executes a statement or block of code if a condition is satisfied.
    Ex:
        if( condition )
        statement;
- Any valid condition evaluates to a Boolean value either true or false;
- in case the condition evaluates to a non-Boolean value.JS converts its result into a Boolean value by calling Boolean() function;
- if first condition is not passed. The controler is passed to the next statement that followes else if / else statement.
    Ex:
        let x = 5;
        if (x > 10) { // Its good practice to use Always use the curlyBraces ({}) for statements
            console.log('x is greater than 10'); 
        } else {
            console.log('x is less than or equal 10');
        }
                     or 
    Ex_1:            
        let a = 10, 
        b = 20;
        if (a > b) // This is called condition 
        {
            console.log('a is greater than b'); // this is called Statement.
        } 
        else if (a < b)  // We can use as many (else if) conditions and statements as we wanted.
        {
            console.log('a is less than b');
        } else 
        {
            console.log('a is equal to b');
        };

---- if else shortcut: conditional operator or ternary operator:
        Ex: 
            condition ? expression_1 : expression_2;
        Ex_2:
            age > 18 ? //condition
            (
                alert("OK, you can register."), // expression -- we use (,)comma for multiple expressions
                redirectTo("register.html");
            ) : (
                stop = true,
                alert("Sorry, you are too young!")
            );
                    
                    Switch Case
- The switch statement evaluates an expression matching the expressions values to a case claus and executes statement
        associate with the case,
        Ex:
            const expr = 'Papayas';
            switch (expr) {
            case 'Oranges':
                console.log('Oranges are $0.59 a pound.');
                break;
            case 'Mangoes':
            case 'Papayas':
                console.log('Mangoes and papayas are $2.79 a pound.');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
            } //"Mangoes and papayas are $2.79 a pound."

                            While loop
-- While statement creates a loop that executes a block of code as long as the test condition evaluates to true.
        Ex:
            let count = 1;
            while (count < 10) {
                console.log(count);
                count +=2;
            }
    // Output:          1
                        3
                        5
                        7
                        9
-- The following example uses the while loop statement to add 5 random numbers between 0 and 10 to an array:
    // create an array of five random number between 1 and 10
    Ex:
        let rands = [];
        let count = 0;
        const size = 5;

        while(count < size) {
            rands.push(Math.round(Math.random() * 10));
            count++;
            console.log('The current size of the array is ' + count);
        }
        console.log(rands);
    output:
        The current size of the array is 1
        The current size of the array is 2
        The current size of the array is 3
        The current size of the array is 4
        The current size of the array is 5
        [1, 9, 1, 9, 6]

                                    do-while statement
-- The do-while loop statement creates a loop that executes a block of code untile a test condition evaluates to false.
        Ex:
            do {
                statement(s);
            } while(expression);
        Ex_2:
            let count = 0;
            do {
                count++;
                console.log('count is:' + count);
            } while (count < 10);
                            
                                 For loop
-- for loop statement allows you to create a loop with three optional expressions.
        Ex:
            for (initialization; condition; post-expression) {
                // statements
            }
        Ex_2:
            for (var counter = 1; counter < 5; counter++) {
                console.log('Inside the loop:' + counter);
                break; // to break loop if conditions are true
                continue; // it skipping the  current iteration of a loop and jumps to counter++
            }
            console.log('Outside the loop:' + counter);

------------------------------------------- JS String --------------------------------------------------------------------
-- JS strings are immutable
        (means if you process a string you will always get a new string and the original string does not change.)
-- litteral string in js. use "singel Quotations" or "Double Quotations".
        Ex:
            let name = "John";
            let message = `Hello ${name}`;
            console.log(message); // Hello John
    -Escaping special charaters:
        -Windows line break: '\r\n';
            Ex:
                let str = 'I\'m \r\n a string!';
                console.log(str); //I'm 
                                //a string!
        
        - Unix line break: '\n';// next line
            Ex:
            let str = 'I\'m \n a string!';
            console.log(str); //I'm 
                            //a string!
        - Tab: '\t';
            Ex:
                let str = 'I\'m \t a string!';
                console.log(str); // I'm 	 a string!
        
        - Backslash '\';
            Ex:
                let str = 'I\'m a string!';
                console.log(str); // I'm a string!
-- Getting the length of the string
            Ex:
                let str = "Good Morning!";
                console.log(str.length);  // 13 : total count of the str;
-- Accessing charaters -- To access the charaters of a string use the [] - array like notation
            Ex:
                let str = "Hello";
                console.log(str[0]); // "H"
    - To access the last character of the string, you use the length - 1 index:
            Ex:
                let str = "Hello";
                console.log(str[str.length -1]); // "o"
-- Concatenating strings via + operator - To concatenate two or more strings, you use the + operator;
            Ex:
                let name = 'John';
                let str = 'Hello ' + name;
                console.log(str); // "Hello John"
    - Assemble a string pies by peace, use the += operator;
                Ex_2:
                    let className = 'btn';
                    className += ' btn-primary'
                    className += ' none';
                    console.log(className); // btn btn-primary none
-- Converting a value to a string;
    - To convert a non-string value to a string;
                 - String(n);
                 - ” + n
                 - n.toString()
    (Note: toString() method doesn''t work for undefined and null;)
    - When you convert a string to a boolean, can not convert it back;
            Ex:
                let status = false;
                let str = status.toString(); // "false"
                let back = Boolean(str); // true
-- comparing strings;
    To compare two strings, use the operator >, >=, <, <=, and == operators.
    Operators comare strings based on the numeric values of JS charaters.
            Ex:
                let result = 'a' < 'b';
                console.log(result); // true
            Ex_2:
                let result = 'a' < 'B';
                console.log(result); // false
-- Prior to the ES5 use the charAt() method;
            Ex:
                let str = new String('JavaScript String Type');
                console.log(str.charAt(0)); // J
-- Converting string to uppercase();
            Ex:
                let x = 'hello';
                let y = x.toUpperCase();
                console.log(y); // HELLO
-- strings Manupulation:
    1) concatinating strings 
            - to concatinating two or more strings you use the concat() method;
    Ex:
        let firstName = 'John';
        let fullName = firstName.concat(' ','Doe');
        console.log(fullName); // "John Doe"
        console.log(firstName); // "John"
    Ex_2:
        let firstName = 'John';
        let fullName = firstName + ' ' + 'Doe';
        console.log(fullName); // "John Doe"
    a) Concate an arry of strings:
        Ex:
            let colors = ['Blue',' ','Green',' ','Teal'];
            let result = ''.concat(...colors); // Note: ...(spread operator) that unpacks elements of an array.
            console.log(result); // Blue Green Teal
    b) Concatinating non-string arguments:
        Ex:
            let str = ''.concat(1,2,3);
            console.log(str); // 123

    2) Extracting substrings:
            - To extract a substring from a string use the substr() method;
            Syntax:
                substr(startIndex,[length]);
            Ex:
                let str = "JavaScript String";
                console.log(str.substr(0, 10)); // "JavaScript"
                console.log(str.substr(11,6)); // "String"
            - string .prototype.substring() returns the part of the string between the start and end indexes;
            Syntax:
                str.substring(startIndex [, endIndex])
                - if we omits the endIndex it returns the substring to the end of the string.
                - if startIndex is same as endIndex the substring is return the empty string;
                - if startIndex is grater then the endIndex, the substring() swipes the their roles.
                - if any parametor is NaN, the substrings() treats it as if it were zero(0);
            Ex:
                let str = 'JavaScript Substring';
                let substring = str.substring(0,10);
                console.log(substring); // JavaScript
            Ex_2: Extracting domin form the email.
                let email = 'john.doe@gmail.com';
                let domain = email.substring(email.indexOf('@') + 1);
                console.log(domain); // gmail.com

    3) Locating substrings:
            - To locating a substring use indexOf() method; 
                Note: If substring is not found the indexOf() method return -1 and indexOf() is a case-sensitive;
            Syntax:
                string.indexOf(substring,[fromIndex]);
            Ex:
                let str = "This is a string";
                console.log(str.indexOf("is")); // 2
            
            - To count the occurance of a substring in a string;
            Ex:
                let str = 'You do not know what you do not know until you know.';
                let substr = 'know';
                let count = 0;
                let index = str.indexOf(substr);
                while(index !== -1) {
                    count++;
                    index = str.indexOf(substr, index + 1);
                }
                console.log(count); //  3
            
            - To perform case-sensitive search  for the indexOf(). convert to Upper or lower cases;
            Ex:
                let str = 'JS indexOf';
                let substr = 'js';
                let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());
                console.log(index); // 0

            - To find the locatioon of the last occurence of a string in a string; use lastindexOf() method
            Note: If substring is not found the lastindexOf() method return -1 and lastindexOf() is a case-sensitive;
            Syntax:
                str.lastIndexOf(substr, [, fromIndex]);
            Ex:
                let str = "This is a string";
                console.log(str.lastIndexOf('is')); // 5
            Ex_2:
                let str = 'JavaScript';
                let index = str.lastIndexOf('a');
                console.log(index); // 3
            Ex_3:
                let str = 'JavaScript';
                let index = str.lastIndexOf('a',2);
                console.log(index); // 1

    4) Removing whitespace charaters;
            - To remove all whitespace charaters of a string use trim() method;
                Note: trim() method creates a copy of the original strings with whitespace charaters. it does not change the original strings.
            Syntax:
                let resultString = str.trim();
            Ex:
                let rawString = ' Hi  ';
                let strippedString = rawString.trim();
                console.log(strippedString); // "Hi"

            - To new methods for removing whitespace charaters from a string;
                -- trimStart() - Remove the Begining whitespace of a string;
                -- trimEnd() - Remove the End whitespace of a string;

    5) Changing any cases:
            - To change cases of a string use the toLowerCase() and toUpperCase() methods;
            Ex:
                let greeting = 'Hello';
                console.log(greeting.toLowerCase()); // 'hello'
                console.log(greeting.toUpperCase()); // 'HELLO';

    6) Comparing strings:
            - To compare two strings use the localCompare() methods;
            Syntax:
                first.localeCompare(second);
            - The localeCompare() returns one of three values: -1, 0, and 1.
                - If the first string comes before the second string alphabetically, the method returns -1.
                - If the first string comes after the second string alphabetically, the method returns 1.
                - If two strings are equal, the method returns 0.
            Ex:               
                console.log('A'.localeCompare('B')); // -1
                console.log('B'.localeCompare('B')); // 0
                console.log('C'.localeCompare('B')); // 1

    7) Matching Patterns:
            - The match() method allows you to match strings with a specified regular expression and get an array of result;
            - The match() method return null if it does not find any match;
            Ex:
                let expr = "1 + 2 = 3";
                let matches = expr.match(/\d+/); // /\d+/ - to match the digit; 
                console.log(matches[0]); // "1"
            Ex_2:
                matches = expr.match(/\d+/g); // g is global flag results an array containing all matches.
                matches.forEach(function(m) {
                    console.log(m);
                });
                output:
                        // "1"
                        // "2"
                        // "3"
            - if a string matches a regular expression use the search() method; and similar to the match() method;
                - returns position of the string and if not found returns -1;
                Ex:
                    let str = "This is a test of search()";
                    let pos = str.search(/is/);
                    console.log(pos); // 2

    8) Replacing substrings:
            - To replace a substring with a string use replace();
                Syntax:
                    string.replace(regularExpression, replaceText);
                Ex:
                    let str = "the baby kicks the ball";
                    // replace "the" with "a"
                    let newStr = str.replace(/the/g, "a");
                    let new = str.replace('the','a');
                    console.log(newStr); // "a baby kicks a ball"
                    console.log(new); // a baby kicks the ball (Note: It replaces only the first occurence only.)

    9) String split() method:
            - The string.prototype.split() divides a string into an array of substrings.
                Syntax:
                    split([separator, [,limit]]);
                    -separator: determins where the split should occuer. If omits the separator split() returns the entire string.
                    -limit: The limit is zero or positive integer. The split() method will stop the number of strings to the limit.
                
                Ex: Splitting the strings into words;
                    let str = 'JavaScript String split()';
                    let substrings = str.split(' ');
                    console.log(substrings); // ["JavaScript", "String", "split()"]
                    (Note: Space has been removed form the strings)
                
                Ex_2:  Returning a limited number of substrings;
                    let str = 'JavaScript String split()';
                    let substrings = str.split(' ',2);
                    console.log(substrings); // ["JavaScript", "String"]
                Ex_3:
                    let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
                    let sentences = paragraph.split(/[!,?,.]/);
                    console.log(sentences); // ["Good Morning", " How are you", " This is John", " John is my friend", ""]
                - If we includes the matched results in a array:
                Ex_4:
                    let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
                    let sentences = paragraph.split(/([!,?,.])/);
                    console.log(sentences); // ["Good Morning", "!", " How are you", "?", " This is John", ".", " John is my friend", ".", ""]
    10) String slice() method:
            - The slice() method returns a substr from the startIndex to the endIndex in the str;
                Syntax:
                    let substr = str.slice(startIndex [, endIndex ]);
                    - if omits the endIndex the slice() extracts to the end of the string.
                Ex:
                    let email = 'john@example.com'
                    let localPart = email.slice(0,email.indexOf('@'));
                    console.log(localPart); // john

-------------------------------------------- JS Array -------------------------------------------------------------------
-- An array is an list of ordered values;
-- Each value is called an Element specified by an index;
-- An array can hold values of different types 
                Ex: 
                    numbers,strings and booleans;
                Syntax:
                    let arrayName = [element1, element2, element3, ...];
                Syntax: Array literal form
                    let emptyArray = [];
-- The length of an array is dynamically sized and auto-growing. it does not need to specify the array size;
-- if we know the number of elements that holds the array; we can create an array with an intial size
                Ex:
                    let scores = Array(10);
-- pass the elements using (,)comma saparated;
                EX:
                    let scores = new Array(9,10,8,7,6);
Accessing JS array elements:
    - First element of an array starts at index 0 and 1,2,3....;
        Ex:
            let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
            console.log(mountains[0]); // 'Everest'
            console.log(mountains[1]); // 'Fuji'
            console.log(mountains[2]); // 'Nanga Parbat'
    - Assiging the value to the element; (Adding an element to an Array)
        Ex:
            let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
            mountains[2] = 'K2';
            console.log(mountains); // [ 'Everest', 'Fuji', 'K2' ]
    - Getting an Array Size: using length property
        - depending on Array type length property works differently
                i) Dence Arrray.
        Ex:
            let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
            console.log(mountains.length); // 3
        - Using an Empty array
        Ex:
            colors = [];
            console.log(colors.length); // 0
                ii) Sparce Array.
                    - A spars array whose elements don't have continues index starting at Zero.
                    Ex:
                        let numbers = [10, , 20, 30];
                        console.log(numbers.length); // 4
                    - If Adding an element to the array at the index of 10.
                    Ex:
                        numbers[10] = 100;
                        console.log(numbers.length); // 11
-- Modifying an Array:
    a) Empty an array:
        - if you set the length to zero the array will be empty.
                Ex:
                    const fruits = ['Apple', 'Orange', 'Strawberry'];
                    fruits.length = 0;
                    console.log(fruits); // []
        - if set the length property 2 
                Ex:
                    fruits.length = 2;
                    console.log(fruits);// [ 'Apple', 'Orange' ]
        - if the length property is heigher than the index value, the array will be spare
                Ex:
                    const fruits = ['Apple', 'Orange', 'Strawberry'];
                    fruits.length = 5;
                    console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]

    a) Adding an element to the end of an array: We use push() method;
        Ex:
            let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
            seas.push('Red Sea');
            console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

    b) Adding an element to the begining of an array:
        Ex:
            let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
            seas.unshift('Red Sea');
            console.log(seas); // [ 'Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
    c) Removing an element from the end of an array:
        Ex:
            let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
            const lastElement = seas.pop();
            console.log(lastElement); // Baltic Sea
    d) Removing an element from the begining of an array;
        Ex:
            let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
            const firstElement = seas.shift();
            console.log(firstElement); // Black Sea
        -- Revers a string using Push() and pop() methods;
            Ex:
                function reverse(str) {
                    let stack = [];
                    // push letter into stack
                    for (let i = 0; i < str.length; i++) { //loop through the str
                        stack.push(str[i]); //push each letter into the stack array
                    }
                    // pop letter from the stack
                    let reverseStr = '';
                    while (stack.length > 0) {
                        reverseStr += stack.pop(); //pop each letter from the stack construct the reversed string.
                    }
                    return reverseStr;
                }
                console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ

    e) Finding an indexOf() an element in the array;
        Ex:
            let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
            let index = seas.indexOf('North Sea');
            console.log(index); // 2
    f) Check if the value is in the array;
        Ex:
            console.log(Array.isArray(seas)); // true
    
-- Array splice: (Delete,Insert, and Replace);
                (Note: splice() method changes original array;)
    - Splice() method allows to insert a new element in the middle of an array.
    - Splice() method allowe to delete and replace the existing elements. 
        Syntax:
            Array.splice(position,num);
                - position: Specifies the position of first item to delete 
                - num: Determines Number of elements to delete.
        Ex:
            let scores = [1, 2, 3, 4, 5];
            let deletedScores = scores.splice(0, 3);
            console.log(scores); //  [4, 5]
            console.log(deletedScores); // [1, 2, 3]
    -- Inserting an elements using splice() Method.
            Syntax:
                Array.splice(position,0,new_element_1,new_element_2,...);
                    - position: Specifies the position in the array that new element to add.
                    - 0: Instucts the splice() method not to delete any element in the array.
                    - new_element_1 and new_element_2: allows New elements to insert.
            Ex:
                let colors = ['red', 'green', 'blue'];
                colors.splice(2, 0, 'purple'); //  We can add en number of elements here
                console.log(colors); // ["red", "green", "purple", "blue"]
    -- Replacing elements using splice() method:
            Ex:
                let languages = ['C', 'C++', 'Java', 'JavaScript'];
                languages.splice(1, 1, 'Python');
                console.log(languages); // ["C", "Python", "Java", "JavaScript"]
            - Note that the number of elements to delete needs not to be the same as the number of elements to insert.
            Ex_2:
                let languages = ['C', 'C++', 'Java', 'JavaScript'];
                languages.splice(2,1,'C#','Swift','Go');
                console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
-- Sort() Method:
    - Allows sort elements in Accending or decending order.
                Syntax:
                    array.sort(comparefunction)
    - Sort() method casta elements to strings and compares the strings to determin the order;
                Ex:
                    let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
                    numbers.sort();
                    console.log(numbers); // [ 0, 1, 10, 2, 20, 3, 30 ]
        - To sort the Numbers in accesding order.
            Ex:
                let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
                numbers.sort( function( a , b){
                    if(a > b) return 1;
                    if(a < b) return -1;
                    return 0;
                });
                console.log(numbers); //[ 0,  1,  2, 3, 10, 20, 30 ]
        - To sort the Numbers in decesding order.
            Ex:
                let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
                numbers.sort( function( a , b){
                    if(a < b) return 1;
                    if(a > b) return -1;
                    return 0;
                });
                console.log(numbers); //[30, 20, 10, 3, 2, 1, 0]

        - Using an arrow function (in Accending order)
            Ex:
                let numbers = [0, 1, 2, 3, 10, 20, 30];
                numbers.sort((a, b) => a - b);
                console.log(numbers);//[ 0,  1,  2, 3, 10, 20, 30 ]
        - Using an arrow function (in decending order)
            Ex:
                let numbers = [0, 1, 2, 3, 10, 20, 30];
                numbers.sort((a, b) => b - a);
                console.log(numbers);//[30, 20, 10, 3, 2, 1, 0]
    -- Sorting Alphabats using sort() Method (In Accending order):
                (Note: No need to specify any functions as above to sorting of an strings)
            Ex:
                let animals = [
                    'cat', 'dog', 'elephant', 'bee', 'ant'
                ];
                animals.sort();
                console.log(animals); // [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]
    -- Sorting Alphabats (In decesding order)
            Ex:
                let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
                animals.sort((a, b) => {
                    if (a > b)
                        return -1;
                    if (a < b)
                        return 1;
                    return 0;
                });
                console.log(animals); //[ 'elephant', 'dog', 'cat', 'bee', 'ant' ]
    -- an array that contains elements in both uppercase and lowercase elements.
            Ex:
            let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'ant'];
            mixedCaseAnimals.sort(function (a, b) {
                let x = a.toUpperCase(),
                    y = b.toUpperCase();
                return x == y ? 0 : x > y ? 1 : -1; // Short hand method for IF and else statement
            }); //[ 'ant', 'bee', 'Cat', 'dog', 'Elephant' ]
    -- sorting an array of objects by a specified propety;
            Ex:
                let employees = [
                    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
                    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
                    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
                ];
        - sorting by a numberic property
            Ex: sort by salary
                employees.sort(function (x, y) {
                    return x.salary - y.salary;
                });
                console.table(employees); // in table form
            Otupt:   (index)   name      salary     hireDate
                        0	  'David'	75000	 'August 15, 2009'
                        1	  'Ana'	    80000	 'December 12, 2011'
                        2	  'John'	90000	 'July 1, 2010'
        -- Sorting objects by a string property
            Ex:
                employees.sort(function (x, y) {
                    let a = x.name.toUpperCase(),
                        b = y.name.toUpperCase();
                    return a == b ? 0 : a > b ? 1 : -1;
                });
                console.table(employees);
            Output: (index)  name   salary     hireDate
                        0	'Ana'	80000	'December 12, 2011'
                        1	'David'	75000	'August 15, 2009'
                        2	'John'	90000	'July 1, 2010'
        -- Sorting objects by the date property
            Ex:
                employees.sort(function (x, y) {
                    let a = new Date(x.hireDate),
                        b = new Date(y.hireDate);
                    return a - b;
                });
                console.table(employees);
            output:  (index) name   salary    hireDate
                        0	'David'	75000	'August 15, 2009'
                        1	'John'	90000	'July 1, 2010'
                        2	'Ana'	80000	'December 12, 2011'
-- Array indexOf();
        - To find the position of an array use indexOf() method.
        - if index of an element is not found it returns -1;
        - the indexOf() method uses the strict equal to ( === ) operator with the elements in the array
                Syntax:
                    Array.indexOf(searchElement, fromIndex)
        Ex:
            var scores = [10, 20, 30, 10, 40, 20];
            console.log(scores.indexOf(10)); // 0
            console.log(scores.indexOf(30)); // 2
            console.log(scores.indexOf(50)); // -1
            console.log(scores.indexOf(20)); // 1
    - lastIndexOf() method:
            styntax:
                Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
        - if index of an element is not found it returns -1;
        - lastIndexOf() method searches for the element backward, starting at fromIndex.
        Ex:
            var scores = [10, 20, 30, 10, 40, 20];
            console.log(scores.lastIndexOf(10));// 3
            console.log(scores.lastIndexOf(20));// 5
            console.log(scores.lastIndexOf(50));// -1
-- Checking array elements using the loop and using and every() method
        Ex:
            let numbers = [1, 3, 5];
            let numbers = [1, 3, 5];
            let result = true;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] <= 0) {
                    result = false;
                    break;
                }
            }
            console.log(result);// true
    - checking the same above function using every() method
        Syntax:
            arrayObject.every(callback[, thisArg])
        EX:
            let numbers = [1, 3, 5];
            let result = numbers.every(function (e) {
                return e > 0;
            });
            console.log(result); //true
        - using Arrow function:
            Ex:
                let numbers = [1, 3, 5];
                let result = numbers.every( e  => e > 0);
                console.log(result);
            Ex_2:
                let numbers = [1, 3, 5];
                let range = {
                    min: 0,
                    max: 10
                };
                let isInRange = numbers.every(function (e) {
                    return e >= this.min && e <= this.max;
                }, range); // true
    -- Causion At empty Array: when using and every() method.
            Note: If an empty array the every() method always returns true for any condition.
                Ex:
                    let gtZero = [].every(e => e > 0); // any condition
                    let ltZero = [].every(e => e < 0); // any condition
                    console.log('gtZero:', gtZero); // true
                    console.log('ltZero:', ltZero); // true
-- some() method:
        checks the elements if an array at lease meets the specified condition.
        Suntax:
            arrayObject.some(callback[, thisArg]);
                - every call back function takes 3 arguments 
                    Call back function syntax:
                        function callback(currentElement [[, currentIndex], array]){ // ...}
                    1) Current Element;
                    2) Current index;
                    3) The array is array that some() was called upon.
                Ex:
                    let marks = [ 4, 5, 7, 9, 10, 3 ];
                    lessThanFive = marks.some(function(e) {
                        return e < 5;
                    });
                    console.log(lessThanFive); //true
                                or
                Ex_2:
                    let marks = [ 4, 5, 7, 9, 10, 3 ];
                    let lessThanFive = marks.some(e => e < 5);
                    console.log(lessThanFive);//true
                Ex_3:
                    let marks = [4, 5, 7, 9, 10, 2];
                    const range = {
                        min: 8,
                        max: 10
                    };
                    let result = marks.some(function (e) {
                        return e >= this.min && e <= this.max;
                    }, range);
                    console.log(result); // true
    -- Caustion Empty arrays:
            some() method of an empty array the result is always false in any condition.
            Ex:
                let result = [].some(e => e > 0);
                console.log(result); // false
                result = [].some(e => e <= 0);
                console.log(result); // false
-- Filter() method: 
        filter elements of an original array
            Ex:
                let cities = [
                    {name: 'Los Angeles', population: 3792621},
                    {name: 'New York', population: 8175133},
                    {name: 'Chicago', population: 2695598},
                    {name: 'Houston', population: 2099451},
                    {name: 'Philadelphia', population: 1526006}
                ];
        - using filter() method
                let bigCities = cities.filter(function (e) {
                    return e.population > 3000000;
                });
                console.log(bigCities);
        using Arrow function (=>)
                let bigCities = cities.filter(city => city.population > 3000000);
                console.log(bigCities);
            output:
                    [
                        { name: 'Los Angeles', population: 3792621 },
                        { name: 'New York', population: 8175133 }
                    ]
-- Other iterative methods 
        - every()
        - sort()
        - map()
        - forEach()
            Ex:
                cities
                    .filter(city => city.population < 3000000)
                    .sort((c1, c2) => c1.population - c2.population)
                    .map(city => console.log(city.name + ':' + city.population));
            output:
                Philadelphia:1526006
                Houston:2099451
                Chicago:2695598
-- reduce() method:
        - if you want to caluculate the total of elements of the array.
        Syntax:
            array.reduce(reducer [, initialValue])
        Ex:
            let sum = numbers.reduce(function (accumulator, current) {
                return accumulator + current;
            });
            console.log(sum); // 6
-- reductright() method:
        - Reduceright method works as reduce() method but in opposite directiorn(Backward direction).
        Ex:
            let numbers = [1, 2, 3];
            let sum = numbers.reduceRight(function (acc, curr) {
                console.log('acc: ', acc, 'curr:', curr);
                return acc + curr;
            });
            console.log(sum);
            output:
                    acc:  3 curr: 2
                    acc:  5 curr: 1
                    6
-- Array map() method:
        map() method does not change the original array, it creates a new array of all elements that 
              have been transformed by the callback function.
        Syntax:
            arrayObject.map(callback[,contextObject]);
        - map() calls the callback function on every element of an array and returns a new array that contins the result.
        - second one is optional
        Ex:
            let numbers = [16, 25, 36];
            let results = numbers.map(Math.sqrt);
            console.log(results); //  [4, 5, 6]
        Ex_2:
            let circles = [10, 30, 50];
            function circleArea(radius) {
                return Math.floor(Math.PI * radius * radius);
            }
            let areas = circles.map(circleArea);
            console.log(areas); // [314, 2827, 7853]            
    -- using Arrow function
        Ex:
            let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
            console.log(areas);
-- forEach() method:
            - Allows you to run a function on every element.
            - To terminate the loop in the forEach() method, you must throw an exception inside the callback function.
    (Note that the forEach() function returns undefined therefore it is not chainable like other iterative methods: filter(), map(), some(), every(), and sort().)
            
        Syntax:
            Array.forEach(callback [, thisArg]);
        Ex:
            let ranks = ['A', 'B', 'C'];
            ranks.forEach(function (e) {
                console.log(e);
            });
        Output:
                A
                B
                C
-- Array join() method:
        - Allows to concatinate all elements of an array and returns a new string.
        - if the array is empty, the join() method returns an empty string.
        - When the elements of the array are not strings, the join() method converts them to strings before joining.
    Note that the join() method converts undefined, null, and empty array [] to an empty string
            Syntax:
                Array.prototype.join([separator])
        Ex:
            const cssClasses = ['btn', 'btn-primary', 'btn-active'];
            const btnClass = cssClasses.join(' ');
            console.log(btnClass); // btn btn-primary btn-active
    - JavaScript Array join() method to replace all occurrences of a string
        Ex:
            const title = 'JavaScript array join example';
            const url = title.split(' ')
                .join('-')
                .toLowerCase();
                console.log(url); // javascript-array-join-example
-- Multidymentional Array:
        - we can say that a JavaScript multidimensional array is an array of arrays. 
        - The easiest way to define a multidimensional array is to use the array literal notation.
    Note that the (index) column is for the illustration that indicates the indices of the inner array.
    -- Array:
            Ex:
                let activities = [];
    -- Two dimentional Array:
            Ex:
                let activities = [
                    ['Work', 9],
                    ['Eat', 1],
                    ['Commute', 2],
                    ['Play Game', 1],
                    ['Sleep', 7]
                ];
                console.table(activities);
            Output:
                    ┌─────────┬─────────────┬───┐
                    │ (index) │      0      │ 1 │
                    ├─────────┼─────────────┼───┤
                    │    0    │   'Work'    │ 9 │
                    │    1    │    'Eat'    │ 1 │
                    │    2    │  'Commute'  │ 2 │
                    │    3    │ 'Play Game' │ 1 │
                    │    4    │   'Sleep'   │ 7 │
                    └─────────┴─────────────┴───┘
-- Iterating over elements of the JavaScript multidimensional array
    Ex:
                        // loop the outer array
        for (let i = 0; i < activities.length; i++) {
            // get the size of the inner array
            var innerArrayLength = activities[i].length;
            // loop the inner array
            for (let j = 0; j < innerArrayLength; j++) {
                console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
            }
        };
    output:
            [0,0] = Work
            [0,1] = 9
            [1,0] = Eat
            [1,1] = 1
            [2,0] = Commute
            [2,1] = 2
            [3,0] = Play Game
            [3,1] = 1
            [4,0] = Sleep
            [4,1] = 7
            [5,0] = Study
            [5,1] = 2
            
--------------------------------------------------------- Array function -----------------------------------------------
-- To declare a function, you use the function keyword.
-- A function can accept zero, one, or multiple parameters.
-- If there are multiple parameters, you need to separate them by commas (,).
        Ex: 
            function say(message) { // the body of the function is say()
                // message is an argument.
                console.log(message); // output a message to the console
            }
        Ex_2:
            function add(a, b) {
                return a + b;
            }
            let sum = add;
            function average(a, b, fn) {
                return fn(a, b) / 2;
            }
            let result = average(10, 20, sum);
            console.log(result); // 15  
    - Passing a function to another function
        Ex:
            function add(a, b) {
                return a + b;
            }
            let sum = add;
            function average(a, b, fn) {
                return fn(a, b) / 2;
            }
            let result = average(10, 20, sum);
            console.log(result); // 15
    - anonymus Function:
        - A Function without a name is called anonymus function.
        - An Anonymus function is often not accessible afer its initial creation.
        Ex:
            let show = function () { // no name to call the function between the function and paranthasis - ()
                console.log('Anonymous function');
            };
            show();
    - anonymus functions as arguments of other functions
    Note that functions are the first-class citizens in JavaScript, so you can pass a function to another as an argument.        
            Ex:
                setTimeout(function () {
                    console.log('Execute later after 1 second')
                }, 1000);
    - Immediately invoked function execution (IIFE)
        - If you want to create a function and execute it immediately after declaration, you can use the anonymous function.
        - JS add the IIFE functions to the global functions.
                Ex:
                    let person = {
                        firstName: 'John',
                        lastName: 'Doe'
                    };
                    (function () {
                        console.log(`${person.firstName} ${person.lastName}`);
                    })(person);
        - using Arrow Function:
                    Ex:
                    - Normal function:
                        let add = function (a, b) {
                            return a + b;
                        };
                    
                    - Arrow function:
                        let add = (a, b)  => a + b;   

------------------------------------------- JS Objects ------------------------------------------------------------------
-- Object is an unordered key value paires.
-- Each key value pair  is called as property.
            Ex:
                let person = {
                (key)firstName: 'John', (value) // if more propeties we can 
				                                //denoted with comma(,) saparated
                    lastName: 'Doe'
                };
-- The key of the properties can be string.
-- The value of the property can be any valid JS value 
            Ex: a String, a Number or a function.
-- object literal
            Ex:
                let empty = {};
-- Accessing Propeties:
    1) The dot(.) notations: To access the firstName of the Person propetry 
                Ex:
                    let person = {
                        firstName: 'John',
                        lastName: 'Doe'
                    };
                    console.log(person.firstName); // John
                    console.log(person.lastName); // Doe
    2)  Array like notation: to access the values of object properties.
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe'
                        };
                        console.log(person['firstName']); // John
                        console.log(person['lastName']); // Doe
    (Note: 1) If property name contains a space - Put it with the Quotations,
           2) To access that space properties,we must call them with array like notation.)
                        Ex:
                            let person = {
                                'first Name' = 'John' // if Quotations are not mentioned system will throw an erro undefined
                            }
                            console.log(person.'first Name'); // Throws an error (Error: Unexpected string)
                            console.log(person['first Name']);
-- Modifying the value of a property:
        - Changing the value of the propety.
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe'
                        };
                        person.firstName = 'Jane';
                        console.log(person); // { firstName: 'Jane', lastName: 'Doe' }
        -  Adding a new propety to an object.
                    Ex:
                        person.age = 25;
                        console.log(person); // {firstName: 'Jane', lastName: 'Doe', 
												//age: 25}
        - Deleting a propety of an object.
                    Syntax:
                        delete objectName.propertyName;
                    Ex:
                        delete person.age;
                        console.log(person); // {firstName: 'Jane', lastName: 'Doe'}
        - Checking the property exits.
                    Syntax:
                        propertyName in objectName
                    Ex:
                        console.log('firstName' in person); // true
                        console.log('age' in person) // false
        - iterating over properties of an objects using for.. in loop
            - To iterate over all properties of an object without knowing property names,
				you use the for...in loop:
                    Ex:
                        let website = {
                            title: 'JavaScript Tutorial',
                            url: 'https://www.javascripttutorial.net',
                            tags: ['es6', 'javascript', 'node.js', 'reactjs', 'react native']
                        };
                        
                        for (const key in website) {
                            console.log(key);
                        }
                    output:
                            'title'
                            'url'
                            'tags'
        - Methods:
                - Besides Data the objects can hold the actions like functions.
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe'
                        };
                        
                        person.greet = function () {
                            console.log('Hello!');
                        }
                        person.greet(); // Hello!
                - in Short hand:
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe',
                            greet: function () {
                                console.log('Hello, World!');
                            }
                        };
                - After introduction of Es6 even further shortern the code
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe',
                            greet() {
                                console.log('Hello, World!');
                            }
                        };
                        person.greet(); // Hello, World
        - This value:
                - Methods need to access data stored in the object 
                        like person objects concatinating firstName and lastName
                    Ex:
                        let person = {
                            firstName: 'John',
                            lastName: 'Doe',
                            greet: function () {
                                console.log('Hello, World!');
                            },
                            getFullName: function () {
                                return this.firstName + ' ' + this.lastName;
                            }
                        };
                        console.log(person.getFullName()); // 'John Doe'
-- Object Propeties: // The attribues are surrounded by the two pair of sqare brakets 
					//Ex: [[Enumarable]].
        - There are two types of object properties: 
                    a) data properties 
                    b) accessor properties.
            a) Data Propeties:
                    A Data propty contains a single location for a data value. 
				    A data property has four attributes.
                        1) [[Configarable]] - configarable is false, user can not delete the property.
                        2) [[Enumarable]] - stops using the for-loop iteration for that property.
                        3) [[Writable]] - unable to change the vale of a specified property.
                        4) [[Value]] - Contains the actual value of a property.
                (Note: [[Value]] - attribute is undefined and the remaining above attributes 
				       default are set to true).
                -  To change any attribute of a property, use the Object.defineProperties() method.
            Ex:
                'use strict';
                let person = {};
                Object.defineProperty(person, 'ssn', {
                    configurable: false,
                    value: '012-38-9119'
                });
                delete person.ssn; // TypeError: Cannot delete property 'ssn' of #<Object>
    (Note: If you use the Object.defineProperty() method to change any attribute 
	       other than the writable, you’ll get an error.)
            - Configarable example 
            Ex: 
                'use strict';
                let person = {};
                Object.defineProperty(person, 'ssn', {
                    configurable: false,
                    value: '012-38-9119'
                });
                Object.defineProperty(person, 'ssn', {
                    configurable: true
                }); // TypeError: Cannot redefine property: ssn
            - Enumarable example:
            Ex:
                let person = {};
                person.age = 25;
                person.ssn = '012-38-9119';
                Object.defineProperty(person, 'ssn', {
                    enumerable: false
                });
                for (let prop in person) {
                    console.log(prop);
                } // age
        b) Accesor Properties:
                Similar like data properties accesor properties also have 
				[[Configarable]] and [[Enumarable]] attributes.
            But the accesor properties have [[Get]] and [[Set]] attributes 
			    insted of [[Value]] and [[Writable]]
            Ex:
                let person = {
                    firstName: 'John',
                    lastName: 'Doe'
                }
                Object.defineProperty(person, 'fullName', {
                    get: function () { // if we call the [[Get]] function it automatically 
										//calls the [[Set]] function.
                        return this.firstName + ' ' + this.lastName;
                    },
                    set: function (value) {
                        let parts = value.split(' ');
                        if (parts.length == 2) {
                            this.firstName = parts[0];
                            this.lastName = parts[1];
                        } else {
                            throw 'Invalid name format';
                        }
                    }
                });
                console.log(person.fullName);
        --  Defining multiple properties to Object.defineProperties():
        Ex:
            var product = {};
            Object.defineProperties(product, {
                name: {
                    value: 'Smartphone'
                },
                price: {
                    value: 799
                },
                tax: {
                    value: 0.1
                },
                netPrice: {
                    get: function () {
                        return this.price * (1 + this.tax);
                    }
                }
            });
            console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
            // The net price of a Smartphone is 878.90 USD
-- Cheking the Object properties description:
        -  To check the property attributes;
        Ex:
            let person = {
                firstName: 'John',
                lastName: 'Doe'
            };
            let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
            console.log(descriptor);
        Output:
            { value: 'John',
            writable: true,
            enumerable: true,
            configurable: true }
-- JS Construction functions:
        - Technically speaking, a constructor function is a regular function
                - The name of a constructor function starts with a capital letter Ex: Person, Documents
        - To create a new instance of the Person use the new operator;
                Ex:
                    let person = new Person('John','Doe');
        - Basically the new operator does
            - Create a new empty object and assign it to this;
            - Assign the arguments 'John' and 'Doe' to the firstName and lastName properties
            - Returns the this value
                Ex:
                    function Person(firstName, lastName) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                    
                        this.getFullName = function () {
                            return this.firstName + " " + this.lastName;
                        };
                    }
                    let person = new Person("John", "Doe");
                    console.log(person.getFullName()); // John Doe
-- JS prototype:
    The Object.prototype also has an important property called constructor that references the Object() function
    - Behind teh scens the JavaScript creates a new function Person() and an anonymus object;
    - in adition JS links person.prototype objecet to the object.prototype object via [[prototype]]
    - If call method does not exit on the person.protoype and the JS will follow the prototype chain and throws and error
       if not find the method.
    - if find the method in the current prototype.. the JS executes it immediately without looking it UP in the prototype chain.
-- in ES6 introduced the class key thet makes the constructor/ prototype pattern easier way.
        -- Before ES6 Prototype
                    Ex:
                        function Person(firstName, lastName) {
                            this.firstName = firstName;
                            this.lastName = lastName;
                        }
                        
                        Person.prototype.getFullName = function () {
                            return this.firstName + " " + this.lastName;
                        };
                        
                        let p1 = new Person("John", "Doe");
                        console.log(p1.getFullName());
                        
                        let p2 = new Person("Jane", "Doe");
                        console.log(p2.getFullName());                    
        -- After ES6 Class key same simplified the same code:
                    Ex:
                        class Person { // class key is the initializer for to the constructor method
                            constructor(firstName, lastName) {
                                this.firstName = firstName;
                                this.lastName = lastName;
                            }
                            getFullName() {
                                return this.firstName + " " + this.lastName;
                            }
                        }                    
-- The JS function are objects which are instances of the function type.
        - The function type has two methods Call() and apply(). These methods allows to set the this vlaue when calling a function
    Ex:
        function getBrand(prefix) {
            console.log(prefix + this.brand);
        }
        let honda = {
            brand: 'Honda'
        };
        let audi = {
            brand: 'Audi'
        };
        getBrand.call(honda, "It's a "); // It's a Honda
        getBrand.call(audi, "It's an "); // It's an Audi
    - The apply() method is similar to the call() method 
        Ex:
            getBrand.apply(honda, ["It's a "]); // "It's a Honda"
            getBrand.apply(audi, ["It's an "]); // "It's a Audi"
    - using arrow function will creates an issues so don't recommend to use the arrow function.
-- Factory function:
    - A factory function returns a new object
        Ex:
            let john = {
                firstName: 'John',
                lastName: 'Doe',
                getFullName() {
                    return this.firstName + ' ' + this.lastName;
                }
            };
            console.log(john.getFullName()); // John Doe    
-- JS For in loop:
            allows you to access each property and value of an object without knowing the specific name of the property.
                Ex:
                    var person = {
                        firstName: 'John',
                        lastName: 'Doe',
                        ssn: '299-24-2351'
                    };
                    
                    for(var prop in person) {
                        console.log(prop + ':' + person[prop]);
                    }
                     Output:
                            firstName:John
                            lastName:Doe
                            ssn:299-24-2351
-- If want to enumarate only the own properties of an object use hasOwnProperty() method.
            Ex:
                for(const prop in circle) {
                    if(circle.hasOwnProperty(prop)) {
                        console.log(prop);
                    }
                } // radius
    - To change the internal enumarable attribute of a property use Object.defineProperty() method.
            Ex:
                const person = {
                    firstName: 'John',
                    lastName: 'Doe'
                };
                person.age = 25;
                Object.defineProperty(person, 'ssn', {
                    enumerable: false,
                    value: '123-456-7890'
                });
                for (const key in person) {
                    console.log(key);
                }
            Output:
                    firstName
                    lastName
                    age
        (Note: Here the above 'SSN' property has set to false, there fore it does not show up in the foor loop)
-- Inharitance:
        -The following creates an object called employee that inherits from the person object
            Ex:
                const employee = Object.create(person, {
                job: {
                    value: 'JS Developer',
                    enumerable: true
                }
                });
            Output:
                    console.log(employee.hasOwnProperty('job')); // => true
                    console.log(employee.hasOwnProperty('firstName')); // => false
                    console.log(employee.hasOwnProperty('lastName')); // => false
                    console.log(employee.hasOwnProperty('ssn')); // => false

IMP:
    Copying Premative values:
        When assign a variable that stores a primative value to another, the value stored in the variable is created and copied into the new variable.
                            Ex:
                                var a = 10;                
                - copying the a vale to b value.
                            Ex:
                                var b = a;
                - Then assign the b value to 20;
                            Ex:
                                b = 20;
                - The primative values are not change
                            Ex:
                                console.log(a); // 10;
                                console.log(b); // 20;
        Where as reference values from one variable to another variable, the value stored in the variable is also copied into the location of the new variable.
                - Declarign a variable.
                    Ex:
                        var x = {name: 'John'};
                - Copying and storing the x value into y value
                    Ex:
                        var y = x;
                - Modifying the value of y;
                    Ex:
                        y.name = 'David';
                - after modifying the y value checking the x value 
                    Ex:
                        console.log(x.name); // 'David'
            (Note: Here the reference values will change whent we change the original copied value it also reflects in parent as well)

--------------------------------------------------------- Advanced Functions -----------------------------------------------------------
-- Passing by value or passing by reference:
        - All function arguments are always passed by value. It means JS copies the values of the passing variables into arguments inside of the function.
        - Any changes to the arguments inside of the functioon does not affect passing variables and outside of the function
                    Ex:
                        function square(x) {
                            x = x * x;
                            return x;
                        }
                        var y = 10;
                        var result = square(y);
                        console.log(y); // 10 -- no change
                        console.log(result); // 100 
            (Note: Here the JS engine copies the y value to x and runs the function and showes the result)
-- Parssing by value of object:
     - Primative values are passed by values
                    Ex:
                        function turnOn(machine) {
                            machine.isOn = true;
                        }
                        var computer = {
                            isOn: false
                        };
                        turnOn(computer);
                        console.log(computer.isOn); // true;
Note -  turnOn function accepts an object machin. The functin sets to true.
        Next declare a variable computer is also asigned to isOn propety, so the computer property is reference to the actual object.
        As a result both, computer and machine variables are refering the same object in the memory
    - To get actual output:
                        Ex:
                            function turnOn(machine) {
                                machine = {
                                    isOn: true
                                };
                            }
                            var computer = {
                                isOn: false
                            };
                            turnOn(computer);
                            console.log(computer.isOn); // false;
Note: However, when we access the isOn property outside of the function, the values is false. 
       It indicates that the original reference did not change even though the argument was changed inside of the function.
-- Returning multiple valus from a function.
        - Returning Multiple values Using an array.
                        Ex:
                            function getNames() {
                                // get names from the database or API
                                let firstName = 'John',
                                    lastName = 'Doe';
                            
                                // return as an array
                                return [firstName, lastName];
                            };
                            console.log(getNames()); //  ['John', 'Doe']
        - we can call teh getName function by assiging as a value.
                        Ex:
                            let names = getNames();
                            console.log(names); //  ['John', 'Doe']
        - we can call the getName function by individual elements also
                        Ex:
                            const firstName = names[0],
                            lastName = names[1];
                            console.log(firstName); // John
    -- ES6 Same calling simplified like below insted of writing multiple codes
                        Ex:
                            const [firstName, lastName] = getNames();
                            console.log(firstName); // John
                            console.log(lastName); // Doe
                            console.log (getNames); // function getNames()
        - Returning multiple values using object.
                        Ex:
                            function getNames() {
                                // get names from the database or API
                                let firstName = 'John',
                                    lastName = 'Doe';
                            
                                // return values
                                return {
                                    firstName,
                                    lastName
                                };
                            }
                Returning objects assiging to variables
                        Ex:
                            let names = getNames();

                            let firstName = names.firstName,
                                lastName = names.lastName;
                                console.log(names);// {firstName: 'John', lastName: 'Doe'}
                                console.log(firstName); // John
                    - To unpack the objects from an object use like below.
                        Ex:
                            let { firstName, lastName } = getNames();
-- Function Type:
        - Since functions are objects, they have properties and methods like other objects
        - Function properties:
            - Each function has two properties (length and prototype)
                    - length property determines the number of named arguments specified in the function declarations.
                    - The prototype propety referes the actual functiton object
                    Ex:
                        function swap(x, y) {
                            let tmp = x;
                            x = y;
                            y = tmp;
                        }
                        console.log(swap.length); // 2 (X , y)
                        console.log(swap.prototype); // Object{}
        - a function can be called as a constructor
                        Ex:
                            function fn() {
                                // ...
                            }
                            let f  = new fn(); // function called as a constructior here
        - In ES6 added an new property called (target.new) that allows you to detect whether a function(fn) is called as
            normal funcion or as a constructor using new operator.
        
        - If a function is called normally ( f()), the new.target will be undefined.
        - if the function is called using the new keyword, the new.target will reference the constructor:
                        Ex:
                            function fn() {
                                console.log(new.target);
                            }
                            fn(); // undefined
                            let f = new fn(); // [Function: fn]
-- function methods ( apply(), call(), bind()):
        - The apply() and call() methods call a function with a given this value and argument.
        - apply(), call() and bind() methods are also called as borrowing functions.
            apply() and call() methods explination using the below example.
                        Ex:
                            let cat = {type: 'Cat', sound: 'Meow'};
                            let dog = {type: 'Dog', sound: 'Woof'};
                            
                            let say = function (greeting) {
                                console.log(greeting);
                                // access current this
                                console.log(this.type + ' says ' + this.sound);
                            };
            - We can call say() function using apply() method
                        Ex:
                            say.apply(cat, ['Hi']); //now 1st argument say.apply method is set to cat and the function set to cat object.
                            // Hi                   // 2nd argument is set in []-Square brakets
                            // Cat says Meow
                        Ex:
                            say.apply(dog,['Hi']);
                            // Hi
                            // Dog says Woof
            - calling the methods by using call() method
                        Ex:
                            say.call(cat,'Hi');
                            // Hi
                            // Cat says Meow
                            say.call(dog,'Hi');
                            // Hi
                            // Dog says Woof
        - bind() method:
                - creates a new function instance whose this value is bound to the object that you provide.
                        Ex:
                            let car = {
                                speed: 5,
                                start: function() {
                                    console.log('Start with ' + this.speed + ' km/h');
                                }
                            };
                - Defining the other object Aircraft;
                        Ex:
                            let aircraft = {
                                speed: 10,
                                fly: function() {
                                    console.log('Flying');
                                }
                            };
            (Note: Aircraft has no start method, here we can bind the start method of a car)
                        Ex:
                            let taxiing = car.start.bind(aircraft);
                            taxiing(); // Start with 10 km/h
            Note: the aircraft object borrows the start() method of the car object via the bind(), call() or apply() method.
-- Call() method:
                    Ex:
                        const car = {
                            name: 'car',
                            start: function() { 
                                console.log('Start the ' + this.name);
                            },
                            speedup: function() {
                                console.log('Speed up the ' + this.name)
                            },
                            stop: function() {
                                console.log('Stop the ' + this.name);
                            }
                        };
                        
                        const aircraft = {
                            name: 'aircraft',
                            fly: function(){
                                console.log('Fly');
                            }
                        };
                        car.start.call(aircraft); // Start the aircraft
-- apply() method:
                Syntax:
                    fn.apply(thisArg, [args]);
                Ex:
                    step-1:
                            const person = {
                                firstName: 'John',
                                lastName: 'Doe'
                            }
                    step-2:
                            function greet(greeting, message) {
                                return `${greeting} ${this.firstName}. ${message}`;
                            }
                    step-3:
                        let result = greet.apply(person, ['Hello', 'How are you?']);
                        console.log(result); // Hello John. How are you?
            - use the call() method, you need to pass the arguments of the greet() function separately as follows:
                Ex: let result = greet.call(person, 'Hello', 'How are you?');
                    console.log(result); // Hello John. How are you?
        - Using the apply() method to append an array to another
                Ex:
                    let arr = [1, 2, 3];
                    let numbers = [4, 5, 6];
                    arr.push.apply(arr, numbers);
                    console.log(arr); //  [1, 2, 3, 4, 5, 6]
-- bind() method:
    - The bind() method returns a new function, when invoked, has its this sets to a specific value.
                sysntax:
                    fn.bind(thisArg[, arg1[, arg2[, ...]]])
            Note: Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. 
                  It just returns a new version of the function whose this sets to thisArg argument.
-- Recursive function:
        - A recursive function calls itself until it doesn't and this technique is called recursion.
                    Ex:
                        function countDown(fromNumber) {
                            console.log(fromNumber);
                        
                            let nextNumber = fromNumber - 1;
                        
                            if (nextNumber > 0) {
                                countDown(nextNumber);
                            }
                        }
                        countDown(3);
                Output:
                        3
                        2
                        1

------------------------------------------------------ Regular Expression -----------------------------------------------------
- Regular expression enclose its pattern in foward-slash(/)
                    Ex:
                        let re = /hi/;
                         OR
                        let re = new RegExp('hi'); // This is regular expression constructor
        Note: Regular expression does not have single or double quotes like strings.
    - The regular expression have many flags
                        Ex:
                            a)  i - ignore flag
                            b)  g - global flag

        a)  The ignore flag or (i) flag:
             - ignores the case when searching
                        Ex:
                            let re = /hi/i;
                            let result = re.test('Hi John');
                            console.log(result); // true
        b)  The global flag (g):
                - Without the global flag, the regular expression checks the 1st occurance only
                - When (g) flag is available it looks all the matches in a string
                - we can use (g) and (i) flags togeather.
                        Ex:
                            let str = "Are you Ok? Yes, I'm OK";
                            let result = str.match(/OK/gi);
                            console.log(result); // ["Ok", "OK"]
                -  we can use the (g) and (i) flags at replacing the strings
                        Ex:
                        let str = "Are you OK? Yes, I'm OK.";
                        let result = str.replace(/OK/g,'fine');
                        console.log(result); // Are you fine? Yes, I'm fine.
-- charater class (charageter set):
        - A Charater class allows you to match all any symboles for the certain charter set.
        1) \d - match a digit or a character from 0 to 9.
        2) \s - match a whitespace symbol such a space, a tab (\t), a newline (\n), etc.
        3) \w w - stands for word character. It matches the ASCII character [A-Za-z0-9_] including Latin alphabets,
                  digits, and the underscore (_)
        - digit charater set (\d):
                        Ex:
                            let phone = '+1-(408)-555-0105';
                            let re = /\d/;
                            console.log(phone.match(re)); // ["1"]
        - When (g)-global flag is also can be added to it
                        Ex:
                            let phone = '+1-(408)-555-0105';
                            let re = /\d/g;
                            console.log(phone.match(re)); // ["1", "4", "0", "8", "5", "5", "5", "0", "1", "0", "5"]
                                    and // for the formet
                                    let phone = '+1-(408)-555-0105';
                            let re = /\d/g;
                            let numbers = phone.match(re);
                            let phoneNo = numbers.join('');
                            console.log(phoneNo); // 14085550105
                    - in shorthand
                        Ex:
                            console.log('+1-(408)-555-0105'.match(/\d/g).join(''));
        - Word charater (\w)
                        Ex:
                            let str = 'O2 is oxygen';
                            let re = /\w\d/g
                            console.log(str.match(re)); // O2 (digit (\d) + word (\w))
                        Ex:
                            let str = 'ES6 Tutorial';
                            let re = /ES\d/g
                            console.log(str.match(re));
-- Inverse classes:
        - \d,\w skipps and opposite to the flags regular flags.  
            1) \D - matches any character except digits e.g., a letter.
            2) \S - matches any character except whitespace e.g., a letter
            3) \W - matches any character except word character e.g., non-Latin letter or space.
            Ex:
                let phone = '+1-(408)-555-0105';
                let re = /\D/g;
                console.log(phone.replace(re,'')); // 14085550105
-- Dot (.) charater class
    - The dot (.) is a special character class that matches any character except a newline:
                        Ex:
                            let re = /E.6/
                            console.log('ES6'.match(re)); // ["ES6", index: 0, input: "ES6", groups: undefined]
-- Anchor:
        - Anchor have special meaning in regular expression. They don't match any charater, insted they match a position before and after charagers.
                1) ^ - The caret anchor matches the beginning of the text.
                2) $ - The dollar anchor matches the end of the text.
                
            1) ^ - The caret anchor matches the beginning of the text.
                Ex:
                    let str = 'JavaScript';
                    console.log(/^J/.test(str)); // true
                Ex_2:
                    let str = 'JavaScript';
                    console.log(/^S/.test(str)); // false
            2) $ - The dollar anchor matches the end of the text.
                        Ex:
                            let str = 'JavaScript';
                            console.log(/t$/.test(str));
                            
        - checks if an input string matches a time format hh:mm like 12:05.
                        Ex:
                            let isValid = /^\d\d:\d\d$/.test('12:05');
                            console.log(isValid); // true
-- Multiline mode of anchors ^ and $: the m flag:
        - Use the m flag to enable the multiline mode that instructs the ^ and $ anchors to match 
            the beginning and end of the text as well as the beginning and end of the line.
                    Ex:
                        let str = `1st line
                                    2nd line
                                    3rd line`;
                        
                        let re = /^\d/gm;
                        let matches = str.match(re);
                        console.log(matches); // ["1", "2", "3"]
-- Sets:
        - The []-square brakets search for any charater in a set.
                        Ex:
                            let str = 'How cats, rats, and bats became Halloween animals';
                            let re = /[cbr]ats/g;
                            let results = str.match(re);
                            console.log(results); // ["cats", "rats", "bats"]
-- Ranges:
        - The []-square brakets can contain charaters ranges. Ex: [a-z] and [0-9] means a digits form 0 to 9.
        - The [a-zA-Z0-9_] is same as \w. The [0-9] is the same as \d.
    - Excluding ranges:
        - To negate a range, you use the excluding range like: [^...].
                    Ex:
                        [^0-9] matches any character except a digit. It is the same as \D.
                                        OR
                        [^aeiou] matches any character except 'a', 'e', 'i', 'o' and 'u'.
- Escaping special characters: using ( \ )
                    Ex:
                        - [\^#$] - its at the begining of astring
                        - [#^$] - its the end of the string
-- The flag u:
        If a set has surrogate pair, you need to add the flag u to the regular expression to make it work correctly:
                        Ex:
                            let result = 'It is 🍎'.match(/[🍎🍅🍓]/);
                            console.log(result); // ["�"]
                - if we use u flag then it behaves like below;
                        Ex:
                            let result = 'It is 🍎'.match(/[🍎🍅🍓]/u);
                            console.log(result); // ["🍎"]
-- Word boundaries (\b):
                    Ex:
                        console.log('Hello, JS!'.match(/\bJS\b/)); // true
                    Ex:
                        console.log('Hello, JSscript!'.match(/\bJS\b/)); // null
            - the regular expression \b\d\d\d\d\b matches a 4-digit number surrounded by characters different from \w:
                        Ex:
                            console.log('ES 2015'.match(/\b\d\d\d\d\b/)); //["2015"]
- Quantity:
        - Extract number
                    Ex:
                        let str = 'ECMAScript 2020';
                        let re = /\d{4}/;
                        let result = str.match(re);
                        console.log(result); // ["2020"]
        - The range {n,m}
                    Ex:
                        let str = 'The official name of ES11 is ES2020';
                        let re = /\d{2,4}/g;
                        let result = str.match(re);
                        console.log(result); // ["11", "2020"]
        - in short hand:
            let numbers = '+1-(408)-555-0105'.match(/\d{1,}/g);
            console.log(numbers); // ["1", "408", "555", "0105"]
        - insted of The quantifier {1,} means one or more which has the shorthand as +. For example, the \d+ searches for numbers
                    Ex:
                        let phone = "+1-(408)-555-0105";
                        let result = phone.match(/\d+/g);
                        console.log(result); // ["1", "408", "555", "0105"]
                    Ex_2:
                            let str = 'Is this color or colour?';
                            let result = str.match(/colou?r/g);
                            console.log(result); // ["color", "colour"]
                    Ex_3:
                        let str = 'JavaScript is not Java';
                        let re = /Java\w*/g
                        let results = str.match(re);
                        console.log(results); // ["JavaScript", "Java"]

                        Quantifier	Description
                            *	  -  Match zero or more times.
                            +	  -  Match one or more times.
                            ?	  - Match zero or one time.
                          { n }	  - Match exactly n times.
                          { n ,}  - Match at least n times.
                        { n , m } - Match from n to m times.
-- Search()function:
            Syntax:
                let index = str.search(regexp);
            Ex:
                let re = /[A-Z]/;
                let str = 'hi There! How are you?';
                let index = str.search(re);
                console.log(index); // 3
            Ex_2:
                let re = /[0-9]/;
                let str = 'Hello, JavaScript!';
                let index = str.search(re);
                console.log(index); // -1
-- match() method:
                syntax:
                    str.match(regexp);
                Ex:
                    let str = "Price: $5-$10";
                    let result = str.match(/\$\d+/g);
                    console.log(result); // ["$5", "$10"]
-- string replace():
                syntax:
                    let newStr = str.replace(substr, newSubstr);
            Note that the replace() method doesn’t change the original string. It returns a new string.
            Ex:
                let str = 'JS will, JS will rock you!';
                let newStr = str.replace(/JS/g,'JavaScript');
                console.log(newStr); // JavaScript will, JavaScript will rock you!
            Ex_2:
                let str = "I like to eat, eat, eat apples and bananas";
                let re = /apples|bananas/gi;
                let newStr = str.replace(re, (match) => { 
                    console.log({match}); 
                    return match.toUpperCase();
                });
                console.log(newStr); //
        output:
                {match: "apples"}
                {match: "bananas"}
                I like to eat, eat, eat APPLES and BANANAS

------------------------------------------------ JS Runtime --------------------------------------------------------------
Execution Context: Please refer the JS page below:
https://www.javascripttutorial.net/javascript-execution-context/
-- Call Stack:
	- Js Engine uses a call stack to manage executin contexts: The Global Execution context and function execution contexts;
	- The call stack works based on the LIFO principle i.e., last-in-first-out.
	- When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
	- Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function, pushes it on top of the Call Stack, and starts executing the function.
	- If a function calls another function, the JavaScript engine creates a new Function Execution Context for the function that is being called and pushes it on top of the call stack.
	- When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing.
	- The script will stop when the call stack is empty.
         Ex:
		 function add(a, b) {
				return a + b;
			}

			function average(a, b) {
				return add(a, b) / 2;
			}

			let x = average(10, 20);
            
            
======================================================= ES6 ============================================================

---------------------------------------------------- Var VS Let ---------------------------------------------------------

--- When you declare a variable using the var keyword, the scope of the variable is either global or local.
    -- When you declare a variable outside of a function, the scope of the variable is global.
    -- when you declare a variable inside a function, teh scope of the variable is local
        - New way of declaring a variable by using let keyword. let keyword is similar to var keyword
        Ex:
            let variable_name;
    - in JS, blocks are denoted by curly braces { } Ex: if..else or for... loops 
        Ex:
        if(condition) {
            // inside a block
         };

        Ex:
            let x = 10;
            if (x == 10) {
                let x = 20;
                console.log(x); // 20:  reference x inside the block
            }
            console.log(x); // 10: reference at the begining of the script
-- JS let and callback function in a for loop
    Ex: (old method of for looping)
        for (var i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i); // Here the scope of the variable is global, so the looping of the varibale become 5
                                // so the i value is returned 5  and printed for 5 times.
            }, 1000);
        }
    output:
            5
            5
            5
            5
            5
    Ex_2: (To fix that we use the below way to handil)
        for (var i = 0; i < 5; i++) {
            (function (j) { // by Creating another scope so that each callback 
                setTimeout(function () {
                    console.log(j);
                }, 1000);
            })(i);
        }
output:
        0
        1
        2
        3
        4
-- in let keyword declares a new variable in each loop iteration.
    Ex:
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, 1000);
        }
    Output:
            0
            1
            2
            3
            4
    -- using arrow function
    Ex:
        for (let i = 0; i < 5; i++) {
            setTimeout(() => console.log(i), 1000);
        }
    output:
            0
            1
            2
            3
            4
Redeclaration: (variable hoisting)
    - The var keyword allows you to refdeclare a variable without any issue.
    Ex:
        var counter = 0;
        var counter;
        console.log(counter); // 0
    - Redeclaring a variable using let keyword will result in an error.
    Ex:
        let counter = 0;
        let counter;
        console.log(counter); // Uncaught SyntaxError: Identifier 'counter' has already been declared
-- Temporal death zone (TDZ);
    - A variable declare by the let keyword has a so - called temporal death zone (TDZ). The TDZ is the time from the start
      of the block until the variable declaration is processed.

    Ex:
        {   // enter new scope, TDZ starts
            let log = function () {
                console.log(message); // messagedeclared later
            };

            // This is the TDZ and accessing log
            // would cause a ReferenceError

            let message= 'Hello'; // TDZ ends
            log(); // called outside TDZ
        }
Note: If you access a variable declare by the let keyword in the TDZ, you will get a ReferenceError as bellow.
Ex:
    { // TDZ starts
        console.log(typeof myVar); // undefined
        console.log(typeof message); // ReferenceError
        let message; // TDZ ends
    }
Notice: that myVar variable is non-existing variable, therefore, its is undefined.

-- JS Const declaration:
    The const keyword crates a read only reference to a value.
    Ex:
        - const CONSTANT_NAME = value;
        - const keyword declares block-scope variable (const variable can not be re-assigned)
        - if we attempt to reassign a variable declaration, you will get TypeError
        Ex:
            const RATE = 0.1;
            RATE = 0.2; // TypeError
                    OR
        Ex_2:
            const person = { age: 20 };
            person.age = 30; // OK
            console.log(person.age); // 30
        (Note: We can change the value of the property but we can not re-assign like below)
        Ex_3:
            person = { age: 40 }; // TypeError
    - If we want to immute the value of a person, we can use freez it by using the object.freez() method
        Ex:
            const person = Object.freeze({age: 20});
            person.age = 30; // TypeError
    (Note: object.freez() method can freeze the property of an object but not the object reference by the property)
    Ex:
        const company = Object.freeze({
            name: 'ABC corp',
            address: {
                street: 'North 1st street',
                city: 'San Jose',
                state: 'CA',
                zipcode: 95134
            }
        });
    Modifying:
        company.address.country = 'USA'; // OK // adding country to the frieezed object reference property 
    (Note: Object reference can not be immutable, we can add new object property to the company.address)
-- JS Const and Array:
        - We can chage the arra's elements by adding(pushing).
        - we cna not reassign the arry to another array.  
        Ex:
            const colors = ['red'];
            colors.push('green');
            console.log(colors); // ["red", "green"]

            colors.pop();
            colors.pop();
            console.log(colors); // []

            colors = []; // TypeError
-- JS const in a for loop:
        - new constructor called for..of that allows you to create a loop iteratabel over iteration objects such as 
            arrays, maps and sets.
            Ex:
                let scores = [75, 80, 95];

                for (let score of scores) {
                    console.log(score);
                }
            output:
                    75
                    80
                    95
        - if we dont want to modify the score we can use const keyword 
        Ex:
            const scores7 = [75, 80, 95];
            for (const score8 of scores7) {
                console.log(score8);
            }
        output:
                75
                80
                95
        - const will not work for the impreative for loop, if we try to use const keyword it will give an TypeError
            Ex:
                for (const i = 0; i < scores.length; i++) { // TypeError
                    console.log(scores[i]);
                }
--- JS Template literal: (Backticks ` `)
        - To wrape a string we use Single Quoations (' ') or double quotations(" ");
        - To sove complex problems you allow you to work with strings safe and clear way to use backticks.
        Ex:
            let simple = `This is a template literal`;
            - A multiline string; a string that can span multilines.
            - String formatting: the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
            - HTML escaping: the ability to transform a string so that it is safe to include in HTML.
    