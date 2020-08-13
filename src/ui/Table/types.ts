import { ICountry } from 'src/types';
import { TTableHead } from 'src/components/CountriesList/types';

export type TNameRow = 'name' | 'population';

export type TSortValue = TNameRow | '-name' | '-population';

export interface ITableProps {
  headRows: TTableHead[];
  data: ICountry[];
  selectRow: (name: TNameRow) => void;
}
