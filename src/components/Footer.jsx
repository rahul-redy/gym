import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack ga="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px" />
        <Typography varint="h5" pb="40px" mt="20px">
          Made with ❤️ by Rahul Reddy. 
                Go Gators !

        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
