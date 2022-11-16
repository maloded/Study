const getPerson = id => {
    const thenable = {
        then(onFulfilled) {
            setTimeout(() => {
                const person = { id, name: 'Ded'};
                onFulfilled(person);
            }, 5000);
        }
    };
    return thenable;
};

getPerson(10).then(console.log);

