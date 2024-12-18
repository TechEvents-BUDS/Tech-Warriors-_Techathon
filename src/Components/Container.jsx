import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Container = () => {
    return (
        <Box height={'100vh'} width={'100vw'} sx={{ background: "#ddd" }} className="x-y-center">
            <Box height={"90vh"} width={"90vw"} sx={{ background: "#d1d1d2" }} padding={"10px"} boxSizing={"border-box"}>
                <Box bgcolor={"#80808036"} height={"auto"} padding={"20px 10px"} boxSizing={"border-box"} borderRadius={"10px"}>
                    <Box className="between" marginBottom={"30px"}>
                        <TextField id="outlined-basic" label="Starting" variant="outlined" />
                        <TextField id="outlined-basic" label="Ending" variant="outlined" />
                        <TextField id="outlined-basic" label="Petrol Price" variant="outlined" />
                        <TextField id="outlined-basic" label="Average" variant="outlined" />
                    </Box>
                    <Button variant='contained' style={{ width: "150px", padding: "12px 20px" }}>
                        Add
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Container