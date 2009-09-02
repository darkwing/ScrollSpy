Class: ScrollSpy {#ScrollSpy}
=============================



### Implements:

Options, Events




ScrollSpy Method: constructor {#ScrollSpy:constructor}
-------------------------------------------------------

### Notes:

- *ScrollSpy* debuted Wednesday, May 27, 2009 on the David Walsh Blog:  [http://davidwalsh.name/scrollspy](http://davidwalsh.name/scrollspy)
- *ScrollSpy* requires MooTools Core only -- no MooTools More dependencies.
- Visit [http://davidwalsh.name/scrollspy](http://davidwalsh.name/scrollspy) for example usages.

### Syntax:

	var myScrollSpy = new ScrollSpy(options);

### Arguments:

1. options - (*object*, optional) Initial options for the class.

### Options:

* min - (*integer*, defaults to 0)  The minimum value of the X or Y coordinate, depending on mode.
* mode - (*string*, defaults to 'vertical')  Defines whether to listen to X or Y scrolling.
* max - (*integer*, defaults to 0)  The maximum value of the X or Y coordinate, depending on mode.
* container - (*element*, defaults to window)  The element whose scrolling to listen to.

### Returns:

* (*object*) A new *ScrollSpy* instance.

### Events:

### enter

* (*function*) Function to execute when the element's designated area is scrolled into.

### Signature

	onEnter(position, enters)
	
#### Arguments:

1. position - (*object*) The container's scroll position object.
2. enters - (*integer*) The number of times the scroll area has been entered.


### leave

* (*function*) Function to execute when the element's designated area is scrolled out of.

### Signature

	onLeave(position, enters)
	
#### Arguments:

1. position - (*object*) The container's scroll position object.
2. enters - (*integer*) The number of times the scroll area has been left.


### tick

* (*function*) Function to execute on each scroll event when the scroll position is between the enter and exit.

### Signature

	onTick(position, inside, enters, leave)
	
#### Arguments:

1. position - (*object*) The container's scroll position object.
2. inside - (*boolean*) Represents whether or not the scroll is within the designated min and max area.
3. enters - (*integer*) The number of enters.
3. leaves - (*integer*) The number of leaves.

