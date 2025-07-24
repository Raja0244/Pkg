namespace Terrasoft.Configuration
{
using System;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using System.Web.SessionState;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

[ServiceContract]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
public class RealtyService : BaseService, IReadOnlySessionState
{
    [OperationContract]
    [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
    public decimal GetAveragePriceByTypeName(string realtyTypeId/*, string realtyOfferTypeId*/)
    {
        if (string.IsNullOrEmpty(realtyTypeId))
        {
            return -1;
        }
		Guid realtyOfferTypeId = ((Select)new Select(UserConnection)
			    .Column("Id")
			    .From("UsrOfferType")
			    .Where("Name").IsEqual(Column.Parameter("Sale")))
				.ExecuteScalar<Guid>();

        var select = new Select(UserConnection)
            .Column(Func.Avg("UsrPrice")) 
            .From("UsrRealty")
            .Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
            .And("UsrOfferTypeId").IsEqual(Column.Parameter(realtyOfferTypeId)) 
            as Select;

        decimal result = select.ExecuteScalar<decimal>();
	    return Math.Round(result, 2);
    }

    [OperationContract] 
    [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
    public string GetExample()
    {
        return "OK!";
    }
}
}