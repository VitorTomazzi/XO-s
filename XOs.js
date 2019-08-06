function XO(str) {
  //code here
  // must make all letters lowercase before checking
  const newXO = str.toLowerCase();
  // check how many x's
  const xs = newXO.split('x').length-1;
  // check how many o's
  const os = newXO.split('o').length-1;
  // compare the numbers
  return xs === os ? true : false;
}