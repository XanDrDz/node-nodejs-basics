const parseEnv = () => {
    const prefix = 'RSS_';
    const variables = Object.keys(process.env).filter(key => key.startsWith(prefix));
    if (variables.length === 0) {
      console.log('No environment variables found');
      return;
    }

    console.log(process.env)
  
    const result = variables.map(key => `RSS_${key.slice(prefix.length)}=${process.env[key]}`).join('; ');
    console.log(result);
};

parseEnv();