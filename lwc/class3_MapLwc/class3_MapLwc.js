import { LightningElement, track, wire } from 'lwc';
import methodName from '@salesforce/apex/class3_mapLwc.methodName'
export default class Class3_MapLwc extends LightningElement {
    
    @track error;
    //@track maperror;
    //@track map<id,contact> conMap;
    @track records;
    @track maps;
    @wire (methodName) 
    wireddata({error,data})
    {
        if(data)
        {
            this.records = data;
            /*eslint-disable no-console*/
            console.log('wireddata',data);
        }
        if(error)
        {
            this.error= error;
        }
    }
/*eslint-disable no-console */
    contactsclass()
    {
        methodName().then(result =>
            {
                console.log('buttonresult',result);
                const mapresult =[];
                for(let key in result)
                {
                    if(key) //if we "key in" LWC we need to use if contidon loop in lwc
                    {
                        mapresult.push({
                            key : key,
                            value : result[key]
                        })
                    }
                }
                this.maps = mapresult;
                console.log(maps);
            })
            .catch(error =>
                {

                });
    }
}