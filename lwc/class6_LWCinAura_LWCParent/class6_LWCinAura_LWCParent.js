import { LightningElement, track, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import contact_LeadSource from '@salesforce/schema/Contact.LeadSource';
import Account_AccountSource from '@salesforce/schema/Account.AccountSource';
import imperativemethod from '@salesforce/apex/class4_paramsSearchLWC.imperativemethod';
import { NavigationMixin } from 'lightning/navigation';
import Account_Rating from '@salesforce/schema/Account.Rating';
export default class Class6_LWCinAura_LWCParent extends NavigationMixin (LightningElement )
{
    
    @track conName;
    @track gettingContacts;
    @track error;
    @track selectedContact;
    @track nullcontact;
    @track leadsource;
    @track value;
    @track recordId;
    @track pickListValue;
    @track error;
/* eslint-console no-console */
   /* @wire(getPicklistValues,{ recordId : '012000000000000AAA',
                                fieldApiName : contact_LeadSource})
        wireddataparent({data,error}){if(data){
                                        this.pickListValue = data.values;                
                                        this.error = undefined;
                                        console.log('value', data); //  here the values will get as object inside object
                                        console.log('onlypicklistvalue', data.values);
                                        console.log('pickListValue:', this.pickListValue);}
                                    if(error){
                                                this.error = error;                
                                                this.pickListValue = undefined;
                                    }};                            */
                                    @wire(getPicklistValues,
                                        {
                                            recordTypeId : '012000000000000AAA',
                                            fieldApiName : contact_LeadSource
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
    
    changedValue(event)
    {
        event.preventDefault();
        this.conName = event.target.value;
    }
    getClicking()
    {
        /* eslint-console no-console */
        imperativemethod
        ({
            names : this.conName
        })
        .then(result =>
            {
                if(result){
                this.gettingContacts = result;
            }
                else
                {
                    this.nullcontact = undefined;
                    console.log(nullcontact);
                }
                
            
            })
            .catch(error =>
                {
                    this.error = error;
                    console.log(error);
                });
    }
    showselected(event)
    {
        const recordId = event.detail;
        /* eslint-disable no-console */
        
        this.selectedContact = this.gettingContacts.find(contact => contact.Id === recordId);
        console.log('selected:',this.selectedContact.LeadSource);

    }
    goContact(event)
    {
        alert('on nav');
        alert(this.selectedContact.Id);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.selectedContact.Id, // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}