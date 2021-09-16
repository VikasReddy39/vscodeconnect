public with sharing class class3_mapLwc {
    @AuraEnabled(cacheable = true)
    public static map<id,contact> methodName()
    {
        map<id,contact> mapreturn = new map<id,contact>([select lastname from contact limit5]);
        system.debug('maps'+mapreturn);
        return mapreturn;
    }
    
}