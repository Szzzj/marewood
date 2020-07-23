const nodeEnv = process.env.NODE_ENV;
const appMode = process.env.REACT_APP_MODE;

let useApiUrl = "http://localhost:8081";
if ("production" === nodeEnv) {
  switch (appMode) {
    case "buildDev":
      useApiUrl = "http://192.168.48.192:9088";
      break;
    case "buildDevTest":
      useApiUrl = "http://192.168.48.192:9288";
      break;
    case "buildTest":
      useApiUrl = "http://192.168.48.192:9288";
      break;
    case "buildPre":
      useApiUrl = "http://192.168.48.192:9288";
      break;
    default:
      useApiUrl = window.location.origin;
      break;
  }
}

if (typeof process.env.REACT_APP_API_URL === "string") {
  useApiUrl = process.env.REACT_APP_API_URL;
}

if (useApiUrl.slice(0, 4) !== "http") {
  useApiUrl = window.location.origin + useApiUrl;
}

export default useApiUrl;
