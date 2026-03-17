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

function segregateEvenOdd(head) {
    if (!head) return head
    if (!head.next) return head
    let evenHead = null
    let evenTail=null
    let oddHead = null
    let oddTail=null
    let current = head;
    while (current) {
        if (current.data % 2 == 0) {
            if (!evenHead) evenHead = evenTail=current
            else {
                evenTail.next = current
                evenTail = current
            }
        }
        else {
            if (!oddHead) {
                oddHead=oddTail=current
            }
            else {
                oddTail.next = current
                oddTail = current
            }

        }
        current = current.next
    }
    evenTail.next = oddHead
    oddTail.next=null
    return evenHead

}

function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let h = convertArray2List([1, 2, 3, 4, 5, 6, 7, 8])
// h = middleofLinkedList(h)
// console.log(pairSum(h))
h = segregateEvenOdd(h)
console.log("ehaale",h.next.next.next.next.next.next.next)
printList(h)