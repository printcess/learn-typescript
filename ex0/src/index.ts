var score: number = 21;
function gradecal(x: number): string {
    if (x >= 80) {
        return ("grade 4");
    }   else if (x < 80 && x >= 75) {
        return ("grede 3.5"); 
    }   else if (x < 75 && x >= 70) {
        return ("grede 3"); 
    }   else {
        return ("grede 1"); 
    }
}
var result: string = gradecal(score)
console.log(result)