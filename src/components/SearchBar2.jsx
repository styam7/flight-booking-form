import React from "react";
import { useForm } from "react-hook-form";
import "./search.scss";
const SearchBar = () => {
  // handle event
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="searchbar">
            {/* body section */}
            <div>
              <div className="searchContainer">
                <div>
                  <div className="">
                    <div className="">
                      <input
                        type="radio"
                        className=" "
                        value="round trip"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="">Round trip</p>
                    </div>

                    <div className="">
                      <input
                        type="radio"
                        className=""
                        value="one way"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="">one way</p>
                    </div>

                    <div className="">
                      <input
                        type="radio"
                        className=""
                        value="multy-city"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="">multy-city</p>
                    </div>
                  </div>
                  <div>
                    {errors.tripType && (
                      <span className="text-sm text-red-500">
                        {errors.tripType.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* departure section */}
                <div>
                  <div>
                    <div className="">
                      <p className="">flying from</p>
                      <select
                        className=""
                        {...register("departure", {
                          required: {
                            value: true,
                            message: "Departure is required",
                          },
                        })}
                      >
                        <option value="" selected disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                     
                    </div>
                    <div>
                      {errors.departure && (
                        <span className="">
                          {errors.departure.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* arrival section */}
                <div>
                  <div>
                    <div className="">
                      <p className="">flying to</p>
                      <select 
                      className=""
                      {...register("arrival", {
                        required: {
                          value: true,
                          message: "Arrival is required",
                        },
                      })}
                      >
                        <option value="" selected disabled hidden>
                          --Select Airport--
                        </option>
                        <option value="ENIA">
                          {" "}
                          England Newcastle International Airport
                        </option>
                        <option value="INIA">
                          {" "}
                          Italy Naples International Airport
                        </option>
                        <option value="MMA"> Malaysia Mulu Airport</option>
                        <option value="KMA"> Kenya Malindi Airport</option>
                      </select>
                      
                    </div>
                    <div>
                    {errors.arrival && (
                        <span className="">
                          {errors.arrival.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* date section */}
                <div className="">
                  {/* departure section */}
                  <div>
                    <div>
                      <div className="">
                        <p className="">
                          departure date
                        </p>
                        <input
                          type="date"
                          className=""
                          {...register("departureDate", {
                            required: {
                              value: true,
                              message: "Departure date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.departureDate && (
                        <span className="">
                          {errors.departureDate.message}
                        </span>
                      )}
                      </div>
                    </div>
                  </div>

                  {/* return section */}
                  <div>
                    <div>
                      <div className="">
                        <p className="">
                          return date
                        </p>
                        <input
                          type="date"
                          className=""
                          {...register("returnDate", {
                            required: {
                              value: true,
                              message: "Return date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                      {errors.returnDate && (
                        <span className="">
                          {errors.returnDate.message}
                        </span>
                      )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* passenger section */}
                <div className="">
                  {/* adult section */}
                  <div className="">
                    <div>
                      <div className="">
                        <p className="">
                          {" "}
                          adults (18+)
                        </p>
                        <select 
                        className=""
                        {...register("adult", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>

                  {/* children section */}
                  <div className="">
                    <div>
                      <div className="">
                        <p className="">
                          {" "}
                          children (0-17)
                        </p>
                        <select 
                        className=""
                        {...register("children", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                       
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>
                </div>

                {/* class and price section */}
                <div className="">
                  {/* class section */}
                  <div className="">
                    <div>
                      <div>
                        <p className=""> class</p>
                        <select
                         className=""
                         {...register("class", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>Economy</option>
                          <option>Business</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>

                  {/* price section */}
                  <div className="">
                    <div>
                      <div>
                        <p className=""> price</p>
                        <select
                         className=""
                         {...register("price", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                         >
                          <option>All Prices</option>
                          <option>$ 1000</option>
                          <option>$ 2000</option>
                          <option>$ 3000</option>
                          <option>$ 4000</option>
                          <option>$ 5000</option>
                        </select>
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>
                </div>

                {/* btn section */}
                <div>
                  <input
                    type="submit"
                    value="Find flight"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default SearchBar;
