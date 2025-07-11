define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "942e39be-50e0-428b-b04d-78ee7210a11a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrTitle_f843yd7",
					"labelPosition": "auto",
					"control": "$PDS_UsrTitle_f843yd7",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_u9v5vf8",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_u9v5vf8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_n15jun5",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_n15jun5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_s7o4ty8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_h74lwfq",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_h74lwfq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_ztq9prh",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_ztq9prh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_fxsqlyn",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_fxsqlyn",
					"multiline": false,
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_w2q687b",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_w2q687b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_ubt4zk2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ubt4zk2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_ltlf699",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_ltlf699",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DataGrid_mi9s3ko",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_mi9s3ko",
					"primaryColumnName": "DataGrid_mi9s3koDS_UsrId",
					"columns": [
						{
							"id": "d45b2d3e-d6e7-7d3b-4afe-a0e4e4df0b98",
							"code": "DataGrid_mi9s3koDS_UsrVisitDateTime",
							"caption": "#ResourceString(DataGrid_mi9s3koDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "a449c074-b5b8-f03e-95b5-5338c34b05bb",
							"code": "DataGrid_mi9s3koDS_UsrPotentialCustomer",
							"caption": "#ResourceString(DataGrid_mi9s3koDS_UsrPotentialCustomer)#",
							"dataValueType": 28
						},
						{
							"id": "26dad0e9-9f77-ab65-6c8a-71d66ae67961",
							"code": "DataGrid_mi9s3koDS_UsrOwner",
							"caption": "#ResourceString(DataGrid_mi9s3koDS_UsrOwner)#",
							"dataValueType": 28
						},
						{
							"id": "b0615aeb-2d78-f97d-b1da-dbb8b9481077",
							"code": "DataGrid_mi9s3koDS_UsrComment",
							"caption": "#ResourceString(DataGrid_mi9s3koDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_u9v5vf8": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrArea_n15jun5": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrTitle_f843yd7": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrType_h74lwfq": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_ztq9prh": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_fxsqlyn": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_w2q687b": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_ltlf699": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"DataGrid_mi9s3ko": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_mi9s3koDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_mi9s3koDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "DataGrid_mi9s3koDS.UsrVisitDateTime"
									}
								},
								"DataGrid_mi9s3koDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "DataGrid_mi9s3koDS.UsrPotentialCustomer"
									}
								},
								"DataGrid_mi9s3koDS_UsrOwner": {
									"modelConfig": {
										"path": "DataGrid_mi9s3koDS.UsrOwner"
									}
								},
								"DataGrid_mi9s3koDS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_mi9s3koDS.UsrComment"
									}
								},
								"DataGrid_mi9s3koDS_UsrId": {
									"modelConfig": {
										"path": "DataGrid_mi9s3koDS.UsrId"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"DataGrid_mi9s3koDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});