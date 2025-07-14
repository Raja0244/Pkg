define("UsrRealtyVisitListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": null,
						"defaultValue": []
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "e00a4680-720f-8bfb-8e6d-d26832a1e425",
							"code": "PDS_UsrVisitDateTime",
							"caption": "#ResourceString(PDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "55b4be17-3fd4-9692-aa07-6e81226e2644",
							"code": "PDS_UsrPotentialCustomer",
							"caption": "#ResourceString(PDS_UsrPotentialCustomer)#",
							"dataValueType": 28
						},
						{
							"id": "3c128dc4-21cd-0caa-7a5e-54f392eec436",
							"code": "PDS_UsrOwner",
							"caption": "#ResourceString(PDS_UsrOwner)#",
							"dataValueType": 28
						},
						{
							"id": "191db156-f37a-1808-23c2-033cab201f29",
							"code": "PDS_UsrComment",
							"caption": "#ResourceString(PDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "26d5a95b-f81c-2487-8e7b-276d1aa86add",
							"code": "PDS_UsrRealty",
							"caption": "#ResourceString(PDS_UsrRealty)#",
							"dataValueType": 10
						},
						{
							"id": "ff9ceaea-7465-1a7d-5960-070a93a557a1",
							"code": "PDS_UsrComment",
							"caption": "#ResourceString(PDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"primaryColumnName": "PDS_UsrId"
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Items_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"PDS_Id"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrVisitDateTime": {
						"modelConfig": {
							"path": "PDS.UsrVisitDateTime"
						}
					},
					"PDS_UsrPotentialCustomer": {
						"modelConfig": {
							"path": "PDS.UsrPotentialCustomer"
						}
					},
					"PDS_UsrOwner": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrComment": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrRealty": {
						"modelConfig": {
							"path": "PDS.UsrRealty"
						}
					},
					"PDS_UsrId": {
						"modelConfig": {
							"path": "PDS.UsrId"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "UsrRealtyVisitDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrRealtyVisitDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
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
						},
						"UsrRealty": {
							"path": "UsrRealty"
						}
					},
					"entitySchemaName": "UsrRealtyVisit"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});