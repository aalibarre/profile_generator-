const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question( 'What is your favourite food? ', (food) => {
      rl.question('What is your favourite movie? ', (movie) =>{
          rl.question('Which is your favourite sport? ', (sport) =>{
              rl.question('What is your favourite song? ', (song) => {
                rl.question('What is your superpower? ', (superpower) => {
                    rl.close();
                    console.log(`My name is ${name}. My favourite food is ${food}. My favourite movie is ${movie}. My favourite sport is ${sport}. My favourite song is ${song}. My superpower is ${superpower}.`);
                })
              })
          })
      })

  })
});

