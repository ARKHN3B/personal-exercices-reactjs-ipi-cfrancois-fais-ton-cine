import React, { Component }           from 'react'
import { Button }                     from '@material-ui/core';
import { Delete as DeleteIcon, Check as CheckIcon }       from "@material-ui/icons"

export class SubmitCancel extends Component {

  constructor(props: any) {
    super(props)
  }


  render(): React.ReactNode {
    return (
      <div>
        <Button variant="contained" color="secondary">
          Delete
          <DeleteIcon/>
        </Button>
        <Button variant="contained" color="primary">
          Send
          {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
          <CheckIcon/>
        </Button>
      </div>
    );
  }
}