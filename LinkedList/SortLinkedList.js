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

//Sort the LinkedList is done in Brute force
function sortLinkedList(head){
    let stack=[];
    let temp=head;
    while(temp)
    {
          stack.push(temp.data)
          temp=temp.next
    }
    let sorted=stack.sort((a,b)=>a-b)
    let i=0
    temp=head;
    while(temp)
    {
        temp.data=sorted[i++]
        temp=temp.next
    }
    return head;
}
function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let h = convertArray2List([4,2,1,3])
// h = middleofLinkedList(h)
// console.log(pairSum(h))
h = sortLinkedList(h, 1)
printList(h)