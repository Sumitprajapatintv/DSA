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
function reverseLinkedLists(head, left, right) {
        let dummy=new Node(0)
        dummy.next=head;
        let prevLef=dummy
        let current=head;
        for(let i=0;i<left-1;i++)
        {
            prevLef=prevLef.next
            current=current.next
        }
        let markReverse=current;
        let prev=null
        for(let i=0;i<right-left+1;i++)
        {   
            let nextNode=current.next
            current.next=prev
            prev=current
            current=nextNode
        }
        prevLef.next=prev
        markReverse.next=current
        return dummy.next
}

function printList(head) {
    let temp = head;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}
let h = convertArray2List([1, 2, 3, 4, 5])
h = reverseLinkedLists(h, 2, 4)
printList(h)