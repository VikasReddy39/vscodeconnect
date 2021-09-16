import { LightningElement, track } from 'lwc';
//import pubsub method here
import pubsub from 'c/class13_PubSUb';
export default class Class13_pubSub_Publisher extends LightningElement {
    @track message;
    handleChange(event)
    {
        this.message = event.target.value;
        console.log('send:',this.message);
    }
    sendParams()
    {        
        window.console.log('Event Firing......');   
        let messageJson = {
            "message": this.message,
            "name" : 'Event',
            "received" : 'success'
        }     
        pubsub.fire('simpleEvent',messageJson);
        window.console.log('Event Fired.......');
    }
    
}