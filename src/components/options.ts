export type Option = {
  value: number | string;
  label: string;
  printLabel: string;
  cost?: number;
  subsidy?: number;
};

export const vytapeniOptions: Option[] = [
  {
    value: '',
    label: 'Vyberte variantu',
    printLabel: '',
  },
  {
    value: '20',
    label: 'Kotel na tuhá paliva',
    printLabel: 'Kotel na tuhá paliva',
    cost: 140000,
    subsidy: 65000,
  },
  {
    value: '0',
    label: 'TNG 5 kW 217.636,-',
    printLabel: 'TNG 5 kW + 7,5 kW bivalentní zdroj',
    cost: 217636,
    subsidy: 75000,
  },
  {
    value: '1',
    label: 'TNG 8 kW 266.036,-',
    printLabel: 'TNG 8 kW + 7,5 kW bivalentní zdroj',
    cost: 266036,
    subsidy: 75000,
  },
  {
    value: '2',
    label: 'TNG 10 kW 278.136,-',
    printLabel: 'TNG 10 kW + 7,5 kW bivalentní zdroj',
    cost: 278136,
    subsidy: 75000,
  },
  {
    value: '3',
    label: 'TNG 15 kW 290.236,-',
    printLabel: 'TNG 15 kW + 7,5 kW bivalentní zdroj',
    cost: 290236,
    subsidy: 75000,
  },
  {
    value: '4',
    label: 'TNG 15 kW 302.336,-',
    printLabel: 'TNG 15 kW + 7,5 kW bivalentní zdroj',
    cost: 302336,
    subsidy: 75000,
  },
  {
    value: '5',
    label: 'TNG-5 kW + 200l bojler na ohřev vody 263.495,-',
    printLabel: 'TNG-5 kW + 200l bojler na ohřev vody',
    cost: 263495,
    subsidy: 90000,
  },
  {
    value: '6',
    label: 'TNG-8 kW + 200l bojler na ohřev vody 311.895,-',
    printLabel: 'TNG-8 kW + 200l bojler na ohřev vody',
    cost: 311895,
    subsidy: 90000,
  },
  {
    value: '7',
    label: 'TNG-10 kW + 200l bojler na ohřev vody 323.995,-',
    printLabel: 'TNG-10 kW + 200l bojler na ohřev vody',
    cost: 323995,
    subsidy: 90000,
  },
  {
    value: '8',
    label: 'TNG-15 kW + 200l bojler na ohřev vody 336.095,-',
    printLabel: 'TNG-15 kW + 200l bojler na ohřev vody',
    cost: 336095,
    subsidy: 90000,
  },
  {
    value: '9',
    label: 'TNG-15 kW + 200l bojler na ohřev vody 348.195,-',
    printLabel: 'TNG-15 kW + 200l bojler na ohřev vody',
    cost: 348195,
    subsidy: 90000,
  },
  {
    value: '10',
    label: '5 kW kombi (bojler 250l, AKU 130l) 294.955,-',
    printLabel: '5 kW kombi (bojler 250l, AKU 130l)',
    cost: 294955,
    subsidy: 90000,
  },
  {
    value: '11',
    label: '8 kW kombi (bojler 250l, AKU 130l) 343.355,-',
    printLabel: '8 kW kombi (bojler 250l, AKU 130l)',
    cost: 343355,
    subsidy: 90000,
  },
  {
    value: '12',
    label: '10 kW kombi (bojler 250l, AKU 130l) 355.455,-',
    printLabel: '10 kW kombi (bojler 250l, AKU 130l)',
    cost: 355455,
    subsidy: 90000,
  },
  {
    value: '13',
    label: '15 kW kombi (bojler 250l, AKU 130l) 367.555,-',
    printLabel: '15 kW kombi (bojler 250l, AKU 130l)',
    cost: 367555,
    subsidy: 90000,
  },
  {
    value: '14',
    label: '15 kW kombi (bojler 250l, AKU 130l) 379.655,-',
    printLabel: '15 kW kombi (bojler 250l, AKU 130l)',
    cost: 379655,
    subsidy: 90000,
  },
  {
    value: '15',
    label: '5 kW + 200l bojler na ohřev vody + AKU 200l na vytápění 306.934,-',
    printLabel: '5 kW + 200l na ohřev vody + AKU 200l na vytápění',
    cost: 306934,
    subsidy: 90000,
  },
  {
    value: '16',
    label: '8 kW + 200l bojler na ohřev vody + AKU 200l na vytápění 355.334,-',
    printLabel: '8 kW + 200l na ohřev vody + AKU 200l na vytápění',
    cost: 355334,
    subsidy: 90000,
  },
  {
    value: '17',
    label: '10 kW + 200l bojler na ohřev vody + AKU 200l na vytápění 367.434,-',
    printLabel: '10 kW + 200l na ohřev vody + AKU 200l na vytápění',
    cost: 367434,
    subsidy: 90000,
  },
  {
    value: '18',
    label: '15 kW + 200l bojler na ohřev vody + AKU 200l na vytápění 379.434,-',
    printLabel: '15 kW + 200l na ohřev vody + AKU 200l na vytápění',
    cost: 379434,
    subsidy: 90000,
  },
  {
    value: '19',
    label: '15 kW + 200l bojler na ohřev vody + AKU 200l na vytápění 391.634,-',
    printLabel: '15 kW + 200l na ohřev vody + AKU 200l na vytápění',
    cost: 391634,
    subsidy: 90000,
  },
];

