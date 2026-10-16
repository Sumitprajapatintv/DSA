var maximumUnits = function(boxTypes, truckSize) {
      boxTypes=boxTypes.sort((a,b)=>b[1]-a[1])
      console.log(boxTypes)
      let result=0
      boxSize=0
    for(let i=0;i<boxTypes.length;i++)
    {
        if(boxSize>=truckSize)
        {
            return result
        }

        if((boxSize+boxTypes[i][0])<=truckSize)
        {
            result=result+(boxTypes[i][0]*boxTypes[i][1])
            boxSize=boxSize+boxTypes[i][0]
        }
        else{
            let remaingBox=truckSize-boxSize;
            result=result+(remaingBox*boxTypes[i][1]) 
            boxSize=boxSize+remaingBox
        }
    }
    return result
};
console.log(maximumUnits([[1,3],[2,2],[3,1]],4))