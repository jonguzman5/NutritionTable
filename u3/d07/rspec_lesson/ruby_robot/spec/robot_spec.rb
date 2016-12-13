require 'spec_helper'
require_relative '../lib/ruby_robot'

describe RubyRobot do

  describe "#introduce_yourself" do
    it "introduces Ruby Robot" do
      introduction = "Hi. I am Ruby Robot. Matz is nice, so then I am nice."
      expect(RubyRobot.new.introduce_yourself).to eq(introduction)
    end
  end

  describe "#say_back" do
    it "can repeat a phrase" do
      phrase = "Boop Bloop Blip Beep"
      expected_response = "BOOP BLOOP BLIP BEEP!"
      expect(RubyRobot.new.say_back(phrase)).to eq(expected_response)
    end
  end

end
