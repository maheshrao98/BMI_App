import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "./AppBar/ToolbarMenu";
import { Button, MenuItem } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  function onLogin() {
    alert("Login TBD");
  }
  function onSignup() {
    alert("Signup TBD");
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          MyApp
        </Typography>

        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
                  <MenuItem key="login" onClick={onLogin} autoclose={true}>
                    Login
                  </MenuItem>,
                  <MenuItem key="signup" onClick={onSignup}>
                    Signup
                  </MenuItem>
                ]
              : [
                  <Button
                    key="login"
                    color="inherit"
                    onClick={onLogin}
                    className={classes.menuButton}
                  >
                    Login
                  </Button>,
                  <Button
                    key="signup"
                    color="inherit"
                    onClick={onSignup}
                    className={classes.menuButton}
                  >
                    Signup
                  </Button>
                ];
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
