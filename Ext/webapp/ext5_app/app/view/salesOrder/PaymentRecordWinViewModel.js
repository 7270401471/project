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

Ext.define('Evcorp.view.salesOrder.PaymentRecordWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.paymentRecordWin',
    stores: {
    	salesOrderPayChannelStore:{
        	fields: ['code','nameCn'],
        	autoLoad: true,
        	proxy: {
        		type: 'direct',
        		api: {
        			read: chooseOptionContro.getChooseOptionWithSelect
        		},
        		extraParams: {
        			type: 'orderPayChannel'
        		}
        	}
        },
        salesOrderPayTypeStore:{
        	fields: ['code','nameCn'],
        	autoLoad: true,
        	proxy: {
        		type: 'direct',
        		api: {
        			read: chooseOptionContro.getChooseOptionWithSelect
        		},
        		extraParams: {
        			type: 'PAYMENT_TYPE'
        		}
        	}
        },
        salesOrderPaymentStore:{
        	model: 'Evcorp.model.SalesOrderPayment',
            proxy: {
                type: 'direct',
                api: {
                    read: salesOrderContro.findSalesOrderPaymentListByOrderCode,
                },
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            }
        }
    }
});