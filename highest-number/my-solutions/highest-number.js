export function getHighestNumber(numbers){
    let highestNumber=numbers[0];
    for (const number of numbers){
        if(number>max){
            highestNumber=number;
        }
    }
    return highestNumber;
}