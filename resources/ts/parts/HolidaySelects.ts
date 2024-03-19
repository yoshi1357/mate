import { type Select } from '../types/parts/select';

export const holidaySelects: Select[] = [
    {
        id: 'weekdays',
        label: '平日休み',
        value: '1',
    },
    {
        id: 'weekend',
        label: '土日休み',
        value: '2',
    },
    {
        id: 'irregular',
        label: '不定期',
        value: '3',
    },
]
