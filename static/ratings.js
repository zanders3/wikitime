//Ratings code
var Ratings = {
	setNewQuery: function(query) {
		this.lastQuery = query;
		this.hasRated = false;
		$(".rating li a").each(function(){ $(this).css('background', '#E5E5E5') });
	},
	hasRated: false,
	lastQuery: ""
};
$(function() {
	var cols = ["green","yellow","red"];
	$(".rating li a").each(function(index){
		$(this).click(function(handler){
			if (Ratings.hasRated == false) {
				Ratings.hasRated = true;
				var thisPtr = this;
				$.get('/api/rate/' + (3-index) + '/' + Ratings.lastQuery).success(function(){
					$(thisPtr).css('background', cols[index]);
				});
			}
		});
	});
});