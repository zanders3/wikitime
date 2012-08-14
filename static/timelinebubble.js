//Info Bubble Prototype
var TimelineBubble = {
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	formatDate: function(dateStr) {
		var dates = dateStr.split(',');
		var day = "";
		var month = "";
		if (dates[2] > 1) {
			var digit = dates[2] % 10;
			if (digit == 1 && dates[2] != 11) day = dates[2]+"st";
			else if (digit == 2 && dates[2] != 12) day = dates[2]+"nd ";
			else if (digit == 3 && dates[2] != 13) day = dates[2]+"rd ";
			else day = dates[2] + "th ";
		}
		if (dates[1] > 0) {
			month = parseInt(dates[1], 10);
			month = this.months[month] + " ";
		}
		return day + month + dates[0];
	},
	formatRange: function(from, to) {
		from = this.formatDate(from);
		to = this.formatDate(to);
		if (from == to) {
			return from;
		} else {
			return from + " - " + to;
		}
	},
	formatEntity: function(type, list) {
		if (list.length > 0) {
			var html = "<img src=\"/static/" + type + ".png\"/> ";
			for (var i in list) {
				if (i > 0) html += ", ";
				html += "<a href=\"/search?"+type+":&#34;" + list[i] + "&#34;\">" + list[i] + "</a>";
			}
			html += "<br/>";
			return html;
		} else {
			return "";
		}
	},
	format: function(item) {
		var html = "<h2><a href=\"/search?title:&#34;" + item.fulltitle + "&#34;\">" + item.fulltitle + "</a></h2><h3>" + this.formatRange(item.start, item.end) + "</h3>" + item.caption + "<br/><br/>";
		html += this.formatEntity("name", item.name) + this.formatEntity("place", item.place) + this.formatEntity("org", item.org);
		html += "<a href=\"http://en.wikipedia.org/wiki/" + escape(item.fulltitle) + "\" class=\"wikilink\">Open in Wikipedia</a>";
		return html;
	}
};
Timeline.DefaultEventSource.Event.prototype.fillInfoBubble = function(element, theme, labeller) {
	$(element).html(TimelineBubble.format(this._description));
}