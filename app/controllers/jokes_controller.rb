class JokesController < ApplicationController
  def testing #remember to take this out later. Or Don't it could be useful for testing stuff
    render json: {
      status: 'success',
      message: "loaded",
      data: "testing is a success"
      }, status: :ok
  end
  def index
    jokes = Joke.all
    render json: {
      status: 'success',
      message: "loaded",
      data: jokes
      }, status: :ok
  end
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
    joke = Joke.new(setup: setup, punchline: punchline, author_id: id, user_name: username, karma: 0, comment_count: 0 )
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
  def upvote
    user = User.find_by(id: params[:user_id])
    #add in a method referencing some sort of join table that tracks which jokes a user has voted on
    joke = Joke.find_by(id: params[:id])
    karma = joke.karma
    joke.update(karma: karma + 1)
    render json: {
      status: "success",
      message: "joke voted on",
      data: nil
    }, status: :ok
  end
end
