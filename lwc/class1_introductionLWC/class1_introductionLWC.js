import { LightningElement, api,track } from 'lwc'; 

//the above will import the lightningelemenst from the salesforce schema(lwc)
//we can call directly class from JS rather than using controller like in Aura

export default class Class1_introductionLWC extends LightningElement {

    //this class extending the lighthingElement

    @api name='Vikky';
    @track phone ='9966770970'; // if we didn't import the track then we will get error.
    email ='c.vikasreddy3@gmail.com'
}