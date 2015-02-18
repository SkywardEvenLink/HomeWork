var module = angular.module('app.controllers', []);
var userslist = new Array();
/**
 * Controlleur des users.
 */
module.controller('UserController', ['$scope',  function($scope) {
    
	$scope.userslist = [
		{ 'login' : 'mojombo' },
		{ 'login' : 'defunkt' },
		{ 'login' : 'pjhyett' },
		{ 'login' : 'wycats' },
		{ 'login' : 'ezmobius' },
		{ 'login' : 'ivey' },
		{ 'login' : 'evanphx' },
		{ 'login' : 'vanpelt' },
		{ 'login' : 'wayneeseguin' },
		{ 'login' : 'brynary' },
		{ 'login' : 'kevinclark' },
		{ 'login' : 'technoweenie' },
		{ 'login' : 'macournoyer' },
		{ 'login' : 'takeo' }
		
	];
	/* //Tentative d'autocomplétion dynamique
	$.get('https://api.github.com/users',
	function(data) // on stock tout dans data qui permet de manipuler le json
	{
	for(i=0;i<100;i++){
	userslist[i] = data[i].login;
		}
	remplirList(userslist);
    }
	);
	function remplirList(userslist){
	$scope.userslist = new Array();
    // mock des users dans lesquelles rechercher
	for(i=0;i<100;i++){
	$scope.userslist[i]  = [
	
	{'name' : userslist[i]},
	];
	}
}
*/
	// saisie du nom de l'utilisateur
	$scope.user = null;
    
}]);

