class ColorsController < ApplicationController
  def create
    name = params[:name]
    rgb = params[:rgb]
    color = Color.new(name: name, rgb: rgb, karma: 0)
    if !!color.save!
      render json: {
        status: 'success',
        message: "loaded",
        data: color
      }, status: :ok
      if !!params[:user_id]
        user = User.find_by(id: params[:user_id])
        user.colors << color
        puts user.colors
      end
    else
      render json: {
        status: 'failure',
        message: "not loaded"
      }, status: :ok
    end
  end

  def index
    colors = Color.all
    render json: {
      status: 'success',
      message: "loaded",
      data: colors
    }, status: :ok
  end
  def my_colors
    user = User.find_by(id: params[:user_id])
    if !!user
      colors = user.colors
      render json: {
        status: 'success',
        message: "loaded",
        data: colors
      }, status: :ok
    else
      render json: {
        status: 'failure',
        message: "not loaded"
      }, status: :ok
    end
  end

  def add_to_my_colors
    color = Color.find_by(id: params[:color_id])
    user = User.find_by(id: params[:user_id])
    user.colors << color
    render json: {
      status: 'success',
      message: "added",
      data: color
    }, status: :ok
  end

end
