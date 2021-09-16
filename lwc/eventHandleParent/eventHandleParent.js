import { LightningElement,api,track } from 'lwc';
import searchAcc from '@salesforce/apex/accountSearchLWC.searchAcc';

export default class EventHandleParent extends LightningElement {
  
    @api nameget;
    @track gettingAccount;
    @track error;

    getName(event)
    {        
        const nameget = event.detail;        
        console.log('inparentComponent');
        console.log('gettingName:', nameget);
        searchAcc(
            {
                accountName : nameget
            }).then(result=>
                {
                    this.gettingAccount = result;
                    console.log(result);                
                }).catch(error=>
                    {
                        this.error = error;
                        console.log('err0r',error);
                    });
    }

}