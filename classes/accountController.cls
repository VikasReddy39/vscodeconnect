public class accountController {
    
    public list<account> accList;
    public list<account> updaccList;        
    public list<account> accUpdation(){
        updaccList = new list<account>();
        list<contact>conlist= new list<contact>();
        list<contact> updconlist= new list<contact>();
        list<account>acc = [select name,id,phone,(select name,id,phone from contacts) from account where phone != null ];
        integer i=0;
        for(account a: acc){
            a.phone='996677087'+ i;
            updaccList.add(a);
            i++;
            for(contact c:a.contacts){
                if(a.Phone != c.Phone){                                                         
                    system.debug('yes account Id is'+a.id + 'contact '+c.id);
                    c.Phone=a.Phone;
                    system.debug('cphone'+c.phone);
                    conlist.add(c);
                }
            }
        }
        update updaccList;
        update conlist;
        return accList;
    }
}