import { Typography } from "@mui/material";

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Created by Eduardo Ramírez '}
          
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Copyright;