class RegularController < ApplicationController
	def homepage
	variable = Joke.all
	render json: {status: 'success',
		 message: "loaded",
		 data: variable
		 }, status: :ok
	end
end
