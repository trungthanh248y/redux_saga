//themes lơi khai báo mầu xắc kích thước cố định
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#00BCD4",
        error: "#E64A19"
    },
    typography: {
        fontFamily: "Roboto",
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#7C4DFF",
        textColor: "$FFFFFF",
        borderColor: "#cccccc",
    }
});

export default theme;
 
