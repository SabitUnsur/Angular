const response = async(res,callBack)=>{
    try {
        await callBack(); // This is the function that will be called
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}