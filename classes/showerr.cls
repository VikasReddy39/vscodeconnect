@restresource(URLmapping='/showerr/*')
global class showerr
{
@httpget
global static list<city__c> sendk()
{
restrequest req= restcontext.request;
restresponse res = restcontext.response;
string name = req.requestURI.substring(req.requestURI.lastindexof('/')+1);
list<city__c> ciyh = [select name,id from city__c where name =:name];
if(ciyh.size()>0){
return ciyh;}
else { return null;}
}
}