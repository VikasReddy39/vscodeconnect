trigger ContactCreator on Account (after insert) {
    
    list<contact> conList = new list<contact>();
    list<opportunity>opps = new list<opportunity>();
    
    for(account a : trigger.new)
    {
        contact c = new contact();
        c.lastname = a.name;
        system.debug('conlastname'+c.lastname);
        c.phone = a.phone;
        system.debug('conlastname'+c.phone);
        c.AccountId = a.id;
        system.debug('AccId'+c.AccountId);
        c.email = 'c.'+a.name+'@gmail.com';
        conList.add(c);
        system.debug('con'+conList);
        opportunity o = new opportunity();
        o.name = a.name;
        o.AccountId = a.id;
        o.StageName='Prospecting';
        decimal amount =1000;
        o.Amount= amount ;
        o.CloseDate = system.today()+90;
        o.Probability = 10;
        opps.add(o);
        system.debug('opp'+opps);        
    }
    insert conList;
    insert opps;
   system.debug('AfterInsert'+conList);

}