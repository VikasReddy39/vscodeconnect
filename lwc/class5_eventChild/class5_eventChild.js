import { LightningElement, api } from 'lwc';

export default class Class5_eventChild extends LightningElement {
    @api searchText;

    callParent(event)
    {
        this.searchText = event.target.value;
        /* eslint-disable no-console */
        console.log('sendingtext:', this.searchText);
        const selectedEvent = new CustomEvent('selected', { detail: this.searchText });
        this.dispatchEvent(selectedEvent);
        console.debug('event fired');
    }
    
}