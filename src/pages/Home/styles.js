import { styled } from "@material-ui/system";

export const style = {
  height: "100vh",
  position: "relative",
  background: "rgba(71,110,145,0.50)",
};

export const VideoBackGround = styled("video")({
  position: "fixed",
  zIndex: -1,
  width: "100%",
  height: "100vh",
  objectFit: "cover",
});

export const buttonStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, 50%)",
};
