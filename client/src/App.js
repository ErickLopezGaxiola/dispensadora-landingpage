import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Sections/Home';
import Services from './Sections/Services';
import Contacto from './Sections/Contact';

// Sobreescritura de colores primarios de MUI
const theme = createTheme({
palette: {
  primary: {
    main: '#F810E3',
  },
  secondary: {
    main: '#10F86B',
  },
}
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router> 
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/servicios'>
                <Services />
              </Route>
              <Route path='/contacto'>
                <Contacto />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
