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
    let temp2 = head;
    let ctr = 1
    while (ctr != middle) {
        ctr++;
        temp2 = temp2.next
    }
    return temp2
}

var addOneToList = function (head) {
    let temp = reverseLinkedList(head)
    let temp1 = temp;
    let carry = 1;
    while (temp) {
        let addition = temp.data + carry
        temp.data = addition % 10
        carry = Math.floor(addition / 10)
        console.log("Carray", carry)
        if (!temp.next && carry) {
            temp.next = new Node(carry)
            carry = 0
        }
        temp = temp.next
    }
    temp1 = reverseLinkedList(temp1)
    return temp1

};

var addTwoList = function (headA, headB) {

    let dummy = new Node(0)
    let tp = dummy
    let temp1 = (headA)
    let temp2 = (headB)
    let carry = 0
    while (temp1 || temp2) {
        let addition = ((temp1?.data || 0) + (temp2?.data || 0) + carry)
        carry = Math.floor(addition / 10)
        let newNode = new Node(addition % 10)
        tp.next = newNode
        tp = newNode
        if (temp1) temp1 = temp1.next
        if (temp2) temp2 = temp2.next
    }
    if (!temp1 && carry) {
        let newNode = new Node(carry)
        tp.next = newNode
    }
    if (!temp2 && carry) {
        let newNode = new Node(carry)
        tp.next = newNode
    }
    return dummy.next

};

function reverseLinkedList(head) {
    let temp = head;
    let prev = null;
    while (temp) {
        let nextNode = temp.next;
        temp.next = prev
        prev = temp
        temp = nextNode
    }
    return prev
}

function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let headA = convertArray2List([2, 4, 9])
let headB = convertArray2List([5, 6, 4, 9])
// headA = addOneToList(headA)
// headB = addOneToList(headB)
let hb = addTwoList(headA, headB)
printList(hb)
// printList(headA)
// console.log("-----------cls")
// printList(headB)