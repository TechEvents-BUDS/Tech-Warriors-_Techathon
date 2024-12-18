import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Graph from './Graph'

const Container = () => {

    let btnColor="#118a7e"
    let ParentColor="#3baea0"
    let verydarkcolor = "#1f6f78"

    const [Starting, setStarting] = useState("")
    const [Ending, setEnding] = useState("")
    const [Average, setAverage] = useState("")
    const [PetrolPrice, setPetrolPrice] = useState("")
    const [Profit, setProfit] = useState(0)
    const [TotalEarning, setTotalEarning] = useState("")
    const [Open, setOpen] = useState(false)
    const [AverageData, setAverageData] = useState([])
    const [PetrolPriceData, setPetrolPriceData] = useState([])
    const [ProfitData, setProfitData] = useState([])


    useEffect(() => {
        let total_distance = Number(Ending) - Number(Starting)
        let petrolinLiter = total_distance / Average
        let TotalLiterPetrolPrice = petrolinLiter * PetrolPrice





        setProfit(isNaN((TotalEarning - TotalLiterPetrolPrice).toFixed(2)) ? 0 : (TotalEarning - TotalLiterPetrolPrice).toFixed(2))
    }, [Starting, Ending, Average, PetrolPrice, TotalEarning])

    const dialogStyle = {
        padding: "20px 10px",
        height: "90%",
        width: "90%",
        maxWidth: "95%",
        borderRadius: "15px",
        background: "#aeaeff",
    };

    const handleClose = () => {
        setOpen(false);
    };

    const AddData = () => {
        setAverageData([...AverageData,Average])
        setPetrolPriceData([...PetrolPriceData,PetrolPrice])
        setProfitData([...ProfitData,Profit])

    }

    return (
        <>

            <Box height={'100vh'} width={'100vw'} sx={{ background: "#ddd" }} className="col x-y-center" boxSizing={"border-box"}>
                <h1>Fuel Expense Monitoring System</h1>
                <Box height={"90vh"} width={"90vw"} sx={{ background: btnColor }} padding={"10px"} boxSizing={"border-box"} position={"relative"}>
                    <Box bgcolor={ParentColor} height={"auto"} padding={"20px 10px"} boxSizing={"border-box"} borderRadius={"10px"}>
                        <Box className="between" marginBottom={"30px"}>
                            <TextField id="outlined-basic" label="Starting" value={Starting} onChange={e => setStarting(e.target.value)} variant="outlined" />
                            <TextField id="outlined-basic" label="Ending" value={Ending} onChange={e => setEnding(e.target.value)} variant="outlined" />
                            <TextField id="outlined-basic" label="Petrol Price" value={Average} onChange={e => setAverage(e.target.value)} variant="outlined" />
                            <TextField id="outlined-basic" label="Petrol Average" value={PetrolPrice} onChange={e => setPetrolPrice(e.target.value)} variant="outlined" />
                            <TextField id="outlined-basic" label="Total Earning" value={TotalEarning} onChange={e => setTotalEarning(e.target.value)} variant="outlined" />
                        </Box>
                        <Box className="between" marginBottom={"30px"}>
                            <TextField id="outlined-basic" label="Profit" variant="outlined" value={Profit} />
                        </Box>
                        <Button variant='contained' style={{ width: "150px", padding: "12px 20px", background:verydarkcolor }} onClick={AddData}>
                            Add
                        </Button>
                    </Box>
                    <Box bgcolor={ParentColor} width={"100%"} height={"200px"} className="x-y-center" boxSizing={"border-box"} position={"absolute"} left={0} margin={"5px 2px"} bottom={"20px"}>
                        <Button variant='contained' onClick={() => {setOpen(true)}} sx={{background:verydarkcolor}}>Show Graph</Button>
                    </Box>
                </Box>
                    <Typography fontWeight={"bold"}>Developed By Tech Warriors</Typography>

            </Box>
            <Dialog
                open={Open}
                onClose={handleClose}
                // className="bg-color"
                PaperProps={{ sx: dialogStyle }}
            >
                <DialogTitle textAlign={"center"}>Analytics</DialogTitle>
                <DialogContent>
                    {/* <Typography variant="h5" marginBottom={"10px"}>
                        Patinet Information
                    </Typography> */}
                    <DialogContentText display={"flex"} flexDirection={"column"}>
                        <Box height={"90%"} width={"100%"} >
                            <Graph AverageData={AverageData} PetrolPriceData = {PetrolPriceData} ProfitData={ProfitData}/>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>

    )
}

export default Container