class ApplicationController < ActionController::API
  prepend_view_path( Rails.root.join('client/public') )
  Rails.application.eager_load!
  def fallback_index_html
    render :file => 'index.html'
  end
end
