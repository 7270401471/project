/*
 * File: app/view/role/RoleMangerPanel.js
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

Ext.define('Evcorp.view.role.RoleMangerPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rolemangerpanel',

    requires: [
        'Evcorp.view.role.RoleMangerPanelViewModel',
        'Evcorp.view.role.RoleMangerPanelViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox'
    ],
    
    controller:'rolerolemangerpanel',
    viewModel: {
        type: 'rolerolemangerpanel'
    },
    referenceHolder: true,
    itemId:'roleManager',
    closable: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'gridpanel',
            viewConfig: {
                enableTextSelection: true
             },
            bind:'{roles}',
            reference: 'roleGrid',
            flex: 1,
            title: '列表',
            selModel: { selType: 'checkboxmodel' ,mode:'single'},   //选择框
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    width: '20%',
                    text: '名称'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'description',
                    width: '35%',
                    text: '描述'
                },
                {
                    xtype: 'gridcolumn',
                    text: '组织类型',
                    width: '30%',
                    dataIndex: 'ouTypeName'
                    
                },{

                    xtype: 'gridcolumn',
                    text: '组织id',
                    dataIndex: 'ouTypeId',
                    hidden:true
                }
            ],
            viewConfig: {
                enableTextSelection: true
             },
      /*      listeners:{
				render:function(){
					alert(123);
					this.getView().grid.getSelectionModel().select(0);//select(0);
				}
		   },*/
		   
           /*viewConfig:{
					listeners:{
							refresh:function(){
								this.grid.getSelectionModel().select(0);
							}
					}
				},*/
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: '添加',
                            icon:'images/role_add.png',
                            handler: 'onAddClick'
                        },
                        {
                            xtype: 'button',
                            text: '删除',
                            icon:'images/role_del.png',
                            handler: 'onRoleDelClick'
                        },
                        {
                            xtype: 'button',
                            text: '刷新',
                            icon:'images/refresh.png',
                            handler: 'onRefreshClick'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '名称',
                            labelWidth: 50,
                            width: 130,
                            name:'name'
                        },
                        {
                            xtype: 'button',
                            text: '查询',
                            iconCls: 'common-icon-serach',
                            handler: 'onQueryClick'
                        }
                    ]
                },
                {
			        xtype: 'pagingtoolbar',
			        dock: 'bottom',
			        bind: {
				        store: '{roles}'
				    },
			        displayInfo : true,
					displayMsg:'显示 {0} - {1}条记录，总共 {2}条记录',
					emptyMsg:'暂无数据',
					beforePageText:'页数',
					afterPageText:'总共{0}页',
					firstText:'第一页',
					prevText:'上一页',
					nextText:'下一页',
					lastText:'最后一页',
					width:'100%',
					emptyMsg : '没有记录'
			    }
            ]
        },
        {
            xtype: 'form',
            flex: 1,
            layout: 'auto',
            bodyPadding: 10,
            api: {
               submit: sysRoleContro.updateRole
		    },
		    paramsAsHash: true,
		    animCollapse: false,
            collapseDirection: 'left',
            collapsed: false,
            collapsible: true,
            titleCollapse: false,
            title: '详细信息',
            items: [
                {
                   xtype:'hidden',
                   name:'id',
                   bind:'{roleGrid.selection.id}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '名称',
                    name:'name',
                    bind:'{roleGrid.selection.name}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '描述',
                    name:'description',
                    bind:'{roleGrid.selection.description}'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: '组织类型',
                    displayField: 'ouTypeName',
                    editable:false,
			        //valueField: 'id',
			       // publishes: 'ouTypeName',
			        name:'ouTypeName',
			        bind:{
			        	value: '{roleGrid.selection.ouTypeName}'
			        },
			        store: {
			            type: 'SYSOUTYPES'
			        },
			        listeners: {
		        	 'change': function(){
		        		 if(this.store.findRecord('ouTypeName',this.value)!=null){
		        			 var id = this.store.findRecord('ouTypeName',this.value).getData().id;
			        		 this.nextSibling().setValue(id);
		        		 }
				        }
			        }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '类型id',
                    bind:{
			        	value: '{roleGrid.selection.ouTypeId}'
			        },
                    hidden: true,
                    name:'ouTypeId'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: '保存',
                            icon:'images/save.png',
                            handler: 'onModifyClick'
                        },
                        {
                            xtype: 'button',
                            text: '修改角色权限',
                            icon:'images/update.png',
                            handler: 'onModifyRoleFunClick'
                        }
                    ]
                }
            ]
        }
    ]

});