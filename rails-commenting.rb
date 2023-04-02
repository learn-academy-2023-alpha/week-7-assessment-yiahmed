# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the controller created by running the command rails g controller BlogPost in the terminal. This is where all the controller methods for BlogPost will be stored. These methods define what actions can be performed on the model the controller was created for. The ApplicationController is the parent class for all controllers in a application, giving them a common functionality
class BlogPostsController < ApplicationController
  def index
    # ---2) This line of code within the index method stores all blog posts with the posts variable. This variable can be used ina view page to render all blog posts on the webpage.
    @posts = BlogPost.all
  end

  # ---3) show is another controller method for the GET action. The method would find and display the blog post with the corresponding id passed into the parameter.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is the controller method for this GET action. The method would display a form for the creation of a new blog post within the database
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The method would create a new blog post within the database based on the parameters passed then, if valid, it would redirect the user to the blog post path displaying the blog post (if specified within the view page).
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit 
    # ---6) The lines of code under is identical to the line of code within the show method finding the blog post with the corresponding id passed into the parameter. Only difference with this method would be the path and the view page.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line of code directly under would update the post variable with the params passed, these params must be specified within the strong params. If the correct params are passed and they are valid the user will be redirected to blog_post_path which should display the newly updated blog.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line of code directly under redirects the user back to blog_posts_path which should show all blog posts after the deletion of a blog post (specified by id)
      redirect_to blog_posts_path
    end
  end

  # ---9) The private method below ensures that the method within (blog_post_params) can only be called within the controller class and can only be modified within the controller class
  private
  def blog_post_params
    # ---10) This line of code below specifies the strong params of the blog_post_params method. The only params permitted are :title and :content. These can only be used in the BlogPostsController class.
    params.require(:blog_post).permit(:title, :content)
  end
end
