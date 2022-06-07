sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller'],
    function (MessageToast, Controller) {
        "use strict";

        var PageController = Controller.extend("project1.controller.View4", {
            onInit: function () {
                var oRouter4 = this.getOwnerComponent().getRouter();
			    oRouter4.getRoute("View4").attachPatternMatched(this.onPatternMatched, this);
            },
            onPatternMatched:function(oEvent)
            {
                var sData = oEvent.getParameter("arguments");
                var oTableData = JSON.parse(sData.data);
                var jModel = new sap.ui.model.json.JSONModel(oTableData);
               this.getOwnerComponent().getModel("appModel").setProperty("/oTableData", oTableData);
                this.getView().setModel(jModel);
                
               
            },
            onClick: function(){
                var oRouter5= this.getOwnerComponent().getRouter();
                oRouter5.navTo("View5");
            },
            onPress: function(){
                var oButton = oEvent.getSource().getBindingContext().getObject();
                var oRouter9 = this.getOwnerComponent().getRouter();
                oRouter9.navTo("View7", {
                    "data": JSON.stringify(oButton)
                }); 
            }
});


        return PageController;

    });
