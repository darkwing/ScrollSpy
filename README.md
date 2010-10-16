ScrollSpy
=========

ScrollSpy is a small but powerful MooTools plugin that allows you to listen to scrolling within any DOM element and execute functions based upon the element's scroll position.

![Screenshot](http://davidwalsh.name/dw-content/scrollspy.png)


How to Use
----------

ScrollSpy can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

	#JS
	/* my "Go To Top" link element */
	var link = document.id('gototop');
	/* scrollspy instance */
	var ss = new ScrollSpy({
		min: 300,
		onEnter: function() {
			link.fade('in'); //show the "Go To Top" link
		},
		onLeave: function() {
			link.fade('out'); //hide the "Go To Top" link
		}
	});
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/scrollspy](http://davidwalsh.name/js/scrollspy)