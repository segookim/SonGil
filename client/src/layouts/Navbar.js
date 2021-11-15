import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  ToolBar: {
    marginTop: "1%",
    marginBottom: "1%",
  },
  Button: {
    marginLeft: "1%",
    marginRight: "1%",
    fontSize: "2vw",
    color: "inherit",
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        className={classes.Root}
        elevation={0}
        color="primary"
        position="static"
      >
        <Toolbar className={classes.ToolBar}>
          <IconButton href="/" className={classes.Button}>
            메인
          </IconButton>
          <IconButton href="/Explain" className={classes.Button}>
            도움말
          </IconButton>
          <IconButton href="/HandInfo" className={classes.Button}>
            지원 수어
          </IconButton>
          <IconButton href="/About" className={classes.Button}>
            개발자소개
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
