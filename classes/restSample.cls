@RestResource(urlMapping='/sample/getAccount/')
global class restSample {
    @httpGet    
    global static list<account> getAcc(){
        ///services/apexrest/sample/getAccount/?name=Vikky&phone=996677 --- mutl parameter
        ///services/apexrest/sample/getAccount/?name=Vikky --- single parameter
        account a = new account();
        map<string,string> mapURL = RestContext.request.params;
        string acName = mapURL.get('name');
        string acphone = mapURL.get('phone');
        string accName = '%'+ acName +'%';
        string accPhone = '%'+ acphone +'%';
        system.debug('a'+accName);
        system.debug('a'+accPhone);
        string query ='select name,id,phone,rating from account where name like: accName or phone like:accPhone';
        system.debug(query);        
        system.debug(database.query(query));
        return database.query(query);
        /*system.debug('accID'+accId);
        a = [select name,id,phone,rating from account where name =:accId];
        system.debug('a'+a);
        string likeparameter = '%'+accId+'%';
        a =[select name,id,phone,rating from account where name like: accName];
        return a*/   
    }
    @httpPost
    
    global static list<account> putAcc(string name, string phone){ 
        /* RestAPI JSON format
         * {
            "name" : "vikkyAPI",
            "phone" : "9089930"
            
			}*/
        /* RestAPI XML format
         * In headere we need to change the format from JSON to XML
         * <request>
            <name>XML Format</name>
            <phone>9966770303</phone> // <phone> should be same as name of string
            </request>*/
        account a = new account();
        a.Name = name;
        a.Phone = phone;
        list<account> accInsert = new list<account>();
        accInsert.add(a);
        insert accInsert;
        return accInsert;
        
    }
    
    @httpPut
    
    global static list<account> postAcc(string name)
    {
        map<string,string> getName = RestContext.request.params;
        string acName = getName.get('name');
        system.debug('acName'+acName);
        list<account> accget =new list<account>();
        list<account> accUpdate =new list<account>();
        string accName = '%'+ acName +'%';
         accget =[select name,id,phone,rating from account where name like: accName ];
        for(account acc:accget)
        {
            if(acc.Rating == null)
            {
                acc.Rating = 'Cold';
                accUpdate.add(acc);
            }
        }
        update accUpdate;
        return accUpdate;
        
    }

}