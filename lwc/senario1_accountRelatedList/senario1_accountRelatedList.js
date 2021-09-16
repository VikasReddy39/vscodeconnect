import { LightningElement, track,api,wire } from 'lwc';
import accReleatedList from '@salesforce/apex/scenario1_accountRelatedList.accReleatedList';
import conbyAccId from '@salesforce/apex/class4_paramsSearchLWC.conbyAccId';
import oppbyAccId from '@salesforce/apex/class4_paramsSearchLWC.oppbyAccId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import wiremethod from '@salesforce/apex/class4_paramsSearchLWC.wiremethod';
export default class Senario1_accountRelatedList extends LightningElement {
    @track accName;
    @api accList;
    @track error;
    @track selectedId;
    @api objectApiName;
    @track selectedContact;
    @track boolVisible = false; //https://www.infallibletechie.com/2019/06/simple-hide-and-show-in-lightning-web.html
    @track boolVisible2 = false;
    @track boolVisible3 = false;
    @track boolVisible4 = false;
    handleNamechange(event){
        event.preventDefault();
        this.accName= event.target.value;
        console.log('name',this.accName);
    }
    searchAcc(){
        console.log('clicked');
        console.log('selectedcon',this.selectedContact);
        console.log('selectedcon',this.oppotunityList);
        this.boolVisible = false;
        this.boolVisible2 = false;
        this.selectedId = undefined;
        //this.oppotunityList = undefined;
        accReleatedList({accountName : this.accName}).then(result=>{
                                                                        this.accList = result;
                                                                        console.log('result',result);
                                                                        console.log('resultlen',result.length);
                                                                        console.log('accList',this.accList);
                                                                       if(result.length <= 0){                                                                            
                                                                                const event = new ShowToastEvent({
                                                                                    title: 'No Account with Searched Name',
                                                                                    message: 'Please try to Search with other Name....',
                                                                                });
                                                                                this.dispatchEvent(event);
                                                                        }
                                                                        //this.error = undefined;
                                                                        }).catch(error=>{
                                                                            this.error= error;
                                                                            //this.accList = undefined;
                                                                        });
                 }

    getSelectedId(event)
    {
        //event.preventDefault();
        // const recordId = event.detail;
        this.boolVisible2 = false;
        this.selectedId = event.detail;
        console.log(this.selectedId);
        this.boolVisible = true;
        this.totlen = parseInt(0);
    }
    
    @track conError;
    displayContacts()
    {
        this.boolVisible2 = true;
        this.boolVisible3 = true;
        this.boolVisible4 = false;
        //alert('getCons');
        
        console.log('id:',this.selectedId);
        conbyAccId({accId : this.selectedId}).then(result=>{
                                                                this.selectedContact = result;
                                                                this.totlen = result.length;
                                                                console.log('result',result);
                                                                if(result.length <= 0){
                                                                    this.boolVisible2 = false;
                                                                    this.boolVisible3 = false;
                                                                    this.totlen = result.length;                                                                            
                                                                    const eventcon = new ShowToastEvent({
                                                                        title: 'No Contact',
                                                                        message: 'For the Selected Account....',
                                                                    });
                                                                    this.dispatchEvent(eventcon);
                                                            }            
                                                                        }).catch(error =>{
                                                                            this.conError = error;
                                                                            console.log('err',error);
                                                                        })        
    }
    @track oppotunityList;
    @track oppError;
    displayOpps(){
        //alert('getOpps',this.selectedId);
        this.boolVisible2 = true;
        this.boolVisible3 = false;
        this.boolVisible4 = true;        
        console.log('id:',this.selectedId);
        oppbyAccId({accId : this.selectedId}).then(result=>{
                                                                this.oppotunityList = result;
                                                                this.totlen = result.length;
                                                                console.log('result',result);
                                                                if(result.length <= 0){  
                                                                    this.boolVisible2 = false;
                                                                    this.boolVisible4 = false;
                                                                    this.totlen = result.length;                                                                            
                                                                    const eventopp = new ShowToastEvent({
                                                                        title: 'No Opportunity',
                                                                        message: 'For the Selected Account....',
                                                                    });
                                                                    this.dispatchEvent(eventopp);
                                                            }                        
                                                                        }).catch(error =>{
                                                                            this.oppError = error;
                                                                            console.log('err',error);
                                                                        })        
    }
    @track conlen;
    @track opplen;
    @track totlen = 0 ;
    
    displayRelatedList(){
        this.conlen = parseInt(0);
        this.opplen = parseInt(0);
        this.totlen = parseInt(0);
        this.boolVisible2 = true;
        this.boolVisible3 = true;
        this.boolVisible4 = true;
        console.log('id:',this.selectedId);
        conbyAccId({accId : this.selectedId}).then(result=>{
                                                                this.selectedContact = result;
                                                                this.conlen = result.length;
                                                                console.log('conlen',this.conlen);
                                                                //this.calclen();
                                                                console.log('result',result);            
                                                                        }).catch(error =>{
                                                                            this.conError = error;
                                                                            console.log('err',error);
                                                                        });
        //console.log('id:',this.selectedId);
        oppbyAccId({accId : this.selectedId}).then(result=>{
                                                                this.oppotunityList = result;
                                                                this.opplen = result.length;
                                                                console.log('opplen',this.opplen);
                                                                console.log('result',result);
                                                                if(parseInt(this.conlen)>0 && parseInt(this.opplen)<=0 ){this.totlen = parseInt(this.conlen);}
                                                                if(parseInt(this.conlen)>0 && parseInt(this.opplen)>0 ){this.totlen = parseInt(this.conlen) + parseInt(this.opplen);}
                                                                if(parseInt(this.conlen)<=0 && parseInt(this.opplen)>0 ){this.totlen = parseInt(this.opplen);}
                                                                if(parseInt(this.conlen)<=0 && parseInt(this.opplen)<=0 ){this.totlen = parseInt(0);}
                                                                console.log('totlen',this.totlen);                                                                        
                                                                if(this.totlen <=0 ){
                                                                    this.boolVisible2 = false;
                                                                    this.boolVisible3 = false;
                                                                    this.boolVisible4 = false;   
                                                                    console.log('true');                                                                          
                                                                        const eventrelated = new ShowToastEvent({
                                                                            title: 'No Releated Lists',
                                                                            message: 'For the Selected Account....',
                                                                        });
                                                                        this.dispatchEvent(eventrelated);
                                                                }
                                                                        }).catch(error =>{
                                                                            this.oppError = error;
                                                                            console.log('err',error);
                                                                        });
                                                                       this.calclen();                                                                                                                                                                                                                  
    }
    showNotification(){
        alert('clicked');
        this.totlen = parseInt(this.conlen) + parseInt(this.opplen);                       
    }
}