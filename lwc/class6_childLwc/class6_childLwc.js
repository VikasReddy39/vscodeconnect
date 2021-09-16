import { LightningElement, api } from 'lwc';

export default class Class6_childLwc extends LightningElement {
    /* eslint-console no-console */
    @api contactsgetting;
    
   //console.log('conname',this.contactsgetting);
    
    callParent(event)
    {
        event.preventDefault();
        const selectevent = CustomEvent('selectedcontact',
        {
            detail : this.contactsgetting.Id
        });
        this.dispatchEvent(selectevent);
    }
}