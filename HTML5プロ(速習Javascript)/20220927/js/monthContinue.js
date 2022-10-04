var c = 0;

for(var month = 1;month <= 12;month++){

    if(month >= 6 && month <= 8) continue;

    c++;
}

console.log(c);