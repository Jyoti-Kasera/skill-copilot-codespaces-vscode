function calculateNumbers(var1, var2)   {
    var1 = parseInt(var1);
    var2 = parseInt(var2);
    return {
        sum: var1 + var2,
        difference: var1 - var2,
        product: var1 * var2,
        quotient: var1 / var2
    };
}