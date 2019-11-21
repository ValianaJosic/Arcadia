Rails.application.routes.draw do
  devise_for :users
  resources :event
  get   '/prescriptions'      => 'prescriptions#show'
  post  '/prescriptions/add'  => 'prescriptions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
