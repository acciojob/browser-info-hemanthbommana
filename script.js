//your JS code here. If required.
function displayMsg(){
	let browserName = navigator.appName;
	let version = navigator.appVersion;
	let ans = document.getElementById('browser-info');
	ans.innerText= "You are using "+browserName+"version"+version;
	
}
window.onload = displayBrowserInfo;