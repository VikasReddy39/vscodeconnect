import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Scenario1ContactList extends NavigationMixin(LightningElement) {
    @api conlist;
    goContactDetail()
    {
        alert('Contact Detail Page');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "view",
                recordId: this.conlist.Id,
            }
            
        });
        
    }
}