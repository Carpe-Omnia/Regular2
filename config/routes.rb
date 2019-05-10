Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  post '/api/users/new', to: 'users#new'
  post '/api/users/login', to: 'users#login'
  post '/api/users/update/:id/:headline/:content', to: 'users#update'
  get '/api/users/show/:name', to: 'users#show'
  constraints(email: /[^\/]+/) do
    post '/api/users/auth/facebook/:name/:email', to: 'users#facebookAuth'
    post '/api/users/auth/google/:name/:email', to: 'users#facebookAuth'
  end


  get '/api/jokes/index', to: 'jokes#index'
  get '/api/jokes/myjokes/:id', to: 'jokes#myjokes'
  post '/api/jokes/create', to: 'jokes#create'
  get '/api/jokes/testing', to: 'jokes#testing' #remember to take this out later.
  #Or don't and continue using it to test stuff.
  post '/api/jokes/upvote/:id/:user_id', to: 'jokes#upvote'

  get '/api/messages/index/:id', to: 'messages#index'
  post '/api/messages/create', to: 'messages#create'
  post '/api/messages/new', to: 'messages#new'

  post '/api/colors/create', to: 'colors#create'
  get '/api/colors/index', to: 'colors#index'
  post '/api/colors/my_colors', to: 'colors#my_colors'
  post '/api/colors/my_colors/new', to: 'colors#add_to_my_colors'
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
