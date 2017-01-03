class Word
    def initialize(word, vowels, vowels1, vowels2)
      @word = word
      @vowels = vowels
      @vowels1 = vowels1
      @vowels2 = vowels2
    end
    def to_pig
      vowels = ['a','e','i','o','u']
      vowels1 = ['a','e','i','o']
      vowels2 = ['s','q','u']
    if @word.start_with?(vowels)
      @word + 'way'
    else
      newWord = @word.split('')
    if vowels2.include?(newWord[0]) && vowels2.include?(newWord[1]) && vowels2.include?(newWord[2])
      newWord.rotate!(3)
      newWord.join() + 'ay'
    elsif !vowels1.include?(newWord[0]) && !vowels1.include?(newWord[1])
      newWord.rotate!(2)
      newWord.join() + 'ay'
    else !vowels1.include?(newWord[0])
      newWord.rotate!(1)
      newWord.join() + 'ay'
   end
  end
 end
end
