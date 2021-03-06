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

Ext.define('Evcorp.view.intention.IntentionOrderPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.intentionorderpanel',
	onAddClick : function() {
		var AddPricePanel = Ext.create({
			xtype : 'intentionorderphone',
			closeAction : 'destroy'
		});
		AddPricePanel.show();
	},
	onBddClick : function() {
		var AddPricePanel = Ext.create({
			xtype : 'intentionordergoodswin',
			closeAction : 'destroy'
		});
		AddPricePanel.show();
	},
	onCddClick : function() {
		var AddPricePanel = Ext.create({
			xtype : 'intentionorderattachmentwin',
			closeAction : 'destroy'
		});
		AddPricePanel.show();
	},
	gridCellClick:function(e, cell){
		var cellindex=cell.cellIndex;
		if(cellindex==e.panel.columns.length-1){
			var window = Ext.create({
				xtype : 'olorderlistsaleswin',
				width : 300,
				closeAction : 'destroy'
			});
			window.show();
		};

	},
	onOlOrderQuyClick:function(){
		var olOrderGrid = this.lookupReference('olOrderGridRef');
    	var olOrderform = this.lookupReference('claimRuleFormRef');
    	var extraParams=olOrderform.getForm().getValues();
    	var olOrderStore=olOrderGrid.getStore();
    	olOrderStore.on("beforeload", function (olOrderStore, operation, eOpts) {
			 Ext.apply(olOrderStore.proxy.extraParams, extraParams);
			});
    	olOrderStore.loadPage(1,{"start":0,"limit":20});
	}
});
