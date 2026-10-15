var eraseOverlapIntervals = function(intervals) {
    intervals=intervals.sort((a,b)=>a[1]-b[1])
    console.log(intervals)
    let count=0;
    let prevEnd=intervals[0][1]
    for(let i=1;i<intervals.length;i++)
    {
        if(intervals[i][0]<prevEnd)
        {
            count++
        }
        else{
            prevEnd=intervals[i][1]
        }
    }
    return count
};
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))