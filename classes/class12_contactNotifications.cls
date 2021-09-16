public with sharing class class12_contactNotifications {
    @AuraEnabled(cacheable = true)
    public static list<contact> releatedContacts(string accrecordId) {
        string query;
        System.debug('accId'+accrecordId);
        if(accrecordId !=null)
        {
            query = 'select name,id,phone,accountid from contact where accountid =:accrecordId ';
            system.debug('query like'+query);
        }
        system.debug('queries'+database.query(query));
        return database.query(query);  
    }
}