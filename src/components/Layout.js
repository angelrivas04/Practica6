import {Box, Container} from "@mui/material";


const Layout = ({children}) => {
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <Container className={"container"}>{children}</Container>
            <Box className={"footer"}></Box>
        </Box>
    );
}
export default Layout;
