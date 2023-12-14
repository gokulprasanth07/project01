import LinearProgress from "@mui/material-next/LinearProgress";
import CircularProgress from "@mui/material-next/CircularProgress";
import "../Styles/Loader.css";

const Loader = () => {
    return (
        <>
        <LinearProgress variant="indeterminate" />
        <br /> <br /> <br /> <br /> <br /> <br />
        <span
          style={{ position: "relative", left: "45%", paddingTop: "50px" }}
          className="circle-loader"
        >
          <CircularProgress variant="indeterminate" />
        </span>
      </>
    );
}

export default Loader;