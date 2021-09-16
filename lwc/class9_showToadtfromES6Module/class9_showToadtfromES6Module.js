import { LightningElement,track,api } from 'lwc';
import  { showToast } from 'c/class9_eS6moduleCreationExapmle';
import {alertingEvent} from 'c/class9_eS6moduleCreationExapmle';
export default class Class9_showToadtfromES6Module extends LightningElement {

    @api title =' Hey Toast';
    @api message ;
    @api inputname;
    @track error;
    @api contacts;
    /*eslint-disable no-console*/ 
    searchName(event)
    {
        this.inputname = event.target.value;
        console.log('name',this.inputname);
    }
    
    messagedChange(event)
    {
        this.message = event.target.value; 
        console.log('message',this.message);        
    }

    callshowToast()
    {
        /*eslint-disable no-console*/
        alert('calledin');
        console.log('messagess', this.message);
        this.dispatchEvent(
            showToast(this.title,this.message)
            );
    }

    ShowJSAlerts()
    {
        this.dispatchEvent(alertingEvent());
    }

}