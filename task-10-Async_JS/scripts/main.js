document.addEventListener("DOMContentLoaded", function() {

    function showUsers() {
        fetch("https://gorest.co.in/public/v2/users")
            .then(function(data) {
                return data.json();
            })
            .then(function(objectData) {
                var tableData = "";
                objectData.map(function(values) {
                    tableData += "<tr>\
                        <td>" + values.name + "</td>\
                        <td><button class='btn btn-primary view-more-btn' data-toggle='modal' data-target='#userModal' data-id='" + values.id + "'>View More</button></td>\
                      </tr>";
                });
                document.querySelector("#tableBody").innerHTML = tableData;
            })
            .catch(function(err) {
                console.log("error occurred!");
            })
            .finally(function() {
                console.log("done fine");
            });
    }
    showUsers();

    function displayDetails(id) {
        fetch("https://gorest.co.in/public/v2/users/" + id)
            .then(function(data) {
                return data.json();
            })
            .then(function(objectData) {
                document.querySelector("#name").textContent = objectData.name;
                document.querySelector("#email").textContent = objectData.email;
                document.querySelector("#gender").textContent = objectData.gender;
            })
            .catch(function(err) {
                console.log(err);
                console.log("error occurred!");
            })
            .finally(function() {
                console.log("done fine");
            });
    }

    document.addEventListener("click", function(event) {
        if (event.target && event.target.matches(".view-more-btn")) {
            const userId = event.target.dataset.id;
            displayDetails(userId);
        }
    });

});
