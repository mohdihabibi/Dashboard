import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import NativeSelect from '@material-ui/core/NativeSelect'
import Input from '@material-ui/core/Input'
import { TextField } from '@material-ui/core';



const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
  },
  button: {
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    fontSize:'20px',
    float:'right'
  }, 
  form: {
    width:'50%', 
    float:'center', 
    borderStyle: 'solid'
  }
};

let id = 0;
function createData(name, weight, sensorID) {
  id += 1;
  return { id, name, weight, sensorID };
}

// TODO: Refactor to get data from your endpoint
const data = [
  createData('Frozen yoghurt', 159, 0),
  createData('Ice cream sandwich', 237, 0)
];

// TODO: Refactor to get data from your endpoint
const sensors = [
  '123','234','345'
]

function addCell(){
  data.push(createData(document.getElementById('name').value, document.getElementById('weight').value, document.getElementById('uncontrolled-native').value))
  // TODO: Update your backend with the new item
  // TODO: get available sensor data again to remove the one just added
}

function SimpleTable(props) {
  const [count, setCount] = useState(0)
  const { classes } = props;

  function buttonHandler(){
    addCell()
    setCount(count+1)
  }
  return (
    <Paper className={classes.root}>
      <Button variant="primary" className={classes.button} onClick={buttonHandler}>+</Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Sensor ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.weight}</TableCell>
              <TableCell align="right">{n.sensorID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.form}>
      <div>Item Name</div>
      <TextField id ="name"/>
      <div>Item Weight</div>
      <TextField id ="weight"/>
      <InputLabel htmlFor="uncontrolled-native">Sensor</InputLabel>
      <NativeSelect defaultValue={""} input={<Input name="name" id="uncontrolled-native" />}>
            <option value="" />
            {sensors.map(n => (
            <option>{n}</option>
          ))}
          </NativeSelect>
          </div>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
