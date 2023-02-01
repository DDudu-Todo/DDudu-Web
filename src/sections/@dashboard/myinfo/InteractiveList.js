import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
//import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// import * as React from "react";
// import Avatar from "@mui/joy/Avatar";
// import Box from "@mui/joy/Box";
// import Sheet from "@mui/joy/Sheet";
// import Stack from "@mui/joy/Stack";
// import { styled } from "@mui/joy/styles";
// import Typography from "@mui/joy/Typography";

// const Item = styled(Sheet)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.vars.palette.text.tertiary,
//   maxWidth: "400px",
// }));

// const message1 = `이메일 `;
// const message2 = `닉네임 `;

/*-------------*/
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
/*----------*/

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            My Account
          </Typography>
          <Demo>
            <List dense={dense}>
              {/* {generate( */}
              <ListItemText
                primary="이메일 : "
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemText
                primary="닉네임 : "
                secondary={secondary ? "Secondary text" : null}
              />
              {/* )} */}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    // <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
    //   <Item
    //     sx={{
    //       my: 1,
    //       mx: "auto",
    //       p: 2,
    //     }}
    //   >
    //     <Stack spacing={2} direction="row" alignItems="center">
    //       <Avatar>E</Avatar>
    //       <Typography noWrap>{message1}</Typography>
    //     </Stack>
    //   </Item>
    //   <Item
    //     sx={{
    //       my: 1,
    //       mx: "auto",
    //       p: 2,
    //     }}
    //   >
    //     <Stack spacing={2} direction="row" alignItems="center">
    //       <Stack>
    //         <Avatar>N</Avatar>
    //       </Stack>
    //       <Stack sx={{ minWidth: 0 }}>
    //         <Typography noWrap>{message2}</Typography>
    //       </Stack>
    //     </Stack>
    //   </Item>
    // </Box>
  );
}
