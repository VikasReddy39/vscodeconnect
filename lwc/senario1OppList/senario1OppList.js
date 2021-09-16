import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Scenario1ContactList extends NavigationMixin(LightningElement) {
    @api opplist;
    goOppDetail(){
        alert('Opp Detailed Page');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "view",
                recordId: this.opplist.Id,
            }
        });
    }
}