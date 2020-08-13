import React, { useState, FC } from 'react';

import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableSortLabel,
  Typography,
} from '@material-ui/core';

import { ICountry } from 'src/types';
import { TTableHead } from 'src/components/CountriesList/types';
import { ITableProps, TNameRow, TSortValue } from './types';

const Table: FC<ITableProps> = ({ headRows, data, selectRow }) => {
  const [rows, setRows] = useState<ICountry[]>(data);
  const [sort, setSort] = useState<TSortValue>('name');

  const createSortHandler = (name: TNameRow) => () => {
    const newRows = rows.sort((a: ICountry, b: ICountry) => {
      const aValue = a[name];
      const bValue = b[name];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sort === name
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      }
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sort === name ? bValue - aValue : aValue - bValue;
      }
      return 0;
    });

    setRows(newRows);
    setSort((sort === name ? `-${name}` : name) as TSortValue);
  };

  const handleSelectRow = (name: TNameRow) => () => {
    selectRow(name);
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headRows.map(({ value, title }: TTableHead) => (
              <TableCell key={value}>
                <TableSortLabel
                  active={true}
                  direction={sort === `-${value}` ? 'desc' : 'asc'}
                  onClick={createSortHandler(value as TNameRow)}
                >
                  {title}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ICountry) => (
            <TableRow key={row.name}>
              <TableCell
                component='th'
                scope='row'
                onClick={handleSelectRow(row.name as TNameRow)}
              >
                <Typography color='primary' style={{ cursor: 'pointer' }}>
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell>{row.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
