const x = parseInt(prompt('Please Enter value of X: '))
const y = parseInt(prompt('Please Enter value of Y: '))

try {
    let ans;

    if (y === 0) {
        throw new Error('Zero Division Error')    
    }

    ans = x / y;

    console.log(ans);
} catch (error) {
    console.log(error);
} finally {
    console.log('End of Program');
}