function frequencyArray(arr) {
    //    let mp=new Map();
    let mp = new Map();
    for (let i of arr) {
        mp.set(i, (mp.get(i) || 0) + 1)
    }

    const sorted=[...mp]
    
    console.log(sorted.sort((a,b)=> a[1]-b[1]))
    
    for(let [key,value] of mp)
    {
        console.log(key,"->",value)
    }
    return mp

}

console.log(frequencyArray([10, 5, 10, 15, 10, 5]))