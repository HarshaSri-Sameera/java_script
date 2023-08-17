const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) { 
    for(let i=2; num > i; i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime));

// [ 2, 3, 5, 7, 11, 13 ]
