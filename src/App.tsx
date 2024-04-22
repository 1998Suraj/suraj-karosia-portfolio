import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import routes from './routes/routes';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Portfolio
              </Typography>
              {routes.map((route, index) => (
                <Button key={index} color="inherit" component={Link} to={route.path}>{route.path.replace('/', '')}</Button>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
        {routes.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
          //   render={(props) => <Component {...props} />
          // }
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
