import { LightningElement } from 'lwc';

export default class Class5_simpleEventChild extends LightningElement {

    handleNext()
    {
        const nextEvent = new CustomEvent('next',{detail : 'testvalue'});
        this.dispatchEvent(nextEvent);
    }
    handlePrevious()
    {
        const previousEvent = new CustomEvent('previous');
        this.dispatchEvent(previousEvent);
    }
}