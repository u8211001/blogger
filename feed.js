//<![CDATA[  

/*
feedParam {
  domain: 'https://ankas-ni.blogspot.com/',
  type: 'default', // 'default', 'symmary'
  handler: jsonHandler, // callback handler
  startIndex: 0,
  maxResults: 0
}

function feedUrlConstruct(domain, type, handler, startIndex, maxResults) {
  feedUrl = domain + "/feeds/posts/" + type + "?alt=json&callback=" + handler + "&start-index=" + startIndex + "&max-results=" + maxResults;
  return feedUrl;
}


function jsonHandler(json) {
  var totalPosts;
  var postNum;
  var feed;

  if (!json.feed.entry.length)
    return;

  feed = json.feed;
  totalPosts = json.feed.openSearch$totalResults.$t;
  postNum = startIndex - 1;

  for (var i = 0; i < feed.entry.length; i++) {
    var entry = feed.entry[i];
    var title = entry.title.$t;

    for (var j = 0; j < entry.link.length; j++) {
      if (entry.link[j].rel == "alternate") {
        var url = entry.link[j].href;

        if (url && url.length > 0 && title && title.length > 0) {
          var liE = document.createElement("li");

          var a1E = document.createElement("a");
          a1E.href = url;
          a1E.textContent = (totalPosts - postNum) + " " + title;

          liE.appendChild(a1E);
          elmt.appendChild(liE);

          postNum++;
        }

        break;
      }
    }
  }

  if (feed.entry.length >= maxResults) {
    startIndex += maxResults;
    sendQuery12();
  }

}


function getAllPost() {
  var feedUrl;
  var script;

  feedUrl = feedUrlConstruct(feedParam.domain, feedParam.type, feedParam.handler, feedParam.startIndex, feedParam.maxResults);

  //
  script = document.createElement("script");
  script.src = feedUrl;
  document.body.appendChild(script);
}

getAllPost();
*/

/*
function Feed (domainUrl, feedType, feedHandler, startIndex, maxResults) 
{
    this.domainUrl = domainUrl;
    this.feedType = feedType;
    this.feedHandler = feedHandler;
    this.startIndex = startIndex;
    this.maxResults = maxResults;
}

Feed.prototype.buildFeedUrl = function ()
{
    var feedUrl = domainUrl + "/feeds/posts/" + feedType + "?alt=json&callback=" + feedType + "&start-index=" + startIndex + "&max-results=" + maxResults;
    console.log (feedUrl);
    return feedUrl;
}

Feed.prototype.sendFeedUrl = function (feedUrl)
{
    var script = document.createElement("script");
    //script.src = "https://ankas-ni.blogspot.com/feeds/posts/summary?alt=json&callback=processPostList12&start-index=" + startIndex + "&max-results=" + maxResults;
    script.src = feedUrl;
    document.body.appendChild(script);
}
*/

/*
function feedCallback (json)
{
}

Feed.prototype.jsonHandler = function (json)
{
	if (!json.feed.entry.length)
        return;
    
	var elmt = document.getElementById("postList12");
	if (!elmt)
		return;

  var totalPosts = json.feed.openSearch$totalResults.$t;
	var postNum = startIndex-1;
	var feed = json.feed;

  for (var i = 0; i < feed.entry.length; i++)
  {
    var entry = feed.entry[i];
    var title = entry.title.$t;

    for (var j = 0; j < entry.link.length; j++)
    {
      if (entry.link[j].rel == "alternate")
      {
        var url = entry.link[j].href;

        if (url && url.length > 0 && title && title.length > 0)
        {
          var liE = document.createElement("li");

          var a1E = document.createElement("a");
          a1E.href = url;
          //a1E.textContent = (postNum + 1) + " " + title;
          a1E.textContent = (totalPosts - postNum) + " " + title;

          liE.appendChild(a1E);
          elmt.appendChild(liE);

          postNum++;
        }

        break;
      }
    }
  }

  if (feed.entry.length >= maxResults)
  {
    startIndex += maxResults;
    var feedUrl = buildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults);
    sendFeedUrl(feedUrl);    
    //sendFeedUrl();
  }
}
*/

