import { LightningElement,api, wire, track } from 'lwc';

/*---------- GetRecord method
https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.html

            It'll take few parameters like recordId, 
                                            layoutTypes/Fields , 
                                            mode
            Here we can use two methods to get the data if you use 
            First: Here we can append values of the data directly to the one varilable and we will get
                    each value of field in separate method;
                
                @wire(recordId,layoutTypes) 
                accountValues;
                get name(){ return this.accountValues.data.fields.Name.value; }
            
                Second : Here we can get value directly using data and error method
                        @wire(recordId,fields)
                        wiredata({data,error})
                { if(data){ this.accountData = data; this.rating = this.acountData.fields.Rating.value} 
                  if (error){ this error = error} }
-----*/
import { getRecord } from 'lightning/uiRecordApi';

/*---------- GetFieldValue method, 
            First we need to get the Fields from salesforce schema if more than one field we need
            pass as a array

            import{getFieldValue} from 'lightning/uiRecordApi';
            const fields = [account_phone, account_AccountSource];
            import account_phone from '@salesforce/schema/Account.Phone';
            import account_AccountSource from '@salesforce/schema/Account.AccountSource';
            @wire(getRecord,{recordId,fields}) // here also we need to use get record method
            @wireddata({data,error}){
            if(data){ this.accountValue = data; this.rating = this.accountValue.fields.Rating.value}
            if(error){this.error = error}
            }
            
-----*/
import {getFieldValue} from 'lightning/uiRecordApi';

import Account_NumberofEmployees from '@salesforce/schema/Account.NumberOfEmployees';
import Account_Rating from '@salesforce/schema/Account.Rating';
import Account_CretedBy from '@salesforce/schema/Account.CreatedById';
const fields = [Account_NumberofEmployees,Account_Rating,Account_CretedBy];

/*------------------ createRecord using uiRecordApi
        To create a record with JS first we need to import createRecord method
        this method take objectApiName and fields that needs to import..
        createRecord({apiName : objectApiName // this will be the objectApiName
                        fields : fields // fields that need to save
                                }).then(result=>{}).catch(error=>{})


*/

import {createRecord} from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Account_Object from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import AccountCreate_Rating from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

/* ----------------------- deleteRecord using uiRecordApi

                                The deleteRecord method takes one input that is recordId,
                                It also uses promise method to give success or error status on
                                perfoming the operation
                    Syntax:-    deleteRecord(this.recordId).then(result=>{}).catch(error=>{});
*/

import { deleteRecord } from 'lightning/uiRecordApi';

/**
 *          Releated list on notification button click 
 */
import releatedContacts from '@salesforce/apex/class12_contactNotifications.releatedContacts';

export default class Class12_LDS_uiRecordApi extends NavigationMixin(LightningElement) {
   @api recordId;
    @api objectApiName;
    @track accountRec;
    @track accountRec1;
    @track value;
    
    @wire(getRecord, {
            recordId: '$recordId',
            layoutTypes: ['Full'],modes:['Edit']
        })         
        accountRec;
      get names()
      {
          console.log('names', this.accountRec.data.fields);
          return this.accountRec.data.fields.Name.value;
      }
      get phone()
      {
        return this.accountRec.data.fields.Phone.value;
      }
      get industry()
      {
        console.log('namindustryes', this.accountRec.data.fields.Industry.value);
        return this.accountRec.data.fields.Industry.value;
        
      }

      /* used for getFieldValue */
      @track rating;
      @track CreatedById;
      @track NumberOfEmployees;
      @wire(getRecord, {
        recordId: '$recordId', fields
    })         
    wireddata({error,data})
    {
        if (data)
        {
            this.accountRec1 = data;   
            this.NumberOfEmployees = this.accountRec1.fields.NumberOfEmployees.value ;
            this.CreatedById ='https://data-site-7330-dev-ed.lightning.force.com/'+this.accountRec1.fields.CreatedById.value;
            this.rating = this.accountRec1.fields.Rating.value;         
            console.log('NumberOfEmployees:',this.accountRec1.fields.NumberOfEmployees.value);
            console.log('Rating:',this.accountRec1.fields.Rating.value);
            console.log('CreatedBy:',this.accountRec1.fields.CreatedById.value);
        }
        if(error){
            console.log('error',error[0]);
        }
    }
            //handles to create record by using createRecord method 


    @track accName;
    @track accPhone;
    @track accRating;
    handleChane(event){
        this.accName = event.target.value;
    }handleChane1(event){
        this.accPhone = event.target.value;
    }

    // get the PickList values for the Object
    @track pickListValue;
    @track values;
    handleChane2(event){
        this.accRating = event.target.value;
    }
    @wire(getPicklistValues,{recordTypeId: '012000000000000AAA',
                             fieldApiName : AccountCreate_Rating})
    wireddata1({data,error}){if(data){
                                    this.pickListValue = data.values;                
                                    this.error = undefined;
                                    console.log('value', data); //  here the values will get as object inside object
                                    console.log('onlypicklistvalue', data.values);
                                    console.log('pickListValue:', this.pickListValue);}
                                if(error){
                                            this.error = error;                
                                            this.pickListValue = undefined;
                                }};

    createAccRec(event)
    {
        //step-1 create fields that needs to be for record it's should be in the format of Object

        
        const fieldsCreate={};
        fieldsCreate[Account_Name.fieldApiName]=this.accName;
        fieldsCreate[Account_Phone.fieldApiName]=this.accPhone;
        fieldsCreate[AccountCreate_Rating.fieldApiName]=this.accRating;

        createRecord({apiName: this.objectApiName,
                        fields : fieldsCreate }).then(result=>{
                            console.log('result',result);
                            console.log('resultId',result.id);
                            console.log('name',this.objectApiName);
                            const evt = new ShowToastEvent({
                                title: "Account Created",
                                message: "Created " + result.Name,
                                variant: "success"
                            });
                            this.dispatchEvent(evt);
                            this[NavigationMixin.Navigate]({
                                type: 'standard__recordPage',
                                attributes: {
                                    recordId: result.id, // objectApiName is optional
                                    actionName: 'view'
                                }
                            });
                        }).catch(error=>{
                            console.log('error',error);
                        })
    }

    recordDeletion(event){
        deleteRecord(this.recordId).then((result) => {                                                    
                                                const evet = new ShowToastEvent({
                                                    variant : "success",
                                                    title : 'Successfully',
                                                    message : 'Deleted the Record'
                                                });
                                                this.dispatchEvent(evet);
                                                this[NavigationMixin.Navigate]({
                                                    type: 'standard__objectPage',
                                                    attributes: {
                                                        objectApiName: 'Account',
                                                        actionName: 'home',
                                                    },
                                                });                                                            
                                            }).catch(error => {
                                                console.log('error',error);
                                                const eveterr = new ShowToastEvent({
                                                        variant : "error",
                                                        title : 'Got error',
                                                        message : error.body.message
                                                        });  
                                                        this.dispatchEvent(eveterr);
                                                    });
    }
    @track relatedcontacts;
    showNotification(event)
    {
        alert('notified');
        releatedContacts({ accrecordId : this.recordId}).then(result => {
                                                            console.log(result);
                                                            this.relatedcontacts = result;
                                                        }).catch(error=>{console.log(error);})

    }
}