class ProjectsController < ApplicationController

  before_filter :load_user

  def create
    @project = Project.new(params[:project])
    # params[:project][:skills].each do |skill_json| 
    #   @project.skills << Skill.new(skill_json)
    # end 
    @project.save!

    render :json => @project
  end

  def index
    @projects = @user.projects
    render :json => @projects
  end

  def update
    @project = Project.find(params[:id])
    @project.update_attributes(params[:project])
    render :json => @project
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :json => @project
  end

  protected
  def load_user
    @user = User.find(params[:user_id])
  end

end