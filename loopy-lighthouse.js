for (let i = 100; i <= 200; i++) {
  // If the number is a multiple of both 3 and 4
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  // If the number is a multiple of 3
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  // If the number is a multiple of 4
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  }
  console.log(i);
}