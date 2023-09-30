import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';




import { Label, Input } from "./Filter.styled";

export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChange = newFilter => {
        newFilter && newFilter.length > 0 ?
            dispatch(changeFilter(newFilter))
            : dispatch(changeFilter(''));
    };



    return (
        <Label>Find contact by name
            <Input
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={filter}
                onChange={evt => onChange(evt.target.value)}
            />
        </Label>
    );
};    