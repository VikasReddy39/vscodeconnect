import { LightningElement, api } from 'lwc';

export default class Class4_callComponentfromOther extends LightningElement {
    @api contactchild;
    if(contactchild)
    {
        /*eslint-disable no-console*/ 
        console.log('getting value:',contactchild);
    }
}