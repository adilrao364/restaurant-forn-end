import React, { useContext } from 'react';
import { Contextvalues } from '../../../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import { addDays } from "date-fns"


function BookDate(props) {
    const context = useContext(Contextvalues)
    const CustomInputDate = ({ value, onClick }) => (
        <>
            <InputGroup>
                <InputLeftElement children={<DateRangeIcon fontSize="small" color="action" />} />
                <Input
                    focusBorderColor="green.500"
                    onClick={onClick}
                    onChange={date => context.setSelectedDate(date)}
                    value={value}
                    color={context.colorMode === "light" ? "black" : "white"}
                    placeholder="Select Date" />
            </InputGroup>
        </>
    );

    return (
        <div>
            <DatePicker
                selected={context.selectedDate}
                onChange={date => context.setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
                isClearable
                customInput={<CustomInputDate />}
            />
        </div>
    );
}
export default BookDate