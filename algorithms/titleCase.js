const titleCase = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '); 


const test = titleCase('a bond that is strong.');




const lcCapTitle = str => {
    const words = str.toLowerCase().split(' ');     
    for(let i in words) {        
        if(words[i].length > 2) {          
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);            
        } 
    }

    return words.join(' ');
};
const test2 = lcCapTitle("capiTalIze tHe titLe");
const test3 = lcCapTitle("i lOve leetcode");
console.log({ test, test2, test3 });


// "capiTalIze tHe titLe"
// "First leTTeR of EACH Word"
// "i lOve leetcode"