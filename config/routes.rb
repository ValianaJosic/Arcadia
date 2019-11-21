Rails.application.routes.draw do
  devise_for :users
  root 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  resources :contacts
   get   '/prescriptions'      => 'prescriptions#show'
  post  '/prescriptions/add'  => 'prescriptions#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
