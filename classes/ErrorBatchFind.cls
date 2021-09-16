global class ErrorBatchFind implements database.Batchable<sObject>,database.stateful {
    
    global set<id> allIds=new set<id>();
    global set<id> allFailedId=new set<id>();
    global set<id> allSuccessId=new set<id>();
    global integer totalSizeRecords=0;
    
    global database.QueryLocator start(database.BatchableContext bc){
        string myQuery='select id,name,rating,phone,type,industry from Account';
        return database.getQueryLocator(myQuery);
    }
    //execute Method
    global void execute(database.BatchableContext bc,list<Account> acc){
        totalSizeRecords+=acc.size();
        for(Account a:acc){
            a.Industry='Education';
            allIds.add(a.id);
        }
        system.debug('====All Ids===' +allIds);
        
        database.SaveResult[] myResult=database.update(acc,false);
        
        for(Integer i=0; i < myResult.size(); i++) {
        if(myResult.get(i).isSuccess()) {
            System.debug('Records are updated Successfully');
            allSuccessId.add(myResult.get(i).Id);
        } 
        else if(!myResult.get(i).isSuccess()) {
            Database.Error errors =  myResult.get(i).getErrors().get(0);
            System.debug('Error Occurs While Processing The Record'+errors.getMessage());
            System.debug('Failure Record Ids While Updating'+myResult.get(i).Id);
            allFailedId.add(myResult.get(i).Id );
        }
    }
    
    }
  //finish Method  
    global void finish(database.BatchableContext bc){
        system.debug('All fails Ids===' +allFailedId);
        system.debug('All success Id---' +allSuccessId);
        system.debug('Total number of records processed' +totalSizeRecords);
        string header = 'Record Id, Name , Created Date, Modified Date \n';
        string finalstr = header ;
       
               string recordString = allsuccessID +'\n';
               finalstr = finalstr +recordString;
        
        Messaging.EmailFileAttachment csvAttc = new Messaging.EmailFileAttachment();
        blob csvBlob = Blob.valueOf(finalstr);
        string csvname= 'Account.csv';
        csvAttc.setFileName(csvname);
        csvAttc.setBody(csvBlob);
        Messaging.SingleEmailMessage email =new Messaging.SingleEmailMessage();
        String[] toAddresses = new list<string> {'c.vikasreddy3@gmail.com'};
        String subject ='Account CSV';
        email.setSubject(subject);
        email.setToAddresses( toAddresses );
        email.setPlainTextBody('Account CSV ');
        email.setFileAttachments(new Messaging.EmailFileAttachment[]{csvAttc});
        Messaging.SendEmailResult [] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email});        
    }
    
}