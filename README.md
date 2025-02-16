# Reddit Comments Analyzer

A Chrome extension that analyzes Reddit comments using sentiment analysis and key points extraction.

## Features

- Analyzes comments on Reddit post pages
- Provides sentiment analysis of comments
- Extracts key points from discussions
- Works on any Reddit post page

## Installation

1. Clone this repository:

```bash
git clone https://github.com/justanotherkevin/CE-reddit-sentiment.git
```

2. Install dependencies:

```bash
npm install
```

3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the directory containing this repository

## Usage

1. Navigate to any Reddit post with comments
2. Click the extension icon in your Chrome toolbar
3. View the sentiment analysis and key points extracted from the comments

## Development

- Run tests:

```bash
npm test
```

- Run tests in watch mode:

```bash
npm run test:watch
```

- Generate test coverage:

```bash
npm run test:coverage
```

## Dependencies

- [natural](https://www.npmjs.com/package/natural) (v6.5.0) - Natural language processing library
- [node-summarizer](https://www.npmjs.com/package/node-summarizer) (v1.0.7) - Text summarization library

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
