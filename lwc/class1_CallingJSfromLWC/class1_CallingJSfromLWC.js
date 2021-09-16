import { LightningElement, api, track } from 'lwc';
import Id from '@salesforce/user/Id';

export default class Class1_CallingJSfromLWC extends LightningElement {

    @api name='vikky';
    @track phone='9052542360';
    email='c.vikasreddy3@gmail.com';
    userId =Id;
    
    calljs(){

        // we can't directly alert or console log the lwc because eslint has disable this. 
        //for that we need to use below small extension to disable it

        /*eslint-disable no-console */

        this.name = 'VikkyReddy';
        this.phone='9966770970';
        console.log('Im in the JS');
    }
}