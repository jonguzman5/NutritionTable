class HomeController < ApplicationController
  def index
    # @TODO check with client how many posts to show?
    # Note to self: Uncomment this before leaving for the day 11/08/14
    @posts = Post.all.limit(10).reverse_order
  end
end
