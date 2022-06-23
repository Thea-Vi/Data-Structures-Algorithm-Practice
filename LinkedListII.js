/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

*/

var detectCycle = function(head){
    if (!head.next) return null;

    let fast = head;
    let slow = head;

    let pointer = head;
    let idx = 0; 

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) break;
    }

    if (fast !== slow) return null;

    //when pointer and slow meet at the same node
    while(pointer !== slow){
        pointer = pointer.next;
        slow = slow.next;
        idx++;
    }
    return slow;
}

//T:O(2n)
//S:O(n)