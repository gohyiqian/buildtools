const choices = ['Rock', 'Paper', 'Scissors'];

const getChoices = () => {
  return choices;
};

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const getOutcome = (userChoice, computerChoice) => {
  let result;
  if (userChoice === 'Rock') {
    if (computerChoice === 'Paper') {
      result = 'lost';
    } else if (computerChoice === 'Scissors') {
      result = 'won';
    } else {
      result = 'tied';
    }
  } else if (userChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      result = 'won';
    } else if (computerChoice === 'Scissors') {
      result = 'lost';
    } else {
      result = 'tied';
    }
  } else {
    if (computerChoice === 'Paper') {
      result = 'won';
    } else if (computerChoice === 'Rock') {
      result = 'lost';
    } else {
      result = 'tied';
    }
  }
  return result;
};

export { getChoices, getComputerChoice, getOutcome };
