/*
 * File: app/view/role/RoleMangerPanelViewModel.js
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

Ext.define('Evcorp.view.orderList.CarInfoListWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.carInfolistwin',
    stores: {
		carInfoGridWinStore : {
			model : 'Evcorp.model.ContractCarInfo',
			pageSize : 20,
			autoLoad : true
		},
		insuranceCompanyStore:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOption,
				extraParams : {
					'type' : 'insuranceCompany'
				}
			}
    	},
    }
});