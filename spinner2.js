let time = 100;
let array = 
["\r|   ",
'\r/   ',
'\r-   ',
'\r\\   ',
'\r|   ',
'\r/   ',
'\r-   ',
'\r\\   ',
"\r|   "
]
for (let char of array) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 200;
}
