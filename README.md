# JavaScript - Handling Undefined Inputs

This repository demonstrates a common JavaScript error: a TypeError thrown when attempting to access a property of an undefined value. The example shows how this error occurs and provides a solution to handle undefined inputs gracefully.

## Bug

The `foo` function in `bug.js` attempts to access the `length` property of the input `x`. If `x` is `undefined`, a TypeError is thrown.

## Solution

The `bugSolution.js` file demonstrates a corrected `foo` function. This version explicitly checks if the input is `undefined` before attempting to access the `length` property, avoiding the error.  Nullish coalescing is also employed for a more concise solution.