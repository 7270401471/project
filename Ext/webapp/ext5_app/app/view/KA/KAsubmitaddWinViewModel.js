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

Ext.define('Evcorp.view.KA.KAsubmitaddWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.KAsubmitaddWin',
    stores: {
    	cusIdTypeStore:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOptionWithSelect,
				extraParams : {
					'type' : 'snCustomerCertType'
				}
			}
		},
		cusNatureStore:{
			autoLoad : true,
			fields : [ 'code', 'nameCn' ],
			proxy : {
				type : 'direct',
				directFn : chooseOptionContro.getChooseOptionWithSelect,
				extraParams : {
					'type' : 'snCustomerCusNature'
				}
			}
		},
		snCustomerStore:{
        	autoLoad: true,
        	fields : [ 'code', 'nameCn' ],
			proxy : {
				type: 'direct',
				directFn : chooseOptionContro.getCurLoginSnCustomerChooseOption,
        		extraParams: {
        			type : ''
        		}
			}
        },
        buyTypeStore:{
        	autoLoad: true,
        	fields : [ 'code', 'nameCn' ],
			proxy : {
				type: 'direct',
				directFn : chooseOptionContro.getChooseOption,
        		extraParams: {
        			'type' : 'snCustomerBuyType'
        		}
			}
        },
    }
});