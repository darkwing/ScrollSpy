ScrollSpy
=========

ScrollSpy is a small but powerful MooTools plugin that allows you to listen to scrolling within any DOM element and execute functions based upon the element's scroll position.

![Screenshot](http://davidwalsh.name/dw-content/scrollspy.png)


How to Use
----------

ScrollSpy can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

	#JS
	/* scrollspy instance */
	var ss = new ScrollSpy({
		min: 300,
		onEnter: function() {
			$('gototop').fade('in'); //show the "Go To Top" link
		},
		onLeave: function() {
			$('gototop').fade('out'); //hide the "Go To Top" link
		},
		container: window
	});
	

For specific usage and options, please read the documentation or visit http://davidwalsh.name/js/scrollspy