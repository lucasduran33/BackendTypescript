import express from 'express';

class Application {
    app: express.Application;

constructor(){
    this.app= express()
}


start() {
    const PORT :number = 3000
    this.app.listen(PORT, () => {
        console.log(`Server On in LocalHost ${PORT} `)
    });

}

}


export default Application;