# Digital-Raindrop-Displayer

## Problem: Digital Rainfall

### Difficulty: 4/5

### Scenario:
Given logs of digital “rain” drops (timestamp, column), find the maximum number of columns that had a drop at the same timestamp.

### Input:
- **N**: Number of columns
- **M**: Number of drops
- **M lines**: Each line contains a timestamp and a column.

### Output:
- Maximum number of columns with drops at the same moment.

### Sample Input 1:
```
5 6
1 1
1 2
2 2
2 3
2 4
3 5
```

### Sample Output 1:
```
3
```

### Sample Input 2:
```
3 4
1 1
1 2
2 1
2 3
```

### Sample Output 2:
```
2
```

### Solution:
The solution involves processing the input logs to group drops by their timestamps and then determining the maximum number of unique columns that had drops at the same timestamp. The implementation efficiently handles the input data to compute the result.

## Requirements

To run this project, ensure you have the following installed:

- Node.js (v16 or later)
- npm (v7 or later)

### Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.