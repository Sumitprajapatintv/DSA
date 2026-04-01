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

function removeAllOccurences(head_ref, value) {
    let curr = head_ref
    while (curr) {
        if (curr.data == value) {
            let nextNode = curr.next
            let prevNode = curr.prev
            if (!prevNode) {
                head_ref = nextNode
                if (head_ref) head_ref.prev = null
            }
            else {
                prevNode.next = nextNode
                if (nextNode) nextNode.prev = prevNode
            }
        }
        curr = curr.next
    }
    return head_ref;
}

function findPairWithGivenSum(head, k) {
    let ans = []
    let temp = head;
    let tail = temp
    while (tail.next != null) {
        tail = tail.next
    }
    let left = head
    let right = tail
    while (left !== right && right.next != left) {
        let sum = left.data + right.data
        if (sum == k) {
            if (!ans.includes([right.data, left.data])) {
                ans.push([left.data, right.data])
                left = left.next
                right = right.prev
            }
        }
        else if (sum < k) {
            left = left.next
        }
        else {
            right = right.prev
        }
    }
    return ans
}

function removeDuplicateWithSortedLinkedList(head, k) {
    let mp=new Map()
    if(head.next==null)return head
    let temp = head;
    let t=head;
    while(temp)
    {
        if(mp.has(temp.data))
        {
            let nextNode=temp.next
            let prevNode=temp.prev
            if(prevNode)prevNode.next=nextNode
            if(nextNode)nextNode.prev=prevNode
        }
        else{
            mp.set(temp.data,1)
        }
        temp=temp.next
    }
    return t
}

function printList(h) {
    let temp = h;
    while (temp) {
        console.log(temp.data);
        temp = temp.next
    }
}

let h = convertArray2DoblyList([1, 1, 3, 3, 4, 5])
h=removeDuplicateWithSortedLinkedList(h)
printList(h)