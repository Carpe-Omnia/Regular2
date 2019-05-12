class PalettesController < ApplicationController
  def index
    palettes = Palette.all
    render json: {
      status: "success",
      message: "palettes found",
      data: palettes
    }, status: :ok
  end

  def create
    palette = Palette.create(name: params[:palette_name])
    if !!params[:user_id]
      user = User.find_by(id: params[:user_id])
      user.palettes << palette
    end
    render json: {
      status: "success",
      message: "palettes created",
      data: {
        name: palette.name,
        id: palette.id
      }
    }, status: :ok
  end

  def add_color_to_palette
    palette = Palette.find_by(id: params[:palette_id])
    color = Color.find_by(id: params[:color_id])
    palette.colors << color
    render json: {
      status: "success",
      message: "color added to palette",
      data: {
        name: palette.name,
        palette_id: palette.id,
        colors: palette.colors
      }
    }, status: :ok
  end

  def show
    palette = Palette.find_by(id: params[:id])
    colors = palette.colors
    render json: {
      status: "success",
      message: "palette retrieved",
      data: {
        palette: {
          name: palette.name,
          id: palette.id,
          colors: colors
        }
      }
    }, status: :ok
  end
  def my_palettes
    user = User.find_by(id: params[:id])
    palettes = user.palettes
    jpals = []
    palettes.each do |palette|
      thing = {
        id: palette.id,
        name: palette.name,
        colors: palette.colors
      }
      jpals << thing
    end
    render json: {
      status: "success",
      message: "your palettes retrieved",
      data: {palettes: jpals}
    }, status: :ok
  end



end
