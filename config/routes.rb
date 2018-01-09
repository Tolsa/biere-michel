Rails.application.routes.draw do
  devise_for :users

  get 'about', to: 'pages#about', as: :about
  get 'contact', to: 'pages#contact', as: :contact
  get 'admin', to: 'pages#admin', as: :admin
  root to: 'pages#home'

  resources :beers
  resources :guests
  resources :tastings

  resources :participations, only: [:new, :index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
