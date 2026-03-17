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

function removeNthNodeFromEnd(head, n) {
    let temp = head;
    let count = 0
    while (temp) {
        count++;
        temp = temp.next
    }
    temp = head;
    let target=count-n;
    if(target==0)
    {
        return temp.next
    }
    while (temp) {
        target--;
        if(target==0)
        {
            break
        }
        temp=temp.next
        
    }
    temp.next=temp.next.next
    return head
}

function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let h = convertArray2List([1,2])
// h = middleofLinkedList(h)
// console.log(pairSum(h))
h = removeNthNodeFromEnd(h, 1)
printList(h)