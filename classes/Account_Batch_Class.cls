global class Account_Batch_Class implements database.Batchable<sobject>,database.stateful {
    global integer count;
    global list<id> errids = new list<id>();
    global list<id> sucids = new list<id>();
    global Account_Batch_Class()
    {
        count = 0;
    }
    global database.QueryLocator start(database.BatchableContext bc){ 
        string query ='select name,id,phone,(select name,id,phone from contacts) from account';
        return database.getQueryLocator(query);}
    global void execute(database.BatchableContext bc, list<account>acc){
        //count = acc.size();
        list<account>acconly = new list<account>();
        list<contact>con = new list<contact>();
        for(account a:acc){
            a.phone ='4567890';
            acconly.add(a);
            for(contact c:a.contacts)
            {
                c.phone = a.phone;
                con.add(c);
            }
        }
        list<database.SaveResult> sr = new List<database.SaveResult>();
         sr = database.update(acconly);
         sr = database.update (con);
        for(Integer i=0; i < acc.size(); i++) {
        if(sr.get(i).isSuccess()) {
            System.debug('Records are updated Successfully');
            sucids.add(sr.get(i).Id);
            count = sucids.size();
        } }
    }
    global void finish(database.BatchableContext bc){
        
               Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
	           string header = 'Record Id \n';
	           string finalstr = header ;
               string recordString = sucids +'\n';
               finalstr = finalstr +recordString;
        
        // Set recipients to two contact IDs.
        // Replace IDs with valid record IDs in your org.
        message.toAddresses = new String[] {'c.vikasreddy3@gmail.com' };
        message.optOutPolicy = 'FILTER';
        message.subject = 'Batch ID';
        message.plainTextBody = 'Success Record ids:'+sucids +'count' +count;
        Messaging.SingleEmailMessage[] messages = 
            new List<Messaging.SingleEmailMessage> {message};
                 Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        if (results[0].success) {
            System.debug('The email was sent successfully.');
        } else {
            System.debug('The email failed to send: '
                  + results[0].errors[0].message);
        }
    }
}