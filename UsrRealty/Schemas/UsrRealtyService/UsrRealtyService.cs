namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Web.SessionState;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAveragePriceByTypeName(string realtyTypeId, string realtyOfferTypeId)
        {
            if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId))
            {
                return -1;
            }

            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPrice"))
                .From("UsrRealty")
                .Where("UsrRealtyTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("UsrRealtyOfferTypeId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId))) // fixed column name
                as Select;

            decimal result = select.ExecuteScalar<decimal>();
            return Math.Round(result, 2);
        }
        private Guid GetLookupIdByName(string schemaName, string columnName, string value)
        {
            Select select = new Select(UserConnection)
                .Top(1)
                .Column("Id")
                .From(schemaName)
                .Where(columnName).IsEqual(Column.Parameter(value))
                as Select;

            return select.ExecuteScalar<Guid>();
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