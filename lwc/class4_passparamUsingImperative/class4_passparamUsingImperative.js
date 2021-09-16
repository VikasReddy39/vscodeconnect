import { LightningElement, track,api } from 'lwc';
import imperativemethod from '@salesforce/apex/class4_paramsSearchLWC.imperativemethod'
export default class Class4_passparamUsingImperative extends LightningElement 
{
    @track inputname;
    @track error;
    @api contacts;
    /*eslint-disable no-console*/ 
    searchName(event)
    {
        this.inputname = event.target.value;
    }
    handleClick()
    {
        console.log('inmethod');
        console.log(this.inputname);
        imperativemethod
        ({
            names : this.inputname
        })
        .then(result =>
            {
                
                this.contacts = result;
                console.log(result);
            
            })
            .catch(error =>
                {
                    this.error = error;
                    console.log(error);
                });
    }
}