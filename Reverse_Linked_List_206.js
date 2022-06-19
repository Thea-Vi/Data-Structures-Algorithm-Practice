/*Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1*/


var reverseList = function(head){
    let current = head;
    let previous = null;
    let next;

    while(current != null){
        next = current.next;
        current.next = prev;
        previous = current;
        current = next;
    }

    return previous;
}

// T:O(n)
// S:O(1)