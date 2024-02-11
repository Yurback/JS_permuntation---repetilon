function permuntation_rep(range,length) {
 const arrayOfcombo = [];
 if (length === 1) {
    let returnarray=[];
    for (let i = 0; i<range.length; i++) {
        returnarray.push([range[i]]);
    }
    return returnarray;
 }  
 const midlArray = permuntation_rep(range,length-1);
 // the most nested call return [[1],[2],[3]]
 console.log(midlArray);


 for (const permontation of midlArray) {
    for(const option of range) {
        arrayOfcombo.push(permontation.concat([option]));
    }
 }
 return arrayOfcombo;
}

const cost_range = [1,2,3,4,5,6,7,8,9,0];
const count_cost = 3;
const final_result = permuntation_rep(cost_range,count_cost);

console.log(final_result);
console.info(new Blob([JSON.stringify(final_result)]).size);