import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from '../Website/Homepage';
import Header from '../Website/Header'
import Footer from '../Website/Footer';
import Contact from '../Website/Contact';
import Workus from '../Website/About';
import About from '../Website/Works';



export default function Routes() {
    return (
<BrowserRouter>

      


      <Route
        exact
        path={'/'}
        render={(props) => (
          <>
             <Header {...props}  />
             <Homepage {...props} />
             <Footer {...props}/>
          
          </>
        )}
      />

<Route
exact
        path={'/contact'}
        render={(props) => (
          <>
             <Header {...props}  />
             <Contact {...props} />
             <Footer {...props}/>
          
          </>
        )}
      />

<Route
exact
        path={'/work'}
        render={(props) => (
          <>
             <Header {...props}  />
             <Workus {...props} />
             <Footer {...props}/>
          
          </>
        )}
      />


<Route
exact
        path={'/about'}
        render={(props) => (
          <>
             <Header {...props}  />
             <About {...props} />
             <Footer {...props}/>
          
          </>
        )}
      />


   

 </BrowserRouter>
    )

    
          }