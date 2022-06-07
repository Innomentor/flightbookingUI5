sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller', "sap/m/MessageBox", 
    'sap/ui/core/Core',
    'sap/ui/core/library',
    'sap/ui/unified/library',
    'sap/ui/unified/DateTypeRange', 
    'sap/ui/model/json/JSONModel', 
    'sap/ui/model/Filter', 
    'sap/ui/model/Sorter', 
    'sap/m/Menu',
    'sap/m/MenuItem', 	
    'sap/ui/core/Fragment',
    ],
    function (MessageToast, Controller, MessageBox, Core, CoreLibrary, UnifiedLibrary, DateTypeRange, JSONModel, Filter, Sorter, Menu, MenuItem,  Fragment ) {
        "use strict";

        var PageController = Controller.extend("project1.controller.View2", {

            onInit: function () {
                // this.getView().byId("navList").setSelectedKey("Bookings");
                var alocations = [
                    {
                        "from": "Delhi",
                        "destination": "Delhi"
                    },
                      {   "from": "Mumbai",
                      "destination": "Mumbai"
                },{
                    "from": "Bangalore",
                    "destination": "Bangalore"
                }
                ];
                var jModel = new sap.ui.model.json.JSONModel({ "results": alocations });

                this.getView().setModel(jModel, "locationsModel");
                // var oFormData = this.getOwnerComponent().getModel("oAppModel").getProperty("/results");
                // this.byId("locationsModel").setModel(newJSONModel("oFormData"));
                // this.getView().byId("navCon").to(this.getView().byId("flights"));
               
          
                var oModel = new JSONModel();
                oModel.setData({
                    dateValue: new Date()
                });
                this.getView().setModel(oModel);
                this.byId("DP6").setMinDate(new Date(2022, 4, 14));
                this.byId("DP6").setMaxDate(new Date(2050, 11, 31));
                this.byId("DP6").setDateValue(new Date(2022, 4, 14));
                

            },
            

            onUBookings: function(){
                this.getView().byId("navCon").to(this.getView().byId("flight"));
            },
           
            onPressResetButton: function() {
                
                var oInput1 = this.getView().byId("from");
                oInput1.setValue("");
                var oInput2 = this.getView().byId("destination");
                oInput2.setValue("");
                var oInput3 = this.getView().byId("travellers");
                oInput3.setValue("");
                var oInput4 = this.getView().byId("class");
                oInput4.setValue("");
            },
            onPressPrevious1: function(){
                this.getView().byId("navCon").to(this.getView().byId("flight"));
                this.getView().byId("navList").setSelectedKey("Bookings");
            },
            onPressButton: function () {
                var value = this.getView().byId("from").getSelectedKey();
                var value2 = this.getView().byId("destination").getSelectedKey();

                var oRouter2 = this.getOwnerComponent().getRouter();
                oRouter2.navTo("View7", {
                    "data": JSON.stringify(
                        {
                            "from": value,
                            "destination": value2

                        }
                    )
                });
               

            },
            handleResetFilters: function () {
                this.getView().byId("navList").setSelectedKey("yourflights");
                var value = this.getView().byId("from").getSelectedKey();
                var value2 = this.getView().byId("destination").getSelectedKey();
                var value3 = this.getView().byId("class").getSelectedKey();
                // var value1 = this.getView().byId("106").getText();



                if (value == 0 || value2 == 0 || value3 == 0) {
                    MessageBox.error("Fill up all the details");
                }
                else if(value == value2){
                    MessageBox.error("From and Destination can't be same");
                }
                else {
                    this.getView().byId("navCon").to(this.getView().byId("flights"));
                    

                    var aData = [{
                        "fname": "Indigo 6E 707",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1030,
                        "arrival": 1300,
                        "price": 8000
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1400,
                        "arrival": 1430,
                        "price": 9100
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1545,
                        "arrival": 1730,
                        "price": 12400
    
    
                    },
                    {
                        "fname": "Indigo 6E 1401",
                        "from": "Mumbai",
                        "destination": "Delhi",
                        "departure": 1800,
                        "arrival":  2030,
                        "price": 10000
    
    
                    },
                    {
                        "fname": "Indigo 6E 102",
                        "from": "Bangalore",
                        "destination": "Delhi",
                        "departure": 1400,
                        "arrival": 1500,
                        "price": 15000
    
    
                    },
                    {
                        "fname": "Indigo 6E 211",
                        "from": "Bangalore",
                        "destination": "Mumbai",
                        "departure": 200,
                        "arrival": 330,
                        "price": 7500
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Mumbai",
                        "destination": "Bangalore",
                        "departure": 900,
                        "arrival":  1130,
                        "price": 7800
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Bangalore",
                        "destination": "Delhi",
                        "departure": 1400,
                        "arrival": 1730,
                        "price": 11000
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Delhi",
                        "destination": "Bangalore",
                        "departure": 700,
                        "arrival": 1030,
                        "price": 11000
    
    
                    },
                    {
                        "fname": "AirAsia I5 - 1458",
                        "from": "Delhi",
                        "destination": "Bangalore",
                        "departure": 1140 ,
                        "arrival": 1500 ,
                        "price": 7500
    
    
                    },
                    {
                        "fname": "Indigo 6E- 6464",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1700,
                        "arrival":  1930,
                        "price": 8700
    
    
                    }
                    ];
    
                    var jModel = new sap.ui.model.json.JSONModel({ "booking": aData });
    
                    this.getView().setModel(jModel);
                    this._mViewSettingsDialogs = {};
                    this.mGroupFunctions = {
                    	Price: function(oContext) {
                            var price = oContext.getProperty("price");
                            var currencyCode = oContext.getProperty("CurrencyCode");
                            var key, text;
                            if (price <= 100) {
                                key = "LE10000";
                                text = "10000 " + currencyCode + " or less";
                            } else if (price <= 1000) {
                                key = "BT100-1000";
                                text = "Between 10000 and 12000 " + currencyCode;
                            } else {
                                key = "GT12000";
                                text = "More than 12000 " + currencyCode;
                            }
                            return {
                                key: key,
                                text: text
                            };
                        }
                    };
               
              
                var oTable = this.getView().byId("tableID");
                var oBinding = oTable.getBinding("items");
                var aFilters = [];
                var oFilter = new Filter("from", 'EQ', value);
                aFilters.push(oFilter);
                var oFilter = new Filter("destination", 'EQ', value2);
                aFilters.push(oFilter);
                // var oFilter = new Filter("106", 'EQ', value1);
                // aFilters.push(oFilter);
                oBinding.filter(aFilters); 
                    
                }
              
            },

		
            getViewSettingsDialog: function (sDialogFragmentName) {
                var pDialog = this._mViewSettingsDialogs[sDialogFragmentName];
    
                if (!pDialog) {
                    pDialog = Fragment.load({
                        id: this.getView().getId(),
                        name: sDialogFragmentName,
                        controller: this
                    }).then(function (oDialog) {
                        
                            oDialog.addStyleClass("sapUiSizeCompact");
                        
                        return oDialog;
                    });
                    this._mViewSettingsDialogs[sDialogFragmentName] = pDialog;
                }
                return pDialog;
            },
            handleSortButtonPressed: function () {
                this.getViewSettingsDialog("project1.view.Fragment.SortDialog")
				.then(function (oViewSettingsDialog) {
					oViewSettingsDialog.open();
				});
            },
           
    
            handleFilterButtonPressed: function () {
                this.getViewSettingsDialog("project1.view.Fragment.FilterDialog")
                    .then(function (oViewSettingsDialog) {
                        oViewSettingsDialog.open();
                    });
            },

            handleSortDialogConfirm: function (oEvent) {
                var oTable = this.byId("tableID"),
                    mParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items"),
                    sPath,
                    bDescending,
                    aSorters = [];
    
                sPath = mParams.sortItem.getKey();
                bDescending = mParams.sortDescending;
                aSorters.push(new Sorter(sPath, bDescending));
    
                // apply the selected sort and group settings
                oBinding.sort(aSorters);
            },
    
            handleFilterDialogConfirm: function (oEvent) {
                var value = this.getView().byId("from").getSelectedKey();
                var value2 = this.getView().byId("destination").getSelectedKey();
                var oTable = this.byId("tableID"),
                    mParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items"),
                    aFilters = [];
                 if ( oEvent.getParameters().filterString) {
                mParams.filterItems.forEach(function(oItem) {
                    var aSplit = oItem.getKey().split("___"),
                        sPath = aSplit[0],
                        sOperator = aSplit[1],
                        sValue1 = aSplit[2],
                        sValue2 = aSplit[3],
                        oFilter = new Filter(sPath, sOperator, sValue1, sValue2);
                        aFilters.push(oFilter);
                        var oFilter = new Filter("from", 'EQ', value);
                aFilters.push(oFilter);
                var oFilter = new Filter("destination", 'EQ', value2);
                aFilters.push(oFilter);
                    
                });
    
                // apply filter settings
                oBinding.filter(aFilters);
            }
                // update filter bar
               
            },
           
            onPressPrevious2: function(){
                this.getView().byId("navCon").to(this.getView().byId("flights"));
                this.getView().byId("navList").setSelectedKey("yourflights");
                var value = this.getView().byId("from").getSelectedKey();
                var value2 = this.getView().byId("destination").getSelectedKey();
                var value3 = this.getView().byId("class").getSelectedKey();
                // var value1 = this.getView().byId("106").getText();



                if (value == 0 || value2 == 0 || value3 == 0) {
                    MessageBox.error("Fill up all the details");
                }
                else if(value == value2){
                    MessageBox.error("From and Destination can't be same");
                }
                else {
                    this.getView().byId("navCon").to(this.getView().byId("flights"));
                   
                    var aData = [{
                        "fname": "Indigo 6E 707",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1030,
                        "arrival": 1300,
                        "price": 8000
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1400,
                        "arrival": 1430,
                        "price": 9100
    
    
                    },
                    {
                        "fname": "Air India",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1545,
                        "arrival": 1730,
                        "price": 12400
    
    
                    },
                    {
                        "fname": "Indigo 6E 1401",
                        "from": "Mumbai",
                        "destination": "Delhi",
                        "departure": 1800,
                        "arrival":  2030,
                        "price": 10000
    
    
                    },
                    {
                        "fname": "Indigo 6E 102",
                        "from": "Bangalore",
                        "destination": "Delhi",
                        "departure": 1400,
                        "arrival": 1500,
                        "price": 15000
    
    
                    },
                    {
                        "fname": "Indigo 6E 211",
                        "from": "Bangalore",
                        "destination": "Mumbai",
                        "departure": 200,
                        "arrival": 330,
                        "price": 7500
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Mumbai",
                        "destination": "Bangalore",
                        "departure": 900,
                        "arrival":  1130,
                        "price": 7800
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Bangalore",
                        "destination": "Delhi",
                        "departure": 1400,
                        "arrival": 1730,
                        "price": 11000
    
    
                    },
                    {
                        "fname": "Air Asia",
                        "from": "Delhi",
                        "destination": "Bangalore",
                        "departure": 700,
                        "arrival": 1030,
                        "price": 11000
    
    
                    },
                    {
                        "fname": "AirAsia I5 - 1458",
                        "from": "Delhi",
                        "destination": "Bangalore",
                        "departure": 1140 ,
                        "arrival": 1500 ,
                        "price": 7500
    
    
                    },
                    {
                        "fname": "Indigo 6E- 6464",
                        "from": "Delhi",
                        "destination": "Mumbai",
                        "departure": 1700,
                        "arrival":  1930,
                        "price": 8700
    
    
                    }
                    ];
    
                    var jModel = new sap.ui.model.json.JSONModel({ "booking": aData });
    
                    this.getView().setModel(jModel);
                   
               
              
                var oTable = this.getView().byId("tableID");
                var oBinding = oTable.getBinding("items");
                var aFilters = [];
                var oFilter = new Filter("from", 'EQ', value);
                aFilters.push(oFilter);
                var oFilter = new Filter("destination", 'EQ', value2);
                aFilters.push(oFilter);
                // var oFilter = new Filter("106", 'EQ', value1);
                // aFilters.push(oFilter);
                oBinding.filter(aFilters); 
                    
                }
              
            },
            onChangeHeader: function (oEvent) {
                this.getView().byId("navList").setSelectedKey("selectseats");
                this.getView().byId("navCon").to(this.getView().byId("seats"));
                var oSelectedRow = oEvent.getSource().getBindingContext().getObject();
                var jModel = new sap.ui.model.json.JSONModel(oSelectedRow);
                var aOldData = this.getOwnerComponent().getModel("appModel").getProperty("/oTableData");
                aOldData.push(oSelectedRow);
                this.getOwnerComponent().getModel("appModel").setProperty("/oTableData", aOldData);
                 this.getView().setModel(jModel);
            },
            onPressPrevious3: function(oEvent){
                this.getView().byId("navList").setSelectedKey("selectseats");
                this.getView().byId("navCon").to(this.getView().byId("seats"));
                var oSelectedRow = oEvent.getSource().getBindingContext().getObject();
                var jModel = new sap.ui.model.json.JSONModel(oSelectedRow);
                // this.getOwnerComponent().getModel("appModel").setProperty("/oTableData", oSelectedRow);
                 this.getView().setModel(jModel);
            },
            onClick: function(){ 
                 var that = this;
                MessageBox.confirm("Do you want to continue?", {
                    actions: [MessageBox.Action.OK , MessageBox.Action.CANCEL],
                    onClose: function (oAction) {   if (oAction === "OK") {
                that.getView().byId("navList").setSelectedKey("selectdetails");
                that.getView().byId("navCon").to(that.getView().byId("details"));
                    } else(oAction === "CANCEL") 
                      
                    
                }
                })
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
            onPressPrevious4: function(){
                this.getView().byId("navCon").to(this.getView().byId("details"));
                this.getView().byId("navList").setSelectedKey("selectpayment");
            },
            onButtonPress: function(){
                this.getView().byId("navList").setSelectedKey("selectpayment");
                this.getView().byId("navCon").to(this.getView().byId("payment"));
                
            
            },
          
           
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

        return PageController;

    });
