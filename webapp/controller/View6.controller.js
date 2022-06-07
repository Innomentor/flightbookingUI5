
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/m/MessageToast"
    ], function (Controller, MessageBox, MessageToast) {
        "use strict";
    
        return Controller.extend("project1.controller.View6", {
            onPay: function () {
               var that = this;
                MessageBox.success("You have succesfully booked your flight.", {
                    actions: [MessageBox.Action.OK],
                    onClose: function (oAction) {   if (oAction === "OK") {
                        
                        var oRouter= that.getOwnerComponent().getRouter();
                        oRouter.navTo("View7");  
                     }
                    }
                }
                    );
               
               
                    
            }
            
    });
    });
    