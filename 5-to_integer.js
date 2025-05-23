const digit = Number(process.argv[2]);
if (isNaN(digit)) {console.log("Not a number");
}	else {console.log(`My number: ${Math.floor(digit)}`);
}
