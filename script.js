const now = (date = new Date()) => date.getTime();

const sleep = (interval) => {
    interval *= 1000
    const end = now() + interval;
    while (now() < end);
};

const sum = (a, b) => a + ' ' + b;

i = 100
while (i > 0) {
    var messageInput = document.getElementById('message');
    var messageInput2 = document.getElementById('hello-message');
    const amount = sum(messageInput.value, messageInput2.value);
    console.log(amount, i);
    sleep(0.1)
    i -= 1;
};