/*
var feedParam = {
    domainUrl: 'https://ankas-ni.blogspot.com',
    feedType: 'default', // 'default', 'symmary'
    feedHandler: null, // callback handler
    startIndex: 1,
    maxResults: 100,

};
*/



//-------------------
var startIndex = 1;
var maxResults = 500;
var domainUrl = 'https://ankas-ni.blogspot.com';
//var domainUrl = 'https://hikingtpe.blogspot.com';
var feedType = 'default';
//var feedType = 'summary';
var feedHandler = "jsonHandler";


function buildFeedUrl(domain, type, handler, startIndex, maxResults, label) {
    var feedUrl;
    if (label) {
// <script src="/feeds/posts/default/-/單車旅行?published&amp;alt=json-in-script&amp;callback=labelthumbs" type="text/javascript">
        feedUrl = domain + "/feeds/posts/" + type + "/-/" + label + "?alt=json-in-script&callback=" + handler + "&start-index=" + startIndex + "&max-results=" + maxResults;
    } else {	// null for all posts
//script.src = "https://ankas-ni.blogspot.com/feeds/posts/summary?alt=json&callback=processPostList12&start-index=" + startIndex + "&max-results=" + maxResults;
//        feedUrl = domain + "/feeds/posts/" + type + "?alt=json&callback=" + handler + "&start-index=" + startIndex + "&max-results=" + maxResults;
        feedUrl = domain + "/feeds/posts/" + type + "?alt=json-in-script&callback=" + handler + "&start-index=" + startIndex + "&max-results=" + maxResults;
    }
	
//	feedUrl = "https://ankas-ni.blogspot.com/feeds/posts/summary/-/Blogger?max-results=5&alt=json-in-script&callback=" + handler;
    return feedUrl;
}

function runScript(jsCode)
{  
    var script = document.createElement("script");
    script.src = jsCode;
	script.type = 'text/javascript';
    document.body.appendChild(script);
	//document.getElementsByTagName('head')[0].appendChild(script);	
}

function sendFeedUrl(scriptUrl)
{  
    runScript(scriptUrl);	
}

