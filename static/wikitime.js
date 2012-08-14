SimileAjax.History.enabled = false;

$(function() {
	
	TimelineWrapper.load();
	$("#noResults").hide();
	$("#nextPage").hide();
	$("#prevPage").hide();
	
	window.History.Adapter.bind(window,'statechange',function(){
		var state = window.History.getState();
		doSearch(state.title);
	});
	var lastQuery = "";
	var page = 0;
	$("#nextPage").click(function(event){
		++page;
		doSearch(lastQuery);
	});
	$("#prevPage").click(function(event){
		--page;
		if (page < 0) page = 0;
		doSearch(lastQuery);
	});
	var doSearch = function(query) {
		lastQuery = query;
		query = unescape(unescape(query));
		
		//Ratings.setNewQuery(query);
		
		$("#keywords").val(query);
		$("#timeSlider").fadeTo(100, 0.5);
		$("#timeline").fadeTo(100, 0.5);
		
		var query = '/api/search/' + escape(query) + '/' + page;
		window.console && console.log && console.log(query);
		$.get(query).success(function(data){
			var maxPage = (page+1)*50;
			if (maxPage > data.numResults) maxPage = data.numResults;
			$("#resultCount").text(page*50 + ' - ' + maxPage + ' of ' + data.numResults);
			$("#time").text(data.time.toPrecision(2));
			$("#nextPage").hide();
			$("#prevPage").hide();
			
			//Results debug output
			/*var result = "<br/><br/><br/>";
			for (var i in data.results){
				var item = data.results[i];
				result += item.caption + " (" + item.weight + ")<br/>";
			}
			$("#results").html(result);*/
			
			if (data.numResults > 0) {
				TimelineWrapper.setData(data.results, data.fromDate, data.toDate);
				$("#timeSlider").fadeTo(300, 1.0);
				$("#fromYear").fadeTo(300, 1.0);
				$("#toYear").fadeTo(300, 1.0);
				$("#noResults").hide();
				if (page > 0) $("#prevPage").show();
				if (data.numResults > (page+1) * 50) $("#nextPage").show();
			}
			else {
				TimelineWrapper.clearData();
				$("#timeSlider").fadeOut();
				$("#fromYear").fadeOut();
				$("#toYear").fadeOut();
				$("#noResults").show();
			}
			$("#timeline").fadeTo(300, 1.0);
		}).error(function(error){
			TimelineWrapper.clearData();
			window.console && console.log && console.log("Search failed\n" + error.responseText);
		});
	};
	
	if (initialSearch.length > 0){
		doSearch(initialSearch);
	}
	$("#searchForm").submit(function(){
		var query = $("#keywords").val();
		page = 0;
		window.History.pushState(query, query, "?"+escape(query));
		return false;
	});
});