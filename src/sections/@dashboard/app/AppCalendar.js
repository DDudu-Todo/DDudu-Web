import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Card, CardHeader, CardContent, TextField, Badge } from '@mui/material';
// calendar
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, StaticDatePicker, PickersDay } from '@mui/x-date-pickers';
import CheckIcon from '@mui/icons-material/Check';
// css
import './AppCalendar.css';

// ----------------------------------------------------------------------

AppCalendar.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

function AppCalendar({ title, subheader, list, ...other }) {
    const [value, setValue] = useState(new Date());
    const [highlightedDays, setHighlightDays] = useState([1, 2, 15]);

    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="portrait"
                openTo="day"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} /> }
                renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                        !DayComponentProps.outsideCurrentMonth &&
                        highlightedDays.indexOf(day.getDate()) >= 0;

                    return (
                        <Badge
                            key={day.toString()}
                            overlap="circular"
                            badgeContent={isSelected ? <CheckIcon /> : undefined}
                        >
                            <PickersDay {...DayComponentProps} />
                        </Badge>
                    );
                }}
            />
        </LocalizationProvider>

            </CardContent>
        </Card>
    );
}

export default AppCalendar;