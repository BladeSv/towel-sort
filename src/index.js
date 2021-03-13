
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || !matrix.length) {return [];}
  const comparator=[(a,b)=>a-b,(a,b)=>b-a];
  matrix.forEach((el,index)=>el.sort(comparator[index%2]));
  return matrix.flat();
}
