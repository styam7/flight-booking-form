import React, { useEffect, useState } from "react";
import "./search.scss";
import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { getAirports } from "../actions/search";

const SearchBar = () => {

  const { airports } = useSelector(state => state.search)

  console.log("airports", airports)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getAirports())
  }, [])

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    Infants: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="searchbar">
      <div className="searchContainer">
        <div className="selectionBar">
          <div className="trip-type">
            <div className="">
              <input
                type="radio"
                className=" "
                value="round trip"
              />
              <span className="">Round trip</span>
            </div>

            <div className="">
              <input
                type="radio"
                className=""
                value="one way"
              />
              <span className="">One Way</span>
            </div>
          </div>
          <div className="passenger">
            <PersonIcon />
            <span
              className="headerSearchText"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {`${options.adult + options.children + options.Infants}  pax `}
            </span>
          </div>

          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Infants</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    disabled={options.Infants <= 0}
                    onClick={() => handleOption("Infants", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.Infants}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("Infants", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Age"
              defaultValue={"economy_class"}
            >
              <MenuItem value="economy_class">Economy Class</MenuItem>
              <MenuItem value="premium_economy">Premium Economy</MenuItem>
              <MenuItem value="business_Class">Business Class</MenuItem>
              <MenuItem value="first_Class">First Class</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="lower-section">
          <Box sx={{ minWidth: 270, marginTop: "8px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Age"
                //onChange={handleChange}
              >
                {airports?.map((item, i) => (
                  <MenuItem key={item.id} value={item.iata_code}>{item.airport_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 270, marginTop: "8px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                {airports?.map((item, i) => (
                  <MenuItem key={item.id} value={item.iata_code}>{item.airport_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <div className="date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Departure", end: "Return" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <button
            type="submit"
            className="search-flight"
          >
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
