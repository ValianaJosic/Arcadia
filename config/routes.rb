Rails.application.routes.draw do 
  devise_for :users

  root  'home#index'

  resources :profiles, only: [:index]
  resources :notification, only: [:index]
  resources :journals do
    resources :journal_entries
  end
  resources :events, only: [:index, :create, :new]
  resources :contacts, only: [:index, :create, :new]
  resources :prescriptions, only: [:index, :create]
  resources :alerts, only: [:index]
  resources :settings, only: [:index]
  resources :agendas, only: [:index] 
  resources :calendars, only: [:index]
  resources :sign_up_survey, only: [:index, :create]
  resources :welcome_trail, only: [:index]
  resources :sign_up_survey, only: [:index]
  resources :welcomes, only: [:index]
  resources :navigations, only: [:index]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
