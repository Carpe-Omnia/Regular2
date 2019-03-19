class UsersController < ApplicationController
  def new
    name = params["name"]
    pword = params["pword"]
    user = User.new(name: name, password: pword)
    if user.save
      render json: {status: 'success',
      message: "loaded",
      data: {name: user.name, id: user.id}
      }, status: :ok
    else
      render json: {status: 'failure',
        message: "didn't work",
      data: "user not created"
    }, status: :ok
    end
  end
  def login
    user = User.find_by(name: params["name"])
    if user.authenticate(params["pword"])
      render json: {status: 'success',
      message: "logged in",
      data: {name: params["name"], id: user.id}
      }, status: :ok
    else
      render json: {status: 'success',
      message: "not logged in",
      data: "user not logged in"
      }, status: :ok
    end
  end

end
