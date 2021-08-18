import "./App.scss";
import Main from './components/Main';
import { Route, Switch } from "react-router-dom";
import {createTheme, MuiThemeProvider} from "@material-ui/core";
import axios from "axios";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6322a3'
        }
    }
})

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes';

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <div className='App'>
              <Switch>
                  <Route exact path='/' component={Main}/>
              </Switch>
          </div>
      </MuiThemeProvider>

  )
}

export default App;
