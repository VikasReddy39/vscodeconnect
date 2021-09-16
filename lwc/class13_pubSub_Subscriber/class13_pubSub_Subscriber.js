import { LightningElement } from 'lwc';

//importing pubsub method to register the event...

import pubsub from 'c/class13_PubSUb';

export default class Class13_pubSub_Subscriber extends LightningElement {
    receivedmessage; // used to store the value that is coming from the publisher

    connectedCallback() //we need to register the event in the lifehook function, if we dont register we cant listen the publisher and we cant get the value it send
    {
        this.register();
    }

    register()
    {
        window.console.log('Event registered.........');
        // here we need to take care about the names of the events where it should be same as publisher event
        //this.handleevent.bind(this) is a callback function when ever the event here excuted, we are using bind method instead of simple calling method this.handleevent
        // pubsub method is firing the callback method "callback (payload);" if we dont bind pusub file will not identify where the method resides in, we will get the err
        // so we are using bind method bind method will actually creates new method 
        
        pubsub.register("simpleEvent", this.handleEvent.bind(this)); 
    }
        handleEvent(messageFromEvent)
        {
            window.console.log("Event Handled............",messageFromEvent);
            this.receivedmessage = messageFromEvent ? JSON.stringify(messageFromEvent,null,"\t"):"no message payload";
        }

}