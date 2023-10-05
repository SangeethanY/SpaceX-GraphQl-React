import { Button } from "@mui/material";

const MuiButton = ({ variantText, label, onClick, size }) => {
  return (
    <Button
      variant={variantText}
      sx={{ color: "white" }}
      color="success"
      onClick={onClick}
      size={size}>
      {label}
    </Button>
  );
};
export default MuiButton;
