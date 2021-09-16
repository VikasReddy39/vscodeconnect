trigger trigger_learn on Account (before insert,before update,after update) 
{
    map<id,account> accountOldvaules= new map<id,account>();
    map<id,account> accountNewvaules= new map<id,account>();
    if(trigger.isbefore && trigger.isinsert)
   {
    for (account a:trigger.new)
    {
        system.debug('trigger.new'+trigger.new);
    }
       for(account a:trigger.new)
       {
           list<account>accOldName = [select name, id from account where name =: a.Name];
           if(accOldName.size()>0)
           {
               a.Name.adderror('name already exists');
           }
       }
    }
    if(trigger.isbefore && trigger.isupdate){
        
        for (account a:trigger.new)
    {
        system.debug('trigger.new'+trigger.new);
        system.debug('trigger.newName'+a.Name);
    }
        for (account a:trigger.old)
    {
        system.debug('trigger.old'+trigger.old);
        system.debug('trigger.oldName'+a.Name);
    }
        for (account a:trigger.new)
    {
        system.debug('trigger.newMap'+trigger.newMap);
        system.debug('trigger.newOld'+trigger.oldMap);
        system.debug('trigger.newName'+a.Name);
    }
        for (account a:trigger.old)
    {
        system.debug('trigger.newMapOld'+trigger.newMap);
        system.debug('trigger.newOldOld'+trigger.oldMap);
        system.debug('trigger.newName'+a.Name);        
    }
        accountOldvaules = trigger.oldMap;
        for(account a: trigger.new)
        {
            account oldname =  trigger.oldMap.get(a.id);
            if(a.Name == oldname.Name)
            {
                system.debug('same name');
            }
            account newName = trigger.newMap.get(a.id);
            string nameinserting = a.Name;
            list<account> accReject = [select name,id from account where name =: newName.Name];
            if(oldName.Name != newName.Name ){
            if(accReject.size()>0)
            {
             a.Name.adderror('already name exists')   ;
            }}
        }
    }
    
    

}