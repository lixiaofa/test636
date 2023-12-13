import { ref } from 'vue';
import type { SetupContext } from 'vue';
import type { InputCellProps, InputCellEmits } from './input-cell';
export const useInputCell = (
  props: InputCellProps,
  emit: SetupContext<InputCellEmits>['emit']
) => {
  const { rowData, column } = props;

  const input = ref(rowData[column.dataKey!]);

  const onBlur = () => {
    const updataRowData = {
      ...rowData,
      editing: false,
      [column.dataKey!]: input.value
    };

    emit('update:rowData', updataRowData);
    console.log('111111111111');
  };
  return {
    input,
    onBlur
  };
};
