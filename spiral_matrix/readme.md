# Spiral Matrix

https://edabit.com/challenge/u2QGaxT455XTmd5xg

In this challenge, transform a string into a spiral contained inside a regular square matrix. To build the matrix, you are given the dimension of its side:

If the side of the matrix is odd, the spiral starting point will be the exact center of the matrix.
If the side of the matrix is even, the spiral starting point will be placed in the lower columns half of the lower rows half.
// "x" represents the matrix center

```javascript
side = 3 (odd)
matrix = [
  [" ", " ", " "],
  [" ", "x", " "],
  [" ", " ", " "]
]

side = 4 (even)
matrix = [
  [" ", " ", " ", " "],
  [" ", "x", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
]
```

The length of the string has to match exactly the number of cells inside the matrix:

If the string length is greater than the number of cells, you have to cut off the unnecessary characters.
If the string length is lower than the number of cells, you have to add a series of "+" to the end of the string until its length match the number of cells.

```javascript
side = 3 (9 cells)
string = "EDABITTEROUS"
// You'll need only "EDABITTER", while "OUS" is discarded.
string = "EDABITTER"

side = 4 (16 cells)
string = "EDABITTEROUS"
// You'll need all the string plus 4 "+" to match the cells.
string = "EDABITTEROUS++++"
```

Starting from the center that you found, you have to fill a regular square matrix side * side placing the characters of the given string str, following a clockwise spiral pattern (first move to the right).

```javascript
side = 3 (odd)
string = "EDABITTEROUS"
matrix = [
  ["T", "E", "R"],
  ["T", "E", "D"],
  ["I", "B", "A"]
]

side = 4 (even)
string = "EDABITTEROUS"
matrix = [
  ["T", "E", "R", "O"],
  ["T", "E", "D", "U"],
  ["I", "B", "A", "S"],
  ["+", "+", "+", "+"],
]
Examples
spiralMatrix(2, "DOG") ➞ [
  ["D", "O"],
  ["+", "G"]
]

spiralMatrix(3, "COPYRIGHTS") ➞ [
  ["G", "H", "T"],
  ["I", "C", "O"],
  ["R", "Y", "P"]
]

spiralMatrix(4, "SUPERLUMBERJACK") ➞ [
  ["U", "M", "B", "E"],
  ["L", "S", "U", "R"],
  ["R", "E", "P", "J"],
  ["+", "K", "C", "A"]
]
```

## Notes
* Remember, the first move from the center is to the right, and then you proceed clockwise and concentrically.
* As given side, you can expect any valid value greater than 1.
