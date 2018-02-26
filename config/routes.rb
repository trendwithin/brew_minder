Rails.application.routes.draw do
  devise_for :users
  root 'pages#test'
  get 'pages/box'
  get 'pages/chucks'
  get 'pages/chuckscd'
  get 'pages/brouwers'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
