ScrollSpy
=========

ScrollSpy is a small but powerful MooTools plugin that allows you to listen to scrolling within any DOM element and execute functions based upon the element's scroll position.


How to Use
----------

ScrollSpy can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

	#JS
	var ss = new ScrollSpy({ 
		onEnter: function() {
			//do stuff
		}
	});

For specific usage and options, please read the documentation or visit http://davidwalsh.name/scrollspy