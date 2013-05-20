app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: _.template($('#user-template').html()),
  render: function() {
    // Get some HTML from somewhere
    var html = this.template({
      user: this.model
    });

    // Append it to this view's div#bio element
    this.$el.html(html);

    // Attach it to the DOM
    $('#user-bio').html(this.el);

    return this;
  }

});