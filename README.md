# variable-monitor
Variable-Monitor is a library that allows to log objects properties of various types (Variable, Array) overtime. Variable Monitor exports the logged data in a standardized format, that makes it easy to have it visualized by other visualization libraries.

## Usage

```javascript
import {Monitor} from 'react-monitor-dashboard';

my_object={
  var1: 12,
  arr1: [1,2,3],
  arr2: [14,5,111]
};

monitor1=new Monitor("monitor_my_object");
//add new logger for property "var1" of object "my_object", log data at every time step"
monitor1.add({name: "logger_variable_1", obj: my_object, prop: "var1", interval: 1});
//add new logger for property "arr1" of object "my_object", log data every 2 time steps"
monitor1.add({name: "logger_array_1", obj: my_object, prop: "arr1", interval: 2});
//add new logged for property "arr2" of object "my_object", log data every 100 time steps"
monitor1.add({name: "logger_array_2", obj: my_object, prop: "arr2", interval: 100}); 

for(var i=0;i<100;i++){
  my_object.var1=Math.random()*100;
  my_object.arr1.push(Math.random()*10);
  my_object.arr2.push(Math.random()*150);
  
  monitor1.tick(); //call the next time step, log data
}
``` 

## Loggers
So far, VariableMonitor is only able to log variables and arrays. More datatypes will be supported in the future.

## TODO List

- [ ] Variable Watcher that automatically detects when variable is changed and logs the new value
- [ ] Save to Disk/Database
- [ ] Logger for Graph data
- [ ] Logger