import type { Column } from 'element-plus';

import type InputCell from './input-cell.vue';

export type InputCellProps = {
  rowData: any;
  column: Column<any>;
};

export type InputCellEmits = {
  'update:rowData': [rowData: any];
};
export type InputCellInstance = InstanceType<typeof InputCell>;
