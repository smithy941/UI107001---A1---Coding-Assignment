// Node represents item in the linked list
class Node
{
    constructor(value)
    {
        // Stores value inside the node
        this.value = value;

        // Pointer to next node (null means no next node yet)
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        // Head is the first node in the list. Null means list is empty
        this.head = null;
    }

    // Adds new value to the end of the list
    insert(value)
    {
        let newNode;
        let current;

        // Create a new node with given value
        newNode = new Node(value);

        // If the list is empty make this the first/head node
        if (this.head === null)
        {
            this.head = newNode;
        }
        else
        {
            // Start from the head
            current = this.head;

            // Move through the list until the last node
            while (current.next !== null)
            {
                current = current.next;
            }

            //Link last node to the new node
            current.next = newNode;
        }
    }

    // Checks if a value exists in the list
    search(value)
    {
        let current;

        // Start at the head
        current = this.head;

        // Go through each node
        while (current !== null)
        {
            // If value matches, return true
            if (current.value === value)
            {
                return true;
            }

            // Move to next node
            current = current.next;
        }

        // If not found, return false
        return false;
    }

    // Removes the first node that matches the value
    delete(value)
    {
        let current;

        // If list is empty nothing to delete
        if (this.head === null)
        {
            return;
        }

        // If the first node is to be deleted, move head to next node to delete.
        if (this.head.value === value)
        {
            this.head = this.head.next;
            return;
        }

        // Start at head
        current = this.head;

        // Look through the list whilst there is a next node
        while (current.next !== null)
        {
            // If next node is to be deleted, link current node to node after next 
            if (current.next.value === value)
            {
                current.next = current.next.next;
                return;
            }

            // Move forward continue searching
            current = current.next;
        }
    }
}

// Export so it can be used in other files
module.exports = LinkedList;