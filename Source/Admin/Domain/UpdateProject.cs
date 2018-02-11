/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2017 International Federation of Red Cross. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using Events;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Domain
{
    public class UpdateProject
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public Guid NationalSocietyId { get; set; }

        /// <summary>
        /// Data owner user id.
        /// </summary>
        public Guid DataOwnerId { get; set; }

        public string SurveillanceContext { get; set; }

        public string SMSGateWay { get; set; }

        public List<UpdateHealthRisk> HealthRisks { get; set; }
    }
}