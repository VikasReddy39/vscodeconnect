import { LightningElement } from 'lwc';

export default class Class8_lifCycleHooks extends LightningElement {

    constructor()
    {
        super();
        //alert('I m in constructor');
    }

    connectedCallback()
    {
        //alert('Im in connected callback');        
    }

    disconnectedCallback()
    {
       // alert('Im in disconnected call back');        
    }
    renderedCallback()
    {
        //alert('im in rendered callback');        
    }
    errorCallback(error,stack)
    {
        alert('Im in error callback');
    }
}