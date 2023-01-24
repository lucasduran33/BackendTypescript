import {Router} from 'express'
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}


readdirSync(PATH_ROUTER).filter((fn) => {
    const cleanName =  cleanFileName(fn);
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => { //importacion dinamica ->
            console.log(`Trabajando sobre ruta: ${cleanName}`)
         

router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
});

export {router};
 

