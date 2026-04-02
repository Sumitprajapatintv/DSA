function findMinAndMax(arr,index) {
    if(index==0)
    {
        return [arr[0],arr[0]]
    }
    let result=findMinAndMax(arr,index-1)

    if(arr[index]<result[0])result[0]=arr[index]
    if(arr[index]>result[1])result[1]=arr[index]
    return result

}
let arr=[1, , 4, 3, -5, -4, 8, 6]
console.log(findMinAndMax(arr,arr.length-1))    