Rails.application.routes.draw do
  resources :courses
  resources :users
  resources :topics
  resources :comments
end
