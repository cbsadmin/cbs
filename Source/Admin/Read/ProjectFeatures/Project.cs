/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2017 International Federation of Red Cross. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

using System;
using Read.NationalSocietyFeatures;
using Read.UserFeatures;

namespace Read.ProjectFeatures
{
    public class Project
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public User DataOwner { get; set; }

        public NationalSociety NationalSociety { get; set; }

        public string SurveillanceContext { get; set; }

        public ProjectHealthRisk[] HealthRisks { get; set; }

        public User[] DataVerifiers { get; set; }

        public string SMSGateWay { get; set; }
    }
}