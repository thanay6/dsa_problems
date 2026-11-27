var myPow = function(x, n) {

    let nev = false;

    if(n<0){
        nev = true;
        n *=-1
    }    
    console.log(nev);
    
    if(nev){
        const power = x**n;
        console.log(power);
        return 1/power;
    }
    return x**n;
};

console.log("6 | Expected: -1 | Actual:", myPow(2, -2));