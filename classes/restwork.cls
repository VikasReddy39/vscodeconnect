@Restresource (urlMapping ='/showaccncon/*')

global class restwork
{
/*@httpget
global static list<account> putmet()
{
list<account>res =[select name,id,(select name,id,phone from contacts),phone from account];
return res;
}*/
@httpget
global static list<account> limitedacc()
{
RestRequest req = restcontext.request;
RestResponse res = restcontext.response;
string endurl = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
list<account> res1 = [select name,id,phone from account where name =:endurl];
return res1;
}
@httppost
global static Account createacc(string name, string phone)
{
account a = new account();
a.name = name;
a.phone = phone;
insert a;
return a;
}
    global void testing(){
       
       Statea__c s = new Statea__c();
        s.Country__c = 'a052v00000iUPa2';
        s.Name =' Bihar';
        insert s;
    }
}