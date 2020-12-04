export function filterEvenNumbers(numbers){
    const evenNumbers =[];
    numbers.forEach(element => {
        if(element%2===0){
            evenNumbers.push(element);
        }
    });
    return evenNumbers;
}