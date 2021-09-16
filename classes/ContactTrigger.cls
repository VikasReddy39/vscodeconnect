public class ContactTrigger
{
    public static void countchild(list<contact>con)
    {
        list<id> ids = new list<id>();
        list<account> acc = [select name,id,(select name,id from contacts) from account ];
        if(acc.size()>0)
        {
            for(account a : acc){
                ids.add(a.id);
            }
        }
    }

}