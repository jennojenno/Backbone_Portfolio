app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  template: JST['templates/project'],

  render: function() {
    this.$el.html(this.template());

    // Try to find projects already in the local storage
    var projectList = new app.collections.ProjectList();
    projectList.fetch();

    // Create a blank project for us to fill in.
    projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });

    var _this = this;

    projectList.forEach(function(project) {
      var view = new app.views._Project({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
      //this.model.toJSON()
    });

    var me = new app.models.User({
      first_name: "Corey",
      last_name: "Trombley",
      image_url: 'uploads/corey.jpg',
      bio: 'Well ard coder from NYC',
      mission: 'Complete level 12 on Bomberman and save the world from itself'
    });

    var bio = new app.views.UserView({
      model: me
    }).render();
    this.$el.find('#user-bio').html(bio.el);

    return this;
  }


});

// app.views.ProjectView = Backbone.View.extend({

//   tagName: 'div',
//   className: 'project',
//   template: _.template($('#project-template').html()),
//   events: {
//     'dblclick .project-name': 'editProjectName',
//     'keypress .edit-title': 'updateTitle',
//     'dblclick .body': 'editBody',
//     'keypress .edit-body': 'updateBody',
//     'click .remove-project': 'delproject'
//   },

//   render: function() {
//     this.$el.html(this.template(this.model.toJSON()));
//     return this;
//   },

//   editProjectName: function() {
//     this.$el.addClass('editing');
//     this.$el.find('.edit-title').show().focus().prev('h3').hide();
//   },

//   updateTitle: function() {
//     var new_title = this.$el.find('.edit-title').val().trim();
//     if(event.which !== 13 || !new_title) {
//       return;
//     }

//     this.model.set('title', new_title);
//     this.model.save();
//     this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
//   },


//   editBody: function() {
//     this.$el.addClass('editingbody');
//     this.$el.find('.edit-body').show().focus().prev('div.body').hide();
//   },

//   updateBody: function() {
//     var new_body = this.$el.find('.edit-body').val().trim();
//     if(event.which !== 13 || !new_body) {
//       return;
//     }

//     this.model.set('body', new_body);
//     this.model.save();
//     this.$el.find('.edit-body').val('').hide().prev('div.body').show().html(new_body);
//   },

//   delproject: function() {
//     this.model.destroy(); 
//     this.$el.find('.info').fadeToggle("slow", "linear");
//   }

// });