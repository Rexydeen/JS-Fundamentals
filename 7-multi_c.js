const dell = Number(process.argv[2]);
if (isNaN(dell) || process.argv.length<3) {console.log("Missing number of occurrences");
}	else if (dell > 0) {let i=0; while(i<dell) {console.log("C is fun"); i++;}
}
