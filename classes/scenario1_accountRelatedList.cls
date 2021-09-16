public with sharing class scenario1_accountRelatedList {
    @AuraEnabled(cacheable = true)
    public static List<Account> accReleatedList(string accountName){
        List<Account>accList = new List<Account>();
        system.debug('namecoming'+accountName);
        string query;
        string likeparameter;
        if(accountName != null)
        {
            likeparameter = '%' + accountName +'%';
            query='select name,id,rating,phone from account where name like: likeparameter';
            system.debug('query'+query);
        }
        system.debug('list'+database.query(query));
        return database.query(query);

    }
}