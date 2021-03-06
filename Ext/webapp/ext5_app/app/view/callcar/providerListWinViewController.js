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

Ext.define('Evcorp.view.callcar.providerListWinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.providerListWin',
    onQueryClick:function(){
    	var search = Ext.ComponentQuery.query("#searchId")[0].value;
    	var store = this.getView().getViewModel().getStore('venderStore');
    	store.load({params:{search:search}});
    },
    onChoiceClick:function(){
    	var grid = this.lookupReference("venderGrid");
    	var sel = grid.getSelectionModel().getSelection();
    	if(sel.length>0){
    		var vender = sel[0].data;
        	var venderCode = Ext.ComponentQuery.query("#venderCodeId")[0];
        	if(venderCode!=null)
        		venderCode.setValue(vender.code);
        	var venderName = Ext.ComponentQuery.query("#venderNameId")[0];
        	if(venderName!=null)
        		venderName.setValue(vender.fullName);
        	var venderId = Ext.ComponentQuery.query("#venerIdid")[0];
        	if(venderId!=null)
        		venderId.setValue(vender.id);
        	var callCarForm = Ext.ComponentQuery.query("#callCarFormId")[0];
        	if(callCarForm!=null){
        		callCarForm.getForm().findField('venderName').setValue(vender.fullName);
        		venderName.setValue(null);
        		venderId.setValue(null);
        	}
        	var win = this.getView();
        	win.close();
    	}else{
    		Ext.Msg.alert('提示','请先选择一个供应商！');
    	}
    },
    onRowDbClick:function(grid, record, tr){
    	var vender = record.data;
    	var venderCode = Ext.ComponentQuery.query("#venderCodeId")[0];
    	if(venderCode!=null)
    		venderCode.setValue(vender.code);
    	var venderName = Ext.ComponentQuery.query("#venderNameId")[0];
    	if(venderName!=null)
    		venderName.setValue(vender.fullName);
    	var venderId = Ext.ComponentQuery.query("#venerIdid")[0];
    	if(venderId!=null)
    		venderId.setValue(vender.id);
    	var callCarForm = Ext.ComponentQuery.query("#callCarFormId")[0];
    	if(callCarForm!=null){
    		callCarForm.getForm().findField('venderName').setValue(vender.fullName);
    		venderName.setValue(null);
    		venderId.setValue(null);
    	}
    	var win = this.getView();
    	win.close();
    }
});
