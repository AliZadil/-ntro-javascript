// Fetch the stock data from the API

fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=AAPL,MSFT,GOOG&types=quote')
  .then(response => response.json())
  .then(data => {

// Extract the quote data for each stock

    const appleQuote = data['AAPL']['quote'];
    const microsoftQuote = data['MSFT']['quote'];
    const googleQuote = data['GOOG']['quote'];

// Build the HTML for the table

    const tableHTML = `
      <table>
        <tr>
          <th>Stock</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>Apple (${appleQuote.symbol})</td>
          <td>${appleQuote.latestPrice}</td>
          <td>${appleQuote.change} (${appleQuote.changePercent}%)</td>
        </tr>
        <tr>
          <td>Microsoft (${microsoftQuote.symbol})</td>
          <td>${microsoftQuote.latestPrice}</td>
          <td>${microsoftQuote.change} (${microsoftQuote.changePercent}%)</td>
        </tr>
        <tr>
          <td>Google (${googleQuote.symbol})</td>
          <td>${googleQuote.latestPrice}</td>
          <td>${googleQuote.change} (${googleQuote.changePercent}%)</td>
        </tr>
      </table>
    `;

// Insert the HTML into the page

    document.querySelector('#stock-table').innerHTML = tableHTML;
  })
  .catch(error => {
    console.error(error);
  });
