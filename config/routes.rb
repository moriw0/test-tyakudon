Rails.application.routes.draw do
  root 'welcome#index'
  resources :ramen_shops
  get 'records/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
