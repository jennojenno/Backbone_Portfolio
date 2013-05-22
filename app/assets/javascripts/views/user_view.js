// app.views.UserView = Backbone.View.extend({

//   tagName: 'div',
//   id: 'bio',
//   // underscore template selecting user-template, retrieving the child within it
//   template: JST['templates/user'],

//   render: function() {
//     // grabs user-template html as var "hey"
//     var hey = this.template({

//       // this.model.attributes returns an object with my info set in application.js
//       // can find out what this is by pausing in debugger with "this"
//       // now whenever we use user.firstName we know it refers to this.model 
//       user: this.model
//     });

//     //this.el is simply div#bio while 
//     //this.$el selects div#bio so you can do some function with it
//     //use .html function to replace what's within it with "hey" which is a template
//     //within index for bio info. it will replace user with this.model's info 
//     this.$el.html(hey);

//     // replace what's in user-bio with div bio and current stuff 
//     $('#user-bio').html(this.el);

//     return this;
//   }

// });

app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: JST['templates/user'],
  render: function() {
    // Get some HTML from somewhere
    var html = this.template({user: this.model });
    // Append it to this view's div#bio element
    this.$el.html(html);

    return this;
  }

});