trigger countChild on Contact (after insert,after update,after delete,after undelete)
{
    set<id>ids = new set<id>();
    if(trigger.isinsert||trigger.isupdate||trigger.isundelete)
    {
        for(contact c:trigger.new)
        {
            if(c.accountid != null)
            {
                ids.add(c.AccountId);
            }
            else if(trigger.newmap.get(c.id).accountid != trigger.oldmap.get(c.id).accountid&&c.AccountId != null)
                {
                    ids.add(trigger.newmap.get(c.id).accountid);
                    ids.add(trigger.oldmap.get(c.id).accountid);
                }
             }
    }
    
    if(trigger.isupdate){
        for(contact c:trigger.new){
            if(c.AccountId !=null){
                ids.add(c.AccountId);
                }
            else if(trigger.newmap.get(c.id).accountid != trigger.oldmap.get(c.id).accountid)
            {
                ids.add(trigger.newmap.get(c.id).accountid);
                ids.add(trigger.oldmap.get(c.id).accountid);
            }
        }
    }
    if(trigger.isdelete){
        for(contact c:trigger.old)
        {
            ids.add(c.AccountId);
        }
    }
        LIST<ACCOUNT>ACCQUERY = NEW LIST<ACCOUNT>();
    LIST<ACCOUNT>ACCUP = NEW LIST<ACCOUNT>(); 
    ACCQUERY =[SELECT NAME,ID,(SELECT NAME,ID,ACCOUNTID FROM CONTACTS) FROM ACCOUNT WHERE ID IN:IDS];
    system.debug(':'+ACCQUERY.size());
    FOR(ACCOUNT A:ACCQUERY)
    {
        A.NumberofLocations__c  = A.CONTACTS.SIZE();
                ACCUP.ADD(A);
                
    }
update accup;
}