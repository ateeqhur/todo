import React from "react";
import "./App.css";
import {Container} from "semantic-ui-react";
import ToDOList from "./To-Do-List";



function App(){


  return(
    <div> 
        <Container>
          <ToDOList />
        </Container>
    </div>
  );
}

export default App;