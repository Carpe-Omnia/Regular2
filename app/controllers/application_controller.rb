class ApplicationController < ActionController::API
  prepend_view_path( Rails.root.join('client/public') )
  def fallback_index_html
    render :file => 'index.html'
  end
end
