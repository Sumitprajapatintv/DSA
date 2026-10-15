var xorQueries = function(arr, queries) {
    let ans=[]
   for(let i=0;i<queries.length;i++)
   {
       let xors=0
       for(let j=queries[i][0];j<=queries[i][1];j++)
       {
          xors=xors^arr[j]
       }
       ans.push(xors)
   }
   return ans
};
console.log(xorQueries([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]]))


