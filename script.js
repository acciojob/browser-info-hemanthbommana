//your JS code here. If required.
function displayMsg(){
	let browserName = navigator.appName;
	let version = navigator.appVersion;
	let ans = document.getElementById('browser-info');
	
	let temp = "You are using " + browserName + " version " + version;
	ans.innerText = temp;
	
}
displayMsg();
