import { ChevronLeft } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";

export const CustomHeader = ({
  title,
  action,
  showBack,
  handleBack,
  backTitle,
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mb={3}
    borderBottom="1px solid #ebebeb"
    pb={1}>
    <Stack direction="row" spacing={2} alignItems="center">
      {showBack && (
        <Tooltip title={backTitle}>
          <IconButton onClick={handleBack}>
            <ChevronLeft />
          </IconButton>
        </Tooltip>
      )}
      <h5>{title}</h5>
    </Stack>
    {action && action}
  </Stack>
);
