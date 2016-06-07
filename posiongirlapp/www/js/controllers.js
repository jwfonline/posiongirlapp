angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('CategoryCtrl', function ($scope, DataTableService, guidFactory, $ionicModal ) {

   
    $scope.categories = DataTableService.categories;
    //$scope.categories = firebaseCollection('https://amber-inferno-837.firebaseio.com/Category');
// add category name clear out the input and hide the modal window
    $scope.createCategoryName = function (u) {
       
        $scope.categories.$add({ id: guidFactory.codeThatNeedsUUID(), name: u.name })
        //get a new guid
       // $scope.createcategoryid = guidFactory.codeThatNeedsUUID();
        u.name = '';
        $scope.closeModal(1);
    };
 // delete category
    $scope.deleteCategory = function () {
       
        $scope.categories.$remove($scope.categoryToDelete)
        $scope.categoryToDelete = null;
        $scope.closeModal(2);
    };

    // edit category
    $scope.editCategoryName = function () {

        $scope.categories.$update($scope.categoryToEdit)
        $scope.categoryToEdit = null;
        $scope.closeModal(3);
    };

  

    //create guids
    $scope.createcategoryid = guidFactory.codeThatNeedsUUID();

    

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal01 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/deletemodal.html', {
        id: '2',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal02 = modal;
    });

    $ionicModal.fromTemplateUrl('templates/editmodal.html', {
        id: '3',
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal03 = modal;
    });

    $scope.openModal = function (index) {
        if (index == 1) $scope.modal01.show();
        else if (index == 2) $scope.modal02.show();
        else $scope.modal03.show();
    };

    $scope.closeModal = function (index) {
        if (index == 1) $scope.modal01.hide();
        else if (index == 2) $scope.modal02.hide();
        else $scope.modal03.hide();
    };
    //when showing the modal add the category to delete
    $scope.ShowDelete = function (u) {
        $scope.openModal(2);
        $scope.categoryToDelete = u;       
    };

    $scope.ShowEdit = function (u) {
        $scope.openModal(3);
        $scope.categoryToEdit = u;
    };

})


    .controller('TypeCtrl', function ($scope, DataTableService, guidFactory, $ionicModal) {



        $scope.categories = DataTableService.categories;

        $scope.types = DataTableService.types;


     

        // add category name clear out the input and hide the modal window
        $scope.createTypeName = function (u, category) {

            $scope.types.$add({ Category: category, id: guidFactory.codeThatNeedsUUID(), name: u.name })
            //get a new guid
            // $scope.createcategoryid = guidFactory.codeThatNeedsUUID();
            u.name = '';
            $scope.closeModal(1);
        };
        // delete category
        $scope.deleteType = function () {

            $scope.types.$remove($scope.typesToDelete)
           // $scope.$scope.typesToDelete = null;
            $scope.closeModal(2);
        };

        // edit category
        $scope.editTypeName = function (sc) {
            $scope.typesToEdit.Category = sc.id;
            $scope.types.$update($scope.typesToEdit)
            $scope.typesToEdit = null;
            $scope.closeModal(3);
        };


    



        $ionicModal.fromTemplateUrl('templates/modal.html', {
            id: '1',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal01 = modal;
        });

        $ionicModal.fromTemplateUrl('templates/deletemodal.html', {
            id: '2',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal02 = modal;
        });

        $ionicModal.fromTemplateUrl('templates/editmodal.html', {
            id: '3',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal03 = modal;
        });

        $scope.openModal = function (index) {
            if (index == 1) $scope.modal01.show();
            else if (index == 2) $scope.modal02.show();
            else $scope.modal03.show();
        };

        $scope.closeModal = function (index) {
            if (index == 1) $scope.modal01.hide();
            else if (index == 2) $scope.modal02.hide();
            else $scope.modal03.hide();
        };
        //when showing the modal add the category to delete
        $scope.ShowDelete = function (u) {
            $scope.openModal(2);
            $scope.typesToDelete = u;
        };

        $scope.ShowEdit = function (u) {
            $scope.openModal(3);
            $scope.typesToEdit = u;
            for (var i = 0; i < $scope.categories.length; i++) {
                if ($scope.categories[i].id == u.Category) {
                    $scope.selectedCategory = $scope.categories[i];
                    break;
                }
            };

                  };

    })

    .controller('WhiskeyCtrl', function ($scope, DataTableService, guidFactory, $ionicModal) {
        $scope.categories = DataTableService.categories;

        $scope.types = DataTableService.types;

        $scope.whiskeys = DataTableService.whiskeys;


        // add category name clear out the input and hide the modal window
        $scope.createwhiskeyName = function (u, type) {

            $scope.whiskeys.$add({ Type: type, desc: u.desc, id: guidFactory.codeThatNeedsUUID(), name: u.name })
            //get a new guid
            // $scope.createcategoryid = guidFactory.codeThatNeedsUUID();
            u.name = '';
            u.desc = '';
            $scope.closeModal(1);
        };
        // delete category
        $scope.deleteWhiskey = function () {

            $scope.whiskeys.$remove($scope.whiskeysToDelete)
            // $scope.$scope.typesToDelete = null;
            $scope.closeModal(2);
        };

        // edit category
        $scope.editWhiskey = function (sc) {
            $scope.whiskeyToEdit.Type = sc.id;
            $scope.types.$update($scope.typesToEdit)
            $scope.whiskeyToEdit = null;
            $scope.closeModal(3);
        };

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            id: '1',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal01 = modal;
        });

        $ionicModal.fromTemplateUrl('templates/deletemodal.html', {
            id: '2',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal02 = modal;
        });

        $ionicModal.fromTemplateUrl('templates/editmodal.html', {
            id: '3',
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal03 = modal;
        });

        $scope.openModal = function (index) {
            if (index == 1) $scope.modal01.show();
            else if (index == 2) $scope.modal02.show();
            else $scope.modal03.show();
        };

        $scope.closeModal = function (index) {
            if (index == 1) $scope.modal01.hide();
            else if (index == 2) $scope.modal02.hide();
            else $scope.modal03.hide();
        };
        //when showing the modal add the category to delete
        $scope.ShowDelete = function (u) {
            $scope.openModal(2);
            $scope.whiskeysToDelete = u;
        };

        $scope.ShowEdit = function (u) {
            $scope.openModal(3);
            $scope.whiskeyToEdit = u;
            for (var i = 0; i < $scope.types.length; i++) {
                if ($scope.types[i].id == u.Type) {
                    $scope.SelectedType = $scope.types[i];
                    break;
                }
            };

        };
    })


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


;
