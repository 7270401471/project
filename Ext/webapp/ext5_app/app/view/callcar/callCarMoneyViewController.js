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

Ext.define('Evcorp.view.callcar.callCarMoneyViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.callCarMoney',
    onQueryClick:function(){
    	var form = this.lookupReference('searchForm');
        var grid = this.lookupReference('reportGrid');
        var extraParams = form.getForm().getValues();
        var reportStore = this.getView().getViewModel().getStore('callCarDemandReportStore');
        reportStore.on("beforeload", function (reportStore, operation, eOpts) {
        	Ext.apply(reportStore.proxy.extraParams, extraParams);
		});
        reportStore.reload();
    }
});
