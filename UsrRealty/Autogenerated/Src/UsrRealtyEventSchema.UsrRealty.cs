namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventSchema

	/// <exclude/>
	public class UsrRealtyEventSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventSchema(UsrRealtyEventSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("fe145689-2d00-4836-a7c6-c53c18ab2e91");
			Name = "UsrRealtyEvent";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("aa0ed4d7-803d-4704-93e6-095c6fc728e2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,7,242,31,6,209,131,4,102,73,174,77,27,168,141,91,2,161,45,177,210,75,233,97,189,26,43,91,246,67,236,172,156,186,37,255,189,179,90,185,118,228,20,50,23,105,103,222,188,121,111,24,112,210,34,117,82,33,212,24,130,36,191,137,98,225,221,70,183,125,144,81,123,119,126,246,231,252,12,56,122,210,174,133,213,142,34,218,171,227,212,113,163,181,222,253,183,24,80,44,93,212,81,35,189,6,35,150,91,116,113,15,253,62,164,119,67,238,86,179,8,135,161,92,169,7,180,242,51,123,128,247,80,220,83,184,67,105,226,174,168,126,228,166,174,95,27,173,64,25,73,4,185,246,2,13,188,133,185,36,124,161,146,89,198,5,28,17,250,45,75,214,13,194,214,235,6,190,184,149,220,178,145,210,175,127,162,138,64,232,26,12,51,200,132,115,220,176,171,129,246,67,104,9,176,58,208,29,49,167,88,179,10,241,143,109,79,131,213,213,115,88,230,133,48,248,97,227,101,78,84,185,97,2,110,80,105,43,13,116,65,171,180,165,220,37,62,97,172,119,29,54,11,111,122,235,190,73,211,227,187,17,122,93,166,77,126,77,248,98,58,90,111,160,204,76,215,112,121,177,143,234,57,104,226,42,5,138,27,90,72,167,208,96,195,34,98,232,145,153,79,113,20,67,186,8,190,73,146,45,214,104,59,35,99,146,237,240,17,110,189,146,70,255,150,107,131,171,1,87,142,102,238,9,3,31,173,227,229,243,197,138,59,36,223,7,197,32,31,152,101,118,58,38,197,225,92,242,157,21,51,40,78,38,144,24,86,115,67,181,247,115,221,230,87,81,137,218,143,10,170,87,216,96,249,57,33,62,250,96,101,44,39,246,120,240,165,184,152,191,57,217,118,138,248,16,252,227,96,127,249,75,97,151,12,238,251,167,240,167,195,115,252,229,207,211,95,141,131,138,118,227,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("68ab49af-9ed3-1ab1-2ede-93de1f83cd6f"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("aa0ed4d7-803d-4704-93e6-095c6fc728e2"),
				CreatedInSchemaUId = new Guid("fe145689-2d00-4836-a7c6-c53c18ab2e91"),
				ModifiedInSchemaUId = new Guid("fe145689-2d00-4836-a7c6-c53c18ab2e91")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("fe145689-2d00-4836-a7c6-c53c18ab2e91"));
		}

		#endregion

	}

	#endregion

}

