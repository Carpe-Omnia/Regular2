class MessagesController < ApplicationController
  def index
    user = User.find_by(id: params["id"])
    inbox = user.inbox ;
    convos = inbox.conversations ;
    puts convos
    datapackage = []
    convos.each do |convo|
      inbox = convo.inboxes.select do |box|
        box != inbox
      end
      mess = {
        messages: convo.messages,
        inbox: inbox
      }
      datapackage << mess
    end
    puts datapackage
    if !!inbox
      render json: {
        status: "success",
        message: "inbox found",
        data: {datapackage: datapackage}
      }, status: :ok
    else
      render json: {
        status: "success",
        message: "inbox found",
        data: "conversations not found"
      }, status: :ok
    end
  end
end
