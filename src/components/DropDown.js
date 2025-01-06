import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ func }) {
  const [items, setItems] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setItems(event.target.value);
    func(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 40 }}>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">items</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={items}
          label="items"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
