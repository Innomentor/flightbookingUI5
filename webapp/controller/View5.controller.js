sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller', "sap/m/MessageBox"],
    function (MessageToast, Controller, MessageBox) {
        "use strict";

        var ListController = Controller.extend("project1.controller.View5", {
            onInit: function () {
                console.log("Add Traveller details");
                var aValue= {
                    name: "",
                    age: "",
                    gender: "" 
                }
                var jModel2 = new sap.ui.model.json.JSONModel({results: [aValue]});
                this.getView().setModel(jModel2);
                this.getOwnerComponent().getModel("appModel").setProperty("/user", {
                    name: "",
                    age: "",
                    gender: "" 
                });
            },
            onPress: function(){
                var currData= this.getView().getModel().getData().results;
                currData.push({name: '', age: '', gender: ''});
                this.getView().getModel().setData({results: currData});
                this.getView().getModel().refresh();
               
            },
            onDelete: function(){
                var currData= this.getView().getModel().getData().results;
                currData.pop({name: '', age: '', gender: ''});
                this.getView().getModel().setData({results: currData});
                this.getView().getModel().refresh();
            },
            onClick: function(){
                
                var oRouter5= this.getOwnerComponent().getRouter();
                oRouter5.navTo("View6");
                
            }
            
           
});


        return ListController;

    });
   