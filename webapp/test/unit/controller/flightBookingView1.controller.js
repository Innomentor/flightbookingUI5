/*global QUnit*/

sap.ui.define([
	"project1/controller/flightBookingView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("flightBookingView1 Controller");

	QUnit.test("I should test the flightBookingView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
