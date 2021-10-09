import app from './packages/help-me-buy/app';


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})