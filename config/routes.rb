Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  post '/api/users/new/:name/:pword', to: 'users#new'
  post '/api/users/login/:name/:pword', to: 'users#login'
  post '/api/users/update/:id/:headline/:content', to: 'users#update'
  get '/api/users/show/:name', to: 'users#show'

  get '/api/jokes/index', to: 'jokes#index'
  get '/api/jokes/myjokes/:id', to: 'jokes#myjokes'
  post '/api/jokes/create/:setup/:punchline/:id', to: 'jokes#create'
  get '/api/jokes/testing', to: 'jokes#testing' #remember to take this out later.
  #Or don't and continue using it to test stuff.

  get '/api/messages/index/:id', to: 'messages#index'
  post '/api/messages/create/:subject/:content/:user_id/:to_id/:conversation_id', to: 'messages#create'
  post '/api/messages/new/:subject/:content/:user_id/:recipient_name', to: 'messages#new'

end
