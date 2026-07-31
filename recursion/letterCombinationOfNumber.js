function helpher(pr,ur,j,result)
{
    if(j==ur.length)
    {
        return result.push(pr)
    }
    let digit=parseInt(ur[j]);
    if(digit==7 || digit==9)
    {
        for(let i=(digit-2)*3;i<(digit-1)*3;i++)
        {
            let ch=String.fromCharCode('a'.charCodeAt(0) + i);
            helpher(pr+ch,ur,j+1,result)
        }
    }
    else{
              for(let i=(digit-2)*3;i<(digit-1)*3;i++)
        {
            let ch=String.fromCharCode('a'.charCodeAt(0) + i);
            helpher(pr+ch,ur,j+1,result)
        }
    }


}
function letterCombination(str)
{
    let result=[]
    helpher([],str,0,result)
    return result
}
console.log(letterCombination(""))