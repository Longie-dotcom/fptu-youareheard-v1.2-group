﻿namespace YouAreHeard.Models
{
    public class PillRemindTimesDTO
    {
        public int? TreatmentPlanID { get; set; }
        public string Time { get; set; }
        public int MedicationID { get; set; }
        public int DrinkDosage { get; set; }
        public string? Notes { get; set; }
        public string? FacebookId { get; set; }

        public string? DosageMetric { get; set; } //Lấy đơn vị từ Medication
        public string? MedicationName { get; set; } //Lấy tên thuốc từ Medication
    }
}