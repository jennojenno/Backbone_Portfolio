BackbonePortfolio::Application.routes.draw do
  devise_for :users

  # get "users/index"

  # get "users/show"
  resources :users, :only => [:index, :show] do 
  	resources :projects, :only => [:create, :index, :update, :destroy] 
  end 
  root :to => 'home#index'
  
end