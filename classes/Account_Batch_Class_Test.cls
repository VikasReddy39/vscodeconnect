@istest
public class Account_Batch_Class_Test {
    
    public static testmethod void checking()
    {
        
        list<account>acc= new list<account>();
        list<contact>con = new list<contact>();
        for (integer i=0;i<10;i++)
        {            
            account a = new account();
            contact c = new contact();
            a.name = i+'test';
            a.Phone = '9087654387';
            insert a;
            //acc.add(a);             
            c.LastName = a.name;
            c.AccountId = a.id;
            insert c;
            //con.add(c);
         }
  //      insert acc;
//            insert con;
		account a1 = new account();
        a1.Phone = '89076543';
        try{
            insert a1;}
        catch (exception e){}
	                test.startTest();
        Account_Batch_Class btc = new Account_Batch_Class();
        database.executeBatch(btc);
        ErrorBatchFind asd = new ErrorBatchFind();
        database.executeBatch(asd);
        test.stopTest();
        
    }

}