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
function reorderList(head) {
    
};

function printList(head) {
   let temp=head;
   while(temp)
   {
      console.log(temp.data)
      temp=temp.next
   }
    return head
}


let head=convertArray2List([1,2,3,4])
printList(head)
