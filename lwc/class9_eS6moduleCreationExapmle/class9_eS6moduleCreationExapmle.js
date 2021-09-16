import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const showToast = ( title , message)=>
{
    /*eslint-disable no-console*/
    alert('in JSESe^');
    const event = new ShowToastEvent({

        title : title,
        message : message,
        mode : 'dismissable',
        variant : 'success'
    });
    //this.dispatchEvent(event);
    return event;
}

const alertingEvent = ()=>
{
    alert('in other JS');
}

export {showToast,alertingEvent};