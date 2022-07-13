/*Return true if its a palindrome
*/
//helper function 
const reverse = head => {
    let current = head;
    let prev = null;
    let next;

    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

var isPalindrome = function(head){
    let fast = head;
    let slow = head;
    let startPointer = head;
    let len = 0;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        len++;

    }
 
    let mid = reverse(slow);

    while(len) {
        len--;
        if(mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;

}

//T: O(n)
//S: O(1)