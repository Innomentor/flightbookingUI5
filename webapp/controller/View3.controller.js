sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter', 'sap/ui/core/Fragment'],
    function (MessageToast, Controller, Filter,  Fragment) {
        "use strict";

        var PageController = Controller.extend("project1.controller.View3", {
            onInit: function () {
                var aData = [{
                    "fname": "Indigo 6E 707",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": "10:30 a.m",
                    "arrival": "01:00 p.m",
                    "price": "8000"


                },
                {
                    "fname": "Air Asia",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": "12:00 p.m",
                    "arrival": "02:30 p.m",
                    "price": "9100"


                },
                {
                    "fname": "Air India",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": "3:45 p.m",
                    "arrival": "05:30 p.m",
                    "price": "12400"


                },
                {
                    "fname": "Indigo 6E 1401",
                    "from": "Mumbai",
                    "destination": "Delhi",
                    "departure": "6:00 p.m",
                    "arrival": "08:30 p.m",
                    "price": "15000"


                },
                {
                    "fname": "Indigo 6E 102",
                    "from": "Bangalore",
                    "destination": "Delhi",
                    "departure": "2:00 p.m",
                    "arrival": "5:00 p.m",
                    "price": "15000"


                },
                {
                    "fname": "Indigo 6E 211",
                    "from": "Bangalore",
                    "destination": "Mumbai",
                    "departure": "2:00 a.m",
                    "arrival": "3:30 a.m",
                    "price": "7500"


                },
                {
                    "fname": "Air Asia",
                    "from": "Mumbai",
                    "destination": "Bangalore",
                    "departure": "9:00 a.m",
                    "arrival": "11:30 a.m",
                    "price": "7800"


                },
                {
                    "fname": "Air Asia",
                    "from": "Bangalore",
                    "destination": "Delhi",
                    "departure": "2:00 p.m",
                    "arrival": "5:30 p.m",
                    "price": "11000"


                }
                ];

                var jModel = new sap.ui.model.json.JSONModel({ "booking": aData });

                this.getView().setModel(jModel);
               
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("View3").attachPatternMatched(this.onPatternMatched, this);
                
            },
            onPatternMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                var oTableData = JSON.parse(oArgs.data);
                var oTable = this.getView().byId("tableID");
                var oBinding = oTable.getBinding("items");
                var aFilters = [];
                var oFilter = new Filter("from", 'EQ', oTableData.from);
                aFilters.push(oFilter);
                var oFilter = new Filter("destination", 'EQ', oTableData.destination);
                aFilters.push(oFilter);
               
                oBinding.filter(aFilters);
                oView = this.getView();



            },
            onPressFilter: function(){

            },
            
            // onAscending: function() {
            //     name: "PROJECT1.view.Fragment1"
            //     var table = this.getView.byId("tableID");
    
            //     var oItems = table.getBinding("items");
    
            //     var oBindingPath = table.getModel().getProperty("/booking");
    
            //     var oSorter = new Sorter(oBindingPath);
    
            //     oItems.sort(oSorter);
                
            //     //close the column events popup
            //     this._oResponsivePopover.close();
    
            // },
    
            
    
            // onDescending: function() {
            //     var table = this.getView.byId("tableID");
    
            //     var oItems = table.getBinding("items");
    
            //     var oBindingPath = table.getModel().getProperty("/booking");
    
            //     var oSorter = new Sorter(oBindingPath, true);
    
            //     oItems.sort(oSorter);
    
            //                 //close the column events popup
            //     this._oResponsivePopover.close();
    
            // },




            onChangeHeader: function (oEvent) {
               
                var oSelectedRow = oEvent.getSource().getBindingContext().getObject();
                var oRouter3 = this.getOwnerComponent().getRouter();
                oRouter3.navTo("View4", {
                    "data": JSON.stringify(oSelectedRow)
                });
            },
            onPressButton: function () {
                var value = this.getView().byId("102").getSelectedKey();
                var value2 = this.getView().byId("103").getSelectedKey();

                var oRouter2 = this.getOwnerComponent().getRouter();
                oRouter2.navTo("View7", {
                    "data": JSON.stringify(
                        {
                            "from": value,
                            "destination": value2

                        }
                    )
                });
            }


        });


        return PageController;

    });
