function findMatching(drivers, name) {
     name = name.toLowerCase();
  
    return drivers.filter(driver => driver.toLowerCase().includes(name));
  }

  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  
 
  

  function fuzzyMatch(drivers, name){
    name = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(name));
  }

  function matchName(driverObjects, name){
    name = name.toLowerCase();

    return driverObjects.filter(driver => driver.name.toLowerCase() === name)
   
  }


  