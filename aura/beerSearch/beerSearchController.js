({
	handleChange : function(component, event, helper) {
        
        var cmpevent = component.getEvent("searchEvent");
        var enteredText = component.find('enterValue').get('v.value');
        console.log('text',enteredText);
        cmpevent.setParams({
            searchbeerName : enteredText
        });
        cmpevent.fire();
        //alert('event fired');
		
	}
})