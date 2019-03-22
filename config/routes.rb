Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/regular', to: 'regular#homepage'

  post '/api/users/new/:name/:pword', to: 'users#new'
  post '/api/users/login/:name/:pword', to: 'users#login'
  get '/api/users/show/:name', to: 'users#show'

  get '/api/jokes/myjokes/:id', to: 'jokes#myjokes'
  post '/api/jokes/create/:setup/:punchline/:id', to: 'jokes#create'

  get '/api/messages/index/:id', to: 'messages#index'

end
