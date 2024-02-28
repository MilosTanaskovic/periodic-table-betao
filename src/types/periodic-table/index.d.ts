// Define the possible values for the 'block' property
export type Block = "s" | "p" | "d" | "f";

// Interface representing a single element in the periodic table
export interface PeriodicTableElement {
  name: string;
  atomicNumber: number;
  symbol: string;
  atomicWeight: string; // Kept as string to accommodate values like "[294]"
  block: Block;
  row: number;
  column: number;
}

// Type representing an array of periodic table elements
export type PeriodicTable = PeriodicTableElement[];
