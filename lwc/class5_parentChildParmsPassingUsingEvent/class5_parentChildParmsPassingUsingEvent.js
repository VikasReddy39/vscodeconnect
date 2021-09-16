import { LightningElement, track } from 'lwc';
import imperativemethod2 from '@salesforce/apex/class4_paramsSearchLWC.imperativemethod2'
export default class Class5_ParentChildParamsPassing extends LightningElement 
{
    @track contacts;
    @track error;
    @track contactAssign;
    @track selectedcontact;

    searchName(event)
    {        
        this.contactAssign = event.target.value;
    }

    handleClick()
    {
        imperativemethod2
        ({
            names : this.contactAssign
        })
        .then(result =>
            {                
                this.contacts = result;
                console.log(result);            
            })
            .catch(error =>
                {
                    this.error = error;
                    console.log(error);
                });
    }
    handleEventParam(event)
    {
        const recordId = event.detail;
        /*this.selectedcontact = this.contacts.find(contact => contact.Id === recordId);
        // the above expression will check all the contacts that stored in the contacts in 
        // above until unless it find the matching recordid as we gave above
        // contact here is an parameter and contact.id is the id of the contacts that stored on 
        // contacts
*/
        
            for(let i=0;i< this.contacts.length;i++)
            {
                if(contacts[i].Id === recordId)
                {
                    this.selectedcontact = this.contacts[i];
                }
            }
         

    }
}