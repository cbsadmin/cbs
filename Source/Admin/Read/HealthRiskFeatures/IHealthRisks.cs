using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Read.HealthRiskFeatures
{
    public interface IHealthRisks
    {
        Task SaveAsync(HealthRisk healthRisk);

        IEnumerable<HealthRisk> GetAll();

        Task<IEnumerable<HealthRisk>> GetAllAsync();

        HealthRisk GetById(Guid id);

        Task RemoveAsync(Guid id);

        Task ReplaceAsync(HealthRisk healthRisk);
    }
}
