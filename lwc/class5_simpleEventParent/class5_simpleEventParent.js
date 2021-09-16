import { LightningElement, track } from 'lwc';

export default class Class5_simpleEventParent extends LightningElement 
{
    @track intNum = 1;

    handleNextPar()
    {
        this.intNum = this.intNum + 1;
    }
    handlepreviousPar()
    {
        if(this.intNum > 1)
        {
            this.intNum = this.intNum - 1;
        }
    }
}