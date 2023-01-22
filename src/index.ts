import Application from './app'
import {connect} from './database'

const app = new Application();

app.start()
connect()



