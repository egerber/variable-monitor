# variable-monitor
Variable-Monitor is a library that allows to log objects properties over time. Variable Monitor exports the logged data in a standardized format, that makes it easy to have it visualized by other visualization libraries.

## Installation

```
npm install variable-monitor
```

## Usage

### Logging Objects
```javascript
import {Monitor} from 'react-monitor-dashboard';

var my_object={
  var1: 12,
  arr1: [1,2,3],
  arr2: [14,5,111]
};

var monitor1=new Monitor("monitor_my_object");
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

### Retrieving Logged Data
```javascript
var dataset=monitor1.datset;
```
Returns an object of the type
```javascript
{
  name: "monitor_name",
  type: "Dataset",
  data: [
    {
      name: "logged_arr_1",
      type: "Array",
      data: [
        {t:1, id:1, value:12},
        {t:1, id:2, value:166},
        ...
        ]
     },
     ...
     ]
}
```

## Loggers
So far, variable-monitor is able to log only properties of the type "Number" as well as Arrays of numbers. More datatypes will be supported in the future.

## TODO List

- [ ] Variable Watcher that automatically detects when variable is changed and logs the new value
- [ ] Save to Disk/Database
- [ ] Logger for Graph data
- [ ] Logger for 
