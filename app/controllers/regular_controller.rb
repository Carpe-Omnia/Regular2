class RegularController < ApplicationController
	def homepage
	variable = Joke.all
	render json: {status: 'success',
		 message: "loaded",
		 data: variable
		 }, status: :ok
	end
	def test
		#render 'test'
		#render plain: "hey there I'm text"
	end
	def jokes
	end
end
