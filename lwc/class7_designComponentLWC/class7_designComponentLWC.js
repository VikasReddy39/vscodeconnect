import { LightningElement, api } from 'lwc';
import customLabel from '@salesforce/label/c.customLabel';
import Salesforce from '@salesforce/resourceUrl/Salesforce';
import userId from '@salesforce/user/Id';
import CONTACT_OBJECT  from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.LastName';
import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import timezone from '@salesforce/i18n/timeZone';
export default class Class7_designComponentLWC extends LightningElement {
    @api greetings;
    @api message;

    @api label ={
        customLabel,
        Salesforce,
        userId,
        CONTACT_OBJECT,
        NAME_FIELD,
        lang,
        locale,
        currency,
        timezone
    }
}