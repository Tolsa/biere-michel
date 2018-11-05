Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  devise_for :users

  root to: 'pages#homees'

  get "/ulule" => redirect("https://fr.ulule.com/sylki")
  resources :beers
  resources :guests
  resources :tastings

  resources :contacts
  resources :participations, only: [:new, :index, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
