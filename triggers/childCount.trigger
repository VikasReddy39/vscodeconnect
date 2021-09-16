trigger childCount on Contact (after insert,after update,after delete) 
{
 /*    list<contact> conList = new list<contact>();
        list<account> accList = new list<account>();
        set<id>ids = new set<id>();
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
    if(trigger.isafter && trigger.isupdate )
    {
        
        contact conId;
        account accId;
        for(contact a: trigger.new)
        {
            system.debug('accountId'+a.accountId);
            ids.add(a.Accountid);      
            conId = trigger.newMap.get(a.Accountid);
            system.debug('accId'+accId);            
        }               
        }
    conList=[select name,id,accountid from contact where AccountId in: ids];
        system.debug('conList size'+conList.size());
        for(account a: [select name,id,NumberOfEmployees from account where id in:ids]){
            a.NumberOfEmployees = conList.size();
			accList.add(a);
	update accList;
    }*/
}