export interface Property {
  id: number;
  type: "マンション" | "一戸建て" | "アパート";
  title: string;
  ward: string;
  rent: number;
  managementFee: number;
  size: number;
  layout: string;
  walkToStation: number;
  station: string;
  line: string;
  yearsOld: number;
  petFriendly: boolean;
  image: string;
}