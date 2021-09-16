import { LightningElement, api, track } from 'lwc';

export default class Senario1_accountListShow extends LightningElement {
   /* eslint-console no-console */
   @api accountsgetting;
    @track accList;
    
   //console.log('conname',this.contactsgetting);
    
    callParent(event)
    {
        event.preventDefault();
        const selectevent = CustomEvent('selectedcontact',
        {
            detail : this.accountsgetting.Id
        });
        this.dispatchEvent(selectevent);
    }
}