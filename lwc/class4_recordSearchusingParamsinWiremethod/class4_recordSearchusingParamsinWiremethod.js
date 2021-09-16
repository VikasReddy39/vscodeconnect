import { LightningElement, wire, track } from 'lwc';
import wiremethod from '@salesforce/apex/class4_paramsSearchLWC.wiremethod'
import imperativemethod from '@salesforce/apex/class4_paramsSearchLWC.imperativemethod'
export default class Class4_recordSearchusingParamsinWiremethod extends LightningElement 
{
   @track contacts;
   @track error;
    @track searchname;
    @wire(wiremethod,{
        name : '$searchname'
    })
    wireddata({data, error})
    {
        if(data)
        {
            this.contacts = data;
            this.error = undefined;
            /*eslint-disable no-console*/
            console.log(data);
        }
        if(error)
        {
            this.error = error;
            this.contacts = undefined;
        }
    }

    handlechange(event)
    {
        event.preventDefault();
        this.searchname = event.target.value; // this will get the value that stored in the searchname input
    }
}