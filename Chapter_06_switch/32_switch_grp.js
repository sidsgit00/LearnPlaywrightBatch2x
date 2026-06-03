let browser = "firefox";
switch (browser) {
    case "chrome":
    case "brave":
    case "opera":
    case "edge":
        console.log("chromium product");
        break;
    case "firefox":
        console.log("mozilla product");
        break;
    default:
        console.log("unknown browser");

}