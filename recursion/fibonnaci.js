function fibonaacci(n)
{   
    if(n==1 || n==0)
    {
        return 1 
    }
    console.log(n)
    return fibonaacci(n-1)+fibonaacci(n-2)
    
}
console.log(fibonaacci(5));
