export const CalculationCommon = {
  //Oblast A
  cost_stena: 2600, // stena, sklep, puda
  cost_strecha: 2600, // strecha, fasada
  cost_podlaha: 3400,
  cost_okna: 9800, // okna, dvere
  cost_stineni: 7500,

  //Oblast C
  cost_rekuperaceVoda: 130000,
  dotace_rekuperaceVoda: 50000,

  dotace_solary: 100000,

  cost_nabijeciStanice: 22000,
  dotace_infigy: 40000,
  cost_infigy: 21000,
  dotace_rekuperaceVzduch: 90000,
  cost_podlahoveVytapeni: 900,

  //Oblast D
  dotace_destovka: 20000,
};

export const CalculationSets = {
  odpb: {
    pdf_titul: 'NZÚ Oprav dům po babičce',
    //Oblast A
    dotace_stena: 500, // stena, sklep, puda
    dotace_strecha: 1300, // strecha, fasada
    dotace_podlaha: 1700,
    dotace_okna: 4900, // okna, dvere
    dotace_stineni: 1500,

    maxDotace: 1000000,

    bonus_kombinace: 50000,
    bonus_deti: 50000,

    cost_projekt: 100000,
    dotace_projekt: 50000,
  },
  light: {
    pdf_titul: 'NZÚ Light',
    //Oblast A
    dotace_stena: 300,
    dotace_strecha: 700,
    dotace_podlaha: 800,
    dotace_okna: 2200,
    dotace_stineni: 1500,

    maxDotace: 500000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 30000,
    dotace_projekt: 0,
  },
  light_np: {
    pdf_titul: 'NZÚ Light pro nízkopříjmové',
    //Oblast A
    dotace_stena: 750,
    dotace_strecha: 1500,
    dotace_podlaha: 2000,
    dotace_okna: 5500,
    dotace_stineni: 1500,

    maxDotace: 250000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 0,
    dotace_projekt: 0,
  },
  light_p: {
    pdf_titul: 'NZÚ Light pro památky',
    //Oblast A
    dotace_stena: 500,
    dotace_strecha: 800,
    dotace_podlaha: 1050,
    dotace_okna: 4900,
    dotace_stineni: 1500,

    maxDotace: 500000,

    bonus_kombinace: 30000,
    bonus_deti: 0,

    cost_projekt: 30000,
    dotace_projekt: 0,
  },
};
