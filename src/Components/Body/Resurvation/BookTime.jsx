import React, { useContext } from 'react';
import { Contextvalues } from '../../../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function BookTime() {
    const context = useContext(Contextvalues)
    const CustomInputTime = ({ value, onClick }) => (
        <InputGroup>
            <InputLeftElement children={<AccessTimeIcon fontSize="small" color="action" />} />
            <Input
                focusBorderColor="green.500"
                onClick={onClick}
                onChange={date => context.setSelectedTime(date)}
                value={value}
                color={context.colorMode === "light" ? "black" : "white"}
                placeholder="Select Time" />
        </InputGroup>
    );
    return (
        <div>
            <DatePicker
                selected={context.selectedTime}
                onChange={date => context.setSelectedTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                isClearable
                customInput={<CustomInputTime />}
            />
        </div>
    );
}
export default BookTime