trigger NumberofChilds on Contact (after insert,after update,after delete,after undelete)
{
   set<id> ids = new set<id>();
    if(trigger.isinsert||trigger.isundelete||trigger.isupdate)
    {
        for(contact c:trigger.new)
        {
            if(c.accountid !=null)
            {
              ids.add(c.AccountId);  
            }
            else if(trigger.newmap.get(c.accountId) != trigger.oldmap.get(c.accountid) && c.AccountId !=null)
            {
                ids.add(trigger.newmap.get(c.id).accountId);
                ids.add(trigger.oldmap.get(c.id).accountId);
            }
        }
    }
    if(trigger.isdelete)
    {
        for(contact c:trigger.old)
        {
            if(c.AccountId!=null)
            {
                ids.add(c.AccountId);
            }
        }
    }
    if(trigger.isupdate)
    {
        for(contact c:trigger.new)
        {
            if(c.accountid !=null || trigger.newmap.get(c.accountid) != trigger.oldmap.get(c.accountid))
            {
                ids.add(trigger.newmap.get(c.id).accountId);
                ids.add(trigger.oldmap.get(c.id).accountId);
               
            }
        }
    }
    
    list<account> accountQueryList = new list<account>();list<account>accup = new list<account>();
     
        accountQueryList = [select name,id,NumberOfEmployees,(select name,id,accountid from contacts) from account where id in:ids];
   
        for(Account acc:accountQueryList){
            acc.NumberOfEmployees= acc.Contacts.size();
            system.debug('NumberOfEmployees'+acc.Contacts.size());
            accUp.add(acc);
        }

        update accUp;
}