/**
 *  pubsub model is nothing but sharing a JS file with mutliple components whether it's related are not related....
    pub-sub is like application event in Aura Component
    Pub-Sub consists four methods : 1. register
                                    2. Unregister
                                    3. unregisterAll
                                    4. fire
 */

    var callbacks={}; // we created a global variable to store all the events registered/subscribed/callbacks by the components
   

    /**
     * 1.Register Event :- This method is also called subscriber.
     *                      This method will take two parameters one is name of the event and other is callback function
     *                      @ param {string} eventName --- Name of th event // event likes click, doubleclick , onselected events we can send those register method
     *                      @ param {function} callback --- function invoke when said event is fired 
     *                                                      //it's having JS function in subscriber component where are subscribing this event,
     *                                                i.e., when ever we are listen event in parent component we need to fire the event in child that is we are doing  
     * 
     * const register = (eventName, callback) => {
*                                              if(!callbacks[eventName]) // checking whether callbacks having any events are not, if not we are adding 
*                                                          {
*                                                              callbacks[eventName] = new Set(); // intilisating the event and adding the event to new set
*                                                              } 
*                                                          callbacks[eventName].add(callback); //here we are adding that event to callbacks if its double click then
                                                                                                    event name should be double click.
                Basically we are Storing the callback along with the eventname, so whenever we are firing the event we can find out which callback method need to be
                execute for that because same event can be registerd with mutliple componets and method name might be different.
*                                                  }
     */
   
     // we need to put the params in comment sections

     /**
      * @param {string} eventName;
      * @param {string} callback;
      */
     const register = (eventName,callback) => {
                                                if(!callbacks[eventName])
                                                {
                                                    callbacks[eventName] = new Set();
                                                }
                                                callbacks[eventName].add(callback);
                                            };

    /**
     * 2.Unregister :- This Event is used to unregister the event if you dont want the event to be fired after the function then we will use this method
     *                  This method take two params one is eventName and other is callback function
     *   
     *              @ param {string} eventName --- Name of th event is used to delete the event from the global compoent callbacks
     *                      @ param {function} callback
     *              const unregister = (eventName, callback)
     *                                      {
     *                                          if(callbacks(eventName){callbacks[eventName].delete(callback)})
     *                                              };
     */                                            

     /**
      * @param {string} eventName;
      * @param {string} callback;
      */

      const unregister =(eventName,callback)=>{
          if(callbacks(eventName))
          {
              callbacks[eventName].delete(callback);
          }
      };

      
    /**
     * 3.UnregisterAll :- This Event is used to unregister all the events, here simply we are making global value to null; 
     *   
     *              const unregisterAll = (eventName, callback)=>
     *                                      {
     *                                          callbacks={};
     *                                              };
     */  

    const unregisterAll = (eventName, callback)=>
                                          {
                                              callbacks={};
                                                  };
    /**
     * 4.fire  :- This Event is used to fire the events from the publisher componet and we will listen that in subscriber event by using register; 
     *              This method will take two parameters one is name of the event which is as same as register event and other is payload;
     *                      @ param {string} eventName --- Name of the event that is similar to register event name 
     *                      @ param {function} Payload --- information that is we want to send the subscriber component ; for bestpractices send the informatio in JSON
     *                                                      format..,
     *              const fire = (eventName, payload)=>
     *                                      {
          *                                                                      if(callbacks[eventName])
                                            { 
                                                callbacks[eventName].forEach(callback=> {
                                                    try
                                                    {
                                                        callback (payload);
                                                    }
                                                    catch(error)
                                                    {
                                                        console.log(error);
                                                    }
                                                });
                                            }
     *                                                                      }
     */                                                   

     /**
      * @param {string} eventName;
      * @param {string} payload;
      */

      const fire = (eventName,payload)=>{
                                            if(callbacks[eventName])
                                            { 
                                                callbacks[eventName].forEach(callback=> {
                                                    try
                                                    {
                                                        callback (payload);
                                                    }
                                                    catch(error)
                                                    {
                                                        console.log(error);
                                                    }
                                                });
                                            }                                        
                                        };
// export is and JS ES6 functionality
 export default{
     register,
     unregister,
     unregisterAll,
     fire
 }