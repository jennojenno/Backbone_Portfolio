app.models.User = Backbone.Model.extend({

  full_name: function() {

		// validate: function() {
  //     if(typeof firstName == undefined || firstName == null || firstName.length == 0)
  //     { return "invalid first name";  }
  //   	if(typeof lastName == undefined || lastName == null || lastName.length == 0)
  //   	{ return "invalid last name";  } 
  // 	}

    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});