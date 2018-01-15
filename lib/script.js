//Submit the URL and add the request in the history
function submitURL() {
	//Get the URL
	var x= document.getElementById("inputUrl").value;
	var histo = document.getElementById("listHisto");
	if(x){
		//Set the source of the iframe
		document.getElementById("videoSquare").src=x;	
		//Add the request in the history
		if (typeof(Storage) !== "undefined") {
			if (localStorage.history) 
			{
				localStorage.history=localStorage.history+"|"+x;
			} else{
				localStorage.history=x;
			}
			//Refresh the history
			var col=document.getElementById("colh");
			col.removeChild(histo);
			histo=document.createElement("div");
			histo.setAttribute("id","listHisto");
			col.appendChild(histo);
			loadHistory();
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}	
	}
}

//Load the history
function loadHistory() {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		//localStorage.removeItem("history");
		if (localStorage.history) 
		{		
			var histTemp=localStorage.history.split('|');
			var i;
			for(i =0; i < histTemp.length; i++){
				var histo = document.getElementById("listHisto");
				var para=document.createElement("p");
				var item = document.createElement("a");
				item.setAttribute("href","#");
				item.innerHTML=histTemp[i];
				item.addEventListener("click",function(){document.getElementById("videoSquare").src=this.innerHTML;});
				para.appendChild(item);
				histo.insertBefore(para,histo.childNodes[0]); 
			}
		}	
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

//Load the list of bookmarks
function loadBookmarks() {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		//localStorage.removeItem("bookmarks");
		if (localStorage.bookmarks) 
		{
			var bookmarksTemp=localStorage.bookmarks.split('|');
			document.getElementById("indicator").innerHTML = "You have "+bookmarksTemp.length+" bookmarks.";
		}
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function loadAll() {
	loadHistory();
	loadBookmarks();
}

//Add a bookmark
function addBookmark() {
	var url=document.getElementById("videoSquare").src;
	if (typeof(Storage) !== "undefined") {
		if (url) 
		{
			if (localStorage.bookmarks) 
			{
				localStorage.bookmarks=localStorage.bookmarks+"|"+url;
			} else{
				localStorage.bookmarks=url;
			}
			loadBookmarks();
		}
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}	
}

//Display the list of bookmarks
function displayBookmarks() {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		if (localStorage.bookmarks) 
		{
			var fav = document.getElementById("listBookmarks");
			var col=document.getElementById("colbm");
			col.removeChild(fav);
			fav=document.createElement("div");
			fav.setAttribute("id","listBookmarks");
			col.appendChild(fav);
			var bookmarksTemp=localStorage.bookmarks.split('|');
			var i;
			for(i =0; i < bookmarksTemp.length; i++){
				var para=document.createElement("p");
				var item = document.createElement("a");
				item.setAttribute("href","#");
				item.innerHTML=bookmarksTemp[i];
				item.addEventListener("click",function(){document.getElementById("videoSquare").src=this.innerHTML;});
				para.appendChild(item);
				fav.insertBefore(para,fav.childNodes[0]); 
			}
		}
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}



