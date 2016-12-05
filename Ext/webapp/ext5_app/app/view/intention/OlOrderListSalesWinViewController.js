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

Ext.define('Evcorp.view.intention.OlOrderListSalesWinViewController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.olorderlistsaleswin',
	saveSale : function() {
		var implementSale = this.lookupReference('implementSaleRef');
		var remark = this.lookupReference('remarkRef');
		var saleWinForm = this.lookupReference('saleWinFormRef');
		var olOrderGrid = Ext.ComponentQuery.query('#olOrderGrid')[0];
		var olOrderGridStore = Ext.ComponentQuery.query('#olOrderGrid')[0].getStore();
		var selectModel = olOrderGrid.getSelectionModel().getSelection();
		var orderNo = selectModel[0].data.orderNo;
		var win = this.getView();
		var isValid = saleWinForm.getForm().isValid();
		if (isValid) {
			Ext.Ajax.request({
				url : 'olOrder/createSaleOrder',
				params : {
					'orderNo' : orderNo,
					'implementsaleId':implementSale.getValue(),
					'remark':remark.getValue()
				},
				async : false,
				success : function(response) {
					if(response.status==200 && response.statusText=='OK'){
						Ext.Msg.alert("提示","分配成功！")
						olOrderGridStore.reload();
						win.close();
					}else{
                		Ext.Msg.alert("提示","系统错误,操作失败!");
        				win.close();
                	}
				}
			});
		}
	}
});