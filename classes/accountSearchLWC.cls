public with sharing class accountSearchLWC {
    @AuraEnabled(cacheable = true)
    public static list<account> searchAcc(string accountName){
        list<account> accList= new list<account>();
        system.debug('geeting name'+accountName);
        string similarName = '%' +accountName +'%' ;
        string query;
        if(accountName !=null)
        {
            query = 'select name,id,phone from account where name like :similarName ';
            system.debug('query like'+query);
        }
        system.debug('queries'+database.query(query));
        return database.query(query);        
        
    }
    
}