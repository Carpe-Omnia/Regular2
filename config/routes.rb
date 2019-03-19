Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/regular', to: 'regular#homepage'
  get '/regular', to: 'regular#test'
  post '/api/users/new/:name/:pword', to: 'users#new'
  post '/api/users/login/:name/:pword', to: 'users#login'
end
