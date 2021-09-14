const myEach = function(obj, callback) {
  const collection = Object.values(obj)
  
  for(let i = 0; i < collection.length; i++) {
    callback(collection[i]);
  }

  return obj;
}

const myMap = function(object, callback) {
  const collection = Object.values(object);
  const newArray = [];

  for (let i = 0; i < collection.length; i++) {
    newArray.push(callback(collection[i]))
  };

  return newArray;
}

const myReduce = function(collection, callback, acc) {
  const newCollection = Object.values(collection)
 
  if (!acc) {
    acc = newCollection[0]
    for (let i = 1; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    } 
  } else {
    for (let i = 0; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    } 
  }
  return acc;
}

const myFind = function(collection, callback) {
  const newCollection = Object.values(collection);
  let element;
  for (let i = 0; i < newCollection.length; i++) {
    if (callback(newCollection[i])) {
      element = newCollection[i];
      break;
    }
  }
  return element;
}


const myFilter = function(collection, callback) {
  const newCollection = Object.values(collection);
  const arr = [];

  for (let i = 0; i < newCollection.length; i++) {
    if (callback(newCollection[i])) { 
      arr.push(newCollection[i]);
    }
  }
  return arr;
}

const mySize = function(collection, n) {
  const newCollection = Object.values(collection);
  return newCollection.length;
}

const myFirst = function(collection, n) {
  if (n) {
    return collection.slice(0, n);
  } else {
    return collection[0];
  }
}
      
const myLast = function(collection, n) {
  if (n) {
    return collection.slice(-n)
  } else {
    return collection[collection.length-1];
  }
}
      
const myKeys = function(collection) {
  const keys = [];

  for (const k in collection) {
    keys.push(k);
  }

  return keys
}
      
const myValues = function(collection) {
  const values = [];

  for (const k in collection) {
    values.push(collection[k]);
  }

  return values
}

const mySortBy = function(array, callback) {

  const newArray = array.slice();

  if (newArray.every(e => typeof e === 'number')) {
    newArray.sort(function(a,b) {
      return callback(a) - callback(b);
    }) 
  } else {
    newArray.sort();
  }
  
  return newArray;
  // console.log(newArray)
  // console.log(array)
}

const myFlatten = function(array, bool, newArr=[]) {
  
  for (let i = 0; i < nestedArr.length; i++) {
    if (nestedArr[i] instanceof Array) {
      take(nestedArr[i])
    } else {
      newArr.push(nestedArr[i])
    }
  }

  function take(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        take(arr[i])
      } else {
        newArr.push(arr[i])
      }
    }
  }

  return newArr;
}

const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]
console.log(myFlatten(nestedArr))

// function () {
//   for (let i = 0; i < arr.length; i++) {
//     if (nestedArr[i] instanceof Array) {
//       take(nestedArr[i])
//     } else {
//       nums.push(nestedArr[i])
//     }
//   }

// }