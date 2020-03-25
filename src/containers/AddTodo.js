import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));  

const AddTodo = ({ dispatch }) => {
  const classes = useStyles();
  let input
  console.log(input);

  
  

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off"  onSubmit={e => {
        e.preventDefault()
        if (!input) {
          return
        }
        dispatch(addTodo(input))
        input = input
      }}>
     
        <TextField id="standard-basic" label="ADD TODO" variant="outlined"  onChange={(e)=>{ input = e.target.value}} />
        <Button variant="contained" color="primary" type='submit'>
          Add Todo
        </Button>
       
      </form>
    </div>
  )
}

export default connect()(AddTodo)
