class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function convertArray2List(arr) {
    let head = new Node(arr[0])
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i])
        temp.next = newNode
        temp = temp.next
    }
    return head
}
function middleofLinkedList(head) {
        let count = 0;
        let temp = head;
        while (temp) {
            count++;
            temp = temp.next
        }
        let middle = count % 2 == 0 ? (count / 2) + 1 : Math.ceil(count / 2)
        let temp2=head;
        let ctr=1
        while(ctr!=middle)
        {
            ctr++;
            temp2=temp2.next
        }
        return temp2
}

var pairSum = function(head) {
    let slow=head;
    let fast=head;
    let prev=null;
    while(fast && fast.next)
    {
        fast=fast.next.next
        prev=slow
        slow=slow.next
    }
    let temp1=slow;
    let tempPrev=null
    while(temp1)
    {
        let front=temp1.next;
        temp1.next=tempPrev;
        tempPrev=temp1;
        temp1=front  
    }
    
  return head
  
    // return prev/
    // let temp1=head;
    //  temp=slow
    // let maxSum=0
    // while(temp)
    // {
    //    let sum=temp1.data+temp.data
    //    temp1=temp1.next
    //    temp=temp.next
    //    maxSum=Math.max(sum,maxSum)
    // }
    // return maxSum
};

function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let h = convertArray2List([1,2,3,4,5,6,7,8])
// h = middleofLinkedList(h)
// console.log(pairSum(h))
h=pairSum(h)
printList(h)