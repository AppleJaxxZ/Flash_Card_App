const arrayMethods = ["concat()", "constructor", "copyWithin()", "enteries()", "every()", "fill()", "filter()", "find()",
 "findIndex()", "forEach()", "from()", "includes()", "indexOf()", "isArray()", "join()", "keys()", "length", "lastIndexOf()",
  "map()", "pop()", "prototype", "push()", "reduce()", "reduceRight()", "reverse()", "shift()", "slice()", "some()", "sort()",
   "splice()", "toString()", "unshift()", "valueOf()"];

   const stringMethods = ["charAt()", "charCodeAt()", "concat()", "constructor", "endsWith()", "fromCharCode()", "includes()",
    "indexOf()", "lastIndexOf()", "length", "localeCompare()", "match()", "prototyperepeat()", "replace()", "search()", "slice()",
     "split()", "startsWith()", "substr()", "substring()", "toLocaleLowerCase()", "toLocaleUpperCase()", "toLowerCase()",
      "toString()", "toUpperCase()", "trim()", "valueOf()"];





      const nextBtn = document.getElementById('nextBtn');
      const answerBtn = document.getElementById('answerBtn');
      const methodText = document.getElementByClassName('container');
      const answerText = document.getElementByClassName('container_bottom');
      const methodzz = document.getElementById('methodR');
      const info = document.getElementById('info');

      function randomMethod() {
        const info = document.getElementById('info');
        const methodzz = document.getElementById('methodR');
        methodzz.innerHTML = arrayMethods[Math.floor(Math.random() * arrayMethods.length)];
      };


function randomString() {
  const info = document.getElementById('info');
  const methodzz = document.getElementById('methodR');
switch(methodzz.innerHTML){
  case arrayMethods[0]:
      info.innerHTML = 'Joins two or more arrays, and returns a copy of the joined arrays'
      break;
  case arrayMethods[1]:
      info.innerHTML = 'Returns the function that created the Array objects prototype'
      break;
  case arrayMethods[2]:
      info.innerHTML = 'Copies array elements within the array, to and from specified positions'
      break;
  case arrayMethods[3]:
      info.innerHTML = 'Returns a key/value pair Array Iteration Object'
      break;
  case arrayMethods[4]:
      info.innerHTML = 'Checks if every element in an array pass a test'
      break;
  case arrayMethods[5]:
      info.innerHTML = 'Fill the elements in an array with a static value'
      break;
  case arrayMethods[6]:
      info.innerHTML = 'Creates a new array with every element in an array that pass a test'
      break;
  case arrayMethods[7]:
      info.innerHTML = 'Returns the value of the first element in an array that pass a test'
      break;
  case arrayMethods[8]:
      info.innerHTML = 'The findIndex() method returns the index of the first element in an array that pass a test (provided as a function). The findIndex() method executes the function once for each element present in the array:If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values) Otherwise it returns -1. Note: findIndex() does not execute the function for array elements without values. Note: findIndex() does not change the original array.'
      break;
  case arrayMethods[9]:
      info.innerHTML = 'Calls a function for each array element'
      break;
  case arrayMethods[10]:
      info.innerHTML = 'Creates an array from an object with a length property or an iterable object. Example: array.from("String")'
      break;
  case arrayMethods[11]:
      info.innerHTML = 'Check if an array contains the specified element'
      break;
  case arrayMethods[12]:
      info.innerHTML = 'Search the array for an element and returns its position'
      break;
  case arrayMethods[13]:
      info.innerHTML = 'Checks whether an object is an array'
      break;
  case arrayMethods[14]:
      info.innerHTML = 'Joins all elements of an array into a string'
      break;
  case arrayMethods[15]:
      info.innerHTML = 'Returns a Array Iteration Object, containing the keys of the original array'
      break;
  case arrayMethods[16]:
      info.innerHTML = 'The length property sets or returns the number of elements in an array.'
      
      break;
  case arrayMethods[17]:
      info.innerHTML = 'Search the array for an element, starting at the end, and returns its position'
      
      break;
  case arrayMethods[18]:
      info.innerHTML = 'Creates a new array with the result of calling a function for each array element'
      
      break;
  case arrayMethods[19]:
      info.innerHTML = 'Removes the last element of an array, and returns that element'
      
      break;
  case arrayMethods[20]:
      info.innerHTML = 'Allows you to add properties and methods to an Array object'
      
      break;
  case arrayMethods[21]:
      info.innerHTML = 'Adds new elements to the end of an array, and returns the new length'
      
      break;
  case arrayMethods[22]:
      info.innerHTML = 'Reduce the values of an array to a single value (going left-to-right)'
      
      break;
  case arrayMethods[23]:
      info.innerHTML = 'Reduce the values of an array to a single value (going right-to-left)'
      
      break;
  case arrayMethods[24]:
      info.innerHTML = 'Reverses the order of the elements in an array'
      
      break;
  case arrayMethods[25]:
      info.innerHTML = 'Removes the first element of an array, and returns that element'
      'Selects a part of an array, and returns the new array'
      break;
  case arrayMethods[26]:
      info.innerHTML = 'Selects a part of an array, and returns the new array'
      
      break;
  case arrayMethods[27]:
      info.innerHTML = 'Checks if any of the elements in an array pass a test'
      
      break;
  case arrayMethods[28]:
      info.innerHTML = 'Sorts the elements of an array'
      'Adds/Removes elements from an array'
      break;
  case arrayMethods[29]:
      info.innerHTML = 'Adds/Removes elements from an array'
      
      break;
  case arrayMethods[30]:
      info.innerHTML = 'Converts an array to a string, and returns the result'
      
      break;
  case arrayMethods[31]:
      info.innerHTML = 'Adds new elements to the beginning of an array, and returns the new length'
      
      break;

      case arrayMethods[32]:
        info.innerHTML ='Returns the primitive value of an array'
        break;
}
};