class LL{
// linked list-------------
  Node head;

    class Node{
        String data;
        Node next;

        Node(String Data){
            this.data = Data;
            this.next = null;
        }
    }

    public void addFirst(String data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }
    // addLast element in list

    public void addLast(String data){
        Node newNode = new Node(data);
        Node currNode = head;
        while(currNode.next != null){
            currNode = currNode.next;
        }
        currNode.next = newNode;
         
    }

    public void printList(){
        if(head == null){
            System.err.println("list is empty");
            return;
        }
        Node currentNode = head;
        while (currentNode != null) {
           System.out.print(currentNode.data + "==>");  
           currentNode = currentNode.next;
        }

        System.err.println("null");
    }

    // delete last
    public void deleteLast(){
        Node curNode = head;
        Node secondLast = head;
        while(curNode.next != null){
            secondLast = curNode;
            curNode = curNode.next;
        }
        secondLast.next = null;
        return;
    }

    public void deleteFirst(){
        Node currNode = head;
        head = currNode.next;
    }

    public static void main(String []args){
          LL list = new LL();
          list.addFirst("strong");
          list.addFirst("is");
          list.addLast("men");
          list.addFirst("this");
          list.printList();
          list.deleteFirst();
          list.printList();
    }
}