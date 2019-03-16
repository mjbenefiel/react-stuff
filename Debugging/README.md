# Debug Example Demo

This is a demonstration on how to use debugging tools in Visual Studio Code. This project currently has bugs that have been left there intentionally. The fixes have been provided in branches `places-fix` for Places code and `client-fix` for the client-side code.

The article that goes along with this project can be found on [Sitepoint](https://www.sitepoint.com). The article is titled [**A Guide to Debugging a JavaScript Project Using VS Code and the Chrome Debugger**.](https://www.sitepoint.com/debugging-javascript-projects-vs-code-chrome-debugger/)

## Requirements

* [Node.js](http://nodejs.org/)

## Installation Steps

1. Clone repository
2. Run `npm install`
3. Install mocha globally: `npm install -g mocha`
4. To run tests, `npm test`
5. To run the client-side, you need to start express server by `npm start` and opening the url [localhost:3000](http://localhost:3000) in your browser

## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<strong>Notes</strong>
- Drag Dots anchor: for moving the toolbar to somewhere it’s not blocking anything
- Continue: continue the debugging session
- Step over: execute code line by line, skipping functions
- Step into: execute code line by line, going inside functions
- Step out: if already inside a function, this command will take you out
- Restart: restarts the debugging session
- Stop: stops the debugging session.

- Variables: displays local and global variables within the current scope (i.e. at the point of execution)
- Watch: you can manually add expressions of variables you want to monitor
- Call Stack: displays a call stack of the highlighted code
- Breakpoints: displays a list of files with breakpoints, along with their line numbers.
