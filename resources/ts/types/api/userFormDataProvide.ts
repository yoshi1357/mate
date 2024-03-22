import { type Radio } from '../parts/radio';
import { type Select } from '../parts/select';

export interface UserFormDataProvide {
    blood_type_radios: Radio[] | []
    sex_radios: Radio[] | []
    holiday_selects: Select[] | []
    body_shape_selects: Select[] | []
    work_selects: Select[] | []
    residence_selects: Select[] | []
}
