#include <stdc++/.h>
class node{
public :
int data;
node* next;
node (int val)
{
    data=val;
    next=NULL;
}
void insert(node* &head,int val)
{
    node* x=new node(int val)
    if(head==NULL){}
    head=x;
    return;}
    node* temp=head;
    while(temp->next!=NULL)
    {
        cout<<temp->data;
        temp=temp->next;
        
    }
}
    void delete(node* head)
    
    {
        node *fre ,*st;
        fre=head;
        while(fre!=NULL)
        {
            st=fre->next;
free(fre);
fre=st;


        }
    }
    void display(node* ptr) {
   
   ptr = head;
   while (ptr != NULL) {
      cout<< ptr->data <<" ";
      ptr = ptr->next;
   } 
}
int main()
{
    

    node head = NULL;
    insert(&head, 1);
    insert(&head, 4);
    insert(&head, 1);
    insert(&head, 12);
    insert(&head, 1);
    cout<<"LENGTH = "<<length(&head)<<"\n";
    cout << "Deleting linked list \n";
    delete(&head);
    printList(head);
    cout << "\nLinked list deleted\n";
    push(&head, 1);
    cout<<"LENGTH = "<<length(&head)<<"\n";
    printList(head);
}
