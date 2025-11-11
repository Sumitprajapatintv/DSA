function printname(n){
    if(n==0)
    {
        return 1;
    }
    console.log("Sumit")
    n--;
    printname(n)
}


printname(3)
