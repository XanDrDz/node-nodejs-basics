const parseArgs = () => {
    const args = process.argv.slice(2);
    const properties = {};
  
    while (args.length) {
      const prop = args.shift().slice(2);
      const value = args.shift(); 
      properties[prop] = value;
    }
  
    for (const [prop, value] of Object.entries(properties)) {
      console.log(`${prop} is ${value}`);
    }
};

parseArgs();