import { name as n} from "./script1";
import { student } from "./script1";
import { arr } from "./script1";

// if we want to import everything we can use * and we can use (as) to give a alias name (shortcut name) to the import.
import * as x from "./script1";

// there are two ways you can import default function 
import {default as d} from "./script1";
// import d from "./script1";
console.log(d());

console.log(n);
console.log(student("Ronaldo", 38));
console.log(arr);