// Definition of a ListNode class representing a node in a linked list
class ListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to reverse a linked list in-place
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let nextNode = null;

// Traverse the list and reverse the links between nodes
    while (current !== null) {
        nextNode = current.next; //save the next node
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;    //prev is now the ew head of the reversed node
}  

  
//   // Example usage:
//   // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
//   const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
//  console.log("Original Linked List:");
//   console.log(JSON.stringify(linkedList, null, 2));
  
//   // Reverse the linked list
//   const reversedList = reverseLinkedList(linkedList);
  
//   console.log("\nReversed Linked List:");
//   console.log(JSON.stringify(reversedList, null, 2));
  
