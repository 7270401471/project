/*
 * File: app/view/menu/menuPanelViewController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Evcorp.view.orderList.CarInfoListWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.carInfolistwin',
    insuranceCompanyEditor:function(value){
		if(value){
			var insuranceCompanyStore=this.getView().getViewModel().getStore('insuranceCompanyStore');
			return insuranceCompanyStore.findRecord('code', value).data.nameCn;
		} else {
			return '';
		}
	},
	comInsuranceCompanyEditor:function(value){
		if(value){
			var insuranceCompanyStore=this.getView().getViewModel().getStore('insuranceCompanyStore');
			return insuranceCompanyStore.findRecord('code', value).data.nameCn;
		} else {
			return '';
		}
	},
	
	queryContractCarInfoList:function() {
		var vin = this.lookupReference('vinRef');
		var store = this.getView().getViewModel().getStore('carInfoGridWinStore');
		var extraParams = store.getProxy().extraParams;
		extraParams.carFrameNo = vin.getValue();
		store.reload();
	},
});
