import LinearProgress from "@mui/material-next/LinearProgress";
import CircularProgress from "@mui/material-next/CircularProgress";

const Loader = () => {
  return (
    <>
      <LinearProgress variant="indeterminate" />
      <div
        style={{ position: "relative", left: "45%", paddingTop: "16%" }}
        className="circle-loader"
      >
        <CircularProgress variant="indeterminate" />
      </div>
    </>
  );
};

export default Loader;
