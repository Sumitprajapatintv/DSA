var findContentChildren = function(g, s) {
   g=g.sort((a,b)=>a-b)
   s=s.sort((a,b)=>a-b)
   let l=0;
   let r=0;
   while(l<g.length && r<s.length)
   {
    if(s[r]>=g[l])
    {
        l++
    }
        r++;
   }
   return l
};
console.log(findContentChildren([1,2,3],[1,1]))