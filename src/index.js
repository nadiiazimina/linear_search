// Task: Implement linear search

function linearSearch(list, item) {
  let index = -1; //return index/ typical base for not found we'll just do negative one
  list.forEach((listItem, i) => {
    if (listItem === item) {
      //check if list item equals our item
      index = i;
    }
  });
  return index;
}

linearSearch([2, 6, 7, 90, 103], 90);

//always gonna return the last index, if there's a duplicate
