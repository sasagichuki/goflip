$(document).ready(function() {


    function GameApplication() {
        var self = this;

        self.name = ko.observable();
        self.email = ko.observable();
        self.phone_number = ko.observable();
        self.total_clicks = ko.observable();
        self.time = ko.observable();



        self.saveScore = function() {

            self.name($('#name').val());
            self.email($('#email').val());
            self.phone_number($('#phone_number').val());
            self.total_clicks(numTotalClicks);
            self.time(numSeconds);

            console.log("Name: " + self.name());
            console.log("Email: " + self.email());
            console.log("Phone Number: " + self.phone_number());
            console.log("Clicks: " + self.total_clicks());
            console.log("Time: " + self.time());

//            $.ajax({
//                type:"POST",
//                dataType: "json",
//                url:"/score.php",
//                success:function (data) {
//                    if (_.isArray(data)) {
//                        var models = [];
//                        _.each(data, function (item) {
//                            if(item.misspelt) {
//                                models.push(new Subscription(item));
//                            }
//                        });
//                        self.misspelt(models);
//                    }
//                }
//            });
        };

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

        self.closeModal = function(modal, msg) {
            $(modal).modal('hide');
            bootbox.alert(msg);
        };

    }

    ko.applyBindings(new GameApplication());


//    if ($('#game-div').length > 0)
//        ko.applyBindings(new GameApplication(), $("#game-div")[0]);

});