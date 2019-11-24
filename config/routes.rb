Rails.application.routes.draw do
  devise_for :users
  
  root  'home#index'

  resources :sign_up_survey, only: [:index]

  resources :prescriptions, only: [:index, :create]

  resources :add_responses, only: [:create]

  resources :contacts, only: [:index, :create]

  resources :events, only: [:index, :create]

  resources :calendars, only: [:index]
  
  resources :journals, only: [:index, :new, :create] do
    resources :journal_entries
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