function jsonHandler(json)
{
    if (!json.feed.entry.length)
        return;
/*
    var elmt = document.getElementById("label_with_thumbs");    
    if (!elmt)
        return;
*/        
    var $elmt = $(".label_with_thumbs");
/*
    var $elmt = $('<ul id="label_with_thumbs">');
    $(document.body).append($elmt);
*/
    var totalPosts = json.feed.openSearch$totalResults.$t;
    var postNum = startIndex-1;
    var feed = json.feed;

    for (var i = 0; i < feed.entry.length; i++)
    {
        var entry = feed.entry[i];
        var title = entry.title.$t;
		//var summary = entry.summary.$t;
		var content = entry.content.$t;
        var url;
        var commenttext;
        var commenturl;
        var thumburl;
		var tooltipContent = "";

		// url of content and comment
        for (var j = 0; j < entry.link.length; j++)
        {
			if(entry.link[j].rel=='replies'&&entry.link[j].type=='text/html'){
				commenttext = entry.link[j].title;
				commenturl = entry.link[j].href;
			}

            if (entry.link[j].rel == "alternate")
            {
                url = entry.link[j].href;
                break;
            }
        }
        
        // thumburl
        try {
            thumburl=entry.media$thumbnail.url;
        } catch (error) {
            s=entry.content.$t;
            a=s.indexOf("<img");
            b=s.indexOf("src=\"",a);
            c=s.indexOf("\"",b+5);
            d=s.substr(b+5,c-b-5);
            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
                thumburl=d;
            }else{
                thumburl='http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png';
			}
        }
        

        if (url && url.length > 0 && title && title.length > 0)
        {
/*        
            var liE = document.createElement("li");
            var a1E = document.createElement("a");

            a1E.href = url;
            //a1E.textContent = (postNum + 1) + " " + title;
            a1E.textContent = (totalPosts - postNum) + " " + title;
            
            var img = document.createElement('<img class="label_thumb">');

            liE.appendChild(a1E);
            elmt.appendChild(liE);
*/

            //var $liE = $('<li class="clearfix">');
            var $liE = $('<li class="tooltip">');
            
			var $a1E = $('<a href="'+url+'" target ="_blank"><img class="label_thumb" src="'+thumburl+'"/></a>');
			
			var prefix = (totalPosts - postNum) + ".  ";
            var $a2E = $('<strong><a href="'+url+'" target ="_blank">'+ prefix + " " + title +'</a></strong>');
			
			// Tooltip message
			var tooltipContent = "";
			if (entry.category) {
				for (k=0;k<entry.category.length;k++) {
					tooltipContent += (entry.category[k].term);
					if (k < entry.category.length-1) {
						tooltipContent += ", ";
					}
				}
			} else {
				tooltipContent = "No label";
			}
			//tooltipContent = title;//content;//.substring(0, 90);;
            var $a3E = $('<span class="tooltiptext">' + tooltipContent + '</span>');
            //var $a3E = $('<span class="tooltiptext">' + tooltipContent + '<img class="label_thumb" src="'+thumburl+'"/></span>');
			//$a3E.hide();
/*            
            var $div = $('<div>');
            $div.append ($a1E);
            $div.append ($a2E);
            $a1E.css('display', 'inline');
            $a2E.css('display', 'inline');
            $div.css('display', 'inline');
            
            $liE.append ($div);
*/
            $liE.append ($a1E);
            $liE.append ($a2E);
            $liE.append ($a3E);

            $elmt.append ($liE);

            postNum++;
        }
        
    }

    if (feed.entry.length >= maxResults)
    {
        startIndex += maxResults;
        var feedUrl = buildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults);
        sendFeedUrl(feedUrl);    
    }
    
}

/*
function mycallback(json) {
	for (var i = 0; i < json.feed.entry.length; i++) {
	  for (var j = 0; j < json.feed.entry[i].link.length; j++) {
		if (json.feed.entry[i].link[j].rel == 'alternate') {
		  var postUrl = json.feed.entry[i].link[j].href;
		  break;
		}
	  }
	  var postTitle = json.feed.entry[i].title.$t;
	  var postSummary = json.feed.entry[i].summary.$t;
	  var item = '<div class="wrapper"><h3><a href=' + postUrl + '>' + postTitle + '</h3></a><p>' + postSummary + '</p></div>';
	  document.write(item);
	}
}
*/

/*
//get categories of blog & sort them
	<script src="/feeds/posts/summary?alt=json&max-results=0&callback=cat"></script>
	
	<!--
	<script src="http://ankas-ni.blogspot.com/feeds/posts/summary?alt=json&max-results=0&callback=cat"></script>
	-->
*/	
function categoryCallback(json){
	var label = json.feed.category;
	var lst=[];
	for (i=0; i<label.length; i++){
	  lst[i] = label[i].term ;  
	}
	alert(lst.sort());  //use any sort if you need that 
}
	
	


$(function() {
/*
	var categoryUrl = "http://ankas-ni.blogspot.com/feeds/posts/summary?alt=json&max-results=0&callback=categoryCallback";
	sendFeedUrl (categoryUrl);
*/
    //var feedUrl =categoryUrlildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults, null);
    //var feedUrl = buildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults, "單車旅行");
 //   var feedUrl = buildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults, "繪畫");
 
    var feedUrl = buildFeedUrl (domainUrl, feedType, feedHandler, startIndex, maxResults, null);	// null for all posts
    sendFeedUrl(feedUrl);

	
/*    
    var feed = new Feed (domainUrl, feedType, feedHandler, startIndex, maxResults);
    var feedUrl = feed.buildFeedUrl ();
    feed.sendFeedUrl (feedUrl);
*/    

});

//]]>