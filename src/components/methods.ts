import { FormShape } from '../types';
import { destovkaOptions, tigoSubsidy, vytapeniOptions } from './options';

export const CONSTS = {
  maxDotaceA: 1000000,
};

export const calculateSubsidy = (formValues: FormShape) => {
  const newFormValues = { ...formValues };

  // Oblast A
  const facadeArea = formValues.fasada || 0;
  const roofArea = formValues.strecha || 0;
  const pudaArea = formValues.puda || 0;
  const floorArea = formValues.podlaha || 0;
  const sklepArea = formValues.sklep || 0;
  const stenaArea = formValues.stena || 0;
  const windowArea = formValues.okna || 0;
  const dvereArea = formValues.dvere || 0;
  const shadingArea = formValues.stineni || 0;

  const areaCostClient =
    (pudaArea + sklepArea + stenaArea) * 2100 +
    (roofArea + facadeArea) * 1300 +
    floorArea * 1700 +
    (windowArea + dvereArea) * 4900 +
    shadingArea * 2100;

  const areaSubsidy =
    (pudaArea + sklepArea + stenaArea) * 500 +
    (roofArea + facadeArea) * 1300 +
    floorArea * 1700 +
    (windowArea + dvereArea) * 4900 +
    shadingArea * 1500;

  const areaTotalCost = areaCostClient + areaSubsidy;

  // Oblast C
  const rekuperaceVodyTotalCost = formValues.rekuperaceVody ? 130000 : 0;
  const rekuperaceVodyDotace = formValues.rekuperaceVody ? 50000 : 0;
  const rekuperaceVodyCostClient = rekuperaceVodyTotalCost - rekuperaceVodyDotace;

  const solaryTotalCost = formValues.solary ? parseInt(formValues.solary || '0') : 0;
  const solaryDotace = formValues.solary ? 100000 : 0;
  const solaryCostClient =
    solaryTotalCost -
    solaryDotace +
    (formValues.tigo && formValues.solary
      ? tigoSubsidy[formValues.solary as keyof typeof tigoSubsidy]
      : 0);

  const wallBoxUnitCost = formValues.nabijeciStanice ? 22000 : 0;

  const wallBoxCostClient = wallBoxUnitCost;

  const infigyDotace = formValues.infigy ? 40000 : 0;

  const rekuperaceVzduchuUnitCost = formValues.rekuperaceVzduchu ?? 0;
  const rekuperaceVzduchuDotace =
    formValues.rekuperaceVzduchu && formValues.rekuperaceVzduchuMnozstvi ? 90000 : 0;
  const rekuperceVzduchuUnits = formValues.rekuperaceVzduchuMnozstvi ?? 0;
  const rekuperaceVzduchuTotalCost = rekuperaceVzduchuUnitCost * rekuperceVzduchuUnits;
  const rekuperaceVzduchuCostClient = Math.max(
    rekuperaceVzduchuTotalCost - rekuperaceVzduchuDotace,
    0
  );

  const vytapeniSelectedOption = vytapeniOptions.find(
    (option) => option.value === formValues.vytapeni
  );
  const vytapeniTotalCost = vytapeniSelectedOption?.cost ?? 0;
  const vytapeniDotace = vytapeniSelectedOption?.subsidy ?? 0;
  const vytapeniCostClient = vytapeniTotalCost - vytapeniDotace;

  const costClientC =
    rekuperaceVodyCostClient +
    rekuperaceVzduchuCostClient +
    solaryCostClient +
    wallBoxCostClient +
    vytapeniCostClient;
  const dotaceC =
    rekuperaceVodyDotace + rekuperaceVzduchuDotace + solaryDotace + vytapeniDotace + infigyDotace;

  const costTotalC =
    rekuperaceVodyTotalCost +
    rekuperaceVzduchuTotalCost +
    solaryTotalCost +
    wallBoxUnitCost +
    vytapeniTotalCost;

  // Oblast D
  const destovkaSelectedOption = destovkaOptions.find(
    (option) => option.value === formValues.destovka
  );

  const destovkaTotalCost = destovkaSelectedOption?.cost ?? 0;
  const destovkaDotace =
    (destovkaSelectedOption?.subsidy ?? 0) + (destovkaSelectedOption?.cost ? 20000 : 0);
  const destovkaCostClient = destovkaTotalCost - destovkaDotace;

  const kombinacniBonus =
    (areaCostClient && vytapeniTotalCost ? 50000 : 0) +
    (areaCostClient && (solaryTotalCost || rekuperaceVodyTotalCost || rekuperaceVzduchuCostClient)
      ? 50000
      : 0);

  const bonusDeti = (formValues?.detiPlna ?? 0) * 50000 + (formValues?.detiPolovina ?? 0) * 25000;

  // Update hodnot
  const minimalCostTotal = 0;
  const minimalDotace = 0;

  newFormValues.costClientA = areaCostClient;
  newFormValues.dotaceOblastA = areaSubsidy;

  newFormValues.costClientC = costClientC;
  newFormValues.dotaceOblastC = dotaceC;

  newFormValues.costClientD = destovkaCostClient;
  newFormValues.dotaceOblastD = destovkaDotace;

  newFormValues.kombinacniBonus = kombinacniBonus;

  const totalDotace = Math.max(
    (areaSubsidy + dotaceC + destovkaDotace) * (formValues.obec ? 1.05 : 1) +
      bonusDeti +
      kombinacniBonus +
      (formValues.addProjectCost ? 50000 : 0),
    minimalDotace
  );
  const totalCost = Math.max(
    (areaTotalCost + costTotalC + destovkaTotalCost) * 1.1 +
      (formValues.addProjectCost ? 100000 : 0) +
      formValues.customCost,
    minimalCostTotal
  );

  const totalCostClient = Math.max(totalCost - totalDotace, 0);

  newFormValues.costTotalClient = totalCostClient;
  newFormValues.dotaceTotal = totalDotace;
  newFormValues.costTotal = totalCost;

  newFormValues.monthlyPayment = calculateMonthlyPayment(newFormValues);

  return newFormValues;
};

const calculateMonthlyPayment = (formValues: FormShape) => {
  const loanAmount = formValues.costTotalClient;
  const interestRate = 0.0299 / 12;
  const duration = 20;
  const totalPayments = duration * 12;

  let monthlyPayment = 0;

  if (loanAmount > 0) {
    monthlyPayment =
      (loanAmount * interestRate * Math.pow(1 + interestRate, totalPayments)) /
      (Math.pow(1 + interestRate, totalPayments) - 1);
  }

  return monthlyPayment;
};

export const formatNumber = (value: number | string): string => {
  if (value === null || value === undefined) return '';

  const num = typeof value === 'string' ? parseFloat(value) : value;

  return num.toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};
