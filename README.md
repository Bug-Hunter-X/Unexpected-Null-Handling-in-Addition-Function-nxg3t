# JavaScript Bug: Unexpected Null Handling in Addition Function

This repository demonstrates a common bug in JavaScript involving the improper handling of `null` values in a simple addition function.  The `foo` function is intended to add two numbers, but it incorrectly returns `null` if either input is `null`.  This behavior might be unexpected and lead to errors in larger applications.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected implementation that addresses this issue.

**Bug:** The function returns `null` if either input is `null`, which isn't robust error handling and might cause issues in calling code that expects numeric results.  A more appropriate solution would be to either throw an error or return a specific value (e.g., `NaN`) to indicate an invalid input.