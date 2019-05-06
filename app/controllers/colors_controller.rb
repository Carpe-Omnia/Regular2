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

end
