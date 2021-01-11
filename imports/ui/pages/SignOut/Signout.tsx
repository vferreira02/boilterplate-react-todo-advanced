import React from 'react'
import { Meteor } from 'meteor/meteor'
import Container from "@material-ui/core/Container";

import {cleanUserCache} from '../../../libs/userAccount';

import {signoutStyle} from "./SignoutStyle";

const Signout = () => {
  Meteor.logout();
  cleanUserCache();
  return (
      <Container style={signoutStyle.containerSignOut}>
        <h2 style={signoutSyle.labelExitSystem}>
          <img src="/images/wireframe/logo.png" style={signoutSyle.imageLogo} />
          <p>{'Volte sempre!!!'}</p>
        </h2>
      </Container>
  )
}


export default Signout