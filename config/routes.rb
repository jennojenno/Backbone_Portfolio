BackbonePortfolio::Application.routes.draw do
  # get "users/index"

  # get "users/show"
  resources :users, :only => [:index, :show] 
  root :to => 'home#index'
  
end