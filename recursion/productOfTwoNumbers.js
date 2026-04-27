function productOfTwoNumbers(x, y) {
   if(y==0)
   {
     return 0
   }
   if(x<y)
   {
    return productOfTwoNumbers(y,x)
   }
   return x+productOfTwoNumbers(x,y-1)

}
console.log(productOfTwoNumbers(6, 100))