export const destovkaOptions: Option[] = [
  {
    value: '',
    label: 'Vyberte variantu',
    printLabel: 'Vyberte variantu',
  },
  {
    value: '1',
    label: '1m³ 51.700,-',
    printLabel: '1m³ 51.700,-',
    cost: 51700,
    subsidy: 3000,
  },
  {
    value: '2',
    label: '2m³ 59.400,-',
    printLabel: '2m³ 59.400,-',
    cost: 59400,
    subsidy: 6000,
  },
  {
    value: '3',
    label: '3m³ 67.100,-',
    printLabel: '3m³ 67.100,-',
    cost: 67100,
    subsidy: 9000,
  },
  {
    value: '4',
    label: '4m³ 74.800,-',
    printLabel: '4m³ 74.800,-',
    cost: 74800,
    subsidy: 12000,
  },
  {
    value: '5',
    label: '5m³ 82.500,-',
    printLabel: '5m³ 82.500,-',
    cost: 82500,
    subsidy: 15000,
  },
  {
    value: '6',
    label: '6m³ 90.200,-',
    printLabel: '6m³ 90.200,-',
    cost: 90200,
    subsidy: 18000,
  },
  {
    value: '7',
    label: '7m³ 97.900,-',
    printLabel: '7m³ 97.900,-',
    cost: 97900,
    subsidy: 21000,
  },
  {
    value: '8',
    label: '8m³ 105.600,-',
    printLabel: '8m³ 105.600,-',
    cost: 105600,
    subsidy: 24000,
  },
  {
    value: '9',
    label: '9m³ 113.300,-',
    printLabel: '9m³ 113.300,-',
    cost: 113300,
    subsidy: 27000,
  },
  {
    value: '10',
    label: '10m³ 121.000,-',
    printLabel: '10m³ 121.000,-',
    cost: 121000,
    subsidy: 30000,
  },
];

export const solaryOptions: Option[] = [
  {
    value: '',
    label: 'Vyberte variantu',
    printLabel: 'Vyberte variantu',
  },
  {
    value: 318458,
    label: '4,45 kWp 10x Trina, střídač Solax 10 kW, baterie Solax 11,6 kWh',
    printLabel: '4,45 kWp, Solax 10 kW + 11,6 kWh',
  },
  {
    value: 340308,
    label: '6,23 kWp 14x Trina, střídač Solax 10 kW, baterie Solax 11,6 kWh',
    printLabel: '6,23 kWp, Solax 10 kW + 11,6 kWh',
  },
  {
    value: 357558,
    label: '8,01 kWp 18x Trina, střídač Solax 10 kW, baterie Solax 11,6 kWh',
    printLabel: '8,01 kWp, Solax 10 kW + 11,6 kWh',
  },
  {
    value: 379408,
    label: '9,79 kWp 22x Trina, střídač Solax 10 kW, baterie Solax 11,6 kWh',
    printLabel: '9,79 kWp, Solax 10 kW + 11,6 kWh',
  },
];

export const tigoSubsidy = {
  '340400': 16500,
  '362250': 19800,
  '379500': 24200,
  '401305': 30800,
};

export const rekuperaceVzdOptions: Option[] = [
  {
    value: '',
    label: 'Vyberte variantu',
    printLabel: '',
  },
  {
    value: 60000,
    label: 'Větrání Recuair se zpětným ziskem tepla s výměníkem zaměřeným na suchý vzduch',
    printLabel: 'RecuAir se zpětným ziskem tepla - suchý vzduch i vlhkost',
  },
  {
    value: 57000,
    label: 'Větrání Recuair se zpětným ziskem tepla s výměníkem zaměřeným na odvlhčování',
    printLabel: 'RecuAir se zpětným ziskem tepla - vlhkost',
  },
];
