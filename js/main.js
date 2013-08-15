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

            $.ajax({
                type:"POST",
                dataType: "json",
                url:"score_pg.php",
                data: { user_name: self.user_name(), email: self.email(), phone_number: self.phone_number(), total_clicks: self.total_clicks(), total_time: self.total_time()},
                success:function (data) {
                    if (_.isArray(data)) {
                        var all_users = [];
                        _.each(data, function (item) {
                            all_users.push(new User(item));
                        });
                        self.users(all_users);
                    }
                    $('#score-modal').modal('hide');
                    $('#leaderboard-modal').modal('show');
                }
            });
        };

    }

    ko.applyBindings(new GameApplication());


//    if ($('#game-div').length > 0)
//        ko.applyBindings(new GameApplication(), $("#game-div")[0]);

});