import { LightningElement, wire,track } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Account_AccountSource from '@salesforce/schema/Account.AccountSource';
//import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

/* 
    getPickListValues method take two Params 
     RecordTypeId : Required, // if you don't have any recordtypeId value please provide dummy value
     fieldApiName : Required // real api name of the Field
*/

export default class Class11_picklistValueGetting extends LightningElement {

    @track pickListValue;
    @track error;
    @track values;
    // recordTypeId: '012000000000000AAA', fieldApiName: INDUSTRY_FIELD
    /* @wire( getPicklistValues ,
        {
            recordTypeId : '012000000000000AAA',
            fieldApiName : INDUSTRY_FIELD
        })
        wiredDataone({ data ,error})
        {
            console.log('inwiremethod');
            if(data)
            {
                
                console.log('data'+data.values);
            }};
            */
        
        
        @wire(getPicklistValues,
        {
            recordTypeId : '012000000000000AAA',
            fieldApiName : Account_AccountSource
        })
        wiredData({ data,error }){
            if(data)
            {
                /*eslint-disable no-console*/
                this.pickListValue = data.values;                
                this.error = undefined;
                console.log('value', data); //  here the values will get as object inside object
                console.log('onlypicklistvalue', data.values);
                console.log('pickListValue:', this.pickListValue);
            }
            if(error)
            {
                this.error = error;
                this.pickListValue = undefined;
                console.log('error',error);
            }
        };
        handleChange(event)
        {
            this.pickListValue = event.detail.value;
        }
}