//Strict Mode – "use strict"
//Strict mode is a way to make JavaScript run in a more strict and safer way.”
//It makes JS safer by catching errors and preventing bad practices.
//How to Enable It
//We enable strict mode by writing "use strict"; at the top of a file or inside a function.
/*It helps to:
avoid mistakes
catch errors early
write clean code*/
//Strict mode makes JavaScript more safe and strict.
//It prevents undeclared variables, removes silent errors, and changes some behaviors like this.”

"use strict";

x = 10; // Error
 //Example (Function)
function test(){
  "use strict";
  y = 20; //  Error
}

"use strict";
x = 10; // ❌ ReferenceError
// Must use let/var/const
//Strict mode makes code safer and cleaner.