({
    handleNext : function(component, event, helper)
     {
         alert('handled next event');
         var detail = event.getParams('arguments');
         console.log('detail',detail);
    },
    handlePrevious : function(component, event, helper)
     {
         alert('handled previous event');
    }
})