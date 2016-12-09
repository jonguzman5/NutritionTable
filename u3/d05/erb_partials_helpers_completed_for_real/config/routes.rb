Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :comments, only: [:create, :destroy]
  resources :projects, only: [:create, :destroy]
end
