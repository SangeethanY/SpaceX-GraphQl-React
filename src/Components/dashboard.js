import React, { useState } from "react";
import styles from "../styles/dashboard.module.scss";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "./navBar";
import { CustomTable } from "../reuseableComp/CustomTable";
import { Button, MenuItem, TextField } from "@mui/material";
import makeStyles from "@mui/styles";
import { useDispatch } from "react-redux";
import { datastore } from "../Redux/action";

function Dashboard() {
  const selctorcount = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleChange = () => {};
  const sortName = (a, b) => {
    const name1 = a.mission_name.toUpperCase();
    const name2 = b.mission_name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  };
  const sortDate = (a, b) => {
    const name1 = a.launch_date_utc;
    const name2 = b.launch_date_utc;

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    console.log(name1, name2);
    return comparison;
  };
  const sortByName = () => {
    const sortArray = [...selctorcount].sort(sortName);

    dispatch(datastore(sortArray));
  };
  const sortByDate = () => {
    const sortArray = [...selctorcount].sort(sortDate);
    dispatch(datastore(sortArray));
  };
  const [orderStatusId, setOrderStatusId] = useState("");

  return (
    <div className={styles.dashboard}>
      <ResponsiveAppBar />
      <div>
        <h1 className={styles.dashboard_details}>SpaceX details</h1>
        <div>
          <div style={{ width: "20%" }}>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              size="small"
              sx={{
                width: "100%",
                height: "100%",
                "& .MuiSelect-select": { color: "#ffffff" },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              select
              label="Sorted By"
              value={orderStatusId}
              onChange={(e) => {
                setOrderStatusId(e.target.value);
                e.target.value == "1" ? sortByName() : sortByDate();
              }}>
              <MenuItem value={"1"}>Name</MenuItem>
              <MenuItem value={"2"}>Date</MenuItem>
            </TextField>
          </div>
        </div>
        <CustomTable
          tableHeaders={[
            { label: "Mission Name", tableValue: "mission_name" },
            // { label: "mission_id", tableValue: "rocket_type" },
            // { label: "Total Price", tableValue: "total_price" },
            { label: "Launch Date", tableValue: "launch_date_utc" },
            // { label: "Upcoming", tableValue: "rocket" },
          ]}
          tableData={selctorcount}
          tableDataTotal={selctorcount.length}
          infinityCount={false}
          handleChange={handleChange}
          showIcon={false}
          showOpen={false}
          actionButton={undefined}
          tableTitle={undefined}
          showEdit={true}
          showDelete={undefined}
          handleEdit={(ind) => {
            // toggle();
            // editMode.current = {
            //   state: true,
            //   id: selectedVital?.physicalexam_id,
            // };
          }}
          handleDelete={undefined}
          showBack={undefined}
          handleBack={undefined}
          backTitle={undefined}
          showDownload={undefined}
          handleDownload={undefined}
          handleOpen={undefined}
          handleIcon={undefined}
          defaultRowSize={undefined}
        />
      </div>
    </div>
  );
}

export default Dashboard;
