class JokesController < ApplicationController
  def myjokes
    user = User.find_by(id: params["id"])
    jokes = user.jokes
    render json: {
      status: "success",
      message: "jokes found",
      data: jokes
    }, status: :ok
  end
  def create
    setup = params["setup"]
    punchline = params["punchline"]
    id = params["id"]
    username = User.find_by(id: id).name
    joke = Joke.new(setup: setup, punchline: punchline, author_id: id, user_name: username, karma: 0 )
    if joke.save
      render json: {
        status: "success",
        message: "joke created",
        data: {joke: joke}
      }, status: :ok
    else
      render json: {
        status: "failure",
        message: "joke not created",
        data: nil
      }, status: :ok
    end
  end
end
