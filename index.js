"use strict";

const electron = require('electron');
const path = require('path');
const url = require('url');
// Module to control application life.
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

//init window
let win;

//create on ready function
function createWindow(){
	//create browser window
	win = new BrowserWindow({width:1200, height:800});
	
	//load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, '/index.html'),
		protocol: 'file',
		slashes: true
	}));

	//open devtools
	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	})

}

//Run create window function
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

/*app.on('ready', () => {
	mainWindow = new BrowserWindow({width:1200, height:800});
	mainWindow.loadUrl('file://' +__dirname+'/index.html');

})*/


/*app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	//mainWindow.loadURL('file://' +__dirname+'/index.html');
	//open any url
	//mainWindow.loadURL('https://github.com')
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '/index.html'),
		protocol: 'file',
		slashes: true
	}));

	//open devtools
	mainWindow.webContents.openDevTools();
});*/
