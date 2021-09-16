public with sharing class class4_paramsSearchLWC {
    @AuraEnabled(cacheable = true)
    public static list<Sobject> wiremethod(string name)
    {
        string likeparameter ='%'+name+'%';
        string query ='select lastname,id,phone,email,LeadSource,CleanStatus from contact where lastname Like :likeparameter';
        system.debug(database.query(query));
        return database.query(query);
        
    }
    @AuraEnabled(cacheable = true)
    public static list<Sobject> imperativemethod(string names) {
        system.debug('names');
        string likeparameter = '%'+names+'%';
        string query ='select lastname,id,phone,email,LeadSource,CleanStatus from contact where lastname like: likeparameter';
        system.debug(query);
        system.debug(database.query(query));
        return database.query(query);
        
    }
    @AuraEnabled(cacheable = true)
    public static list<Sobject> imperativemethod2(string names) {
        string likeparameter = '%'+names+'%';
        string query ='select lastname,id,phone,email,LeadSource,CleanStatus from contact where lastname like: likeparameter';
        system.debug(database.query(query));
        return database.query(query);
        
    }
    @AuraEnabled(cacheable = true)
    public static list<Sobject> conbyAccId(string accId)
    {        
        string query ='select lastname,id,phone,email,LeadSource,CleanStatus,AccountId from contact where AccountId =: accId';
        system.debug(database.query(query));
        return database.query(query);
        
    }
    @AuraEnabled(cacheable = true)
    public static list<Sobject> oppbyAccId(string accId)
    {        
        string query ='select name,id,StageName,Probability,Amount from opportunity where AccountId =: accId';
        system.debug(database.query(query));
        return database.query(query);
        
    }
}