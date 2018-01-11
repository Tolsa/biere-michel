class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    if @contact.destroy
      redirect_to root_path
    end
  end

  def show
    @contact = Contact.find(params[:id])
  end

  def edit
    @contact = Contact.find(params[:id])
  end

  def new
    @contact = Contact.new
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
