const sleep = msec => new Promise(resolve => {
    setTimeout(resolve, msec);
});

(async () => {
    console.log('Start sleep: ' + new Date().toISOString());
    let time = 4000;
    console.log(`Sleep about ${time/1000}`);
    await sleep(time);
    console.log('After sleep ' + new Date().toISOString());
})();