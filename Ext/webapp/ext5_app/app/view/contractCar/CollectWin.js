Ext
		.define(
				'Evcorp.view.contractCar.CollectWin',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.CollectWin',
					requires : [
							'Evcorp.view.contractCar.CollectWinViewController',
							'Evcorp.view.contractCar.CollectWinViewModel',
							'Ext.grid.Panel', 'Ext.tab.Panel',
							'Ext.grid.column.Column', 'Ext.grid.View',
							'Ext.toolbar.Toolbar', 'Ext.button.Button',
							'Ext.toolbar.Fill', 'Ext.form.Panel',
							'Ext.form.field.ComboBox', 'Ext.form.DateField' ],
					viewModel : {
						type : 'CollectWin'
					},
					controller : 'CollectWin',
					referenceHolder : true,
					maximizable: true,
					//minimizable: true,
					// itemId:'roleManager',
					title : '收集征信资料',
					height : '90%',
					 width : 1000,
					closeAction : 'destory',
					layout : {
						type : 'vbox',
						align : 'stretch',
					},
					buttonAlign:'center',
					listeners:{
						show:'initWindow'
					},
					autoScroll:true,
					items : [
							{
								flex : 1,
								autoScroll : true,
								//layout:'fit',
								//width:'90%',
								border:false,
								xtype : 'orderlistdetails',
							},
							{
								xtype : 'panel',
								layout : 'auto',
								title:'上传征信资料',
								autoScroll : false,
								flex : 1.1,
								border : true,
								tbar : [ 
										{
											xtype : 'button',
											text : '维护银行卡信息',
											iconCls : 'common-icon-save',
											listeners : {
												click : 'onEditBankCardClick'
											}
										}],
								items : [
										{
											xtype : 'container',
											layout : 'auto',
											border : true,
											cls:'p20',
											html : '<div class="red">※ 以下材料均要提供<strong>拍照版本</strong>或<strong>彩色扫描件</strong>（如果拍照件一定要拍清楚，拍不清楚的请用彩色扫描件）</div>'
													+ "<div class='halfBox tip-box'>"
													+ "<p>1.身份证（正反面）<span class='steelblue'>（必须提供）</span></p>"
													+ "<p>2.户口本 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>3.驾照及驾照副页 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>4.结婚证，或离婚证 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>5.配偶身份证（正反面） <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>6.社保号码 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>7.汽车租赁申请表 <span class='steelblue'>（必须提供，务必填写完整）</span></p>"
													+ "</div>"
													+ "<div style='display:none;'>"
													+ "<p>1.企业营业执照，组织机构代码证，税务登记证 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>2.法人代表身份证（正反面）（必须提供）</p>"
													+ "<p>3.驾驶员驾照及驾照副页（必须提供）</p>"
													+ "<p>4.汽车租赁申请表 <span class='steelblue'>（必须提供，务必填写完整）</span></p>"
													+ "</div>"
													+ "<div class='halfBox tip-box'>"
													+ "<p>1.企业营业执照，组织机构代码证，税务登记证 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>2.法人代表身份证（正反面）<span class='steelblue'>（必须提供）</span></p>"
													+ "<p>3.驾驶员驾照及驾照副页 <span class='steelblue'>（必须提供）</span></p>"
													+ "<p>4.汽车租赁申请表 <span class='steelblue'>（必须提供，务必填写完整）</span></p>"
													+ "</div>",
										} ]

							},{			
								xtype:'uploadAttachmentPanel',
								/*autoScroll : true,*/
								flex : 1,
								layout : {
									type : 'vbox',
									align : 'stretch'
								},
								
							} ],
					buttons: [{
	                     xtype : "button",
	                     text : "取消",
	                     margin : "0 50 0 0",
	                     handler : function() {
	                         this.up("window").close();
	                     },
	                 }, 
	                 {
	                     xtype : "button",
	                     cls:'btn-success',
	                     text : "提交",
	                     margin : "0 50 0 0",
	                     listeners:{
	                    	 click:'onSubmitClick'
	                     },
	                 },{
	                     xtype : "button",
	                     cls:'btn-success',
	                     text : "取消订单流程",
	                     margin : "0 50 0 0",
	                     listeners:{
	                    	 click:'onDeleteClick'
	                     },
	                 }]
				});