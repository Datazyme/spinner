//spinner1 refractored using .map calls function timeout on each element of array
let spin2 = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\ ', '\r|\n'];
let spinner2 = spin2.map(function (bar, delay) {
  setTimeout(() => {
    process.stdout.write(bar);
  }, (delay * 200) + 100);
});
