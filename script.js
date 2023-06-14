const color = (kind) => {
    const colors = {
      info: `\x1b[0;${kind}m`
    };
    const color = colors.info;
    return (...s) => {
      console.log(color + s);
    };
  };
  
  

// const now = () => new Date().getTime();

// const sleep = (interval) => {
//     const interval_otv = interval * 1000;
//     const end = now() + interval_otv;
//     while (now() < end);
// };

const sum = (a, b) => a + ' ' + b;

const messageInput = document.getElementById('message');
const messageInput2 = document.getElementById('hello-message');

if (messageInput !== null && messageInput2 !== null) {
    for (let i = 100; i > 0; i--) {
        setTimeout(() => {
            const amount = sum(messageInput.value, messageInput2.value);
            color(92)(amount + ' ' + i);
        }, (1 * 1000));
    };
}

