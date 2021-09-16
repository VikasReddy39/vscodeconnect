import { LightningElement, track, wire } from 'lwc';
import imperativemethod from '@salesforce/apex/class4_paramsSearchLWC.imperativemethod'
export default class Class5_parentToHandleSearchText extends LightningElement 
{
    @track contacts;
    @track inputText;
    @track error;
    handleChildEvent(event)
    {
        /*eslint-disable no-console */
        event.preventDefault();
        const comingText = event.detail;
        console.log('comingText:', comingText);
        //alert('handled event in parent');
        this.inputText = comingText;        
        console.log('sentdata :', this.inputText);
        imperativemethod
        ({
            names : this.inputText
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
    /*@wire(wiremethod,
        {
            name : '$inputText'
        })
    wireddata(error,data)
    {
        if(data)
        {
            this.contacts = data;
            /*eslint-disable no-console 
            console.log('datareceived',data);
        }
        if(error)
        {
            this.error = error;
            /*eslint-disable no-console 
            console.log('datareceived',error);
        }
    }*/
}