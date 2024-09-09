import React from 'react';
import './Guide.css'; // Importing CSS for styling

function Guide() {
  return (
    <div className="guide-container">
      <h1>Web Scraping Platform Guide</h1>
      
      <section className="overview">
        <h2>Overview</h2>
        <p>
          Web scraping is the process of extracting data from websites. It involves sending requests to web pages and parsing the HTML to retrieve the desired information. Web scraping is used for various purposes, including data analysis, market research, and automation.
        </p>
      </section>
      
      <section className="components">
        <h2>Key Components</h2>
        <div className="component">
          <h3>1. Web Scraper</h3>
          <p>The main tool that sends HTTP requests to web pages and retrieves the HTML content.</p>
        </div>
        <div className="component">
          <h3>2. Parser</h3>
          <p>Processes the HTML content to extract the required data. Commonly used parsers include BeautifulSoup (Python) and Cheerio (Node.js).</p>
        </div>
        <div className="component">
          <h3>3. Data Storage</h3>
          <p>Stores the extracted data in a structured format, such as a database or a CSV file.</p>
        </div>
        <div className="component">
          <h3>4. Scheduler</h3>
          <p>Automates the scraping process at regular intervals to keep the data up-to-date.</p>
        </div>
      </section>
      
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Send Request:</strong> The web scraper sends an HTTP request to the target website.</li>
          <li><strong>Retrieve HTML:</strong> The server responds with the HTML content of the requested page.</li>
          <li><strong>Parse HTML:</strong> The parser processes the HTML to extract the relevant data.</li>
          <li><strong>Store Data:</strong> The extracted data is saved in a structured format.</li>
          <li><strong>Schedule:</strong> The scheduler automates the scraping process at specified intervals.</li>
        </ol>
      </section>
      
      <section className="sample-code">
        <h2>Sample Code</h2>
        <p><strong>Python Example using BeautifulSoup:</strong></p>
        <pre>
          {`
import requests
from bs4 import BeautifulSoup

# Send request
response = requests.get('https://example.com')

# Parse HTML
soup = BeautifulSoup(response.content, 'html.parser')

# Extract data
data = soup.find_all('h1')

# Print data
for item in data:
    print(item.text)
          `}
        </pre>
        <p><strong>JavaScript Example using Cheerio:</strong></p>
        <pre>
          {`
const axios = require('axios');
const cheerio = require('cheerio');

// Send request
axios.get('https://example.com').then(response => {
  const $ = cheerio.load(response.data);

  // Extract data
  $('h1').each((i, elem) => {
    console.log($(elem).text());
  });
});
          `}
        </pre>
      </section>
    </div>
  );
}

export default Guide;
