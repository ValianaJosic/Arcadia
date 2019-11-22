Rails.application.routes.draw do
  devise_for :users
  
  root  'home#index'
  
  get   '/signupsurvey'       => 'signupsurvey#index'
  
  get   '/prescriptions'      => 'prescriptions#index' 
  post  '/prescriptions/add'  => 'prescriptions#create'

  post  '/addresponses'       =>  'addresponses#create'

  get   '/contacts'           =>  'contacts#index'
  post  '/contacts/add'       =>  'contacts#create'

  get   '/events'             =>  'events#index'
  post  '/events/add'         =>  'events#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
