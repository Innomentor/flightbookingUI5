sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createAppModel: function () {
			var oAppModel = {
				"fname": "",
                "from": "",
                "destination": "",
                "departure": "",
                "arrival": "",
                "price": "",
                "name": "",
                "appModel": {},
                "oTableData": []
			};
			return oAppModel;
		},
	
	};
});