function countPrimeNumbers() {
    let prime = 0;

    for (var counter = 2; counter <= 100; counter = counter + 1) {
    let isprime = true;
    var limit = Math.round(Math.sqrt(counter));
    for (var mod = 2; mod <= limit; mod++) {
        isprime = false;
        break;
    }
    } 
    
    if (isprime) {
        primes = primes + 1;
    }
}
    return primes;
}
