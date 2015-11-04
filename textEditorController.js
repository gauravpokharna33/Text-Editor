  var app = angular.module('textEditorApp', []);

app.controller('textEditorController', function($scope, $http) {

     	 $scope.editText = {
        	'text1' : 'Click here to edit!',
        	'text2' : 'Click here to edit!',
        	'text3' : 'Click here to edit!',
        	'text4' : 'Click here to edit!',
        };

       tinymce.init({
            selector: "#myeditablediv",
            inline: true,
            menubar: false,
            toolbar: "bold italic underline styleselect",
			statusbar: false

        });

	   tinymce.init({
            selector: "#myeditablediv1",
            inline: true,
            menubar: false,
            toolbar: "bold italic underline styleselect",
			statusbar: false

        });

	   tinymce.init({
            selector: "#myeditablediv2",
            inline: true,
            menubar: false,
            toolbar: "bold italic underline styleselect",
			statusbar: false

        });

	   		tinymce.init({
            selector: "#myeditablediv3",
            inline: true,
            menubar: false,
            toolbar: "bold italic underline styleselect",
			statusbar: false

        });
       
        /*$scope.content= function(index) {
        	console.log("index",index);
			$scope.editText[index] = tinyMCE.activeEditor.getBody().textContent;
			console.log($scope.editText[index]);
			console.log($scope.editText);
		}*/

		  $scope.content= function() {
		  	$scope.editText.text1 = tinyMCE.get('myeditablediv').getBody().textContent;
		  	$scope.editText.text2 = tinyMCE.get('myeditablediv1').getBody().textContent;
		  	$scope.editText.text3 = tinyMCE.get('myeditablediv2').getBody().textContent;
        	$scope.editText.text4 = tinyMCE.get('myeditablediv3').getBody().textContent;
        	console.log($scope.editText.text1);
        	console.log($scope.editText.text2);
        	console.log($scope.editText.text3);
        	console.log($scope.editText.text4);
        	console.log($scope.editText);
		};



        /*$scope.content1= function() {
        	$scope.editText.text2= tinyMCE.activeEditor.getBody().textContent;
			console.log($scope.editText.text2);
			console.log($scope.editText);
		};

		

        $scope.content2= function() {
        	$scope.editText.text3= tinyMCE.activeEditor.getBody().textContent;
			console.log($scope.editText.text3);
			console.log($scope.editText);
		};



        $scope.content3= function() {
        	$scope.editText.text4= tinyMCE.activeEditor.getBody().textContent;
			console.log($scope.editText.text4);
			console.log($scope.editText);
		};*/


     });