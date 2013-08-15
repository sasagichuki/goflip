$(document).ready(function() {

    var User = JS.Class({
        construct: function (data) {
            var self = this;

            self.user_name = data.user_name;
            self.email = ko.observable(data.email);
            self.phone_number = ko.observable(data.phone_number);
            self.total_clicks = ko.observable(data.total_clicks);
            self.total_time = ko.observable(data.total_time);
        },

        toJSON: function() {
            var _struct = {
                "user_name" : this.user_name(),
                "email" : this.email(),
                "phone_number" : this.phone_number(),
                "total_clicks" : this.total_clicks(),
                "total_time" : this.total_time()
            };
            return _struct;
        }

    });


    function GameApplication() {
        var self = this;

        self.user_name = ko.observable();
        self.email = ko.observable();
        self.phone_number = ko.observable();
        self.total_clicks = ko.observable();
        self.total_time = ko.observable();
        self.users = ko.observableArray();



        self.saveScore = function() {

            self.user_name($('#user_name').val());
            self.email($('#email').val());
            self.phone_number($('#phone_number').val());
            self.total_clicks(numTotalClicks);
            self.total_time(numSeconds);
//
//            console.log("Name: " + self.user_name());
//            console.log("Email: " + self.email());
//            console.log("Phone Number: " + self.phone_number());
//            console.log("Clicks: " + self.total_clicks());
//            console.log("Time: " + self.total_time());

            $.ajax({
                type:"POST",
                dataType: "json",
                url:"score.php",
                data: { user_name: self.user_name(), email: self.email(), phone_number: self.phone_number(), total_clicks: self.total_clicks(), total_time: self.total_time()},
                success:function (data) {
                    console.log(">>>>>> " + data);
                    console.log(">>>>>> " + data.user_name);
                    console.log(">>>>>> " + data['email']);
                    if (_.isArray(data)) {
                        console.log("isarray");
                        var all_users = [];
                        _.each(data, function (item) {
                            all_users.push(new User(item));
                        });
                        self.users(all_users);
                        console.log(self.users()[0]);
                        console.log(self.users()[0].user_name);
                    }
                    $('#score-modal').modal('hide');
                    $('#leaderboard-modal').modal('show');
                }
            });
        };

//        self.showLeaderboard = function() {
//            $('#score-modal').modal('show');
//        };

//        When game ends modal appears
//        If score and time isnt accessible here then place them in hidden field
//        User enters name and email (required)
//        On submit saveScore should save and close the modal

//        self.save = function(admin) {
//            self.email(admin.email());
//            self.phone_number(admin.phone_number());
//            self.id(admin.id);
//            $('#admin-edit-modal').modal('show');
//        };

//        self.resolveSubscription = function(misspelt) {
//            var selectedShowId = $('#show-choice :selected').val();
//            var selectedShowName = $.trim($("#show-choice :selected").text());
//            var adminId = $('#adminId').val();
//            if(selectedShowId === 'no_choice') {
//                alert("You must select a show");
//                return;
//            }
//            $.ajax({
//                url: '/resolve_subscription',
//                dataType: "json",
//                type: 'post',
//                data: { show_name: selectedShowName, show_id: selectedShowId, subscription_id: misspelt.id, admin_id: adminId }})
//                .success(function (data) {
//                    alert("Subscription resolved");
//                    self.loadMisspelt();
//                })
//                .error(function(data) {
//                    alert("Subscription has already been resolved");
//                    self.loadMisspelt();
//                });
//        };

//        self.closeModal = function(modal, msg) {
//            $(modal).modal('hide');
//            bootbox.alert(msg);
//        };

    }

    ko.applyBindings(new GameApplication());


//    if ($('#game-div').length > 0)
//        ko.applyBindings(new GameApplication(), $("#game-div")[0]);

});