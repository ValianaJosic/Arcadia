Rails.application.routes.draw do
  devise_for :users

  root  'home#index'
  get   '/home'               => 'home#index'

  get   '/signupsurvey'             => 'signupsurvey#show'

  get   '/prescriptions'      => 'prescriptions#show'
  post  '/prescriptions/add'  => 'prescriptions#create'

  post  '/addresponses'       =>  'addresponses#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
