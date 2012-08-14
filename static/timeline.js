var TimelineWrapper = {
	images: [
		//dot.png
		'data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAP' +
		'n/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGnRFWHRTb2Z0d2FyZQBQYWlu' +
		'dC5ORVQgdjMuNS4xMDD0cqEAAAFcSURBVChTNZCxasJQFIbvVI1GwaGTKAqFEnSIuOiqgllExSJEiRQFFScFCyJIEA' +
		'MV4hCMSIrgoItTp66dhD5Apz5Ap04Fp05/zw04fMO55zv3/BwGgHE0TYs3Gg27Vqt9FIvFczabtRKJRPjadyVVVR+I' +
		'i2EY2Gw2ME0T3W4X0Wj0NxQKKdxhpVLprlKp/Nm2jdPphMPhgN1uB173ej0EAoELEWa5XG47mUxwPB6x3+/hOA4sy8' +
		'JyuYSu6ygUChBF8ZmlUqnzfD53hfV67a7lNR8ejUYol8vw+XxvLBKJvPOH1WqFxWKB6XSK4XCIfr+PTqeDfD4PQRBe' +
		'WTAYNBRFwWw2w3g8xmAwQLvdRrPZRL1eRzKZ5OITo6C3lOGHy/yXVqvlCtVqFbIsw+v1fhOiex6/3y9Tji9JkpDJZJ' +
		'BOpxGLxeDxeD6Je/c814OSSBuER5p+IbYkaMTNtf8PIWK7aWkVVZoAAAAASUVORK5CYII=',
		//person.png
		'data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcE' +
		'hZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAStJREFUKFNjYICB' +
		'wMn8jEGTFvBETPzBEznxB2PQ5AUMQDG4PJgROImRKWTqfLfOjf/33XwKxM/+u3Vv/g8UWwiSQygOnCTIlbLwRdneu/' +
		'8nn3/1f/KFV//L9t37z5W66AVQoSCyQgHuzOXPrdfc+++59QkY26y9/x8kBlQogKRwsiZT6LQ3MhNO/ddY9QiMZSac' +
		'/g8SA7pTE6LQfxIzS8SMffYT9v03qNv8X7hgLRiD2CAxkBxIDQND0BR+3pyVv1N3PfhfdvjZ/8IDEAxig8RAciA1EI' +
		'V5a36arr7/32Pr0/+e256BMYhtuub+f5AcUA0fKGiYmCNmrpDpB7pv5cP/mkD3gTCIDRIDyYHUQNwZMImPMXRaC0fq' +
		'knt8hev/8RWs/wdig8RAciAlAG/1skpv+fLPAAAAAElFTkSuQmCC',
		//place.png
		'data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcE' +
		'hZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAaVJREFUKFMBmgFl' +
		'/gAAAAAAVYbGAmyYxlKMr8S/mLi39ZK1p/WCp8q/a5jQU16RywIAAAAAAE1/xgJ3obiJnsG0+8niqf+c2sH/hsnH/3' +
		'Oz2v+Hsbv7cJy7ilKCxwIAapW7UbnRevrd74T/9P11/7Lx4f951///a7vs/6/eWf+kxHD7Yo67UgCIq5rAvtpC//L6' +
		'O//G6nH/jOH2/4Lc//+P1dH/rdhG/22Va/9ylZ3AAGuMnPaXuyr/j7lL/33E3/+B1P//f9P//8fvkf/Y+in/qtIo/4' +
		'SmhPYAXH+49URsb/9kk4b/ZKTh/263/v9zvv//lMiB/6LNJP+rzin/ja2B9QBcfLW8PGKn/0Jzkf+g0En/ebPA/2Om' +
		'9v9hoef/X5e3/6zJPv+GpJG/AFByr09Ucav6Qmlx/5TCEP+o1CD/aZ+n/1eR1/9ilMf/oLx5+l1/pU8AO12hAkxsqo' +
		'ZTb6L6d5s1/3+lH/9MeKX/XYvF/3OZyvpZfKqHPVyiAgAAAAAAFCVABThQfmdifXrRX3yO9lx8svZYdaXRPFWCaBQl' +
		'QAUAAAAAn5b0iaQhCvIAAAAASUVORK5CYII=',
		//org.png
		'data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcE' +
		'hZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAWlJREFUKFNVj9sr' +
		'g3EYx99c+3O4cOECORNiytmIsjCF4gKlRlyI5FBLieQ09JJozJmtkPP5bHtn7zs2I9cfP6546rn59nl6Pl8pYdIZlG' +
		'NV6wuXNIqWNXKt2mTUyHNwjU0Nlv6OYVmN0QvAaPdTtuXDsPFG6rRC5ZKHf2CT3Uf76SfdF1/UCLjz/AvT0Qe6WeU/' +
		'WG7zkG9VKV7xkmhxoRcKGXMKJfNuWhzvWT9btfaaJRmsbkptGtU7fnQzLowbr+Qtikx+pv/wg+79APWbb0j6WSd58y' +
		'8Y1r0kjz7+HulkF/kT93QdBGh1+GjYFmC25Z70iQcBK0SbL8mWncSP3FE4fov55JOOXT/N9h9w7Jb0qScKhFv0wBU5' +
		'Cx4Sxx7JHL6mccdH7aoXo/gipQ5dEtF3RmT/KSEmBxE9x4S27ZExcI5pL0CdcK6wqUgpIogbvCFJdhPWdUyCaB5uvi' +
		'K290iU0oi1OEmTFb4BhS4Jmn0cjKsAAAAASUVORK5CYII='
	],
	events: [],
	eventSource: null,
	zoomChanged: false,
	timeline: null,
	timelineElement: null,
	resizeTimerID: null,
	scrollTop: 0,
	interval: 0,
	bottomMargin: 170,
	
	load: function() {
		//Timeline resizing and vertical scrolling
		$("#timeline").css('height', $(window).height() - this.bottomMargin);
		$("#noResults").css('top', $(window).height() / 2);
		var thisPtr = this;
		$("#timeline").mouseup(function(event){
			$(this).scrollTop(thisPtr.scrollTop);
		});
		$("#timeline").scroll(function(event){
			thisPtr.scrollTop = $(this).scrollTop();
			$(document.getElementsByName("ether-markers")).css('top', thisPtr.scrollTop);
		});
		$(window).resize(function(){
			$(thisPtr.timelineElement).css('height', $(window).height() - thisPtr.bottomMargin);
			$("#noResults").css('top', $(window).height() / 2);
			thisPtr.timelineLayout();
		});

		//Setup timeline
		this.eventSource = new Timeline.DefaultEventSource();
		this.timelineElement = document.getElementById("timeline");
		this.timeline = Timeline.create(this.timelineElement, [
			Timeline.createBandInfo({
				width:          "100%", 
				intervalUnit:   Timeline.DateTime.YEAR,
				eventSource:    this.eventSource,
				intervalPixels: 100
			})
		]);
		
		this.timeline.getBand(0).addOnScrollListener(function(band){
			if (!this.zoomChanged) {
				var minYear = band.getMinVisibleDate().getFullYear();
				var maxYear = band.getMaxVisibleDate().getFullYear();
				$("#timeSlider").dragslider("values", 0, minYear);
				$("#timeSlider").dragslider("values", 1, maxYear);
				thisPtr.updateYearLabels(minYear, maxYear);
			}
		});
	},
	updateYearLabels: function(fromDate, toDate) {
		setTimeout(function() {
			var fromPos = $("#timeSlider a:eq(0)").offset();
			var toPos = $("#timeSlider a:eq(1)").offset();
			$("#fromYear").css({'left':fromPos.left-14,'top':fromPos.top - 20}).text(fromDate);
			$("#toYear").css({'left':toPos.left-14, 'top':toPos.top - 20}).text(toDate);
		}, 5);
	},
	timelineLayout: function() {
		//Calculate track numbers for all labels dependent upon interval
		var maxDate = [];
		for (var i in this.events) {
			var item = this.events[i];
			var todate = item.todate + (item.textWidth * this.interval);
			var j = 0;
			for (; j<maxDate.length; j++) {
				var range = maxDate[j];
				if (range.min > todate) {
					range.min = item.fromdate;
					item.trackNum = j;
					break;
				} else if (range.max < item.fromdate) {
					range.max = todate;
					item.trackNum = j;
					break;
				}
			}
			if (j == maxDate.length) {
				maxDate[j] = { min:item.fromdate, max:todate };
				item.trackNum = j;
			}
		}
		
		//Reload event data
		this.eventSource.clear();
		this.eventSource.loadJSON({ events: this.events }, '.');
		this.timeline.layout();
		
		//Set the ether markers height to the timeline band height
		$(document.getElementsByName("ether-markers")).css('height', $("#timeline-band-0").height());
		//Calculate the maximum height of the timeline band and all events
		var maxY = $("#timeline-band-0").height() - 50;
		$(".timeline-band-events .timeline-band-layer-inner div").each(function(){
			var y = $(this).position().top;
			if (y > maxY) maxY = y;
		});
		//Set the height and reset the vertical scroll value to the one before the layout was redone.
		$("#timeline-band-0").css('height', maxY + 50);
		$("#timeline").scrollTop(this.scrollTop);
	},
	setZoom: function(fromDate, toDate) {
		this.updateYearLabels(fromDate, toDate);
		
		//Calculate interval unit and pixels per interval
		var pixelsPerInterval = (this.timelineElement.offsetWidth)/12;
		var intervalUnit = Timeline.DateTime.MONTH;
		if (toDate > fromDate) {
			pixelsPerInterval = (this.timelineElement.offsetWidth)/(toDate-fromDate);
			intervalUnit = Timeline.DateTime.YEAR;
			if (pixelsPerInterval < 50) {
				intervalUnit = Timeline.DateTime.DECADE;
				pixelsPerInterval *= 10;
				if (pixelsPerInterval < 50) {
					intervalUnit = Timeline.DateTime.CENTURY;
					pixelsPerInterval *= 10;
				}
			}
		}
		
		//Update timeline
		zoomChanged = true;
		
		var bandInfo = this.timeline.getBand(0);
		bandInfo._ether._interval = SimileAjax.DateTime.gregorianUnitLengths[intervalUnit];
		bandInfo._ether._pixelsPerInterval = pixelsPerInterval;
		bandInfo._etherPainter._unit = intervalUnit;
		bandInfo.setMinVisibleDate(Timeline.DateTime.parseGregorianDateTime(fromDate));
		this.interval = bandInfo._ether._interval / bandInfo._ether._pixelsPerInterval;
		
		this.timelineLayout();
		zoomChanged = false;
	},
	clearData: function() {
		this.events = [];
		this.eventSource.clear();
	},
	setData: function(events, fromDate, toDate) {
		var thisPtr = this;
		this.events = events;
		
		//Process the events list
		var textSize = document.getElementById("textSize");
		var mean = 0;
		for (var i in events){
			var item = events[i];
			item.description = item;
			item.icon = this.images[item.icon];
			item.durationEvent = false;
			item.fulltitle = item.title;
			item.caption = item.content;
			
			var summedContent = item.content;
			if (summedContent.length > 60) {
				summedContent = summedContent.slice(0,60)+'...';
			}
			item.title = summedContent;
			
			//Measure label text size and calculate beginning and end date
			textSize.innerHTML = item.title;
			item.textWidth = textSize.clientWidth;
			item.fromdated = eval("new Date("+item.start+")");
			item.todated = eval("new Date("+item.end+")");
			item.fromdate = item.fromdated.getTime();
			item.todate = item.todated.getTime();
			
			mean += item.fromdated.getFullYear();
			mean += item.todated.getFullYear();
		}
		
		mean /= (events.length * 2);
		var deviation = 0;
		for (var i in events) {
			var item = events[i];
			var d = (item.fromdated.getFullYear() - mean);
			deviation += d*d;
			d = (item.todated.getFullYear() - mean);
			deviation += d*d;
		}
		
		deviation = Math.sqrt(deviation / (events.length * 2));
		var fromDisp = Math.floor(mean - deviation);
		var toDisp = Math.ceil(mean + deviation);
		
		//Create/update slider parameters
		$("#timeSlider").dragslider({
			range:true,
			rangeDrag:true,
			min: fromDate,
			max: toDate,
			values: [ fromDisp, toDisp ],
			slide: function( event, ui ) {
				thisPtr.setZoom(ui.values[0], ui.values[1]);
			}
		});
		this.setZoom(fromDisp, toDisp);
	}
};