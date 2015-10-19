Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]

  namespace :api, defaults: {format: :json} do
    resources :notes, only: [:index, :create, :update, :destroy]
    resources :notebooks, only: [:index, :create, :update, :destroy]
    resources :tags, only: [:index, :create, :update, :destroy]
  end
end
