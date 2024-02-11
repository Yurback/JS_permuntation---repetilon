function permuntation_WO(inputarray) {
    const outputArray = [];

    if (inputarray.length === 1) {
        return [[inputarray[0]]];
    }

    const newArray = permuntation_WO(inputarray.slice(1));
    // most nested call return [['d']]
    console.log(newArray);

    const option = inputarray[0];


    for (const permontation of newArray) {
        for (let i = 0; i <= permontation.length; i++) {
            const firstelement = permontation.slice(0,i);
            const lastelement = permontation.slice(i);
            outputArray.push(firstelement.concat(option).concat(lastelement));
        }
        
    }
    return outputArray;
}


const candidate_chain = ['a','b','c','d','e'];

console.log(permuntation_WO(candidate_chain));