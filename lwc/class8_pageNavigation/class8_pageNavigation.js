import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Class8_pageNavigation extends NavigationMixin(LightningElement) {


    navigateToObjectHome() {
        // Navigate to the Case object home page.
        //eslint-disable no-console
        alert('clickedonme');
        let pagereference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pagereference,true);
    }
    navigateToListView() {
        // Navigate to the Contact object's Recent list view.
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                // 'filterName' is a property on the page 'state'
                // and identifies the target list view.
                // It may also be an 18 character list view id.
                filterName: 'recent' // or by 18 char '00BT0000002TONQMA4'
            }
        });
    }

    navigateToNewRecordPage() {
        // Opens the new Account record modal
        // to create an Account.
        let pagereference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        };
        this[NavigationMixin.Navigate](pagereference,true);
    }

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035400000YZgu1AAD',
                objectApiName: 'c__Contact', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    navigateToRecordEditPage() {
        // Opens the Account record modal
        // to view a particular record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035400000YZgu1AAD',
                objectApiName: 'Contact', // objectApiName is optional
                actionName: 'edit'
            }
        });
    }

    navigateToRelatedList() {
        // Navigate to the CaseComments related list page
        // for a specific Case record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0015400000WXVteAAH',
                objectApiName: 'Account',
                relationshipApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

    navigateToTabPage() {
        // Navigate to a specific CustomTab.
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
                apiName: 'c__LWC'
            }
        });
    }

    navigateToWebPage() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'http://salesforce.com'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }
}