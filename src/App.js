import React, { useState, useCallback } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import alertify from 'alertifyjs'
import { Button, Container } from './Common/Components'
import Demo1 from './Demo1/Container'
import Demo2 from './Demo2/Container'
import Demo3 from './Demo3/Container'
import Demo4 from './Demo4/Container'
import Demo5 from './Demo5/Container'
import Demo6 from './Demo6/Container'

const App = () => {
  return (
      <Container>
            <div class="d-flex justify-content-between">
            <Link to="/demo1">
              <Button>1</Button>
            </Link>
            <Link to="/demo2">
              <Button>2</Button>
            </Link>
            <Link to="/demo3">
              <Button>3</Button>
            </Link>
            <Link to="/demo4">
              <Button>4</Button>
            </Link>
            <Link to="/demo5">
              <Button>5</Button>
            </Link>
            <Link to="/demo6">
              <Button>6</Button>
            </Link>
        </div>
        <Switch>
          <Route path="/demo1" component={() => <Demo1 />} />
          <Route path="/demo2" component={() => <Demo2 />} />
          <Route path="/demo3" component={() => <Demo3 />} />
          <Route path="/demo4" component={() => <Demo4 />} />
          <Route path="/demo5" component={() => <Demo5 />} />
          <Route path="/demo6" component={() => <Demo6 />} />
        </Switch>
      </Container>

    )
}



export const showAlert = (status, text) => {	
	alertify[status](text)
}

export default App;
