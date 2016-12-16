class CoursesController < ApplicationController

  def index
    @courses = Course.all
    @course = Course.new
  end
  def show
    @course = Course.find_by(id: params[:id])
  end
  def create
    course_params = params.require(:course).permit(:course_name, :class_name)
    @course = Course.new(course_params)
    @course.save
    redirect_to courses_path
  end
end

