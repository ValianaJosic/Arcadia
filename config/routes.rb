Rails.application.routes.draw do
  devise_for :users

  root  'home#index'
  
  resources :profiles, only: [:index]
  resources :journals do
    resources :journal_entries
  end
  resources :events, only: [:index, :create]
  resources :contacts, only: [:index, :create]
  resources :prescriptions, only: [:index, :create]
  resources :alerts, only: [:index]
  resources :contact_us, only: [:index]
  resources :agendas, only: [:index] 
  resources :calendars, only: [:index]
  resources :sign_up_survey, only: [:index]
  resources :add_responses, only: [:create]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
