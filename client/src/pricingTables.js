const packagePolicies = ['cancerBasePolicyPricing', 'heartStrokePackagePricing', 'accidentWithWellness2Pricing']


  const stateBasedPricing = {
    FL: {
      // cancerBasePolicyPricing: {
      //   name: 'Cancer Base Policy',
      //   "20-24": { "Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7 },
      //   "25-29": { "Individual": 4, "IndividualAndSpouse": 7, "OneParent": 4.75, "Family": 7.75 },
      //   "30-34": { "Individual": 5, "IndividualAndSpouse": 8.25, "OneParent": 5.5, "Family": 9 },
      //   "35-39": { "Individual": 5.75, "IndividualAndSpouse": 9.5, "OneParent": 6.5, "Family": 10.25 },
      //   "40-44": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.5, "Family": 12 },
      //   "45-49": { "Individual": 7.75, "IndividualAndSpouse": 13, "OneParent": 8.5, "Family": 13.75 },
      //   "50-54": { "Individual": 9, "IndividualAndSpouse": 15, "OneParent": 9.5, "Family": 15.75 },
      //   "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
      //   "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
      //   "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
      //   "70-74": { "Individual": 13.75, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
      //   "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
      //   "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      // },

      cancerPackagePricing: {
        name: "Cancer Package",
        note: "Only choose one Out-of-Pocket option.",
        "20-24": { "Individual": 4.15, "IndividualAndSpouse": 6.9, "OneParent": 4.7, "Family": 7.7 },
        "25-29": { "Individual": 4.45, "IndividualAndSpouse": 7.7, "OneParent": 5.25, "Family": 8.55 },
        "30-34": { "Individual": 5.5, "IndividualAndSpouse": 9.1, "OneParent": 6.05, "Family": 9.9 },
        "35-39": { "Individual": 6.35, "IndividualAndSpouse": 10.45, "OneParent": 7.15, "Family": 11.3 },
        "40-44": { "Individual": 7.45, "IndividualAndSpouse": 12.4, "OneParent": 8.25, "Family": 13.2 },
        "45-49": { "Individual": 8.55, "IndividualAndSpouse": 14.3, "OneParent": 9.35, "Family": 15.15 },
        "50-54": { "Individual": 9.9, "IndividualAndSpouse": 16.5, "OneParent": 10.45, "Family": 17.35 },
        "55-59": { "Individual": 10.25, "IndividualAndSpouse": 17, "OneParent": 10.75, "Family": 17.5 },
        "60-64": { "Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5 },
        "65-69": { "Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13, "Family": 21.5 },
        "70-74": { "Individual": 13.75, "IndividualAndSpouse": 23, "OneParent": 14, "Family": 23.25 },
        "75-79": { "Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75 },
        "80-84": { "Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15, "Family": 24.75 }
      },

      // heartStrokeBasePolicyPricing: {
      //   name: "Heart & Stroke Base Policy",
      //   "20-24": { "Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7.00 },
      //   "25-29": { "Individual": 4.50, "IndividualAndSpouse": 7.50, "OneParent": 5.00, "Family": 8.25 },
      //   "30-34": { "Individual": 5.50, "IndividualAndSpouse": 9.25, "OneParent": 6.00, "Family": 10.00 },
      //   "35-39": { "Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.50, "Family": 12.00 },
      //   "40-44": { "Individual": 8.00, "IndividualAndSpouse": 13.25, "OneParent": 8.75, "Family": 14.00 },
      //   "45-49": { "Individual": 8.75, "IndividualAndSpouse": 14.50, "OneParent": 9.50, "Family": 15.25 },
      //   "50-54": { "Individual": 10.75, "IndividualAndSpouse": 18.00, "OneParent": 11.25, "Family": 18.75 },
      //   "55-59": { "Individual": 13.00, "IndividualAndSpouse": 21.75, "OneParent": 13.50, "Family": 22.25 },
      //   "60-64": { "Individual": 15.50, "IndividualAndSpouse": 25.75, "OneParent": 15.75, "Family": 26.00 },
      //   "65-69": { "Individual": 18.75, "IndividualAndSpouse": 31.25, "OneParent": 19.00, "Family": 31.50 },
      //   "70-74": { "Individual": 22.50, "IndividualAndSpouse": 37.00, "OneParent": 22.50, "Family": 37.25 },
      //   "75-79": { "Individual": 26.50, "IndividualAndSpouse": 44.25, "OneParent": 26.75, "Family": 44.50 },
      //   "80-84": { "Individual": 30.25, "IndividualAndSpouse": 50.50, "OneParent": 30.50, "Family": 50.75 }
      // },

      heartStrokePackagePricing: {
        name: 'Heart & Stroke Package',
        note: "Only choose one Out-of-Pocket option.",
        '20-24': {'Individual': 4.15, 'IndividualAndSpouse': 6.9, 'OneParent': 4.7, 'Family': 7.7},
        '25-29': {'Individual': 4.95, 'IndividualAndSpouse': 8.25, 'OneParent': 5.5, 'Family': 9.1},
        '30-34': {'Individual': 6.05, 'IndividualAndSpouse': 10.2, 'OneParent': 6.6, 'Family': 11.0},
        '35-39': {'Individual': 7.45, 'IndividualAndSpouse': 12.4, 'OneParent': 8.25, 'Family': 13.2},
        '40-44': {'Individual': 8.8, 'IndividualAndSpouse': 14.6, 'OneParent': 9.65, 'Family': 15.4},
        '45-49': {'Individual': 9.65, 'IndividualAndSpouse': 15.95, 'OneParent': 10.45, 'Family': 16.8},
        '50-54': {'Individual': 11.85, 'IndividualAndSpouse': 19.8, 'OneParent': 12.4, 'Family': 20.65},
        '55-59': {'Individual': 13.0, 'IndividualAndSpouse': 21.75, 'OneParent': 13.5, 'Family': 22.25},
        '60-64': {'Individual': 15.5, 'IndividualAndSpouse': 25.75, 'OneParent': 15.75, 'Family': 26.0},
        '65-69': {'Individual': 18.75, 'IndividualAndSpouse': 31.25, 'OneParent': 19.0, 'Family': 31.5},
        '70-74': {'Individual': 22.5, 'IndividualAndSpouse': 37.0, 'OneParent': 22.5, 'Family': 37.25},
        '75-79': {'Individual': 26.5, 'IndividualAndSpouse': 44.25, 'OneParent': 26.75, 'Family': 44.5},
        '80-84': {'Individual': 30.25, 'IndividualAndSpouse': 50.5, 'OneParent': 30.5, 'Family': 50.75}
      },

      accidentWithWellness1Pricing: {
        name: " Accident option 1",
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 12.75, "IndividualAndSpouse": 25, "OneParent": 25.75, "Family": 39.80 }
      },

      accidentWithWellness2Pricing: {
        name: 'Accident 2',
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 17.95, "IndividualAndSpouse": 35, "OneParent": 35.25, "Family": 54.80 }
      },
      cancerPlus1Pricing: {
        name: 'Cancer Plus option 1',
        note: "Only choose one Out-of-Pocket option.",
        "18-29": { "Individual": 12.54, "IndividualAndSpouse": 27.36, "OneParent": 14.83, "Family": 27.36 },
        "30-39": { "Individual": 21.99, "IndividualAndSpouse": 46.28, "OneParent": 24.28, "Family": 46.28 },
        "40-49": { "Individual": 40.95, "IndividualAndSpouse": 84.19, "OneParent": 43.23, "Family": 84.19 },
        "50-54": { "Individual": 68.31, "IndividualAndSpouse": 138.90, "OneParent": 70.59, "Family": 138.90 },
        "55-69": { "Individual": 82.76, "IndividualAndSpouse": 167.83, "OneParent": 85.06, "Family": 167.83 },
      },
      cancerPlus2Pricing: {
        name: "Cancer Plus option 2",
        note: "Only choose one Out-of-Pocket option.",
        "18-29": { "Individual": 11, "IndividualAndSpouse": 24.08, "OneParent": 13.08, "Family": 24.08 },
        "30-39": { "Individual": 19.51, "IndividualAndSpouse": 41.10, "OneParent": 21.58, "Family": 41.10 },
        "40-49": { "Individual": 36.42, "IndividualAndSpouse": 74.93, "OneParent": 38.50, "Family": 74.93 },
        "50-54": { "Individual": 61.11, "IndividualAndSpouse": 124.31, "OneParent": 63.19, "Family": 124.31 },
        "55-69": { "Individual": 74.95, "IndividualAndSpouse": 151.96, "OneParent": 77.02, "Family": 151.96 },
      },

      dentalVisionHearing1Pricing: {
        name: "DVH $1,000 Max",
        note: "Only choose one Out-of-Pocket option.",
        "18-39": { "Individual": 27.50, "IndividualAndSpouse": 88.08, "OneParent": 88.08, "Family": 88.08 },
        "40-54": { "Individual": 29.75, "IndividualAndSpouse": 92.42, "OneParent": 92.42, "Family": 92.42 },
        "55-64": { "Individual": 32.21, "IndividualAndSpouse": 96.93, "OneParent": 96.93, "Family": 96.93 },
        "65-75": { "Individual": 35.67, "IndividualAndSpouse": 104.32, "OneParent": 104.32, "Family": 104.32 },
        "76-85": { "Individual": 41.08, "IndividualAndSpouse": 119.90, "OneParent": 119.90, "Family": 119.90 },
      },

      dentalVisionHearing2Pricing: {
        name: "DVH $1,500 Max",
        note: "Only choose one Out-of-Pocket option.",
        "18-39": { "Individual": 35.16, "IndividualAndSpouse": 112.92, "OneParent": 112.92, "Family": 112.92 },
        "40-54": { "Individual": 37.50, "IndividualAndSpouse": 117.83, "OneParent": 117.83, "Family": 117.83 },
        "55-64": { "Individual": 40.99, "IndividualAndSpouse": 124.67, "OneParent": 124.67, "Family": 124.67},
        "65-75": { "Individual": 46.34, "IndividualAndSpouse": 135.16, "OneParent": 135.16, "Family": 135.16 },
        "76-85": { "Individual": 53.14, "IndividualAndSpouse": 155.41, "OneParent": 155.41, "Family": 155.41 },
      },

      outOfPocket1Pricing: {
        name: "Out-of-Pocket 100/2,500/1,000",
        note: "Only choose one Out-of-Pocket option.",
        "0-29": { "Individual": 28.73, "IndividualAndSpouse": 57.46, "OneParent": 71.84, "Family": 100.56 },
        "30-39": { "Individual": 34.45, "IndividualAndSpouse": 68.92, "OneParent": 77.56, "Family": 112.01 },
        "40-49": { "Individual": 43.13, "IndividualAndSpouse": 86.28, "OneParent": 86.25, "Family": 129.39 },
        "50-64": { "Individual": 60.17, "IndividualAndSpouse": 120.35, "OneParent": 103.28, "Family": 163.45 },
      },
      
      outOfPocket2Pricing: {
        name: "Out-of-Pocket 200/5,000/2,000",
        note: "Only choose one Out-of-Pocket option.",
        "0-29": { "Individual": 41.55, "IndividualAndSpouse": 83.09, "OneParent": 103.87, "Family": 145.42 },
        "30-39": { "Individual": 53.63, "IndividualAndSpouse": 107.30, "OneParent": 115.98, "Family": 169.62 },
        "40-49": { "Individual": 71.66, "IndividualAndSpouse": 143.34, "OneParent": 134.01, "Family": 205.67 },
        "50-64": { "Individual": 106.01, "IndividualAndSpouse": 212.05, "OneParent": 168.35, "Family": 274.37 },
      
      },
      
      outOfPocket3Pricing: {
        name: "Out-of-Pocket 200/6,350/3,000",
        note: "Only choose one Out-of-Pocket option.",
        "0-29": { "Individual": 52.30, "IndividualAndSpouse": 104.60, "OneParent": 130.75, "Family": 183.05 },
        "30-39": { "Individual": 70.21, "IndividualAndSpouse": 140.44, "OneParent": 148.68, "Family": 218.90 },
        "40-49": { "Individual": 95.96, "IndividualAndSpouse": 191.94, "OneParent": 174.43, "Family": 270.40 },
        "50-64": { "Individual": 143.81, "IndividualAndSpouse": 287.64, "OneParent": 222.27, "Family": 366.09 },
      
      },
    },

    TX: {
      // cancerBasePolicyPricing: {
      //   name: "Cancer Base Policy",
      //   "20-24": {"Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7.0},
      //   "25-29": {"Individual": 4.0, "IndividualAndSpouse": 7.0, "OneParent": 4.75, "Family": 7.75},
      //   "30-34": {"Individual": 5.0, "IndividualAndSpouse": 8.25, "OneParent": 5.5, "Family": 9.0},
      //   "35-39": {"Individual": 5.75, "IndividualAndSpouse": 9.5, "OneParent": 6.5, "Family": 10.25},
      //   "40-44": {"Individual": 6.75, "IndividualAndSpouse": 11.25, "OneParent": 7.5, "Family": 12.0},
      //   "45-49": {"Individual": 7.75, "IndividualAndSpouse": 13.0, "OneParent": 8.5, "Family": 13.75},
      //   "50-54": {"Individual": 9.0, "IndividualAndSpouse": 15.0, "OneParent": 9.5, "Family": 15.75},
      //   "55-59": {"Individual": 10.25, "IndividualAndSpouse": 17.0, "OneParent": 10.75, "Family": 17.5},
      //   "60-64": {"Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5},
      //   "65-69": {"Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13.0, "Family": 21.5},
      //   "70-74": {"Individual": 13.75, "IndividualAndSpouse": 23.0, "OneParent": 14.0, "Family": 23.25},
      //   "75-79": {"Individual": 14.5, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75},
      //   "80-84": {"Individual": 14.75, "IndividualAndSpouse": 24.5, "OneParent": 15.0, "Family": 24.75}
      // },

      // cancerRecurrenceRider: {
      //   name: "Cancer Recurrence Rider",
      //   "20-39": {"Individual": 0.3, "IndividualAndSpouse": 0.5, "OneParent": 0.35, "Family": 0.6},
      //   "40-44": {"Individual": 0.4, "IndividualAndSpouse": 0.7, "OneParent": 0.45, "Family": 0.75},
      //   "45-49": {"Individual": 0.55, "IndividualAndSpouse": 0.9, "OneParent": 0.55, "Family": 0.95},
      //   "50-54": {"Individual": 0.7, "IndividualAndSpouse": 1.2, "OneParent": 0.7, "Family": 1.2}
      // },

      cancerPackagePricing: {
        name: 'Cancer Package',
        note: "Only choose one Out-of-Pocket option.",
        "20-24": {"Individual": 4.05, "IndividualAndSpouse": 6.75, "OneParent": 4.60, "Family": 7.60},
        "25-29": {"Individual": 4.30, "IndividualAndSpouse": 7.5, "OneParent": 5.10, "Family": 8.35},
        "30-34": {"Individual": 5.30, "IndividualAndSpouse": 8.75, "OneParent": 5.85, "Family": 9.60},
        "35-39": {"Individual": 6.05, "IndividualAndSpouse": 10.00, "OneParent": 6.85, "Family": 10.85},
        "40-44": {"Individual": 7.15, "IndividualAndSpouse": 11.95, "OneParent": 7.95, "Family": 12.75},
        "45-49": {"Individual": 8.30, "IndividualAndSpouse": 13.90, "OneParent": 9.05, "Family": 14.70},
        "50-54": {"Individual": 9.70, "IndividualAndSpouse": 16.20, "OneParent": 10.20, "Family": 16.95},
        "55-59": {"Individual": 10.25, "IndividualAndSpouse": 17.00, "OneParent": 10.75, "Family": 17.5},
        "60-64": {"Individual": 11.5, "IndividualAndSpouse": 19.25, "OneParent": 11.75, "Family": 19.5},
        "65-69": {"Individual": 12.75, "IndividualAndSpouse": 21.25, "OneParent": 13.0, "Family": 21.5},
        "70-74": {"Individual": 13.75, "IndividualAndSpouse": 23.00, "OneParent": 14.0, "Family": 23.25},
        "75-79": {"Individual": 14.50, "IndividualAndSpouse": 24.25, "OneParent": 14.75, "Family": 24.75},
        "80-84": {"Individual": 14.75, "IndividualAndSpouse": 24.50, "OneParent": 15.0, "Family": 24.75}
      },

      // heartStrokeBasePolicyPricing: {
      //   name: "Heart & Stroke Base Policy",
      //   "20-39": {"Individual": 3.5, "Individual & Spouse": 5.75, "One Parent": 3.75, "Family": 6.0},
      //   "40-44": {"Individual": 4.75, "Individual & Spouse": 8.0, "One Parent": 5.0, "Family": 8.25},
      //   "45-49": {"Individual": 6.25, "Individual & Spouse": 10.75, "One Parent": 6.5, "Family": 11.0},
      //   "50-54": {"Individual": 8.0, "Individual & Spouse": 14.0, "One Parent": 8.25, "Family": 14.25},
      //   "55-59": {"Individual": 10.25, "Individual & Spouse": 18.0, "One Parent": 10.5, "Family": 18.25},
      //   "60-64": {"Individual": 13.25, "Individual & Spouse": 23.25, "One Parent": 13.5, "Family": 23.5},
      //   "65-69": {"Individual": 16.75, "Individual & Spouse": 29.5, "One Parent": 17.0, "Family": 29.75},
      //   "70-74": {"Individual": 21.25, "Individual & Spouse": 37.5, "One Parent": 21.5, "Family": 37.75},
      //   "75-79": {"Individual": 26.0, "Individual & Spouse": 46.0, "One Parent": 26.25, "Family": 46.25},
      //   "80-84": {"Individual": 30.5, "Individual & Spouse": 53.75, "One Parent": 30.75, "Family": 54.0}
      // },

      heartStrokePackagePricing: {
        name: 'Heart & Stroke Package',
        note: "Only choose one Out-of-Pocket option.",
        "20-39": {"Individual": 3.85, "IndividualAndSpouse": 6.35, "OneParent": 4.15, "Family": 6.60},
        "40-44": {"Individual": 5.25, "IndividualAndSpouse": 8.80, "OneParent": 5.5, "Family": 9.10},
        "45-49": {"Individual": 6.90, "IndividualAndSpouse": 11.85, "OneParent": 7.15, "Family": 12.15},
        "50-54": {"Individual": 8.80, "IndividualAndSpouse": 15.40, "OneParent": 9.10, "Family": 15.70},
        "55-59": {"Individual": 10.25, "IndividualAndSpouse": 18.0, "OneParent": 10.5, "Family": 18.25},
        "60-64": {"Individual": 13.25, "IndividualAndSpouse": 23.25, "OneParent": 13.5, "Family": 23.5},
        "65-69": {"Individual": 16.75, "IndividualAndSpouse": 29.5, "OneParent": 17.0, "Family": 29.75},
        "70-74": {"Individual": 21.25, "IndividualAndSpouse": 37.5, "OneParent": 21.5, "Family": 37.75},
        "75-79": {"Individual": 26.0, "IndividualAndSpouse": 46.0, "OneParent": 26.25, "Family": 46.25},
        "80-84": {"Individual": 30.5, "IndividualAndSpouse": 53.75, "OneParent": 30.75, "Family": 54.0}
      },

      accidentWithWellness1Pricing: {
        name: 'Accident option 1',
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 21.33, "IndividualAndSpouse": 31.83, "OneParent": 31.83, "Family": 42.33 }

      },

      accidentWithWellness2Pricing: {
        name: 'Accident 2',
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 25.00, "IndividualAndSpouse": 38.00, "OneParent": 38.00, "Family": 51 }

      },

      dentalVisionHearing1Pricing: {
        name: "DVH $1,000 Max",
        note: "Choose one DVH option.",
        "18-39": { "Individual": 30.24, "IndividualAndSpouse": 96.79, "OneParent": 96.79, "Family": 96.79 },
        "40-54": { "Individual": 22.74, "IndividualAndSpouse": 101.63, "OneParent": 101.63, "Family": 101.63 },
        "55-64": { "Individual": 35.07, "IndividualAndSpouse": 106.54, "OneParent": 106.54, "Family": 106.54 },
        "65-74": { "Individual": 37.57, "IndividualAndSpouse": 111.37, "OneParent": 111.37, "Family": 111.37 },
        "75-85": { "Individual": 43.15, "IndividualAndSpouse": 128.03, "OneParent": 128.03, "Family": 128.03 },
      },
      
      dentalVisionHearing2Pricing: {
        name: "DVH $1,500 Max",
        note: "Choose one DVH option.",
        "18-39": { "Individual": 39.98, "IndividualAndSpouse": 127.70, "OneParent": 127.70, "Family": 127.70 },
        "40-54": { "Individual": 42.40, "IndividualAndSpouse": 132.61, "OneParent": 132.61, "Family": 132.61 },
        "55-64": { "Individual": 45.98, "IndividualAndSpouse": 139.86, "OneParent": 139.86, "Family": 139.86 },
        "65-74": { "Individual": 49.65, "IndividualAndSpouse": 147.11, "OneParent": 147.11, "Family": 147.11 },
        "75-85": { "Individual": 57.06, "IndividualAndSpouse": 169.18, "OneParent": 169.18, "Family": 169.18 },
      },
      
      dentalVisionHearing3Pricing: {
        name: "DVH $3,000 Max",
        note: "Choose one DVH option.",
        "18-39": { "Individual": 48.15, "IndividualAndSpouse": 154.19, "OneParent": 154.19, "Family": 154.19 },
        "40-54": { "Individual": 52.23, "IndividualAndSpouse": 159.85, "OneParent": 159.85, "Family": 159.85 },
        "55-64": { "Individual": 59.56, "IndividualAndSpouse": 172.60, "OneParent": 172.60, "Family": 172.60 },
        "65-74": { "Individual": 64.39, "IndividualAndSpouse": 190.59, "OneParent": 190.59, "Family": 190.59 },
        "75-85": { "Individual": 74.05, "IndividualAndSpouse": 219.50, "OneParent": 219.50, "Family": 219.50 },
      },

      dentalVisionHearing4Pricing: {
        name: "DVH $5,000 Max",
        note: "Choose one DVH option.",
        "18-39": { "Individual": 60.64, "IndividualAndSpouse": 199.09, "OneParent": 199.09, "Family": 199.09 },
        "40-54": { "Individual": 65.56, "IndividualAndSpouse": 208.92, "OneParent": 208.92, "Family": 208.92 },
        "55-64": { "Individual": 73.72, "IndividualAndSpouse": 225.24, "OneParent": 225.24, "Family": 225.24 },
        "65-74": { "Individual": 78.97, "IndividualAndSpouse": 235.74, "OneParent": 235.74, "Family": 235.74 },
        "75-85": { "Individual": 88.63, "IndividualAndSpouse": 255.06, "OneParent": 255.06, "Family": 255.06 },
      },

      outOfPocket1Pricing: {
        name: "Out-of-Pocket 100/2,500/1,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "18-34": { "Individual": 27.91, "IndividualAndSpouse": 49.36, "OneParent": 72.82, "Family": 94.72 },
        "35-44": { "Individual": 34.95, "IndividualAndSpouse": 62.41, "OneParent": 79.85, "Family": 107.41 },
        "45-54": { "Individual": 43.34, "IndividualAndSpouse": 77.92, "OneParent": 89.15, "Family": 123.28 },
        "55-64": { "Individual": 48.62, "IndividualAndSpouse": 87.23, "OneParent": 93.99, "Family": 132.14 },
      },
      
      outOfPocket2Pricing: {
        name: "Out-of-Pocket 200/5,000/2,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "0-29": { "Individual": 44.15, "IndividualAndSpouse": 77.73, "OneParent": 111.42, "Family": 145.91 },
        "30-39": { "Individual": 58.21, "IndividualAndSpouse": 103.83, "OneParent": 125.47, "Family": 171.27 },
        "40-49": { "Individual": 74.99, "IndividualAndSpouse": 134.86, "OneParent": 144.09, "Family": 203.03 },
        "50-64": { "Individual": 85.58, "IndividualAndSpouse": 153.47, "OneParent": 153.75, "Family": 220.73 },
      
      },
      
      outOfPocket3Pricing: {
        name: "Out-of-Pocket 200/6,350/3,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "0-29": { "Individual": 55.51, "IndividualAndSpouse": 97.51, "OneParent": 138.40, "Family": 181.68 },
        "30-39": { "Individual": 74.44, "IndividualAndSpouse": 132.77, "OneParent": 157.33, "Family": 215.83 },
        "40-49": { "Individual": 96.11, "IndividualAndSpouse": 172.94, "OneParent": 181.44, "Family": 257.98 },
        "50-64": { "Individual": 110.24, "IndividualAndSpouse": 197.66, "OneParent": 194.40, "Family": 280.54 },
      
      },
    },
    AZ: {
      // cancerBasePolicyPricing: {
      //   name: "Cancer Base Policy",
      //   "20-39": {"Individual": 3.75, "IndividualAndSpouse": 6.25, "OneParent": 4.25, "Family": 7.0},
      //   "40-44": {"Individual": 4.75, "IndividualAndSpouse": 8.25, "OneParent": 5.50, "Family": 9.0},
      //   "45-49": {"Individual": 6.25, "IndividualAndSpouse": 11.00, "OneParent": 6.75, "Family": 11.5},
      //   "50-54": {"Individual": 8.25, "IndividualAndSpouse": 14.25, "OneParent": 8.50, "Family": 15.0},
      //   "55-59": {"Individual": 10.50, "IndividualAndSpouse": 18.50, "OneParent": 11.00, "Family": 19.5},
      //   "60-64": {"Individual": 13.25, "IndividualAndSpouse": 23.25, "OneParent": 13.50, "Family": 23.75},
      //   "65-69": {"Individual": 16.00, "IndividualAndSpouse": 28.00, "OneParent": 16.25, "Family": 28.5},
      //   "70-74": {"Individual": 18.25, "IndividualAndSpouse": 32.00, "OneParent": 18.50, "Family": 32.25},
      //   "75-79": {"Individual": 18.75, "IndividualAndSpouse": 33.00, "OneParent": 19.00, "Family": 33.25},
      //   "80-84": {"Individual": 19.25, "IndividualAndSpouse": 33.75, "OneParent": 19.50, "Family": 34.0}
      // },

      // cancerRecurrenceRiderPricing: {
      //   name: "Cancer Recurrence Rider",
      //   "20-39": {"Individual": 0.30, "IndividualAndSpouse": 0.50, "OneParent": 0.35, "Family": 0.60},
      //   "40-44": {"Individual": 0.40, "IndividualAndSpouse": 0.70, "OneParent": 0.45, "Family": 0.75},
      //   "45-49": {"Individual": 0.55, "IndividualAndSpouse": 0.90, "OneParent": 0.55, "Family": 0.95},
      //   "50-54": {"Individual": 0.70, "IndividualAndSpouse": 1.20, "OneParent": 0.70, "Family": 1.20}
      // },

      cancerPackagePricing: {
        name: 'Cancer Package',
        note: "Only choose one Out-of-Pocket option.",
        "20-39": {"Individual": 4.05, "IndividualAndSpouse": 6.75, "OneParent": 4.60, "Family": 7.60},
        "40-44": {"Individual": 5.15, "IndividualAndSpouse": 8.95, "OneParent": 5.95, "Family": 9.75},
        "45-49": {"Individual": 6.80, "IndividualAndSpouse": 11.90, "OneParent": 7.30, "Family": 12.45},
        "50-54": {"Individual": 8.95, "IndividualAndSpouse": 15.45, "OneParent": 9.20, "Family": 16.20},
        "55-59": {"Individual": 10.50, "IndividualAndSpouse": 18.50, "OneParent": 11.00, "Family": 19.5},
        "60-64": {"Individual": 13.25, "IndividualAndSpouse": 23.25, "OneParent": 13.50, "Family": 23.75},
        "65-69": {"Individual": 16.00, "IndividualAndSpouse": 28.00, "OneParent": 16.25, "Family": 28.5},
        "70-74": {"Individual": 18.25, "IndividualAndSpouse": 32.00, "OneParent": 18.50, "Family": 32.25},
        "75-79": {"Individual": 18.75, "IndividualAndSpouse": 33.00, "OneParent": 19.00, "Family": 33.25},
        "80-84": {"Individual": 19.25, "IndividualAndSpouse": 33.75, "OneParent": 19.50, "Family": 34.0}
      },

      // heartStrokeBasePolicyPricing: {
      //   name: 'Heart & Stroke Base Policy',
      //   "20-39": {"Individual": 3.50, "IndividualAndSpouse": 5.75, "OneParent": 3.75, "Family": 6.00},
      //   "40-44": {"Individual": 4.75, "IndividualAndSpouse": 8.00, "OneParent": 5.00, "Family": 8.25},
      //   "45-49": {"Individual": 6.25, "IndividualAndSpouse": 10.75, "OneParent": 6.50, "Family": 11.00},
      //   "50-54": {"Individual": 8.00, "IndividualAndSpouse": 14.00, "OneParent": 8.25, "Family": 14.25},
      //   "55-59": {"Individual": 10.25, "IndividualAndSpouse": 18.00, "OneParent": 10.50, "Family": 18.25},
      //   "60-64": {"Individual": 13.25, "IndividualAndSpouse": 23.25, "OneParent": 13.50, "Family": 23.50},
      //   "65-69": {"Individual": 16.75, "IndividualAndSpouse": 29.50, "OneParent": 17.00, "Family": 29.75},
      //   "70-74": {"Individual": 21.25, "IndividualAndSpouse": 37.50, "OneParent": 21.50, "Family": 37.75},
      //   "75-79": {"Individual": 26.00, "IndividualAndSpouse": 46.00, "OneParent": 26.25, "Family": 46.25},
      //   "80-84": {"Individual": 30.50, "IndividualAndSpouse": 53.75, "OneParent": 30.75, "Family": 54.00}
      // },

      // heartStrokeRestorationRiderPricing: {
      //   name: 'Heart & Stroke Restoration Rider',
      //   "20-39": {"Individual": 0.35, "IndividualAndSpouse": 0.60, "OneParent": 0.40, "Family": 0.60},
      //   "40-44": {"Individual": 0.50, "IndividualAndSpouse": 0.80, "OneParent": 0.50, "Family": 0.85},
      //   "45-49": {"Individual": 0.65, "IndividualAndSpouse": 1.10, "OneParent": 0.65, "Family": 1.15},
      //   "50-54": {"Individual": 0.80, "IndividualAndSpouse": 1.40, "OneParent": 0.85, "Family": 1.45}
      // },

      heartStrokePackagePricing: {
        name: 'Heart & Stroke Package Pricing',
        "20-39": {"Individual": 3.85, "IndividualAndSpouse": 6.35, "OneParent": 4.15, "Family": 6.60},
        "40-44": {"Individual": 5.25, "IndividualAndSpouse": 8.80, "OneParent": 5.50, "Family": 9.10},
        "45-49": {"Individual": 6.90, "IndividualAndSpouse": 11.85, "OneParent": 7.15, "Family": 12.15},
        "50-54": {"Individual": 8.80, "IndividualAndSpouse": 15.40, "OneParent": 9.10, "Family": 15.70},
        "55-59": {"Individual": 10.25, "IndividualAndSpouse": 18.00, "OneParent": 10.50, "Family": 18.25},
        "60-64": {"Individual": 13.25, "IndividualAndSpouse": 23.25, "OneParent": 13.50, "Family": 23.50},
        "65-69": {"Individual": 16.75, "IndividualAndSpouse": 29.50, "OneParent": 17.00, "Family": 29.75},
        "70-74": {"Individual": 21.25, "IndividualAndSpouse": 37.50, "OneParent": 21.50, "Family": 37.75},
        "75-79": {"Individual": 26.00, "IndividualAndSpouse": 46.00, "OneParent": 26.25, "Family": 46.25},
        "80-84": {"Individual": 30.50, "IndividualAndSpouse": 53.75, "OneParent": 30.75, "Family": 54.00}
      },

      accidentWithWellness1Pricing: {
        name: 'Accident option 1',
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 21.33, "IndividualAndSpouse": 31.83, "OneParent": 31.83, "Family": 42.33 }

      },

      accidentWithWellness2Pricing: {
        name: 'Accident 2',
        note: "Only choose one Out-of-Pocket option.",
        "18-69": { "Individual": 25.00, "IndividualAndSpouse": 38.00, "OneParent": 38.00, "Family": 51 }

      },

      outOfPocket1Pricing: {
        name: "Out-of-Pocket 100/2,500/1,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "18-34": { "Individual": 26.54, "IndividualAndSpouse": 46.98, "OneParent": 69.62, "Family": 90.34 },
        "35-44": { "Individual": 32.94, "IndividualAndSpouse": 58.95, "OneParent": 76.02, "Family": 101.94 },
        "45-54": { "Individual": 39.42, "IndividualAndSpouse": 70.80, "OneParent": 83.22, "Family": 114.25 },
        "55-64": { "Individual": 44.07, "IndividualAndSpouse": 78.93, "OneParent": 87.42, "Family": 122.01 },
      },
      
      outOfPocket2Pricing: {
        name: "Out-of-Pocket 200/5,000/2,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "0-29": { "Individual": 41.42, "IndividualAndSpouse": 72.99, "OneParent": 105.03, "Family": 137.15 },
        "30-39": { "Individual": 54.19, "IndividualAndSpouse": 96.89, "OneParent": 117.80, "Family": 160.32 },
        "40-49": { "Individual": 67.14, "IndividualAndSpouse": 120.63, "OneParent": 132.22, "Family": 184.97 },
        "50-64": { "Individual": 76.45, "IndividualAndSpouse": 136.86, "OneParent": 140.61, "Family": 200.47 },
      
      },
      
      outOfPocket3Pricing: {
        name: "Out-of-Pocket 200/6,350/3,000",
        note: "Only choose one Out-of-Pocket option. If Single Parent One Child, refer to pricing guide for better rate.",
        "0-29": { "Individual": 52.78, "IndividualAndSpouse": 92.77, "OneParent": 132.01, "Family": 172.92 },
        "30-39": { "Individual": 70.43, "IndividualAndSpouse": 125.83, "OneParent": 149.66, "Family": 204.88 },
        "40-49": { "Individual": 88.26, "IndividualAndSpouse": 158.71, "OneParent": 169.57, "Family": 238.92 },
        "50-64": { "Individual": 101.11, "IndividualAndSpouse": 181.05, "OneParent": 181.26, "Family": 260.28 },
      
      },
    }

  }

export {
  packagePolicies,
  stateBasedPricing
}