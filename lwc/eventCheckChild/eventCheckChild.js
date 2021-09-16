import { LightningElement,api,track } from 'lwc';

export default class EventCheckChild extends LightningElement {

    @api name;
    nameValue(event)
    {
        this.name = event.target.value;
        console.log('name:',this.name);
        console.log('onchangeevent');
    }

    handleSearch(event)
    {
        
        console.log('searchbutton');
        /*const sendName = CustomEvent('sendNameEvent',
        {
            detail : this.name
        });
        this.dispatchEvent(sendName);*/
        event.preventDefault();
        const sendName = CustomEvent('sendnameevent',
        {
            detail : this.name
        });
        this.dispatchEvent(sendName);
        console.log('dispacthed');
    }

}