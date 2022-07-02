

/*
There are n buildings in line. You are given an integer array heights of size n
that represents the heights of the building in the line.

The ocean is to the right of the buildings. A building has an ocean view if the bulding can see the ocean
withput obstructions. Formally, a bulding has an ocean view if all the buildings to its rigt
have a smaller height.

Reutrn a list of indices(O-indexed) of buldings that have an ocean view,
soreted increasing order.

Input: heights = [4,2,3,1]
Output: [0,2,3]
Explanation: Bulding 1 (0-indexed) does not have an ocean view because bulding 2 is taller.

*/

var findBuldings = function(heights) {
    //starts at the end of the building
    const start = heights.length - 1;
    const result = [start];

    for (let i = heights.length - 2; i >= 0; i--) {
        let curBuilding = heights[i];
        let lastBuilding = heights[result[result.length -1]];

        // if the current is greater than the last, push i to result then reverse the result
        if (curBuilding > lastBuilding){
            result.push(i);
        }
    }
    return result.reverse(); 
}

//T: O(n)
//S: O(n)