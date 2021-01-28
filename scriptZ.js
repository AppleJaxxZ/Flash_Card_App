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
        const methodzz = document.getElementById('methodR');
        methodzz.innerHTML = arrayMethods[Math.floor(Math.random() * arrayMethods.length)];
      };


function randomString() {
  if (methodzz.innerHTML.value == arrayMethods[0]) {
    info.innerHTML = "Blah blah blah"
  } else {
    info.innerHTML = '';
  }
}
