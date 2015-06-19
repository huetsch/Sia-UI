// Module to control application life.
var app = require('app');
// Module to create native browser window.
var BrowserWindow = require('browser-window');
// Module to handle path resolution among different OSes
var path = require('path');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow;

// Quit to all windows being closed.
app.on('window-all-closed', function() {
	"use strict";
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
	"use strict";
	console.log('main.js reached')
	// Create the browser
	mainWindow = new BrowserWindow({
		"height": 720,
		"width": 1200,
		"min-width": 800,
		"min-height": 600,
		"title": "Sia"
	});
	// and load the index.html of the app.
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	// Open the devtools.
	// mainWindow.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object so that the GC cleans up.
		mainWindow = null;
	});
});
