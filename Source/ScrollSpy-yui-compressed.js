/*
---
description:     ScrollSpy

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ScrollSpy
...
*/
var ScrollSpy=new Class({Implements:[Options,Events],options:{container:window,max:0,min:0,mode:"vertical"},initialize:function(a){this.setOptions(a);this.container=document.id(this.options.container);this.enters=this.leaves=0;this.max=this.options.max;this.inside=false;this.addListener();},addListener:function(){this.container.addEvent("scroll",function(c){var a=this.container.getScroll(),b=a[this.options.mode=="vertical"?"y":"x"];if(b>=this.options.min&&(this.max==0||b<=this.max)){if(!this.inside){this.inside=true;this.enters++;this.fireEvent("enter",[a,this.enters,c]);}this.fireEvent("tick",[a,this.inside,this.enters,this.leaves,c]);}else{if(this.inside){this.inside=false;this.leaves++;this.fireEvent("leave",[a,this.leaves,c]);}}this.fireEvent("scroll",[a,this.inside,this.enters,this.leaves,c]);}.bind(this));}});