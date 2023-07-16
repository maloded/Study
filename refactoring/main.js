const playsData = require('./plays.json');
const invoicesData = require('./invoices.json');
const renderPlainText = require('./renderPlainText.js');
const renderHtml = require('./renderHtml.js');
const createStatementData = require('./createStatementData.js');
const server = require('./server');


function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays))
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

console.log(statement(invoicesData[0], playsData));

server(htmlStatement(invoicesData[0], playsData));



