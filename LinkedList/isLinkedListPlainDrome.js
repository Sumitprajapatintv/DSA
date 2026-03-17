class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
function convertArrayToLinkedList(arr) {
    let head = new Node(arr[0])
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i])
        temp.next = newNode
        temp = temp.next
    }
    return head
}
function printLinkedList(head) {
    console.log("------------")
    let temp = head;
    console.log(temp)
    while (temp) {
        console.log(temp.data)
        temp = temp.next
    }
    return head
}
//Brute Force
function plainDromeLinkedList(head) {
    let tempArr = []
    let temp = head;
    while (temp) {
        tempArr.push(temp.data)
        temp = temp.next
    }
    temp = head;
    while (temp) {
        if (tempArr.pop() !== temp.data) {
            return false
        }
        temp = temp.next
    }
    return true
}

//Optimized Way
function plainDromeLinkedListOptimized(head) {
        if(!head)return false
        if(head.next==null)return true
        let slow=head
        let fast=head
        while(fast && fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }
        let midPoint=reversedLinkedList(slow)
        console.log(midPoint)
        slow=head   
        while(midPoint)
        {
            let isEqual=slow.data==midPoint.data
            reversedLinkedList(midPoint)
            if(!isEqual)return false
            midPoint=midPoint.next
            slow=slow.next
        }   
        reversedLinkedList(midPoint)
        return true
}

function reversedLinkedList(head)
{
   let temp=head
   let prev=null
   while(temp)
   {
        let nextNode=temp.next
        temp.next=prev
        prev=temp
        temp=nextNode
   }
   return prev
}

let head = convertArrayToLinkedList([1,2,2,1])

// head=reversedLinkedList(head) 
console.log(plainDromeLinkedListOptimized(head))
printLinkedList(head)
// head=plainDromeLinkedListOptimized(head)