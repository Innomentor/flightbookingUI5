sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller', "sap/ui/model/json/JSONModel", "sap/m/Popover",
    "sap/m/Button",
    "sap/m/library", 
    "sap/m/MessageBox",
     'sap/base/util/deepExtend',
    '../model/formatter'],
    function (MessageToast, Controller, Popover, JSONModel, Button, library, MessageBox, deepExtend, formatter) {
        "use strict";


        var PageController = Controller.extend("project1.controller.View7", {
            formatter:formatter,
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
              oRouter.getRoute("View7").attachPatternMatched(this.onPatternMatched, this);
                

            },
            onPatternMatched:function(oEvent)
            {
                this.getView().byId("navCon").to(this.getView().byId("p_UBookings"));  
                var aData= this.getOwnerComponent().getModel("appModel").getProperty("/oTableData");
                var jModel = new sap.ui.model.json.JSONModel({ "booking": aData });
                this.getView().setModel(jModel, "aValue");
                var oTable = this.getView().byId("tableID");
                // var oBinding = oTable.getBinding("items");
                // oBinding.byId("tableID");
                
               
            },
            onPressBookingPage: function(){
                var oRouter5= this.getOwnerComponent().getRouter();
                oRouter5.navTo("View2");
                this.getView().byId("navCon").to(this.getView().byId("flight"));
                this.getView().byId("navList").setSelectedKey("Bookings");
                var oInput1 = this.getView().byId("from");
                oInput1.setValue("");
                var oInput2 = this.getView().byId("destination");
                oInput2.setValue("");
                var oInput3 = this.getView().byId("travellers");
                oInput3.setValue("");
                var oInput4 = this.getView().byId("class");
                oInput4.setValue("");
            },
            onUBookings: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_UBookings"));  
                var aData= this.getOwnerComponent().getModel("appModel").getProperty("/oTableData");
                var jModel = new sap.ui.model.json.JSONModel({ "booking": aData });
                this.getView().setModel(jModel, "aValue");
            },
            onPressCancel: function(){
                var that = this;
                MessageBox.confirm("Do you want to cancel your flight?", {
                    actions: [MessageBox.Action.OK , MessageBox.Action.CANCEL],
                    onClose: function (oAction) {   if (oAction === "OK") {
                        var currData= that.getView().getModel("aValue").getData().booking;
                        currData.pop({fname: '', from: '', destination: '', departure: '', arrival: '', price: ''});
                        that.getView().getModel("aValue").setData({booking5: currData});
                        that.getView().getModel("aValue").refresh();
                    } else(oAction === "CANCEL") 
                }
            })
        },
            onCBookings: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_CBookings"));
                var aData1 = [
                {
                    "fname": "Vistara",
                    "from": "Mumbai",
                    "destination": "Bangalore",
                    "departure": 900 ,
                    "arrival": 1130 ,
                    "price": 7800


                },
                {
                    "fname": "Spicejet",
                    "from": "Bangalore",
                    "destination": "Delhi",
                    "departure": 1400,
                    "arrival": 1730,
                    "price": 11000


                }
                ];

                var jModel = new sap.ui.model.json.JSONModel({ "booking1": aData1 });

                this.getView().setModel(jModel, "aValue1");
                
            },
            onCOBookings: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_COBookings"));
                var aData1 = [{
                    "fname": "Indigo 6E 707",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": 1030,
                    "arrival": 1300,
                    "price": "8000"


                },
                {
                    "fname": "Air India",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": 1200,
                    "arrival": 1430,
                    "price": "9100"


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
                    "price": "15000"


                },
                {
                    "fname": "Indigo 6E 102",
                    "from": "Bangalore",
                    "destination": "Delhi",
                    "departure": 200,
                    "arrival": 500,
                    "price": "15000"


                }
                ];

                var jModel = new sap.ui.model.json.JSONModel({ "booking2": aData1 });
               
                this.getView().setModel(jModel, "aValue2");
              
            },
            onABookings: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_ABookings"));
                var aData1 = [{
                    "fname": "AirAsia I5 - 1458",
                    "from": "Delhi",
                    "destination": "Bangalore",
                    "departure": "11:40 p.m",
                    "arrival": "03:00 p.m",
                    "price": "7500"


                },
                {
                    "fname": "Indigo 6E- 6464",
                    "from": "Delhi",
                    "destination": "Mumbai",
                    "departure": "5:00 p.m",
                    "arrival": "07:30 p.m",
                    "price": "8700"


                },
                {
                    "fname": "Vistara",
                    "from": "Mumbai",
                    "destination": "Bangalore",
                    "departure": "9:00 a.m",
                    "arrival": "11:30 a.m",
                    "price": "7800"


                },
                {
                    "fname": "Spicejet",
                    "from": "Bangalore",
                    "destination": "Delhi",
                    "departure": "2:00 p.m",
                    "arrival": "5:30 p.m",
                    "price": "11000"


                },
                {
                    "fname": "Air India",
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


                }
                ];

                var jModel = new sap.ui.model.json.JSONModel({ "booking3": aData1 });
                
                this.getView().setModel(jModel);
               
            },
            onSelectPassword: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_SelectPassword"));
            },
            onRegister: function () {



                var value2 = this.getView().byId("password").getValue();
                var value3 = this.getView().byId("password2").getValue();

                if (value2 == "" || value3 == "") {
                    MessageBox.error("Fill in all the Details");
                }
                else if (value2 != value3) {
                    MessageBox.error("Both Passwords should be same");
                }
                else if (value2.length <= 7 || value3.length <= 7) {
                    MessageBox.error("Password criteria is not matched");
                }
                else {
                    var oRouter1 = this.getOwnerComponent().getRouter();
                    oRouter1.navTo("LogIn");
                }
            },
            onPressResetButton: function () {
                var oInput2 = this.getView().byId("oldpassword");
                oInput2.setValue("");

                var oInput3 = this.getView().byId("password");
                oInput3.setValue("");
                var oInput4 = this.getView().byId("password2");
                oInput4.setValue("");
            },
            onPressPassword: function () {
                this.getView().byId("oldpassword").setType("Password");
                this.getView().byId("oldpassword").setType("Text");
                this.getView().byId("password").setType("Password");
                this.getView().byId("password").setType("Text");

                this.getView().byId("password2").setType("Password");
                this.getView().byId("password2").setType("Text");
                this.getView().byId("oldpassword").setType(false);
                this.getView().byId("password").setType(false);
                this.getView().byId("password2").setType(false);
            },
            onSelectCard: function () {
                this.getView().byId("navCon").to(this.getView().byId("p_SelectCard"));
                var aCard = [{
                    "cardnumber": "XXXX-XXXX-XXXX-1234",
                    "expiry": "XX/XX",
                    "cvv": "XXX",
                    "name": "Subhrajit Sen"
                }];
                var jModel = new sap.ui.model.json.JSONModel({ "booking5": aCard });

                this.getView().setModel(jModel, "aValue5");

            },
            onSelectLogOut: function () {
                var oRouter1 = this.getOwnerComponent().getRouter();
                oRouter1.navTo("LogIn");
            },
            onItemSelect: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
            },

            onCollapseExpandPress: function () {
                var oSideNavigation = this.getView().byId('sideNavigation');
                var bExpanded = oSideNavigation.getExpanded();
                oSideNavigation.setExpanded(!bExpanded);
                var viewId = this.getView().getId();
                var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
                toolPage.setSideExpanded(!toolPage.getSideExpanded());
            },

            onSelectSetting: function (oEvent) {
                this.getView().byId("navCon").to(this.getView().byId("p_accountSetting"));
            },

            onSideNavButtonPress: function () {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();

                this._setToggleButtonTooltip(bSideExpanded);

                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            onPressSave: function () {
                MessageBox.success("You Information is saved");
            },
            onPressDelete: function () {
                var currData= this.getView().getModel("aValue5").getData().booking5;
                currData.pop({cardnumber: '', expiry: '', cvv: '', name: ''});
                this.getView().getModel("aValue5").setData({booking5: currData});
                this.getView().getModel("aValue5").refresh();
            },
            onPressAdd: function () {
                var currData= this.getView().getModel("aValue5").getData().booking5;
                currData.push({cardnumber: '', expiry: '', cvv: '', name: ''});
                this.getView().getModel("aValue5").setData({booking5: currData});
                this.getView().getModel("aValue5").refresh();
            },

        });


        return PageController;

    });
    // var oRouter4 = this.getOwnerComponent().getRouter();
    //     oRouter4.getRoute("View7").attachPatternMatched(this.onPatternMatched, this);

    // },
    // onPatternMatched: function (oEvent) {
    //     var sData = oEvent.getParameter("arguments");
    //     var oTableData = JSON.parse(sData.data);
    //     var jModel = new sap.ui.model.json.JSONModel(oTableData);
    //     this.getView().setModel(jModel);
    //     this.getOwnerComponent().getModel() === this.getView().setModel(jModel);
    //     var gData =  this.getOwnerComponent().getModel("appModel").getProperty("/oTableData", oTableData);
    //    gData === this.getView().setModel("appModel");
    //     this.getOwnerComponent().getModel("appModel").getProperty("/user", {
    //         name: "",
    //         age: "",
    //         gender: ""
    //     });

    // },