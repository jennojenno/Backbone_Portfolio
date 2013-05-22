<div class="sortable">
</div>

<div class="info">
  <img src="uploads/project.jpg" width="350" height="165"
  alt="My Amazing Project" class="project-image shadowed" />

  <div class="project-details">
    <h3 class="project-name">
      <%= title %>
    </h3>

    <input class="edit-title hidden-edit" placeholder="Enter a title">

    <a href="<%= url %>">
      <%= url %>
    </a>

    <div class="skills">
      <span class="skill-label">
        Skills:
      </span>

      <ul class="skill-list">
        <li class="skill">
          <span class="name">Ruby</span>
          <span class="delete">Remove</span>
        </li>
        <li class="skill">
          <span class="name">Rails</span>
          <span class="delete">Remove</span>
        </li>
        <li class="skill">
          <span class="name">AJAX</span>
          <span class="delete">Remove</span>
        </li>
        <li class="skill">
          <span class="name">HTML 5</span>
          <span class="delete">Remove</span>
        </li>
        <li class="skill">
          <span class="name">CSS</span>
          <span class="delete">Remove</span>
        </li>
        <li class="skill">
          <span class="name">Javascript</span>
          <span class="delete">Remove</span>
        </li>
      </ul>

      <span class="add-skill">Add Skill</span>
    </div>

    <div class="body">
      <%= body %>
    </div>
  </div>
</div>

<div class="remove-project">
  Remove Project
</div>