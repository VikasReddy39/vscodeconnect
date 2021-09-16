import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Class12_LDS_lightningRecordEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleSuccess(event)
    {
        const evt = new ShowToastEvent({
            title: "Account Updated",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    handleUpdate(event)
    {
        const evtu = new ShowToastEvent({
            title: "Account Updated",
            message: "Record ID: " + event.detail.Name,
            variant: "success"
        });
        this.dispatchEvent(evtu);
    }
}