class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev
    }
}

function convertArray2DoblyList(arr) {
    let head = new Node(arr[0])
    let back = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i])
        back.next = temp;
        temp.prev = back
        back = temp
    }
    return head
}

function insertAtHead(head, value) {
    let newNode = new Node(value, head, null)
    head.prev = newNode
    return newNode;
}

function insertBeforeTail(head, value) {
    if (head.next == null) {
        return insertAtHead(head, value)
    }
    let back = head;
    while (back.next != null) {
        back = back.next
    }

    let prevNode = back.prev
    let newNode = new Node(value, back, prevNode)
    prevNode.next = newNode
    back.prev = newNode
    return head
}

function insertBeforeKthPostion(head, value, k) {
    let count = 1;
    let temp = head;
    while (count != k) {
        if (count == k) {
            break;
        }
        count++;
        temp = temp.next
    }
    let prevNode = temp.prev
    let newNode = new Node(value, temp, prevNode)
    prevNode.next = newNode
    temp.prev = newNode
    return head
}

function removeAllOccrences(head_ref, key) {
        let temp = head_ref;
        let dummy = new Node(0, null, null)
        let prev = dummy
        while (temp) {
            if(temp.data==key)
            {   
                prev.next=temp.next
                if(temp.next)
                {
                    temp.next.prev=prev
                }
                temp=temp.next
            }
            else{
                prev=temp
                temp=temp.next
            }
        
        }
        return dummy.next
}

function printList(h) {
    let temp = h;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}

let h = convertArray2DoblyList([2, 2, 10, 8, 4, 2, 5, 2])
h=removeAllOccrences(h,2)
printList(h)