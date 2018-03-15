// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    view: {
		xhrCache: false,
		pushState: true
	},
	dialog:{
		title: 'Framework7'
	},
	routes: [
		{
		path: '/peli/',
    	url: 'peli.html',
    	name: 'peli',
  		},
		{
		path: '/home/',
    	url: 'freamwork-index.html',
    	name: 'home',
  		},
		{
		path: '/swiper/',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/acorde/',
    	url: 'acorde.html',
    	name: 'acorde',
  		}
	
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

