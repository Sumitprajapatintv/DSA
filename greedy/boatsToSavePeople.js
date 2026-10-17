function numRescueBoats(people, limit) {
  people = people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let count = 0;
  while (i <= j) {
    let bothSum=people[i]+people[j]
    if(bothSum<=limit)
    {
        i++;
    }
    j--
    count++
  }
    return count
}

console.log(numRescueBoats([5, 1, 7, 4, 2, 4], 7));
